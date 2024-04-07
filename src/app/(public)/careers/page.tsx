"use client";
import BreadCrumbs from "@/components/UI/BreadCrumbs";
import CareersApplyButton from "@/components/UI/CareersApplyButton";
import CareersSearch from "@/components/UI/CareersSearch";
import {
  faMinus,
  faPlus,
  faWindowMinimize,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Collapse, Divider } from "antd";

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
        <div className="container mx-auto px-4 py-12">
          <div className="w-full max-w-[800px] mx-auto">
            <p className="text-center text-white">
              <span className="block text-lg font-bold">
                Welcome to MODAD Group Careers!
              </span>{" "}
              Explore exciting opportunities and join a dynamic team dedicated
              to driving innovation and excellence across diverse industries.{" "}
              <span className="block">Join us Now!</span>
            </p>
          </div>
          <div className="p-8">
            <CareersSearch />
          </div>
          <Divider className="my-8 border-white/75" />
          <div className="min-h-[200px] pt-20 pb-12 flex flex-col gap-8">
            <Collapse
              items={[
                {
                  key: "civil",
                  label: <h4 className="select-none">Civil Engineer</h4>,
                  children: (
                    <div className="flex flex-col gap-4">
                      <p className="font-bold">Job Description:</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Magnam, eius nobis! Minus pariatur alias aliquam?
                      </p>
                      <p className="font-bold">Job Requirements:</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Magnam, eius nobis! Minus pariatur alias aliquam?
                      </p>
                      <div className="flex justify-end">
                        <CareersApplyButton />
                      </div>
                    </div>
                  ),
                },
              ]}
              expandIcon={({ isActive, collapsible }) => {
                return (
                  <FontAwesomeIcon
                    className={collapsible ? "text-primary" : "text-gray-500"}
                    icon={isActive ? faMinus : faPlus}
                  />
                );
              }}
            />
            <Collapse
              items={[
                {
                  key: "civil",
                  label: <h4 className="select-none">Mechanical Engineer</h4>,
                  children: (
                    <div className="flex flex-col gap-4">
                      <p className="font-bold">Job Description:</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Magnam, eius nobis! Minus pariatur alias aliquam?
                      </p>
                      <p className="font-bold">Job Requirements:</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Magnam, eius nobis! Minus pariatur alias aliquam?
                      </p>
                      <div className="flex justify-end">
                        <CareersApplyButton />
                      </div>
                    </div>
                  ),
                },
              ]}
              expandIcon={({ isActive, collapsible }) => {
                return (
                  <FontAwesomeIcon
                    className={collapsible ? "text-primary" : "text-gray-500"}
                    icon={isActive ? faMinus : faPlus}
                  />
                );
              }}
            />
          </div>
          <Divider className="border-white/75" />
        </div>
      </main>
    </>
  );
};

export default Careers;
