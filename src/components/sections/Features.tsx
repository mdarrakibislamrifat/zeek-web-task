import { Zap, MessagesSquare, Globe2, Plug } from "lucide-react";
import PillButton from "@/components/PillButton";

const features = [
  { icon: Zap, title: "Instant Auto Responses", desc: "We deliver tailored marketing solutions designed to scale your brand and drive measurable results" },
  { icon: MessagesSquare, title: "Smart Conversations", desc: "Deliver AI-powered conversations that are natural, engaging, and tailored to meet customer needs effectively." },
  { icon: Globe2, title: "Omnichannel Support", desc: "Provide seamless customer experiences across websites, social media, and messaging apps with one unified chatbot." },
  { icon: Plug, title: "Flexible Integrations", desc: "Easily connect your chatbot with CRM, ERP, e-commerce, and other tools to streamline business operations" },
];

const Features = () => (
  <section className="px-6 py-24 md:px-14">
    <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
      <div>
        <span className="text-sm text-muted-foreground">[ Feature ]</span>
        <h2 className="mt-3 max-w-2xl text-4xl font-bold leading-tight md:text-5xl">
          Intelligent Features for Exceptional Customer Service
        </h2>
      </div>
      <PillButton>Explore more</PillButton>
    </div>
    <div className="grid gap-10 md:grid-cols-4">
      {features.map((f) => (
        <div key={f.title} className="group">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-accent text-primary transition-smooth group-hover:bg-gradient-button group-hover:text-primary-foreground">
            <f.icon className="h-6 w-6" />
          </div>
          <h3 className="mt-6 text-lg font-semibold">{f.title}</h3>
          <p className="mt-3 text-sm text-muted-foreground">{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Features;
