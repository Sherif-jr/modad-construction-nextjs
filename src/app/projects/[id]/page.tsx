import { projects } from "@/_staticData/basicDetails";
import { Divider } from "antd";
import Image from "next/image";
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              ab culpa dolor qui error tempora fugit. Sed esse libero neque
              ipsam quas ut ducimus rerum vel eos? Magnam, consequatur
              distinctio.
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-12">
              <div>
                <h3 className="font-bold">Client</h3>
                <Divider />
                <p className="text-white/70">Lorem, ipsum dolor.</p>
              </div>
              <div>
                <h3 className="font-bold">Company</h3>
                <Divider />
                <p className="text-white/70">Lorem, ipsum.</p>
              </div>
              <div>
                <h3 className="font-bold">Budget</h3>
                <Divider />
                <p className="text-white/70">1.3 M</p>
              </div>
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
  );
};

export default ProjectPage;
