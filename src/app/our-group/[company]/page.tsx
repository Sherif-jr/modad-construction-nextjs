import { companies } from "@/_staticData/basicDetails";
import BreadCrumbs from "@/components/UI/BreadCrumbs";
import CXALeft from "@/components/UI/CarouselXArrows/CXALeft";
import CXARight from "@/components/UI/CarouselXArrows/CXARight";
import ProjectCard from "@/components/UI/ProjectCard";
import { Button, Carousel } from "antd";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Params {
  company: string;
}
const CompanyPage = ({ params }: { params: Params }) => {
  const selectedCompany = companies.find((comp) =>
    comp.path.includes(params.company)
  );

  if (!selectedCompany) {
    notFound();
  }
  const companyName = params.company
    .split("-")
    .map((w) => `${w.charAt(0).toUpperCase()}${w.substring(1)}`)
    .join(" ");
  return (
    <>
      <BreadCrumbs
        title={companyName}
        items={[
          { title: "Home", path: "/" },
          {
            title: companyName,
            path: "/contact-us",
          },
        ]}
      />
      <main className=" xl:min-h-[90vh] xl:max-h-screen">
        <div className="w-full">
          <Carousel
            slidesToShow={1}
            slidesToScroll={1}
            dots={{ className: "bottom-6" }}
            autoplay={true}
            pauseOnFocus={false}
            pauseOnHover={false}
            pauseOnDotsHover={false}
            infinite
          >
            <div className="aspect-video xl:max-h-screen relative">
              <Image
                src="/imgs/shutterstock_2212033973.jpg"
                alt=""
                className="w-full object-cover"
                fill
              />
              <div className="relative w-full h-full flex items-center justify-center text-white">
                <div className="mr-12 w-full sm:w-[500px] px-4">
                  <h2 className="uppercase text-3xl sm:text-7xl lg:text-9xl font-bold">
                    title
                  </h2>
                  <p className="text-xs sm:text-base md:text-xl">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sit labore temporibus dolor perferendis incidunt fugiat ex
                    inventore animi quae ipsam libero, blanditiis sed
                    consequatur tempora illo consequuntur qui eligendi
                    repudiandae?
                  </p>
                  <Button
                    style={{ borderRadius: 0, fontWeight: 700 }}
                    className="uppercase opacity-100 mt-6"
                    type="primary"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
            <div className="aspect-video relative xl:max-h-screen">
              <Image
                src="/imgs/shutterstock_1067925506.jpg"
                alt=""
                className="w-full object-cover"
                fill
              />
              <div className="relative w-full h-full flex items-center justify-center text-white">
                <div className="mr-12 w-full sm:w-[500px] opacity-100 px-4">
                  <h2 className="uppercase text-3xl sm:text-7xl lg:text-9xl font-bold">
                    Second TItle
                  </h2>
                  <p className="text-xs sm:text-base md:text-xl">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sit labore temporibus dolor perferendis incidunt fugiat ex
                    inventore animi quae ipsam libero, blanditiis sed
                    consequatur tempora illo consequuntur qui eligendi
                    repudiandae?
                  </p>
                  <Button
                    style={{ borderRadius: 0, fontWeight: 700 }}
                    className="uppercase opacity-100 mt-6"
                    type="primary"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
            <div className="aspect-video relative xl:max-h-screen">
              <Image
                src="/imgs/shutterstock_707662543.jpg"
                alt=""
                className="w-full object-cover"
                fill
              />
              <div className="relative w-full h-full flex items-center justify-center text-white">
                <div className="mr-12 w-full sm:w-[500px] opacity-100 px-4">
                  <h2 className="uppercase text-3xl sm:text-7xl lg:text-9xl font-bold">
                    Third title
                  </h2>
                  <p className="text-xs sm:text-base md:text-xl">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sit labore temporibus dolor perferendis incidunt fugiat ex
                    inventore animi quae ipsam libero, blanditiis sed
                    consequatur tempora illo consequuntur qui eligendi
                    repudiandae?
                  </p>
                  <Button
                    style={{ borderRadius: 0, fontWeight: 700 }}
                    className="uppercase opacity-100 mt-6"
                    type="primary"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </main>
      <section className="bg-primary relative">
        <Image
          fill
          src="/pattern.svg"
          alt=""
          className="object-cover opacity-5"
        />
        <div className="container mx-auto py-12 px-6 md:px-0 relative z-[1]">
          <h3 className="text-3xl font-bold mb-6">{companyName}</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:min-h-[60vh]">
            <div className="text-white p-4 flex flex-col justify-center">
              <h4 className="text-xl font-bold mb-4">LOREM IPSUM DOLOR </h4>
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet doloreolore eu
                feugiat nulla facilisis at vero eros et accumsan et iusto odio
                dignissim qui blandit praesent luptatum zzril delenit augue duis
                dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,
                cons ectetuer adipiscing elit, sed diam nonummy nibh euismod
                tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
                enim ad minim veniam, quis nostrud exerci tation ullamcorper
                suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem
                ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                nonummy nibh
              </p>
            </div>
            <div className="px-4 md:px-12">
              <Carousel
                fade
                dots={false}
                arrows
                prevArrow={
                  <CXALeft
                    xsLeft={-10}
                    left={-5}
                    iconClassName="text-xl text-white"
                  />
                }
                nextArrow={
                  <CXARight
                    xsRight={-10}
                    right={-5}
                    iconClassName="text-xl text-white"
                  />
                }
              >
                <div className="relative aspect-square">
                  <Image
                    src="/imgs/shutterstock_2145134953.jpg"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square">
                  <Image
                    src="/imgs/shutterstock_2298356519.jpg"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              </Carousel>
            </div>
            <div></div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto flex items-center justify-center h-[80vh]">
          <p className="font-bold text-6xl">Services</p>
        </div>
      </section>
      <section className="bg-black">
        <div className="container mx-auto py-12 px-2 xl:px-12">
          <h2 className="text-primary text-2xl xl:text-3xl mb-6 xl:mb-12">
            Current Projects
          </h2>
          <div className="w-full px-6">
            <Carousel
              arrows
              dots={false}
              slidesToShow={3}
              responsive={[
                { breakpoint: 640, settings: { slidesToShow: 1 } },
                { breakpoint: 1024, settings: { slidesToShow: 2 } },
              ]}
              prevArrow={
                <CXALeft left={-5} iconClassName="text-xl select-none" />
              }
              nextArrow={
                <CXARight right={-5} iconClassName="text-xl select-none" />
              }
            >
              <div>
                <ProjectCard
                  title="P.1"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam ipsum voluptas!"
                  imgSrc="/imgs/shutterstock_1559528492.jpg"
                />
              </div>
              <div>
                <ProjectCard
                  title="P.2"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam ipsum voluptas!"
                  imgSrc="/imgs/shutterstock_2206514397.jpg"
                />
              </div>
              <div>
                <ProjectCard
                  title="P.3"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam ipsum voluptas!"
                  imgSrc="/imgs/shutterstock_2272446391.jpg"
                />
              </div>
              <div>
                <ProjectCard
                  title="P.4"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam ipsum voluptas!"
                  imgSrc="/imgs/shutterstock_2272446391.jpg"
                />
              </div>
              <div>
                <ProjectCard
                  title="P.5"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam ipsum voluptas!"
                  imgSrc="/imgs/shutterstock_2272446391.jpg"
                />
              </div>
              <div>
                <ProjectCard
                  title="P.6"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam ipsum voluptas!"
                  imgSrc="/imgs/shutterstock_2272446391.jpg"
                />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto py-12 px-4 md:px-6 xl:px-0">
          <div className="w-full">
            <Carousel
              dots={false}
              autoplay
              autoplaySpeed={2000}
              slidesToShow={3}
              responsive={[
                { breakpoint: 640, settings: { slidesToShow: 1 } },
                { breakpoint: 767, settings: { slidesToShow: 2 } },
              ]}
            >
              <div className="flex flex-col text-black p-4">
                <div className="relative w-full h-[500px]">
                  <Image
                    src="https://ecdegypt.com/wp-content/uploads/2023/04/ISO-14001-2nd.jpg"
                    alt=""
                    className="object-contain"
                    fill
                  />
                </div>
                <div className="px-2 mt-2">
                  <h4 className="text-center font-bold text-2xl">C.1</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Omnis facere maiores aliquid!
                  </p>
                </div>
              </div>
              <div className="flex flex-col text-black p-4">
                <div className="relative w-full h-[500px]">
                  <Image
                    src="https://ecdegypt.com/wp-content/uploads/2023/03/ISO-14001-.jpeg"
                    alt=""
                    className="object-contain"
                    fill
                  />
                </div>
                <div className="px-2 mt-2">
                  <h4 className="text-center font-bold text-2xl">C.2</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Omnis facere maiores aliquid!
                  </p>
                </div>
              </div>
              <div className="flex flex-col text-black p-4">
                <div className="relative w-full h-[500px]">
                  <Image
                    src="https://ecdegypt.com/wp-content/uploads/2023/05/ISO-9001.jpeg"
                    alt=""
                    className="object-contain"
                    fill
                  />
                </div>
                <div className="px-2 mt-2">
                  <h4 className="text-center font-bold text-2xl">C.3</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Omnis facere maiores aliquid!
                  </p>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyPage;
