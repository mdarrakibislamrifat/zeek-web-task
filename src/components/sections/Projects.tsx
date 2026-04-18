import { Lock, MonitorSmartphone, Smartphone } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

const projects = [
  { icon: Smartphone, title: "All-In-One AI Customer Support Platform", desc: "Deployed intelligent chatbots that effectively reduced support costs by 40% and significantly improved overall customer satisfaction rates.", img: p1 },
  { icon: MonitorSmartphone, title: "Corporate HR Chatbot For Employee Services", desc: "Providing streamlined HR solutions for staff, including handling inquiries, leave requests, and policy updates, to improve efficiency.", img: p2 },
  { icon: Lock, title: "AI Healthcare Assistant For Patient Support", desc: "Automated hospital solutions for appointment booking, symptom checks, and FAQs, streamlining patient interactions.", img: p3 },
];

const Projects = () => (
  <section className="px-3">
    <div className="overflow-hidden rounded-[2rem] bg-gradient-dark-card px-6 py-20 md:px-14">
      <div className="text-center">
        <span className="text-sm text-dark-muted">[ Project ]</span>
        <h2 className="mx-auto mt-3 max-w-3xl text-4xl font-bold leading-tight text-dark-foreground md:text-5xl">
          Turning Innovative Ideas Into Real-World Solutions
        </h2>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {projects.map((p) => (
          <div key={p.title} className="rounded-3xl bg-white/5 p-6 text-dark-foreground transition-smooth hover:bg-white/10">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/20 text-primary-glow">
                <p.icon className="h-4 w-4" />
              </span>
            </div>
            <p className="mt-4 text-sm text-dark-muted">{p.desc}</p>
            <img src={p.img} alt={p.title} loading="lazy" width={768} height={512} className="mt-6 w-full rounded-2xl" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
