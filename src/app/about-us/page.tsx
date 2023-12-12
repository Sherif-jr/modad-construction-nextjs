import BreadCrumbs from "@/components/UI/BreadCrumbs";
import HomeExpCard from "@/components/UI/HomeExpCard";
import { faBullseye, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metadata } from "next";
import Image from "next/image";

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
              <div className="relative aspect-square">
                <Image
                  src="/imgs/shutterstock_2145134953.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </main>
      <section className="bg-primary">
        <div className="container mx-auto py-24 px-6 md:px-0">
          <p className="mb-16 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            cumque laboriosam nulla eligendi perspiciatis suscipit eius
            blanditiis vitae, aut ea voluptatum excepturi voluptates aliquam,
            eveniet inventore consequuntur odio officiis maxime vero labore eos
            accusantium beatae.
          </p>
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
            <div className="border-black border-4 p-5 sm:p-12">
              <div className="flex mb-6">
                <FontAwesomeIcon
                  icon={faEye}
                  className="text-white text-8xl me-4"
                />
                <h3 className="text-5xl font-bold uppercase">
                  <span className="block text-black">Our</span>
                  <span className="block text-white">Vision</span>
                </h3>
              </div>
              <div>
                <p className="text-justify">
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
            <div className="border-black border-4 p-5 sm:p-12">
              <div className="flex mb-6">
                <FontAwesomeIcon
                  icon={faBullseye}
                  className="text-white text-8xl me-4"
                />
                <h3 className="text-5xl font-bold uppercase">
                  <span className="block text-black">Our</span>
                  <span className="block text-white">Mission</span>
                </h3>
              </div>
              <div>
                <p className="text-justify">
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
      <section className="bg-black">
        <div className="container mx-auto py-24 px-6 md:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative aspect-square">
              <Image
                src="/Chairman.jpg"
                alt=""
                className="grayscale object-cover"
                fill
              />
            </div>
            <div>
              <h3 className="text-white text-3xl font-bold mb-8">
                Chairman message
              </h3>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                sed provident labore voluptates reprehenderit aliquam vel
                ducimus, ullam quod aut doloremque quisquam debitis laborum, ea
                voluptatum obcaecati, officia ratione cupiditate. Quam,
                veritatis? Aspernatur culpa aperiam qui consequuntur, nam harum
                architecto accusamus cumque distinctio voluptas, totam
                necessitatibus maxime maiores iste? Enim temporibus neque quod
                aliquid, ipsam velit sequi? Dolores at minima numquam pariatur.
                Magni, soluta praesentium. Deleniti eius provident sed
                temporibus nostrum nam officiis ab corporis. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Ipsam sed provident
                labore voluptates reprehenderit aliquam vel ducimus, ullam quod
                aut doloremque quisquam debitis laborum, ea voluptatum
                obcaecati, officia ratione cupiditate. Quam, veritatis?
                Aspernatur culpa aperiam qui consequuntur, nam harum architecto
                accusamus cumque distinctio voluptas, totam necessitatibus
                maxime maiores iste? Enim temporibus neque quod aliquid, ipsam
                velit sequi?
              </p>
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
          <div className="grid gap-y-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 py-12">
            <HomeExpCard
              title="MODAD Group"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis necessitatibus iure accusantium."
              imgSrc="/imgs/shutterstock_1411133069.jpg"
            />
            <HomeExpCard
              title="MODAD Construction"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis necessitatibus iure accusantium."
              imgSrc="/imgs/shutterstock_1411133069.jpg"
            />
            <HomeExpCard
              title="MODAD Properties"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis necessitatibus iure accusantium."
              imgSrc="/imgs/shutterstock_1411133069.jpg"
            />
            <HomeExpCard
              title="MODAD MEP"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis necessitatibus iure accusantium."
              imgSrc="/imgs/shutterstock_1411133069.jpg"
            />
            <HomeExpCard
              title="MODAD Smart Solutions"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis necessitatibus iure accusantium."
              imgSrc="/imgs/shutterstock_1411133069.jpg"
            />
            <HomeExpCard
              title="MODAD Fine Finishing"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis necessitatibus iure accusantium."
              imgSrc="/imgs/shutterstock_1411133069.jpg"
            />
            <HomeExpCard
              title="MODAD Foundation"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis necessitatibus iure accusantium."
              imgSrc="/imgs/shutterstock_1411133069.jpg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsPage;
