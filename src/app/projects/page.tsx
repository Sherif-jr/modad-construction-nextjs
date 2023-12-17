import { companies, projects } from "@/_staticData/basicDetails";
import AnimationWrapper from "@/components/UI/AnimationWrapper";
import BreadCrumbs from "@/components/UI/BreadCrumbs";
import ProjectsTabs from "@/components/UI/ProjectsTabs";
import { Button, Card, Select, Tabs } from "antd";
import Image from "next/image";
import Link from "next/link";

const ProjectsPage = () => {
  return (
    <>
      <BreadCrumbs
        title="Projects"
        items={[
          { title: "Home", path: "/" },
          { title: "Projects", path: "/projects" },
        ]}
      />
      <main className="bg-black min-h-[70vh]">
        <div className="container mx-auto py-12 px-4 md:px-0">
          <div className="text-white mb-12 max-w-[900px] mx-auto text-center px-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
              blanditiis maxime. Adipisci repellat aspernatur quod, sit
              consequuntur esse error ad eligendi nisi laboriosam laborum at
              maiores dignissimos voluptates deserunt ratione ab necessitatibus
              quibusdam.
            </p>
          </div>
          <div className="mb-12">
            <ProjectsTabs />
          </div>
        </div>
      </main>
    </>
  );
};

export default ProjectsPage;
