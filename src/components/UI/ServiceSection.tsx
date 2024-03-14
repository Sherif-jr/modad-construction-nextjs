"use client";
import { screenSizes } from "@/constants/enums";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";

interface IServiceSectionProps {
  isImageOnLeft?: boolean;
  imgSrc: string;
  imgAlt?: string;
  companyName: string;
  text: string;
  buttonLink: string;
}

const ImgDiv = ({ imgSrc, imgAlt }: { imgSrc: string; imgAlt?: string }) => {
  return (
    <div className="relative w-full min-h-[350px] lg:h-full md:h-[450px]">
      <Image
        fill
        src={imgSrc}
        className="absolute h-full w-full object-cover"
        alt={imgAlt || ""}
      />
    </div>
  );
};
const TextDiv = ({
  companyName,
  text,
  buttonLink,
}: {
  companyName: string;
  text: string;
  buttonLink?: string;
}) => {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <h2 className="font-bold text-xl">{companyName}</h2>
      <p className="my-6">{text}</p>
      <Link href={buttonLink || "#"} className="">
        <Button size="large" type="primary" className="bg-primary">
          Learn More
        </Button>
      </Link>
    </div>
  );
};

const ServiceSection = ({
  isImageOnLeft,
  imgSrc,
  imgAlt,
  companyName,
  text,
  buttonLink,
}: IServiceSectionProps) => {
  
  const md = matchMedia(screenSizes.MD).matches;

  return (
    <section className="md:h-[650px] xl:h-[450px] w-full">
      <div className="container mx-auto py-12 md:px-6 lg:px-2 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            {!md && isImageOnLeft ? (
              <ImgDiv imgSrc={imgSrc} imgAlt={imgAlt} />
            ) : (
              <TextDiv
                companyName={companyName}
                text={text}
                buttonLink={buttonLink}
              />
            )}
          </div>
          <div>
            {md || !isImageOnLeft ? (
              <ImgDiv imgSrc={imgSrc} imgAlt={imgAlt} />
            ) : (
              <TextDiv
                companyName={companyName}
                text={text}
                buttonLink={buttonLink}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
