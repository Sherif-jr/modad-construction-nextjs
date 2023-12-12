import { Breadcrumb } from "antd";
import Link from "next/link";
import { FC } from "react";

interface BreadcrumbProps {
  items: { title: string; path: string }[];
  title: string;
}
const BreadCrumbs: FC<BreadcrumbProps> = ({ items, title }) => {
  const bItems = items.map((item) => ({
    key: item.path,
    title: (
      <Link style={{ color: "black" }} href={item.path}>
        {item.title}
      </Link>
    ),
  }));
  return (
    <div className="w-full bg-white px-10 py-4 text-black">
      <h2 className="font-bold text-3xl mb-4">{title}</h2>
      <Breadcrumb
        items={bItems}
        separator={<span style={{ color: "black" }}>/</span>}
      />
    </div>
  );
};

export default BreadCrumbs;
