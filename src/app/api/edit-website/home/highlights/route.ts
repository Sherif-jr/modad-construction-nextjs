import { rm } from "fs/promises";
import { NextRequest } from "next/server";
import Joi, { ValidationErrorItem } from "joi";
import ValidateFile from "@/backend/validate-file";
import saveFile from "@/backend/write-file";
import { apiHandler } from "@/backend/api-handler";
import Carousel from "@/backend/dao/carousel.dao";
import ICarouselData from "@/interfaces/CarouselData.interface";

const carousel = new Carousel();
const options = {
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true,
};
const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];

module.exports = apiHandler({
  POST: addNewHighlight,
  GET: getHighlights,
  DELETE: deleteHighlights,
  PATCH: updateHighlight,
});

async function addNewHighlight(request: NextRequest) {
  const data = await request.formData();
  const values = Object.fromEntries(data.entries());
  const schema = Joi.object({
    description: Joi.string().required(),
    media: Joi.object().required(),
  });

  const { value, error } = schema.validate(values, options);
  if (error) {
    throw `Validation error: ${error.details
      .map((x: ValidationErrorItem) => x.message)
      .join(", ")}`;
  }
  const buffer = await ValidateFile(
    value.media,
    "media",
    { min: 5000, max: 2000000 },
    allowedTypes
  );

  const imagePath = await saveFile(
    "public/images",
    buffer,
    value.media.name,
    true
  );
  const relativePath = imagePath.replace(/^public\//, "");
  const fullPath = `${process.env.BASE_URI}${relativePath}`;
  const newCarousel = await carousel.addNewCarousel({
    ...value,
    location: "highlights",
    media: fullPath,
  });

  return { success: true, data: newCarousel };
}
async function getHighlights() {
  const data = await carousel.getCarousels("highlights");
  if (data) {
    return {
      success: true,
      data,
    };
  }
}
async function deleteHighlights(req: NextRequest) {
  const { id } = await req.json();
  const deletedCarousel = (await carousel.deleteCarousel(
    id
  )) as unknown as ICarouselData;

  if (deletedCarousel) {
    const path = deletedCarousel?.media;
    const relativePath = path.replace(process.env.BASE_URI || "", "public/");

    await rm(relativePath);

    return { success: true, data: deletedCarousel };
  }
  throw `Item not found`;
}
async function updateHighlight(req: NextRequest) {
  const { id, ...newData } = await req.json();
  const updatedCarousel = await carousel.updateCarousel(id, newData);
  if (updatedCarousel) {
    return { success: true, data: updatedCarousel };
  }
  throw `Item not found`;
}
deleteHighlights.schema = Joi.object({
  id: Joi.string().required(),
});
updateHighlight.schema = Joi.object({
  id: Joi.string().required(),
  order: Joi.number(),
  published: Joi.boolean(),
});
