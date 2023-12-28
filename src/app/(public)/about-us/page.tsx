import BreadCrumbs from "@/components/UI/BreadCrumbs";
import CXALeft from "@/components/UI/CarouselXArrows/CXALeft";
import CXARight from "@/components/UI/CarouselXArrows/CXARight";
import HomeExpCard from "@/components/UI/HomeExpCard";
import { faBullseye, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel } from "antd";
import { Metadata } from "next";
import Image from "next/image";
import logo1 from "@/assets/companiesLogos/Modad Consratuction-Black.svg";
import logo2 from "@/assets/companiesLogos/Modad Properties-Black.svg";
import logo3 from "@/assets/companiesLogos/Modad MEP-Black.svg";
import logo4 from "@/assets/companiesLogos/Modad Smart Solutions-Black.svg";
import logo5 from "@/assets/companiesLogos/Modad Fine Finishing-Black.svg";
import logo6 from "@/assets/companiesLogos/Modad Charity Foundation-Black.svg";
import Link from "next/link";
import ServiceCard from "@/components/UI/ServiceCard";

export const metadata: Metadata = {
  title: "Modad - About us",
  description: "About Modad",
};
const AboutUsPage = () => {
  return (
    <>
      <BreadCrumbs
        title="About us"
        items={[
          { title: "Home", path: "/" },
          { title: "About us", path: "/about-us" },
        ]}
      />
      <main className="bg-primary relative">
        <Image
          fill
          src="/pattern.svg"
          alt=""
          className="object-cover opacity-5"
        />
        <div className="container mx-auto py-12 px-6 md:px-0 relative z-[1]">
          <h3 className="text-3xl font-bold mb-6">MODAD</h3>
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
            <div className="">
              <Carousel>
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
                    src="/imgs/shutterstock_2145134953.jpg"
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
      </main>
      <section className="bg-black">
        <div className="container mx-auto py-24 px-6 md:px-0">
          <p className="mb-16 text-center text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            cumque laboriosam nulla eligendi perspiciatis suscipit eius
            blanditiis vitae, aut ea voluptatum excepturi voluptates aliquam,
            eveniet inventore consequuntur odio officiis maxime vero labore eos
            accusantium beatae.
          </p>
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
            <div className="border-primary border-4 p-5 sm:p-12">
              <div className="flex mb-6">
                <FontAwesomeIcon
                  icon={faEye}
                  className="text-primary text-8xl me-4"
                />
                <h3 className="text-5xl font-bold uppercase">
                  <span className="block text-white">Our</span>
                  <span className="block text-primary">Vision</span>
                </h3>
              </div>
              <div>
                <p className="text-justify text-white">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Natus exercitationem incidunt ducimus magnam perspiciatis
                  corrupti? Quibusdam facere natus aliquid eveniet, impedit
                  autem ut ad enim, quasi veritatis, saepe suscipit molestias
                  quam harum nesciunt optio! Nulla et tempore exercitationem
                  necessitatibus adipisci rerum nostrum quo ab iusto. Eos minima
                  dolore quos! Deleniti aliquam, quo dolorum eum ad porro ex et
                  dolorem assumenda voluptatem modi quasi blanditiis quaerat
                  cumque nobis ipsum. A, iste.
                </p>
              </div>
            </div>
            <div className="border-primary border-4 p-5 sm:p-12">
              <div className="flex mb-6">
                <FontAwesomeIcon
                  icon={faBullseye}
                  className="text-primary text-8xl me-4"
                />
                <h3 className="text-5xl font-bold uppercase">
                  <span className="block text-white">Our</span>
                  <span className="block text-primary">Mission</span>
                </h3>
              </div>
              <div>
                <p className="text-justify text-white">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Natus exercitationem incidunt ducimus magnam perspiciatis
                  corrupti? Quibusdam facere natus aliquid eveniet, impedit
                  autem ut ad enim, quasi veritatis, saepe suscipit molestias
                  quam harum nesciunt optio! Nulla et tempore exercitationem
                  necessitatibus adipisci rerum nostrum quo ab iusto. Eos minima
                  dolore quos! Deleniti aliquam, quo dolorum eum ad porro ex et
                  dolorem assumenda voluptatem modi quasi blanditiis quaerat
                  cumque nobis ipsum. A, iste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto py-16 px-12 md:px-0">
          <h2 className="text-primary text-xl sm:text-3xl font-bold text-center">
            OUR GROUP
          </h2>
          <p className="text-center mt-4 text-sm max-w-[1024px] mx-auto">
            We have succeeded in establishing our name as market leader in the
            construction, and engineering solutions industry. We serve a wide
            range of sectors including but not limited to commercial, banking,
            administrative, hospitality, and residential.
          </p>
          <div className="py-12 px-0 md:px-10 lg:px-12 xl:px-0">
            <Carousel
              autoplay
              dots={false}
              arrows
              prevArrow={
                <CXALeft
                  xsLeft={-10}
                  left={-5}
                  iconClassName="text-xl text-black select-none"
                />
              }
              nextArrow={
                <CXARight
                  xsRight={-10}
                  right={-5}
                  iconClassName="text-xl text-black select-none"
                />
              }
              slidesToShow={3}
              responsive={[
                { breakpoint: 640, settings: { slidesToShow: 1 } },
                { breakpoint: 767, settings: { slidesToShow: 2 } },
                { breakpoint: 1024, settings: { slidesToShow: 3 } },
              ]}
              className="text-black"
            >
              <Link href="/our-group/modad-construction" className="px-4">
                <div className="h-[200px] relative">
                  <Image
                    fill
                    src={logo1}
                    alt="MODAD Constructions"
                    className="object-contain"
                  />
                </div>
              </Link>
              <Link href="/our-group/modad-properties" className="px-4">
                <div className="h-[200px] relative">
                  <Image
                    fill
                    src={logo2}
                    alt="MODAD Properties"
                    className="object-contain"
                  />
                </div>
              </Link>
              <Link href="/our-group/modad-mep" className="px-4">
                <div className="h-[200px] relative">
                  <Image
                    fill
                    src={logo3}
                    alt="MODAD MEP"
                    className="object-contain"
                  />
                </div>
              </Link>
              <Link href="/our-group/modad-smart-solutions" className="px-4">
                <div className="h-[200px] relative">
                  <Image
                    fill
                    src={logo4}
                    alt="MODAD Smart Solutions"
                    className="object-contain"
                  />
                </div>
              </Link>
              <Link href="/our-group/modad-fine-finishing" className="px-4">
                <div className="h-[200px] relative">
                  <Image
                    fill
                    src={logo5}
                    alt="MODAD Fine Finishings"
                    className="object-contain"
                  />
                </div>
              </Link>
              <Link href="/modad-foundation" className="px-4">
                <div className="h-[200px] relative">
                  <Image
                    fill
                    src={logo6}
                    alt="MODAD Foundation"
                    className="object-contain"
                  />
                </div>
              </Link>
            </Carousel>
          </div>
        </div>
      </section>
      <section className="bg-black">
        <div className="container mx-auto py-12">
          <h2 className="text-white text-xl sm:text-3xl font-bold text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10">
            <ServiceCard
              imgLink="/imgs/shutterstock_697100377.jpg"
              title="CONSULTING"
              description="Our consulting services offer you ease of mind, as we oversee the entire process. Beginning with the documentation and paperwork to the creation of a project plan, we can get it done from start to finish. Meeting our clients’ needs and exceeding their expectations."
            />
            <ServiceCard
              imgLink="/imgs/shutterstock_707662543.jpg"
              title="ARCHITECTURE"
              description="An idea cannot become reality unless it is designed properly. Our skilled and experienced architects are talented, highly trained, and equipped with the latest technology. They are the ones that turn your vision into reality by transforming your ideas into tangible plans and designs."
            />
            <ServiceCard
              imgLink="/imgs/shutterstock_1067925506.jpg"
              title="CONSTRUCTION"
              description="MODAD Construction stands as your comprehensive solution for construction requirements, adept at handling projects of various scales. Whether it's a small-scale initiative or a large corporate complex, our expertise extends to diverse construction needs. From intricate roadwork to the development of expansive corporate complexes, MODAD Construction ensures excellence and precision in every facet of the construction process."
            />
            <ServiceCard
              imgLink="/imgs/shutterstock_1411133069.jpg"
              title="RENOVATIONS"
              description="We can deliver renovation projects of any scale, at the highest standards of quality. We offer a full service starting from planning, architecture, tiling, painting, woodwork, and stonework. We can work hand in hand with our clients every step of the way."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsPage;
