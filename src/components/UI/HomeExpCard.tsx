import Image from "next/image";

const HomeExpCard = ({
  title,
  description,
  imgSrc,
}: {
  title: string;
  description: string;
  imgSrc: string;
}) => {
  return (
    <div>
      <div className="relative w-full h-[200px] overflow-hidden">
        <Image src={imgSrc} alt="" fill className="object-cover" />
        <div className="absolute w-full rotate-[30deg] h-[300px] -top-[70%] sm:-top-[95px] md:top-[-80px] -left-[59%] sm:-left-[177px] md:-left-[88px] bg-white">
          <div className=" w-[30px] h-full bg-gradient-to-r from-[#373737] to-[#231f20] ms-auto"></div>
        </div>
      </div>
      <h3 className="text-primary text-center mt-4 font-medium">{title}</h3>
      <p className="mt-3 text-sm">{description}</p>
    </div>
  );
};

export default HomeExpCard;
