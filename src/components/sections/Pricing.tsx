import { Check } from "lucide-react";
import PillButton from "@/components/PillButton";

const plans = [
  {
    name: "Basic",
    price: "$4,200",
    desc: "Ideal for small businesses starting with AI-powered customer support.",
    popular: false,
    features: [
      "2 team seats included",
      "250MB training data storage",
      "Essential chatbot features for FAQs",
      "Up to 2,000 messages/month",
      "Basic analytics dashboard",
    ],
  },
  {
    name: "Premium",
    price: "$10,500",
    desc: "Perfect for businesses needing advanced, multi-channel chatbot automation.",
    popular: true,
    features: [
      "4 team seats included",
      "1GB training data storage",
      "All Basic features included",
      "Smart AI chatbot with NLP & automation",
      "Up to 20,000 messages/month",
    ],
  },
];

const Pricing = () => (
  <section className="px-6 py-24 md:px-14">
    <div className="mb-14 text-center">
      <span className="text-sm text-muted-foreground">[ Pricing ]</span>
      <h2 className="mx-auto mt-3 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
        Only Pay For What You Use
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
        Our pricing is carefully designed to scale with your brand and deliver measurable results. Each
        plan is structured to maximize value as your business grows.
      </p>
    </div>
    <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
      {plans.map((p) => (
        <div
          key={p.name}
          className={`relative rounded-3xl p-8 transition-smooth ${
            p.popular
              ? "bg-gradient-hero text-dark-foreground shadow-glow"
              : "border border-border bg-card text-card-foreground"
          }`}
        >
          {p.popular && (
            <span className="absolute right-6 top-6 rounded-full bg-gradient-button px-3 py-1 text-xs font-medium text-primary-foreground">
              Most Popular
            </span>
          )}
          <h3 className="text-2xl font-bold">{p.name}</h3>
          <p className={`mt-2 text-sm ${p.popular ? "text-dark-foreground/70" : "text-muted-foreground"}`}>
            {p.desc}
          </p>
          <div className="mt-6 flex items-baseline gap-2">
            <span className="text-5xl font-bold">{p.price}</span>
            <span className={p.popular ? "text-dark-foreground/70" : "text-muted-foreground"}>/ Monthly</span>
          </div>
          <ul className="mt-8 space-y-3">
            {p.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm">
                <Check className={`mt-0.5 h-4 w-4 shrink-0 ${p.popular ? "text-primary-glow" : "text-primary"}`} />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <PillButton variant={p.popular ? "primary" : "primary"}>Choose this plan</PillButton>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Pricing;
