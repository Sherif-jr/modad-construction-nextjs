import { companies } from "@/_staticData/basicDetails";
import BreadCrumbs from "@/components/UI/BreadCrumbs";
import dynamic from "next/dynamic";
// import ServiceSection from "@/components/UI/ServiceSection";

const ServiceSection = dynamic(() => import("@/components/UI/ServiceSection"), {
  ssr: false,
});

const OurGroupPage = () => {
  return (
    <>
      <BreadCrumbs
        title="Our Group"
        items={[
          { title: "Home", path: "/" },
          { title: "Our group", path: "/our-group" },
        ]}
      />
      <main className="bg-black text-white">
        <div className="container mx-auto py-12 md:px-6 lg:px-0">
          <div className="w-full flex flex-col gap-4 items-center">
            <h1 className="text-2xl font-bold uppercase">Our Group</h1>
            <p className=" text-white/90 max-w-2xl text-sm text-justify">
              We take immense pride in the extensive array of companies within
              our portfolio, each representing a unique aspect of our commitment
              to excellence. From Construction, where we bring architectural
              visions to life, to Real Estate Development, where we craft
              vibrant communities that stand as testaments to our dedication to
              quality living spaces. Our MEP services go beyond the ordinary,
              ensuring that every aspect of a building&apos;s mechanical,
              electrical, and plumbing systems is meticulously planned and
              executed for optimal performance. Across all these domains, our
              singular focus remains on exceeding customer expectations, setting
              new standards for innovation, and making a lasting impact on the
              world around us.
            </p>
          </div>
        </div>
      </main>

      <div className="py-12">
        {companies.map((company, i) => (
          <ServiceSection
            buttonLink={`/our-group/${company.path}`}
            key={company.path}
            companyName={company.name}
            imgSrc={
              company.path === "modad-construction"
                ? "/imgs/companiesImgs/MODAD-Construction2.jpg"
                : company.path === "modad-properties"
                ? "/imgs/companiesImgs/MODAD-Properties2.jpg"
                : `/imgs/companiesImgs/${company.img}`
            }
            text={company.discription}
            imgAlt={company.name}
            isImageOnLeft={Boolean(i % 2)}
          />
        ))}
      </div>
    </>
  );
};

export default OurGroupPage;
