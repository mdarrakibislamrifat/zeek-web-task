import { Bot, Settings, BarChart3, Sparkles } from "lucide-react";
import PillButton from "@/components/PillButton";

const services = [
  { icon: Bot, title: "AI Customer Support", desc: "Provide 24/7 instant answers to common questions, reducing agent workload and keeping customers happy." },
  { icon: Settings, title: "Omnichannel Integration", desc: "Connect your chatbot to Website, Facebook, Zalo, WhatsApp and more for seamless customer access anytime." },
  { icon: BarChart3, title: "Analytics & Insights", desc: "Analyze customer interactions to reveal patterns, track performance, and guide smarter decisions." },
  { icon: Sparkles, title: "Custom AI Solutions", desc: "Build chatbots tailored to your industry, integrated with CRM, ERP, or e-commerce to streamline workflows." },
];

const Services = () => (
  <section className="px-6 py-24 md:px-14">
    <div className="grid gap-14 md:grid-cols-2">
      <div>
        <span className="text-sm text-muted-foreground">[ Service ]</span>
        <h2 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">
          AI-Powered Solutions To Transform Your Business
        </h2>
        <p className="mt-6 max-w-md text-muted-foreground">
          Our pricing is carefully designed to scale with your brand and deliver measurable results. Each
          plan is structured to maximize value, ensuring that as your business grows.
        </p>
        <div className="mt-8">
          <PillButton>Explore more</PillButton>
        </div>
      </div>
      <div className="grid gap-8 sm:grid-cols-2">
        {services.map((s) => (
          <div key={s.title} className="border-l-2 border-primary/30 pl-4">
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-accent text-primary">
              <s.icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
