import Image from "next/image";

const NewLetterCard = () => {
  return (
    <div className="bg-[#1a1a1a] text-white group cursor-pointer shadow shadow-white/10">
      <div className="relative flex justify-center items-end">
        <div className="relative overflow-hidden w-full h-72">
          <Image
            fill
            src="/imgs/shutterstock_2272446391.jpg"
            alt=""
            className="object-cover group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-500 z-[2] bg-black/40" />
          <div className="absolute top-0 left-0 p-4 z-[3]">
            <div className="bg-[#1a1a1a] p-2">
              <p className="uppercase text-sm">27</p>
              <p className="uppercase text-xs">Aug</p>
            </div>
          </div>
        </div>
        <div className="bg-primary absolute bottom-0 right-1/2 z-[3] translate-y-1/2 translate-x-1/2 p-1 uppercase text-xs font-bold">
          Blog
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-center mb-2 font-bold text-lg">Title</h3>
        <p className="text-xs text-white/80">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic tenetur
          quos nobis? Ullam?
        </p>
      </div>
    </div>
  );
};

export default NewLetterCard;
