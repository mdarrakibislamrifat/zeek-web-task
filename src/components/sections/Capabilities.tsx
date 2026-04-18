import phones from "@/assets/phones-mockup.jpg";
import avatar from "@/assets/avatar-1.jpg";
import { Star } from "lucide-react";

const tags = [
  "Sales Growth",
  "Customer Support",
  "Automation",
  "Productivity",
  "Digital Assistant",
  "Internal Communication",
  "AI Integration",
];

const Capabilities = () => (
  <section className="px-3 pt-3">
    <div className="grid gap-3 md:grid-cols-12">
      <div className="md:col-span-7 overflow-hidden rounded-[2rem] bg-gradient-dark-card p-8 text-dark-foreground">
        <img src={phones} alt="Mobile app interfaces" loading="lazy" width={1024} height={768} className="w-full rounded-2xl" />
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="rounded-full border border-white/20 px-4 py-2 text-xs text-dark-foreground/80">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-dark-muted">
          <span>• 24/7 Instant Support</span>
          <span>• Automated Conversations</span>
          <span>• Personalized Replies</span>
        </div>
      </div>
      <div className="md:col-span-5 flex flex-col gap-3">
        <div className="flex-1 rounded-[2rem] bg-gradient-purple-card p-8 text-dark-foreground">
          <div className="flex items-center gap-1 text-primary-glow">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
            <span className="ml-2 text-sm text-dark-foreground/80">5.0</span>
          </div>
          <p className="mt-4 text-lg leading-relaxed">
            "Auregon truly stands out for their professionalism, dedication, and commitment to delivering
            exceptional results that exceed expectations every time."
          </p>
          <div className="mt-6 flex items-center gap-3">
            <img src={avatar} alt="Edgar Davids" loading="lazy" width={512} height={512} className="h-12 w-12 rounded-full object-cover" />
            <div>
              <div className="font-semibold">Edgar Davids</div>
              <div className="text-sm text-dark-foreground/70">UI Designer</div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-8">
            <div>
              <div className="text-2xl font-bold">99%</div>
              <div className="text-xs text-white/60">Success Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-xs text-white/60">Live Support</div>
            </div>
            <div>
              <div className="text-2xl font-bold">10k+</div>
              <div className="text-xs text-white/60">Active Users</div>
            </div>
            <div>
              <div className="text-2xl font-bold">50+</div>
              <div className="text-xs text-white/60">Integrations</div>
            </div>
          </div>
        </div>

        

        <div className="rounded-[2rem] bg-gradient-dark-card p-8 text-dark-foreground">
          <div className="text-sm text-dark-muted">Trusted by leading brands</div>
          <div className="mt-4 flex items-center justify-around text-xl font-bold opacity-80">
            <span>Electrolux</span>
            <span>CSS.IO</span>
            <span>Nimbus</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Capabilities;
