import Consultation from "@/components/Consultation";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Service from "@/components/Service";

export default function Home() {
  return (
    <div className="bg-[#1f2d57]">
      <Navbar />
      <Hero />
      <Service />
      <Consultation />
    </div>
  );
}
