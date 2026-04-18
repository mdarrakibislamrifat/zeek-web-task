import { Check } from "lucide-react";
import PillButton from "@/components/PillButton";

const items = ["Get Expert Guidance", "Tailored Solutions", "Quick Support Service"];

const CTA = () => (
  <section className="px-3 pb-3">
    <div className="overflow-hidden rounded-[2rem] bg-gradient-hero px-6 py-20 text-dark-foreground md:px-14">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            Connect With Us To Explore Chatbot Solutions
          </h2>
          <p className="mt-5 max-w-md text-dark-foreground/70">
            Our experts are here to answer your questions and help you find the right solution.
          </p>
        </div>
        <div>
          <ul className="space-y-4">
            {items.map((i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-button">
                  <Check className="h-4 w-4" />
                </span>
                <span>{i}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            <PillButton>Start Free Trial</PillButton>
            <PillButton variant="outline">View All Services</PillButton>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
