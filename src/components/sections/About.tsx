import PillButton from "@/components/PillButton";
import aiChat from "@/assets/ai-chat-window.jpg";

const tabs = ["Our Vision", "Our Mission", "Key Benefits"];

const About = () => (
  <section className="px-3 pt-3">
    <div className="overflow-hidden rounded-[2rem] bg-gradient-hero px-6 py-16 md:px-14 md:py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <img
          src={aiChat}
          alt="AI text generator chat interface"
          loading="lazy"
          width={1024}
          height={768}
          className="w-full rounded-2xl"
        />
        <div className="text-dark-foreground">
          <span className="text-sm text-dark-muted">[ About ]</span>
          <h2 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">
            Innovating Customer Experience With AI
          </h2>
          <div className="mt-6 inline-flex rounded-full bg-white/10 p-1 text-sm">
            {tabs.map((t, i) => (
              <button
                key={t}
                className={`rounded-full px-5 py-2 transition-smooth ${
                  i === 0 ? "bg-white text-dark" : "text-dark-foreground/80 hover:text-white"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <p className="mt-6 text-dark-foreground/80">
            Our vision is to become a leading global provider of AI-powered chatbot solutions, offering
            innovative technologies that reshape how businesses connect with customers.
          </p>
          <p className="mt-4 text-dark-foreground/70">
            We empower businesses of all sizes to deliver smarter, faster, and more personalized customer
            experiences, making intelligent automation accessible.
          </p>
          <div className="mt-8">
            <PillButton>Explore more</PillButton>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
