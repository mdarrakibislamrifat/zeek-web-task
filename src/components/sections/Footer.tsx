import { Twitter, Facebook, Instagram, Linkedin, ArrowUp } from "lucide-react";

const cols = [
  { title: "Explore", items: ["What We Offer", "Case Studies", "Blog & Insights", "Resources", "FAQs"] },
  { title: "Company", items: ["About", "Services", "Testimonials", "Pricing", "FAQs"] },
  { title: "Service", items: ["Deep learning", "Development", "Data Science", "Prediction"] },
];

const Footer = () => (
  <footer className="bg-dark px-6 py-16 text-dark-foreground md:px-14">
    <div className="grid gap-10 md:grid-cols-6">
      <div className="md:col-span-2">
        <div className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-md bg-gradient-button font-bold text-white">A</div>
          <span className="text-xl font-bold">Auregon</span>
        </div>
        <p className="mt-4 max-w-xs text-sm text-dark-muted">
          Unlock performance with data-driven campaigns, creative storytelling, and impactful branding.
        </p>
        <div className="mt-5 flex gap-3">
          {[Twitter, Facebook, Instagram, Linkedin].map((Icon, i) => (
            <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full border border-white/15 transition-smooth hover:bg-white/10">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
      {cols.map((c) => (
        <div key={c.title}>
          <h4 className="mb-4 font-semibold">{c.title}</h4>
          <ul className="space-y-2 text-sm text-dark-muted">
            {c.items.map((i) => (
              <li key={i} className="cursor-pointer transition-smooth hover:text-white">{i}</li>
            ))}
          </ul>
        </div>
      ))}
      <div>
        <h4 className="mb-4 font-semibold">Newsletter</h4>
        <div className="flex items-center rounded-full border border-white/15 p-1">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-transparent px-3 py-2 text-sm outline-none placeholder:text-dark-muted"
          />
          <button className="rounded-full bg-gradient-button px-4 py-2 text-sm font-medium">Join</button>
        </div>
        <div className="mt-6 text-sm">
          <div className="text-dark-muted">Call us</div>
          <div>+91 6292226351</div>
        </div>
        <div className="mt-3 text-sm">
          <div className="text-dark-muted">Email us</div>
          <div>auregon@gmail.com</div>
        </div>
      </div>
    </div>
    <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-dark-muted md:flex-row">
      <span>© {new Date().getFullYear()} Auregon. All rights reserved.</span>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="grid h-10 w-10 place-items-center rounded-full bg-gradient-button text-white"
        aria-label="Back to top"
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    </div>
  </footer>
);

export default Footer;
