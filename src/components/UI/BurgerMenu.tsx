"use client";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Drawer } from "antd";
import Link from "next/link";
import { useState } from "react";

const BurgerMenu = () => {
  const [drawerOpen, setDrawer] = useState<boolean>(false);
  const toggleDrawer = (newState: boolean) => () => {
    setDrawer(newState);
  };
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
          body: "bg-black/60",
        }}
        closeIcon={<FontAwesomeIcon icon={faX} className="text-white" />}
      >
        <ul className="flex flex-col gap-4">
          <li className="text-primary uppercase">
            <Link href="/">Home</Link>
          </li>
          <li className="text-primary uppercase">
            <Link href="/">Divisions</Link>
          </li>
          <li className="text-primary uppercase">
            <Link href="/">Highlights</Link>
          </li>
          <li className="text-primary uppercase">
            <Link href="/">News</Link>
          </li>
          <li className="text-primary uppercase">
            <Link href="/">Corporate Responsibility</Link>
          </li>
        </ul>
      </Drawer>
    </>
  );
};

export default BurgerMenu;
