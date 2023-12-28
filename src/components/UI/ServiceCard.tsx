import Image from "next/image";

const ServiceCard = ({
  imgLink,
  title,
  description,
}: {
  imgLink: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="group">
      <div className="relative h-[400px] overflow-hidden w-full">
        <Image
          src={imgLink}
          alt={title}
          className="object-cover group-hover:scale-110 transition-all duration-300"
          fill
        />
        <div className="absolute top-0 left-0 w-full h-full bg-transparent group-hover:bg-black/20 transition-all duration-300" />
      </div>
      <div className="mt-6 text-white">
        <h3 className="uppercase font-bold">{title}</h3>
        <div className="bg-primary w-[50px] h-[3px] my-4 group-hover:w-[150px] transition-all duration-300" />
        <p className="text-xs">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
