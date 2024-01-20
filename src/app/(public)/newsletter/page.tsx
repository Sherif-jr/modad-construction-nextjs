import BreadCrumbs from "@/components/UI/BreadCrumbs";
import NewLetterCard from "@/components/UI/NewLetterCard";

const NewsLetter = () => {
  return (
    <main className="bg-black">
      <BreadCrumbs
        title="Newsletter"
        items={[
          { title: "Home", path: "/" },
          { title: "Newsletter", path: "/newsletter" },
        ]}
      />
      <div className="container mx-auto pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NewLetterCard />
          <NewLetterCard />
          <NewLetterCard />
          <NewLetterCard />
          <NewLetterCard />
          <NewLetterCard />
        </div>
      </div>
    </main>
  );
};

export default NewsLetter;
