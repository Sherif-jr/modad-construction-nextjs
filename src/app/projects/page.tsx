import { companies, projects } from "@/_staticData/basicDetails";
import AnimationWrapper from "@/components/UI/AnimationWrapper";
import BreadCrumbs from "@/components/UI/BreadCrumbs";
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
      <main className="bg-primary">
        <div className="container mx-auto py-12">
          <div className="w-full flex flex-col mb-12">
            <Select
              placeholder="Filter by Company"
              options={companies.map((company) => ({
                lable: company.name,
                value: company.name,
              }))}
            />
          </div>
          <div className="mb-12">
            <Tabs
              centered
              tabBarStyle={{ backgroundColor: "black" }}
              items={["All", "Scope 1", "Scope 2", "Scope 3", "Scope 4"].map(
                (str) => ({
                  key: str,
                  label: str,
                  destroyInactiveTabPane: true,
                  children: (
                    <div className="grid grid-cols-3 gap-4 transition-all duration-500">
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
                                    First Title
                                  </h4>
                                  <p className="text-xs -translate-x-[200%] group-hover:translate-x-0 transition-all duration-700">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Aspernatur iusto dolor
                                    voluptate odio ipsam quisquam quas nisi
                                    temporibus!
                                  </p>
                                  <Link
                                    href={`/projects/${proj.id}`}
                                  >
                                    <Button
                                      style={{ transitionDuration: "0.8s" }}
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
                  animated: true,
                })
              )}
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {/* project cards */}
            {/* <div className="relative rounded-md shadow hover:shadow-xl overflow-hidden transition-all duration-500 h-64 group before:absolute before:w-full before:h-full before:bg-black/40 before:transition-all before:duration-700 before:opacity-0 hover:before:opacity-100 before:z-[1]">
              <div className="relative h-full w-full">
                <Image
                  fill
                  src="/imgs/shutterstock_697100377.jpg"
                  alt=""
                  className="object-cover group-hover:scale-125  transition-all duration-700"
                />
                <div className="p-6 text-white relative z-[2] flex flex-col gap-2">
                  <h4 className="font-bold text-center text-xl -translate-x-[200%] group-hover:translate-x-0 transition-all duration-300">
                    First Title
                  </h4>
                  <p className="text-xs -translate-x-[200%] group-hover:translate-x-0 transition-all duration-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur iusto dolor voluptate odio ipsam quisquam quas
                    nisi temporibus!
                  </p>
                  <Button
                    style={{ transitionDuration: "0.8s" }}
                    className="-translate-x-[200%] group-hover:translate-x-0 transition-all"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
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
                    Second Title
                  </h4>
                  <p className="text-xs -translate-x-[200%] group-hover:translate-x-0 transition-all duration-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur iusto dolor voluptate odio ipsam quisquam quas
                    nisi temporibus!
                  </p>
                  <Button
                    style={{ transitionDuration: "0.8s" }}
                    className="-translate-x-[200%] group-hover:translate-x-0 transition-all"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
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
                    Third Title
                  </h4>
                  <p className="text-xs -translate-x-[200%] group-hover:translate-x-0 transition-all duration-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur iusto dolor voluptate odio ipsam quisquam quas
                    nisi temporibus!
                  </p>
                  <Button
                    style={{ transitionDuration: "0.8s" }}
                    className="-translate-x-[200%] group-hover:translate-x-0 transition-all"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
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
                    Forth Title
                  </h4>
                  <p className="text-xs -translate-x-[200%] group-hover:translate-x-0 transition-all duration-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur iusto dolor voluptate odio ipsam quisquam quas
                    nisi temporibus!
                  </p>
                  <Button
                    style={{ transitionDuration: "0.8s" }}
                    className="-translate-x-[200%] group-hover:translate-x-0 transition-all"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
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
                    Fifth Title
                  </h4>
                  <p className="text-xs -translate-x-[200%] group-hover:translate-x-0 transition-all duration-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur iusto dolor voluptate odio ipsam quisquam quas
                    nisi temporibus!
                  </p>
                  <Button
                    style={{ transitionDuration: "0.8s" }}
                    className="-translate-x-[200%] group-hover:translate-x-0 transition-all"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
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
                    Sixth Title
                  </h4>
                  <p className="text-xs -translate-x-[200%] group-hover:translate-x-0 transition-all duration-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur iusto dolor voluptate odio ipsam quisquam quas
                    nisi temporibus!
                  </p>
                  <Button
                    style={{ transitionDuration: "0.8s" }}
                    className="-translate-x-[200%] group-hover:translate-x-0 transition-all"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
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
                    Seventh Title
                  </h4>
                  <p className="text-xs -translate-x-[200%] group-hover:translate-x-0 transition-all duration-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur iusto dolor voluptate odio ipsam quisquam quas
                    nisi temporibus!
                  </p>
                  <Button
                    style={{ transitionDuration: "0.8s" }}
                    className="-translate-x-[200%] group-hover:translate-x-0 transition-all"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default ProjectsPage;
