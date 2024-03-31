"use client";
import { companies, projects } from "@/_staticData/basicDetails";
import { Button, Select, Tabs } from "antd";
import AnimationWrapper from "./AnimationWrapper";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ProjectsTabs = () => {
  const [centered, setCentered] = useState<boolean>(true);
  useEffect(() => {
    const media = matchMedia("(min-width: 640px)");
    const handler = (m: MediaQueryListEvent) => {
      setCentered(m.matches);
    };
    media.addEventListener("change", (m) => handler);
    return () => {
      media.removeEventListener("change", handler);
    };
  }, []);
  return (
    <Tabs
      centered={centered}
      type="line"
      tabBarStyle={{
        backgroundColor: "black",
      }}
      // tabBarExtraContent={{
      //   left: (
      //     <div className="me-2">
      //       <Select
      //         placeholder="Filter by Company"
      //         options={companies
      //           .filter((company) => !company.name.includes("Foundation"))
      //           .map((company) => ({
      //             lable: company.name,
      //             value: company.name,
      //           }))}
      //       />
      //     </div>
      //   ),
      // }}
      items={[
        "All",
        "Administrative",
        "Banking",
        "Industrial",
        "Medical",
        "Residential",
      ].map((str) => ({
        key: str,
        label: <button className="px-2">{str}</button>,
        destroyInactiveTabPane: true,
        children: (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 transition-all duration-500">
            {projects.map((proj) => {
              let exist = false;
              if (proj.scope == str || str === "All") {
                exist = true;
              }
              return (
                <AnimationWrapper
                  from={{ transform: "scale(0)" }}
                  to={{ transform: "scale(1)" }}
                  show={exist}
                  key={proj.name}
                  options={{ duration: 300 }}
                >
                  <div className="relative rounded-md shadow hover:shadow-xl overflow-hidden transition-all duration-500 h-64 group before:absolute before:w-full before:h-full before:bg-black/40 before:transition-all before:duration-700 before:opacity-0 hover:before:opacity-100 before:z-[1]">
                    <div className="relative h-full w-full">
                      <Image
                        fill
                        src="/imgs/shutterstock_697100377.jpg"
                        alt=""
                        className="object-cover group-hover:scale-125  transition-all duration-700"
                      />
                      <div className="p-6 text-white relative z-[2] flex flex-col gap-2">
                        <h4 className="font-bold text-center text-xl -translate-x-[200%] group-hover:translate-x-0 transition-all duration-300">
                          {proj.name}
                        </h4>
                        <p className="text-xs -translate-x-[200%] group-hover:translate-x-0 transition-all duration-500">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Aspernatur iusto dolor voluptate odio ipsam
                          quisquam quas nisi temporibus!
                        </p>
                        <Link href={`/projects/${proj.id}`} className="w-fit">
                          <Button
                            style={{ transitionDuration: "0.7s" }}
                            className="-translate-x-[200%] group-hover:translate-x-0 transition-all"
                          >
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </AnimationWrapper>
              );
            })}
          </div>
        ),
      }))}
      defaultActiveKey="All"
    />
  );
};

export default ProjectsTabs;
