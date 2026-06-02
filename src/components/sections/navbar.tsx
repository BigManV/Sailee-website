import { Activity, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/50 bg-white/70 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-3 text-slate-950">
          <div className="rounded-2xl bg-primary/10 p-2 text-primary">
            <Activity className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
              Nutrition
            </p>
            <p className="text-lg font-extrabold tracking-tight">Nutri Edge</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-slate-600 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button asChild className="rounded-full px-5">
          <a href="#pricing">
            Book a Plan
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </header>
  );
}