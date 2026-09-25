import LibraryCard from "@/components/common/LibraryCard";
import Banner from "@/components/home/Banner";



export default function Home() {
  return (
    <>
      <Banner />

      {/** Workout library section */}
      <section id="library" className="pb-20">
        <div className="mb-8">
          <h1 className="text-4xl text-white uppercase font-bold leading-tight mb-2">The Library</h1>
          <p className="text-gray-400">Twelve lifts covering every major muscle group.</p>
        </div>
        {/** Library crard list */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-3">
          <LibraryCard />
          <LibraryCard />
          <LibraryCard />
          <LibraryCard />
          <LibraryCard />
          <LibraryCard />
        </div>
      </section>
    </>
  );
}
