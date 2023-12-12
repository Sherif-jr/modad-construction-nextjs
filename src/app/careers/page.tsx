import BreadCrumbs from "@/components/UI/BreadCrumbs";

const Careers = () => {
  return (
    <>
      <BreadCrumbs
        title="Careers"
        items={[
          { title: "Home", path: "/" },
          { title: "Careers", path: "/careers" },
        ]}
      />
    </>
  );
};

export default Careers;
