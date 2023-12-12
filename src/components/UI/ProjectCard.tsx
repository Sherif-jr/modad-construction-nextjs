import Image from "next/image";

const ProjectCard = ({
  imgSrc,
  title,
  description,
}: {
  imgSrc: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="grid grid-cols-2">
      <div className="relative aspect-square">
        <Image src={imgSrc} alt={title} fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-3 p-4">
        <h3 className="text-[#6d6e71] text-xl">{title}</h3>
        <p className="text-white text-xs xl:text-base">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
