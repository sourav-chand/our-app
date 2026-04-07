import Hero from "./components/Hero";
import Brands from "./components/Brands";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Hero />
      <Brands />
    </main>
  );
}
