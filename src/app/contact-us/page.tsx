import { Map } from "@/components/Map";
import ContactUsFrom from "@/components/UI/ContactUsFrom";
import { faEnvelopeOpen, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const ContactUs = () => {
  return (
    <main className="bg-black">
      <div className="w-full">
        <Map />
      </div>
      <div className="container mx-auto py-12">
        <div className="grid md:grid-cols-2">
          <div>
            <div className="mb-6">
              <h2 className="uppercase text-primary font-bold text-2xl mb-4">
                Get In Touch
              </h2>
              <p className="text-[#ffffffb4] text-sm">
                Give us a call or drop by anytime, we endeavour to answer. All
                enquiries within 24 hours on business days. We are open from 9am
                — 6pm on weekdsays.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <Link
                target="_blank"
                href="https://maps.app.goo.gl/gaEz2LikAwTCgoCj6"
                className="flex"
              >
                <FontAwesomeIcon icon={faHouse} className="text-primary me-4" />
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
  );
};

export default ContactUs;
