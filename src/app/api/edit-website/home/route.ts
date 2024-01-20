import { apiHandler } from "@/backend/api-handler";
import Carousel from "@/backend/dao/carousel.dao";
import CorpRes from "@/backend/dao/corpRespons.dao";
const carousel = new Carousel();
const corpRes = new CorpRes();
module.exports = apiHandler({
  GET: getHome,
});

async function getHome() {
  //   const mainCarousel = await carousel.getCarousels("main");
  const [mainCarousel, highlights, corpResb] = await Promise.all([
    carousel.getCarousels("main"),
    carousel.getCarousels("highlights"),
    corpRes.getCorpRes(),
  ]);

  return {
    success: true,
    data: {
      mainCarousel,
      highlights,
      corpResb,
    },
  };
}
