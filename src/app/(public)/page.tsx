import { Button, Carousel } from "antd";
import Image from "next/image";
import HomeExpCard from "@/components/UI/HomeExpCard";
import ProjectCard from "@/components/UI/ProjectCard";
import CXALeft from "@/components/UI/CarouselXArrows/CXALeft";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import CXARight from "@/components/UI/CarouselXArrows/CXARight";
import ReadMoreCollapse from "@/components/UI/ReadMoreCollapse";
import { companies } from "@/_staticData/basicDetails";
import ReactPlayer from "react-player";
import YoutubePlayer from "@/components/YoutubePlayer";

const fetchHome = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URI}api/edit-website/home`
  );
  const data = await res.json();
  return data.data || {};
};

export default async function Home() {
  const data = await fetchHome();
  console.log(data);

  return (
    <>
      <main className=" xl:min-h-[90vh] xl:max-h-screen">
        <div className="w-full">
          <Carousel
            slidesToShow={1}
            slidesToScroll={1}
            dots={{ className: "bottom-6" }}
            pauseOnFocus={false}
            pauseOnHover={false}
            pauseOnDotsHover={false}
            infinite
          >
            <div className="aspect-video xl:max-h-screen relative">
              <YoutubePlayer url="https://www.youtube.com/watch?v=bY7_wrd21iE" />
              {/* <iframe
                width="100%"
                height="100%"
                src="https://www.youtube-nocookie.com/embed/bY7_wrd21iE?version=3&amp;enablejsapi=1&amp;html5=1&amp;hd=1&amp;wmode=opaque&amp;showinfo=0&amp;rel=0&amp;origin=https://modad-construction.com;&amp;controls=0&amp;playsinline=1&autoplay=1&mute=1&controls=0&loop=1&showinfo=0&fs=1"
                title="12 Years Of Dreams"
                frameBorder="0"
                allow="autoplay; fullscreen"
                style={{
                  opacity: 1,
                  visibility: "visible",
                  width: "133.333%",
                  height: "100%",
                  maxHeight: "none",
                  maxWidth: "none",
                  position: "absolute",
                  top: "0px",
                  left: "-16.6667%",
                  display: "block",
                }}
              /> */}
              {/* <iframe
                allow="autoplay; fullscreen"
                type="text/html"
                src="https://www.youtube-nocookie.com/embed/bY7_wrd21iE?version=3&amp;enablejsapi=1&amp;html5=1&amp;hd=1&amp;wmode=opaque&amp;showinfo=0&amp;rel=0&amp;origin=https://modad-construction.com;&amp;controls=0&amp;playsinline=1"
                width="100%"
                height="100%"
                class="intrinsic-ignore"
                id="iframe6536"
                title="12 Years Of Dreams"
              ></iframe> */}
              {/* <div className="relative w-full h-full flex items-center justify-center text-white">
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
              </div> */}
            </div>
            {/* <div className="aspect-video relative xl:max-h-screen">
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
            </div> */}
          </Carousel>
        </div>
      </main>
      <section>
        <div className="w-full xl:h-[100vh]  flex flex-col-reverse xl:flex-row relative overflow-hidden">
          <div className="bg-[#111619] w-full xl:w-[40%] flex py-6 px-6 items-center">
            <div className="relative z-[2] ">
              <h2 className="text-primary font-bold uppercase text-3xl mb-4">
                Chairman message
              </h2>
              <p className="text-white">
                It is with great pleasure and gratitude that I welcome you to
                the world of MODAD Group of Companies. Since our humble
                beginnings in 2011, we have strived relentlessly to build a
                legacy of excellence, innovation, and unwavering commitment to
                our clients and stakeholders...
              </p>
              <ReadMoreCollapse
                signature="Mohamed El Haddad - Founder and CEO, MODAD Group of Companies"
                content="At MODAD Group, we firmly believe that our success is a direct result of our company culture, which places utmost importance on integrity, collaboration, and the pursuit of excellence. These core values have been the driving force behind our achievements and the strong relationships we have built over the years. We take immense pride in our diverse portfolio of companies, spanning real estate development, construction, MEP services, and digital transformation. Each of our entities represents a testament to our dedication to delivering exceptional solutions and exceeding customer expectations. Our group's success is not merely measured in projects completed or financial milestones achieved; it is deeply rooted in the trust and satisfaction of our customers and partners. We are committed to creating long-term value, fostering sustainable growth, and contributing to the communities we serve. As we embark on this journey, we extend a warm welcome to potential customers and investors who share our vision of shaping a brighter future. We invite you to explore the vast possibilities and opportunities within our group, confident that together, we can achieve remarkable milestones and unlock new horizons of success. Thank you for considering MODAD Group of Companies as your trusted partner. We look forward to building lasting relationships, realizing shared aspirations, and creating a better tomorrow, hand in hand."
              />
            </div>
          </div>
          <div className="w-full aspect-video xl:aspect-auto xl:w-[60%] relative">
            <Image src="/Chairman.jpg" alt="" className="object-cover" fill />
          </div>
          <div className="absolute w-1/2 h-[350vh] -rotate-[30deg] hidden xl:flex -bottom-[100vh]">
            <div className="grow h-full bg-[#111619] "></div>
            <div className=" w-[180px] h-full bg-gradient-to-r from-[#373737] to-[#231f20]"></div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto py-16 px-12 md:px-0">
          <h2 className="text-primary text-xl sm:text-3xl font-bold text-center">
            OUR GROUP
          </h2>
          <p className="text-center mt-4 text-sm max-w-[1024px] mx-auto">
            Welcome to MODAD Group, a dynamic conglomerate built on the pillars
            of passion, innovation, and excellence. Established in 2011 by
            Engineer Mohamed El Haddad, MODAD Group consists of six subsidiaries
            and a Charity Foundation, in which each is specialized or serves in
            a different yet crossed sector:
          </p>
          <div className="grid gap-y-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 py-12">
            <HomeExpCard
              // title="MODAD Group"
              imgSrc="/imgs/shutterstock_1411133069.jpg"
            />
            {companies.map((company) => (
              <HomeExpCard
                key={company.path}
                imgSrc={`/imgs/companiesImgs/${company.img}`}
              />
            ))}

            {/* <HomeExpCard
              // title="MODAD Construction"
              imgSrc="/imgs/shutterstock_1411133069.jpg"
            />
            <HomeExpCard
              // title="MODAD Properties"
              imgSrc="/imgs/shutterstock_1411133069.jpg"
            />
            <HomeExpCard
              // title="MODAD MEP"
              imgSrc="/imgs/shutterstock_1411133069.jpg"
            />
            <HomeExpCard
              // title="MODAD Smart Solutions"
              imgSrc="/imgs/shutterstock_1411133069.jpg"
            />
            <HomeExpCard
              // title="MODAD Fine Finishing"
              imgSrc="/imgs/shutterstock_1411133069.jpg"
            />
            <HomeExpCard
              // title="MODAD Foundation"
              imgSrc="/imgs/shutterstock_1411133069.jpg"
            /> */}
          </div>
        </div>
      </section>
      {/* highlights */}
      {/* <section>
        <div className="w-full aspect-video">
          <Carousel
            dots={false}
            arrows
            prevArrow={
              <CXALeft icon={faCaretLeft} iconClassName="text-3xl" left={5} />
            }
            nextArrow={
              <CXARight
                icon={faCaretRight}
                iconClassName="text-3xl"
                right={5}
              />
            }
          >
            <div className="relative aspect-video w-full">
              <Image
                src="/imgs/shutterstock_2328313927.jpg"
                alt=""
                fill
                className="object-cover"
              />
              <div className="absolute top-0 sm:top-[15%] left-0 p-6 w-full sm:w-[500px] bg-black/20">
                <h3 className="text-primary text-2xl mb-6">Highlights</h3>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore quos esse, minima doloribus quia fugiat?
                </p>
              </div>
            </div>
            <div className="relative aspect-video w-full">
              <Image
                src="/imgs/shutterstock_2328313927.jpg"
                alt=""
                fill
                className="object-cover"
              />
              <div className="absolute top-0 sm:top-[15%] left-0 p-6 w-full sm:w-[500px] bg-black/20">
                <h3 className="text-primary text-2xl mb-6">Highlights</h3>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore quos esse, minima doloribus quia fugiat?
                </p>
              </div>
            </div>
          </Carousel>
        </div>
      </section> */}
      <section className="bg-black">
        <div className="container mx-auto py-12 px-2">
          <h2 className="text-primary text-2xl xl:text-3xl mb-6 xl:mb-12">
            Current Projects
          </h2>
          <div className="w-full px-6 md:px-12 lg:px-6 xl:px-12">
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
      <section className="bg-primary">
        <div className="container mx-auto py-12 px-2">
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
                        src="/newsletter.jpg"
                        alt=""
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="mb-3 text-base lg:text-xl font-bold">
                        Welcome to the MODAD newsletter!
                      </h3>
                      <p className="text-xs md:text-base">
                        Our newsletter aims to keep you updated with the latest
                        trends, project highlights, industry insights, and
                        exciting announcements from across our diverse
                        portfolio. By subscribing to our newsletter, you will
                        gain valuable information that will keep you informed
                        about the ever-evolving world of construction, real
                        estate, fine finishing, MEP and smart solutions.
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
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white relative">
        {/* <Image
          fill
          src="/pattern.svg"
          alt=""
          className="object-cover opacity-5"
        /> */}
        <div className="container mx-auto py-12 relative z-[1]">
          <h3 className="text-3xl mb-6">Corporate Responsibility</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:min-h-[60vh]">
            <div className="text-black p-4 flex flex-col justify-center">
              {/* <h4 className="text-xl font-bold mb-4">Impact...</h4> */}
              <p className="text-lg">
                Committed to making a meaningful impact, We strive to give back
                to the community and uplift the lives of the less fortunate.
                Renovation of slums and uplifting living conditions is at the
                core of our initiatives. We work tirelessly to create safe,
                dignified living spaces, and transform adversity into hope for
                those facing challenging circumstances; bringing back the
                concept of “Home”.
              </p>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 px-4 lg:px-0 lg:gap-8">
              <div className="relative aspect-square">
                <Image
                  src="/imgs/shutterstock_2145134953.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative">
                <Image
                  src="/imgs/shutterstock_2298356519.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative">
                <Image
                  src="/imgs/shutterstock_1868955754.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative">
                <Image
                  // src="/imgs/shutterstock_697100377.jpg"
                  src="/forth.jpg"
                  alt=""
                  fill
                  className="object-cover grayscale"
                />
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
}
