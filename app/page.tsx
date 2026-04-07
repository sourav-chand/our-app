import Hero from "./components/Hero";
import Brands from "./components/Brands";
import WhoWeAre from "./components/WhoWeAre";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Hero />
      <Brands />
      <WhoWeAre />
    </main>
  );
}
