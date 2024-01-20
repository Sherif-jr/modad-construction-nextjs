import { apiHandler } from "@/backend/api-handler";
import CorpRes from "@/backend/dao/corpRespons.dao";
import ValidateFile from "@/backend/validate-file";
import saveFile from "@/backend/write-file";
import Joi, { ValidationErrorItem } from "joi";
import { NextRequest } from "next/server";

const corp = new CorpRes();
const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
const options = {
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true,
};
module.exports = apiHandler({
  POST: updateCorpRes,
  GET: getCorpRes,
});

async function updateCorpRes(request: NextRequest) {
  const data = await request.formData();
  const values: Record<string, string | Blob | Blob[]> = {};

  // Iterate through FormData entries
  for (const [key, value] of data.entries()) {
    if (typeof value === "object" && "size" in value && "type" in value) {
      // Type assertion for Blob
      // If the field already exists in values, make it an array
      if (values.hasOwnProperty(key)) {
        if (!Array.isArray(values[key])) {
          values[key] = [values[key] as Blob];
        }
        (values[key] as Blob[]).push(value as Blob);
      } else {
        // If the field doesn't exist, simply set the value
        values[key] = value as Blob;
      }
    } else {
      // Handle non-Blob values (strings, etc.)
      values[key] = value as string;
    }
  }
  // console.log(values.media);

  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    media: Joi.array().required().min(4),
  });

  const { value, error } = schema.validate(values, options);
  if (error) {
    throw `Validation error: ${error.details
      .map((x: ValidationErrorItem) => x.message)
      .join(", ")}`;
  }
  const buffers = await Promise.all(
    value.media.map((file: Blob) =>
      ValidateFile(file, "media", { min: 5000, max: 2000000 }, allowedTypes)
    )
  );
  const relativePaths = await Promise.all(
    buffers.map((buffer: Buffer, index: number) =>
      saveFile("public/images", buffer, value.media[index].name, true)
    )
  );
  const fullPaths = relativePaths.map(
    (path: string) => `${process.env.BASE_URI}${path.replace(/^public\//, "")}`
  );

  const updatedCorpRes = await corp.addOrUpdateCorpRes({
    ...value,
    media: fullPaths,
  });

  return { success: true, data: updatedCorpRes };
}
async function getCorpRes() {
  const data = await corp.getCorpRes();

  return { success: true, data: data };
}
