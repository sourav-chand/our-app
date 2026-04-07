import Hero from "./components/Hero";
import Brands from "./components/Brands";
import WhoWeAre from "./components/WhoWeAre";
import TakeCharge from "./components/TakeCharge";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Hero />
      <Brands />
      <WhoWeAre />
      <TakeCharge />
    </main>
  );
}
