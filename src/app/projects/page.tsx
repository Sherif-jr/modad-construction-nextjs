import BreadCrumbs from "@/components/UI/BreadCrumbs";

const ProjectsPage = () => {
  return (
    <>
      <BreadCrumbs
        title="Projects"
        items={[
          { title: "Home", path: "/" },
          { title: "Projects", path: "/projects" },
        ]}
      />
    </>
  );
};

export default ProjectsPage;
