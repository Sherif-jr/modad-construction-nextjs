import BreadCrumbs from "@/components/UI/BreadCrumbs";
import { Metadata } from "next";

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
    </>
  );
};

export default AboutUsPage;
