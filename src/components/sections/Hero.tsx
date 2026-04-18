import { Play } from "lucide-react";
import PillButton from "@/components/PillButton";
import heroRobot from "@/assets/hero-robot.jpg";

const Nav = () => (
  <nav className="absolute left-1/2 top-6 z-30 flex w-[min(96%,1320px)] -translate-x-1/2 items-center justify-between rounded-full bg-dark/90 px-3 py-3 backdrop-blur">
    <div className="flex items-center gap-2 rounded-full bg-white px-5 py-2 text-dark">
      <div className="grid h-7 w-7 place-items-center rounded-md bg-gradient-button font-bold text-white">A</div>
      <span className="text-lg font-bold">Auregon</span>
    </div>
    <ul className="hidden items-center gap-7 text-sm text-dark-foreground/90 lg:flex">
      {["Home", "Pages", "Services", "Projects", "Blog", "Contact"].map((l) => (
        <li key={l} className="cursor-pointer transition-smooth hover:text-white">{l}</li>
      ))}
    </ul>
    <PillButton>Get in Touch</PillButton>
  </nav>
);

const Hero = () => (
  <section className="px-3 pt-3">
    <div className="relative overflow-hidden rounded-[2rem] bg-gradient-hero pb-16 pt-32 md:pt-40">
      <Nav />
      <div className="relative z-10 grid items-center gap-8 px-6 md:grid-cols-2 md:px-14">
        <div className="text-dark-foreground">
          <h1 className="text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
            Your Partner In Building Smarter, Faster, And Better Conversations
          </h1>
          <p className="mt-6 max-w-xl text-base text-dark-foreground/70 md:text-lg">
            We deliver measurable business benefits by helping organizations streamline operations,
            unlock growth opportunities.
          </p>
          <div className="mt-8 flex items-center gap-5">
            <PillButton>Discover</PillButton>
            <button className="flex items-center gap-3 text-dark-foreground transition-smooth hover:opacity-80">
              <span className="grid h-11 w-11 place-items-center rounded-full border border-white/30">
                <Play className="h-4 w-4 fill-white" />
              </span>
              <span className="text-sm">Watch Video</span>
            </button>
          </div>
        </div>
        <div className="relative">
          <img
            src={heroRobot}
            alt="Robotic hand holding a glowing AI neural network sphere"
            width={1280}
            height={896}
            className="mx-auto w-full max-w-xl"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
