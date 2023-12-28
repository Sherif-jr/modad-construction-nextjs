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
    <div className="relative w-full min-h-[350px] h-full">
      <Image src={imgSrc} fill className="object-cover" alt={imgAlt || ""} />
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
  return (
    <section className="h-[450px] w-full">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            {isImageOnLeft ? (
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
            {!isImageOnLeft ? (
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
