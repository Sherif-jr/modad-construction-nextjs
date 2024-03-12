import { companies } from "@/_staticData/basicDetails";
import BreadCrumbs from "@/components/UI/BreadCrumbs";
import ServiceSection from "@/components/UI/ServiceSection";
import React from "react";

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
            <p className=" text-white/90 max-w-2xl text-sm text-center">
              We take immense pride in our diverse portfolio of companies. From
              Construction to Real Estate Development; MEP services to Digital
              Transformation, each of our business units is driven by a
              commitment to delivering exceptional solutions and consistently
              exceeding customer expectations.
            </p>
          </div>
        </div>
      </main>

      {companies.map((company, i) => (
        <ServiceSection
          buttonLink={`/our-group/${company.path}`}
          key={company.path}
          companyName={company.name}
          imgSrc="/imgs/shutterstock_1927041545.jpg"
          text={company.discription}
          imgAlt={company.name}
          isImageOnLeft={Boolean(i % 2)}
        />
      ))}
    </>
  );
};

export default OurGroupPage;
