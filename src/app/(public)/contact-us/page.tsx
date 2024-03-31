import { Map } from "@/components/Map";
import BreadCrumbs from "@/components/UI/BreadCrumbs";
import ContactUsFrom from "@/components/UI/ContactUsFrom";
import { faFacebookF, faInstagram, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MODAD - Contact Us",
  description: "MODAD - Contact Us",
  keywords: ["MODAD, contact, construction"],
};
const ContactUs = () => {
  return (
    <>
      <BreadCrumbs
        title="Contact us"
        items={[
          { title: "Home", path: "/" },
          { title: "Contact us", path: "/contact-us" },
        ]}
      />
      <main className="bg-black">
        <div className="w-full">
          <Map />
        </div>
        <div className="container mx-auto py-12 lg:px-6">
          <div className="grid md:grid-cols-2">
            <div>
              <div className="mb-6">
                <h2 className="uppercase text-primary font-bold text-2xl mb-4">
                  Get In Touch
                </h2>
                <p className="text-[#ffffffb4] text-sm">
                  Give us a call or drop by anytime, we endeavour to answer. All
                  enquiries within 24 hours on business days. We are open from
                  9am — 6pm on weekdsays.
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <Link
                  target="_blank"
                  href="https://maps.app.goo.gl/gaEz2LikAwTCgoCj6"
                  className="flex"
                >
                  <FontAwesomeIcon
                    icon={faHouse}
                    className="text-primary me-4"
                  />
                  <span className="text-white">
                    11 Abd El-Hameed Lotfy, Dokk, Giza Governorate.
                  </span>
                </Link>
                <Link
                  target="_blank"
                  href="mailto:info@modadgroup.com"
                  className="flex"
                >
                  <FontAwesomeIcon
                    icon={faEnvelopeOpen}
                    className="text-primary me-4"
                  />
                  <span className="text-white">info@modadgroup.com</span>
                </Link>
                <div className="flex gap-2 justify-evenly items-center w-48 md:w-40 lg:w-48">
                  <Link
                    href="/"
                    className="bg-primary rounded-[50%] p-2 h-9 w-9 md:w-8 md:h-8 lg:h-9 lg:w-9 flex items-center justify-center "
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                  <Link
                    href="/"
                    className="bg-primary rounded-[50%] p-2 h-9 w-9 md:w-8 md:h-8 lg:h-9 lg:w-9 flex items-center justify-center "
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Link>
                  <Link
                    href="/"
                    className="bg-primary rounded-[50%] p-2 h-9 w-9 md:w-8 md:h-8 lg:h-9 lg:w-9 flex items-center justify-center "
                  >
                    <FontAwesomeIcon icon={faXTwitter} />
                  </Link>
                  <Link
                    href="/"
                    className="bg-primary rounded-[50%] p-2 h-9 w-9 md:w-8 md:h-8 lg:h-9 lg:w-9 flex items-center justify-center "
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="px-8 border-l border-[#ffffff99]">
              <div className="mb-6">
                <h2 className="uppercase text-primary font-bold text-2xl">
                  CONTACT US FOR ANY QUESTIONS
                </h2>
              </div>
              <ContactUsFrom />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactUs;
