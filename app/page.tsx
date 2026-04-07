import Hero from "./components/Hero";
import Brands from "./components/Brands";
import WhoWeAre from "./components/WhoWeAre";
import TakeCharge from "./components/TakeCharge";
import EmpoweringSkills from "./components/EmpoweringSkills";
import TechStack from "./components/TechStack";
import CaseStudy from "./components/CaseStudy";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Hero />
      <Brands />
      <WhoWeAre />
      <TakeCharge />
      <EmpoweringSkills />
      <TechStack />
      <CaseStudy />
    </main>
  );
}
