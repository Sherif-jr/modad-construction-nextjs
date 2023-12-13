"use client";
import BreadCrumbs from "@/components/UI/BreadCrumbs";
import CareersSearch from "@/components/UI/CareersSearch";
import { Collapse, Divider } from "antd";

const Careers = () => {
  return (
    <>
      <BreadCrumbs
        title="Careers"
        items={[
          { title: "Home", path: "/" },
          { title: "Careers", path: "/careers" },
        ]}
      />
      <main className="bg-black">
        <div className="container mx-auto py-12">
          <div className="p-8">
            <CareersSearch />
          </div>
          <Divider className="my-8 border-white/75" />
          <div className="min-h-[200px]"></div>
        </div>
      </main>
    </>
  );
};

export default Careers;
