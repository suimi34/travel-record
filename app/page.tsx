import HeroSection from "@/src/components/hero-section";
import DestinationList from "@/src/components/destination-list";
import WorldMapClientWrapper from "@/src/components/world-map/world-map-wrapper";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="container mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Travel Route</h2>
        <WorldMapClientWrapper />
      </section>
      <DestinationList />
    </>
  );
}
