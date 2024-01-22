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
            <p className=" text-white/90 max-w-2xl text-sm">
              Welcome to MODAD Group, a dynamic conglomerate built on the
              pillars of passion, innovation, and excellence. Since our
              inception in 2011, we have been at the forefront of the
              construction, real estate, MEP services, and smart solutions
              industries, shaping a better tomorrow for communities worldwide.
              MODAD Group is divided into 7 subsidiaries, in which each is
              specialized or serves in a different yet crossed sector:
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
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum ea a quam, aliquid distinctio rem blanditiis dignissimos corporis obcaecati, suscipit cupiditate officia reiciendis ex corrupti quia deleniti? Obcaecati nisi doloribus impedit. Tenetur harum expedita quos ex ducimus! Temporibus at, aspernatur ratione, veniam laborum libero dolor exercitationem architecto blanditiis molestiae quae?"
          imgAlt={company.name}
          isImageOnLeft={Boolean(i % 2)}
        />
      ))}
    </>
  );
};

export default OurGroupPage;
