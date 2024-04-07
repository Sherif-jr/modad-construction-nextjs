import { projects } from "@/_staticData/basicDetails";
import BreadCrumbs from "@/components/UI/BreadCrumbs";
import CXALeft from "@/components/UI/CarouselXArrows/CXALeft";
import CXARight from "@/components/UI/CarouselXArrows/CXARight";
import ProjectCard from "@/components/UI/ProjectCard";
import { Carousel, Divider } from "antd";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Params {
  id: string;
}
const ProjectPage = ({ params }: { params: Params }) => {
  const project = projects.find((p) => p.id === params.id);
  if (!project) {
    notFound();
  }
  return (
    <>
      <BreadCrumbs
        title="Projects"
        items={[
          { title: "Home", path: "/" },
          { title: "Projects", path: "/projects" },
          { title: project.name, path: `/projects/${params.id}` },
        ]}
      />
      <main className=" bg-black">
        <div className="container mx-auto py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="relative h-full w-full aspect-square">
                <Image
                  fill
                  src="/imgs/shutterstock_697100377.jpg"
                  alt=""
                  className="object-cover group-hover:scale-125  transition-all duration-700"
                />
              </div>
            </div>
            <div className="text-white">
              <h2 className="font-bold text-3xl mb-6">{project.name}</h2>
              <p className="mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis ab culpa dolor qui error tempora fugit. Sed esse libero
                neque ipsam quas ut ducimus rerum vel eos? Magnam, consequatur
                distinctio.
              </p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-12">
                <div>
                  <h3 className="font-bold">Client</h3>
                  <Divider />
                  <p className="text-white/70">Lorem, ipsum dolor.</p>
                </div>
                {/* <div>
                  <h3 className="font-bold">Company</h3>
                  <Divider />
                  <p className="text-white/70">Lorem, ipsum.</p>
                </div>
                <div>
                  <h3 className="font-bold">Budget</h3>
                  <Divider />
                  <p className="text-white/70">1.3 M</p>
                </div> */}
                <div>
                  <h3 className="font-bold">Location</h3>
                  <Divider />
                  <p className="text-white/70">Cairo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <section className="bg-black">
        <div className="container mx-auto py-12 px-2 xl:px-12">
          <h2 className="text-primary text-2xl xl:text-3xl mb-6 xl:mb-12">
            Related Projects
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
              {projects.map((proj) => {
                return (
                  <Link href={`/projects/${proj.id}`} key={proj.id}>
                    <ProjectCard
                      title={proj.name}
                      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam ipsum voluptas!"
                      imgSrc="/imgs/shutterstock_1559528492.jpg"
                    />
                  </Link>
                );
              })}
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
