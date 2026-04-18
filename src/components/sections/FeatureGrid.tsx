import PillButton from "@/components/PillButton";
import robotMascot from "@/assets/robot-mascot.jpg";
import tabletChat from "@/assets/tablet-chat.jpg";
import analyticsDash from "@/assets/analytics-dash.jpg";

const FeatureGrid = () => (
  <section className="px-3 pt-3">
    <div className="grid gap-3 md:grid-cols-12">
      <div className="rounded-[1.75rem] bg-gradient-dark-card p-6 text-dark-foreground md:col-span-3">
        <img src={analyticsDash} alt="Analytics dashboard" loading="lazy" width={768} height={768} className="mb-4 w-full rounded-xl" />
        <h3 className="text-lg font-semibold">Chosen By Leading Companies Across The Entire Globe</h3>
        <p className="mt-2 text-sm text-dark-muted">
          Companies of all sizes rely on our chatbot for better customer experiences.
        </p>
      </div>
      <div className="rounded-[1.75rem] bg-gradient-dark-card p-6 text-dark-foreground md:col-span-4">
        <h3 className="text-lg font-semibold">Full Documentation Support For All Offerings</h3>
        <p className="mt-2 text-sm text-dark-muted">
          Together explore limitless new possibilities with our intelligent solutions.
        </p>
        <img src={robotMascot} alt="AI robot mascot" loading="lazy" width={768} height={768} className="mx-auto mt-4 w-56" />
      </div>
      <div className="rounded-[1.75rem] bg-gradient-purple-card p-6 text-dark-foreground md:col-span-5">
        <h3 className="text-lg font-semibold">We Work And Integrate With This Services</h3>
        <p className="mt-2 max-w-md text-sm text-white/80">
          Instant assistance for all your queries. Experience seamless service with ease
        </p>
        <img src={tabletChat} alt="Tablet showing AI chat interface" loading="lazy" width={1024} height={768} className="mt-6 w-full rounded-xl" />
      </div>
      <div className="flex flex-wrap items-center gap-6 rounded-[1.75rem] bg-gradient-dark-card p-6 text-dark-foreground md:col-span-7">
        <div className="text-5xl font-bold text-primary-glow">9+</div>
        <p className="flex-1 text-sm md:text-base">
          Thousands of engaged and loyal active users joining us every day
        </p>
        <PillButton>Explore more</PillButton>
      </div>
      <div className="md:col-span-5" />
    </div>
  </section>
);

export default FeatureGrid;
