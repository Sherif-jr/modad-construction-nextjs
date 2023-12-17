"use client";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { FC, PropsWithChildren } from "react";

interface NavLinkProps extends LinkProps {
  className?: string;
  activeClassName?: string;
  exact?: boolean;
  activeStyle?: React.CSSProperties;
}

const NavLink: FC<PropsWithChildren<NavLinkProps>> = (props) => {
  const { children, className, activeClassName, exact, href, activeStyle } =
    props;
  const pathname = usePathname();
  const isActive = exact
    ? pathname === href
    : pathname.startsWith(href as string);
  return (
    <Link
      href={href}
      style={isActive && activeStyle ? activeStyle : undefined}
      className={`${className ? className : ""} ${
        isActive && activeClassName && activeClassName
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
