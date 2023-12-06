import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import BurgerMenu from "../UI/BurgerMenu";

const Header = () => {
  return (
    <header className="sticky z-50 top-0 left-0 w-full bg-black text-white h-16 px-4 lg:px-12">
      <div className="flex justify-between h-full items-center">
        <Link href="/">
          <Image src={logo} alt="logo" className="w-[130px] object-contain" />
        </Link>
        <nav className="hidden lg:block">
          <ul className="flex gap-4 text-sm font-bold">
            <li className="uppercase hover:text-gray-300 transition-all">
              <Link href="#">About us</Link>
            </li>
            <li className="uppercase hover:text-gray-300 transition-all">
              <Link href="#">Our Services</Link>
            </li>
            <li className="uppercase hover:text-gray-300 transition-all">
              <Link href="#">Our Projects</Link>
            </li>
            <li className="uppercase hover:text-gray-300 transition-all">
              <Link href="#">Quality Assurance</Link>
            </li>
            <li className="uppercase hover:text-gray-300 transition-all">
              <Link href="#">Media</Link>
            </li>
            <li className="uppercase hover:text-gray-300 transition-all">
              <Link href="#">Careers</Link>
            </li>
            <li className="uppercase hover:text-gray-300 transition-all">
              <Link href="#">Contact us</Link>
            </li>
          </ul>
        </nav>
        <div>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <BurgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
