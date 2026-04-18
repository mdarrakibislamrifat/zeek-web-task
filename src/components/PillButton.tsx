import { ArrowUpRight } from "lucide-react";

type Props = {
  children: React.ReactNode;
  variant?: "primary" | "light" | "outline";
  className?: string;
};

const PillButton = ({ children, variant = "primary", className = "" }: Props) => {
  const base =
    "inline-flex items-center gap-2 rounded-full pl-6 pr-2 py-2 text-sm font-medium transition-smooth hover:scale-[1.03]";
  const variants = {
    primary: "bg-gradient-button text-primary-foreground shadow-btn",
    light: "bg-white text-dark",
    outline: "border border-white/30 text-white",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`}>
      <span>{children}</span>
      <span className="grid h-8 w-8 place-items-center rounded-full bg-white/25 backdrop-blur">
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </button>
  );
};

export default PillButton;
