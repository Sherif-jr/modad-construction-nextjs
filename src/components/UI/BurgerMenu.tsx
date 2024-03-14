"use client";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Drawer } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavLink from "../NavLink";
import { usePathname } from "next/navigation";
import { screenSizes } from "@/constants/enums";

const BurgerMenu = () => {
  const [drawerOpen, setDrawer] = useState<boolean>(false);
  const pathname = usePathname();
  const toggleDrawer = (newState: boolean) => () => {
    setDrawer(newState);
  };

  useEffect(() => {
    matchMedia(screenSizes.LG).addEventListener("change", (media) => {
      if (!media.matches) {
        setDrawer(false);
      }
    });
  }, []);
  useEffect(() => {
    setDrawer(false);
  }, [pathname]);
  return (
    <>
      <button className="ms-6 lg:hidden" onClick={toggleDrawer(true)}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <Drawer
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        styles={{
          content: { backgroundColor: "transparent" },
        }}
        classNames={{
          header: "bg-black/60 backdrop-blur ",
          body: "bg-black/60 backdrop-blur",
        }}
        closeIcon={<FontAwesomeIcon icon={faX} className="text-white" />}
      >
        <ul className="flex flex-col gap-4 text-xl">
          <li className="uppercase">
            <NavLink
              href="/"
              exact
              className="text-primary hover:text-primary/90 focus:text-primary/90"
              activeClassName="font-bold"
            >
              Home
            </NavLink>
          </li>
          <li className="uppercase">
            <NavLink
              href="/about-us"
              exact
              className="text-primary hover:text-primary/90 focus:text-primary/90"
              activeClassName="font-bold"
            >
              About us
            </NavLink>
          </li>
          <li className="uppercase">
            <NavLink
              href="#"
              exact
              className="text-primary hover:text-primary/90 focus:text-primary/90"
              activeClassName="font-bold"
            >
              Our Group
            </NavLink>
          </li>
          <li className="uppercase">
            <NavLink
              href="/projects"
              exact
              className="text-primary hover:text-primary/90 focus:text-primary/90"
              activeClassName="font-bold"
            >
              Projects
            </NavLink>
          </li>
          <li className="uppercase">
            <NavLink
              href="#"
              exact
              className="text-primary hover:text-primary/90 focus:text-primary/90"
              activeClassName="font-bold"
            >
              News
            </NavLink>
          </li>
          <li className="uppercase">
            <NavLink
              href="#"
              exact
              className="text-primary hover:text-primary/90 focus:text-primary/90"
              activeClassName="font-bold"
            >
              Careers
            </NavLink>
          </li>
          <li className="uppercase">
            <NavLink
              href="#"
              exact
              className="text-primary hover:text-primary/90 focus:text-primary/90"
              activeClassName="font-bold"
            >
              Portals
            </NavLink>
          </li>
          <li className="uppercase">
            <NavLink
              href="/contact-us"
              exact
              className="text-primary hover:text-primary/90 focus:text-primary/90"
              activeClassName="font-bold"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </Drawer>
    </>
  );
};

export default BurgerMenu;
