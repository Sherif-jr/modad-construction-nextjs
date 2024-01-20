import ICarouselData from "@/interfaces/CarouselData.interface";
import { db } from "../models";
import { ModifyResult } from "mongoose";

export default class Carousel {
  getCarousels = async (location: ICarouselData["location"]) => {
    const carouselsArray: ICarouselData[] = await db.Carousel.find({
      location,
    });
    return carouselsArray;
  };
  getAllCarousels = async () => {
    const carouselsArray: ICarouselData[] = await db.Carousel.find({});
    return carouselsArray;
  };
  addNewCarousel = async (carouselData: ICarouselData) => {
    const carousel = await db.Carousel.create(carouselData);
    return carousel;
  };
  deleteCarousel = async (id: string) => {
    const carousel: ModifyResult<ICarouselData> =
      await db.Carousel.findByIdAndDelete(id);
    return carousel;
  };
  updateCarousel = async (
    id: string,
    newData: { order?: number; published?: boolean }
  ) => {
    const updatedCarousel = db.Carousel.findByIdAndUpdate(id, newData, {
      runValidators: true,
      new: true,
    });
    return updatedCarousel;
  };
}
