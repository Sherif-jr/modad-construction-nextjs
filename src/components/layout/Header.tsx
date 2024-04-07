import Image from "next/image";
import logo from "@/assets/logo.svg";
import Link from "next/link";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BurgerMenu from "../UI/BurgerMenu";
import NavLink from "../NavLink";
import { Dropdown, MenuProps } from "antd";
import { companies } from "@/_staticData/basicDetails";

const NewsItems: MenuProps["items"] = [
  // { key: "articles", label: "Article" },
  {
    key: "newsletter",
    label: (
      <NavLink
        exact
        href="/newsletter"
        activeStyle={{ color: "#CBA052" }}
        activeClassName="text-primary font-bold"
      >
        Newsletter
      </NavLink>
    ),
  },
];

const Header = () => {
  const groupItems: MenuProps["items"] = companies.map((company) => ({
    key: company.path,
    label: (
      <NavLink
        href={`/our-group/${company.path}`}
        exact
        activeStyle={{ color: "#CBA052" }}
        activeClassName="text-primary font-bold"
      >
        {company.name}
      </NavLink>
    ),
  }));
  return (
    <header className="sticky z-50 top-0 left-0 w-full bg-black text-white h-16 px-4 lg:px-12">
      <div className="flex justify-between h-full items-center">
        <Link href="/">
          <Image src={logo} alt="logo" className="w-[130px] object-contain" />
        </Link>
        <nav className="hidden lg:block">
          <ul className="flex gap-4 text-sm font-bold">
            <li className="uppercase hover:text-gray-300 transition-all">
              <NavLink href="/" exact activeClassName="text-primary">
                Home
              </NavLink>
            </li>
            <li className="uppercase hover:text-gray-300 transition-all">
              <NavLink href="/about-us" exact activeClassName="text-primary">
                About us
              </NavLink>
            </li>
            <li className="uppercase hover:text-gray-300 transition-all">
              {/* <Dropdown
                menu={{
                  items: groupItems,
                }}
              > */}
                <span>
                  <NavLink href="/our-group" exact activeClassName="text-primary">
                    Our Group
                  </NavLink>
                </span>
              {/* </Dropdown> */}
            </li>
            <li className="uppercase hover:text-gray-300 transition-all">
              <NavLink href="/projects" activeClassName="text-primary">
                Projects
              </NavLink>
            </li>
            <li className="uppercase hover:text-gray-300 transition-all">
              <Dropdown menu={{ items: NewsItems }}>
                <Link href="/news">News</Link>
              </Dropdown>
            </li>
            <li className="uppercase hover:text-gray-300 transition-all">
              <NavLink href="/careers" exact activeClassName="text-primary">
                Careers
              </NavLink>
            </li>
            {/* <li className="uppercase hover:text-gray-300 transition-all">
              <Link href="#">Portals</Link>
            </li> */}
            <li className="uppercase hover:text-gray-300 transition-all">
              <NavLink href="/contact-us" exact activeClassName="text-primary">
                Contact us
              </NavLink>
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
