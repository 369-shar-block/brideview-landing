import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import JourneyVisualization from "@/components/JourneyVisualization";
import Comparison from "@/components/Comparison";
import Features from "@/components/Features";

import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowItWorks />
      <JourneyVisualization />
      <Comparison />
      <Features />

      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
