import Hero from "./components/Hero";
import Brands from "./components/Brands";
import WhoWeAre from "./components/WhoWeAre";
import TakeCharge from "./components/TakeCharge";
import EmpoweringSkills from "./components/EmpoweringSkills";
import TechStack from "./components/TechStack";
import CaseStudy from "./components/CaseStudy";
import PremiumService from "./components/PremiumService";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Journal from "./components/Journal";
import Footer from "./components/Footer";
import "sheryjs/dist/Shery.css";

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
      <PremiumService />
      <Testimonial />
      <FAQ />
      <CTA />
      <Journal />
      <Footer />
    </main>
  );
  
}
