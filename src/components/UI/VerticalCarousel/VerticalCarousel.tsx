"use client";

import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel } from "antd";
import { CarouselRef } from "antd/es/carousel";
import { useRef } from "react";

const VerticalCarousel = () => {
  const vCarouselRef = useRef<CarouselRef | null>(null);
  return (
    <div className="w-full flex flex-col justify-center">
      <FontAwesomeIcon
        icon={faChevronUp}
        className={`mb-4 cursor-pointer`}
        onClick={() => {
          vCarouselRef.current?.prev();
        }}
      />
      <Carousel
        vertical
        ref={vCarouselRef}
        slidesToShow={4}
        dots={false}
        infinite={false}
        className="max-h-[200px]"
      >
        <div className="text-center h-[50px]">2019</div>
        <div className="text-center h-[50px]">2020</div>
        <div className="text-center h-[50px]">2021</div>
        <div className="text-center h-[50px]">2022</div>
        <div className="text-center h-[50px]">2023</div>
      </Carousel>
      <FontAwesomeIcon
        icon={faChevronDown}
        className={`mb-4 cursor-pointer`}
        onClick={() => {
          vCarouselRef.current?.next();
        }}
      />
    </div>
  );
};

export default VerticalCarousel;
