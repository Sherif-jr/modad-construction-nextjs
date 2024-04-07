import BreadCrumbs from "@/components/UI/BreadCrumbs";
import CXALeft from "@/components/UI/CarouselXArrows/CXALeft";
import CXARight from "@/components/UI/CarouselXArrows/CXARight";
import VerticalCarousel from "@/components/UI/VerticalCarousel"; //delete this component
import { Button, Carousel, Tabs } from "antd";
import Image from "next/image";

const NewsPage = () => {
  return (
    <>
      <BreadCrumbs
        title="News"
        items={[
          { title: "Home", path: "/" },
          { title: "News", path: "/news" },
        ]}
      />
      <main className="bg-black text-white">
        <div className="container mx-auto py-12">
          <div className="w-full p-8">
            {/* <VerticalCarousel /> */}
            <Tabs
              tabPosition="left"
              items={["2019", "2020", "2021", "2022", "2023", "2024"].map(
                (year) => ({
                  key: year,
                  label: <button className="h-12">{year}</button>,
                  children: (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-6">
                      <div className="relative rounded-md shadow hover:shadow-xl overflow-hidden transition-all duration-500 h-64 group before:absolute before:w-full before:h-full before:bg-black/50 before:transition-all before:duration-700 before:opacity-40 hover:before:opacity-100 before:z-[1]">
                        <div className="relative h-full w-full">
                          <Image
                            fill
                            src="/imgs/shutterstock_697100377.jpg"
                            alt=""
                            className="object-cover group-hover:scale-125 transition-all duration-700"
                          />
                          <div className="p-6 text-white relative z-[2] flex flex-col justify-center w-full h-full">
                            <h4 className="cursor-default font-bold text-center text-2xl text-black group-hover:text-white group-hover:text-3xl transition-all duration-300 uppercase">
                              News Title
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="relative rounded-md shadow hover:shadow-xl overflow-hidden transition-all duration-500 h-64 group before:absolute before:w-full before:h-full before:bg-black/50 before:transition-all before:duration-700 before:opacity-40 hover:before:opacity-100 before:z-[1]">
                        <div className="relative h-full w-full">
                          <Image
                            fill
                            src="/imgs/shutterstock_697100377.jpg"
                            alt=""
                            className="object-cover group-hover:scale-125 transition-all duration-700"
                          />
                          <div className="p-6 text-white relative z-[2] flex flex-col justify-center w-full h-full">
                            <h4 className=" cursor-default font-bold text-center text-2xl text-black group-hover:text-white group-hover:text-3xl transition-all duration-300 uppercase">
                              News Title
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="relative rounded-md shadow hover:shadow-xl overflow-hidden transition-all duration-500 h-64 group before:absolute before:w-full before:h-full before:bg-black/50 before:transition-all before:duration-700 before:opacity-40 hover:before:opacity-100 before:z-[1]">
                        <div className="relative h-full w-full">
                          <Image
                            fill
                            src="/imgs/shutterstock_697100377.jpg"
                            alt=""
                            className="object-cover group-hover:scale-125 transition-all duration-700"
                          />
                          <div className="p-6 text-white relative z-[2] flex flex-col justify-center w-full h-full">
                            <h4 className="cursor-default font-bold text-center text-2xl text-black group-hover:text-white group-hover:text-3xl transition-all duration-300 uppercase">
                              News Title
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="relative rounded-md shadow hover:shadow-xl overflow-hidden transition-all duration-500 h-64 group before:absolute before:w-full before:h-full before:bg-black/50 before:transition-all before:duration-700 before:opacity-40 hover:before:opacity-100 before:z-[1]">
                        <div className="relative h-full w-full">
                          <Image
                            fill
                            src="/imgs/shutterstock_697100377.jpg"
                            alt=""
                            className="object-cover group-hover:scale-125 transition-all duration-700"
                          />
                          <div className="p-6 text-white relative z-[2] flex flex-col justify-center w-full h-full">
                            <h4 className="cursor-default font-bold text-center text-2xl text-black group-hover:text-white group-hover:text-3xl transition-all duration-300 uppercase">
                              News Title
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="relative rounded-md shadow hover:shadow-xl overflow-hidden transition-all duration-500 h-64 group before:absolute before:w-full before:h-full before:bg-black/50 before:transition-all before:duration-700 before:opacity-40 hover:before:opacity-100 before:z-[1]">
                        <div className="relative h-full w-full">
                          <Image
                            fill
                            src="/imgs/shutterstock_697100377.jpg"
                            alt=""
                            className="object-cover group-hover:scale-125 transition-all duration-700"
                          />
                          <div className="p-6 text-white relative z-[2] flex flex-col justify-center w-full h-full">
                            <h4 className="cursor-default font-bold text-center text-2xl text-black group-hover:text-white group-hover:text-3xl transition-all duration-300 uppercase">
                              News Title
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="relative rounded-md shadow hover:shadow-xl overflow-hidden transition-all duration-500 h-64 group before:absolute before:w-full before:h-full before:bg-black/50 before:transition-all before:duration-700 before:opacity-40 hover:before:opacity-100 before:z-[1]">
                        <div className="relative h-full w-full">
                          <Image
                            fill
                            src="/imgs/shutterstock_697100377.jpg"
                            alt=""
                            className="object-cover group-hover:scale-125 transition-all duration-700"
                          />
                          <div className="p-6 text-white relative z-[2] flex flex-col justify-center w-full h-full">
                            <h4 className="cursor-default font-bold text-center text-2xl text-black group-hover:text-white group-hover:text-3xl transition-all duration-300 uppercase">
                              News Title
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                })
              )}
            />
          </div>
        </div>
      </main>
      {/* <section className="bg-primary">
        <div className="container mx-auto py-12 px-2 lg:px-6">
          <div className="flex flex-col gap-12 px-1 md:px-0">
            <div>
              <h3 className="text-2xl xl:text-3xl">News</h3>
            </div>
            <div className="col-span-5 flex flex-col gap-4 px-12">
              <Carousel
                dots={false}
                arrows
                prevArrow={
                  <CXALeft left={-5} iconClassName="text-xl select-none" />
                }
                nextArrow={
                  <CXARight right={-5} iconClassName="text-xl select-none" />
                }
              >
                <div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="relative w-full sm:w-2/5 aspect-square shrink-0">
                      <Image
                        fill
                        src="/imgs/shutterstock_1913548069.jpg"
                        alt=""
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="mb-3 text-base lg:text-xl font-bold">
                        LOREM IPSUM DOLOR (REUTERS)
                      </h3>
                      <p className="text-xs md:text-base">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        doloreolore eu feugiat nulla facilisis at vero eros et
                        accumsan et iusto odio dignissim qui blandit praesent
                        luptatum zzril delenit augue duis dolore te feugait
                        nulla facilisi. Lorem ipsum dolor sit amet, cons
                        ectetuer adipiscing elit, sed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="relative w-full sm:w-2/5 aspect-square shrink-0">
                      <Image
                        fill
                        src="/imgs/shutterstock_1913548069.jpg"
                        alt=""
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="mb-3 text-base lg:text-xl font-bold">
                        LOREM IPSUM DOLOR (REUTERS){" "}
                      </h3>
                      <p className="text-xs md:text-base">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        doloreolore eu feugiat nulla facilisis at vero eros et
                        accumsan et iusto odio dignissim qui blandit praesent
                        luptatum zzril delenit augue duis dolore te feugait
                        nulla facilisi. Lorem ipsum dolor sit amet, cons
                        ectetuer adipiscing elit, sed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore
                      </p>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default NewsPage;
