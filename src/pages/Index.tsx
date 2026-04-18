import Hero from "@/components/sections/Hero";
import FeatureGrid from "@/components/sections/FeatureGrid";
import Features from "@/components/sections/Features";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Capabilities from "@/components/sections/Capabilities";
import Pricing from "@/components/sections/Pricing";
import Blog from "@/components/sections/Blog";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

const Index = () => (
  <main className="min-h-screen bg-gradient-soft">
    <Hero />
    <FeatureGrid />
    <Features />
    <About />
    <Services />
    <Projects />
    <Capabilities />
    <Pricing />
    <Blog />
    <CTA />
    <Footer />
  </main>
);

export default Index;
