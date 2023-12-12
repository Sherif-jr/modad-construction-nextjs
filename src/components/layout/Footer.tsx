import Image from "next/image";
import logo from "@/assets/logo.svg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import FooterContactForm from "./FooterContactForm";
const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-5 md:gap-x-5 xl:gap-x-2 px-8 md:px-0">
          <div className="flex flex-col justify-between gap-4">
            <div className="w-full relative h-12 ">
              <Image
                src={logo}
                alt="logo"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-gray-500">&copy; 2023 MODAD GROUP</p>
          </div>
          <div>
            <ul className="flex flex-col gap-3">
              <li className="uppercase">
                <Link href="/about-us">About us</Link>
              </li>
              <li className="uppercase">
                <Link href="/">Our Group</Link>
              </li>
              <li className="uppercase">
                <Link href="/projects">Proiects</Link>
              </li>
              <li className="uppercase">
                <Link href="/">News</Link>
              </li>
              <li className="uppercase">
                <Link href="/">Careers</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-3">
              <li className="uppercase">
                <Link href="/">Portal</Link>
              </li>
              <li className="uppercase">
                <Link href="/contact-us">Contact us</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-5">
            <p className="uppercase font-bold text-xl">Contact with us</p>
            <div>
              <FooterContactForm />
            </div>
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
      </div>
    </footer>
  );
};

export default Footer;
