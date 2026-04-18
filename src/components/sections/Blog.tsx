import { ArrowUpRight } from "lucide-react";
import PillButton from "@/components/PillButton";
import b1 from "@/assets/blog-1.jpg";
import b2 from "@/assets/blog-2.jpg";
import b3 from "@/assets/blog-3.jpg";

const posts = [
  { img: b1, title: "Multi-Channel Chatbots: Connecting With Customers Everywhere", desc: "Engage customers seamlessly across websites, mobile apps, and social media..." },
  { img: b2, title: "From Support To Sales: Expanding The Role Of Chatbots For Business Growth", desc: "Discover how chatbots evolve beyond customer service to become revenue-generating..." },
  { img: b3, title: "Multi-Channel Chatbots: Engaging Customers Everywhere, Anytime", desc: "Deliver consistent conversations across web, apps, and social media for..." },
];

const Blog = () => (
  <section className="px-6 py-24 md:px-14">
    <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
      <div>
        <span className="text-sm text-muted-foreground">[ Blog ]</span>
        <h2 className="mt-3 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
          Explore the World of AI: Insights, Trends, and Innovations
        </h2>
      </div>
      <PillButton>Explore more</PillButton>
    </div>
    <div className="grid gap-6 md:grid-cols-3">
      {posts.map((p) => (
        <article key={p.title} className="group cursor-pointer">
          <div className="overflow-hidden rounded-3xl">
            <img
              src={p.img}
              alt={p.title}
              loading="lazy"
              width={768}
              height={512}
              className="aspect-[4/3] w-full object-cover transition-smooth group-hover:scale-105"
            />
          </div>
          <h3 className="mt-5 text-lg font-semibold leading-snug">{p.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
          <button className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
            Explore more <ArrowUpRight className="h-4 w-4" />
          </button>
        </article>
      ))}
    </div>
  </section>
);

export default Blog;
