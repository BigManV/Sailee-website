import { ArrowUpRight, BadgeCheck, HeartPulse, Target } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Goal-specific planning",
    text: "Placeholder description for performance goals, sport-specific macros, and phased nutrition strategy.",
  },
  {
    icon: HeartPulse,
    title: "Recovery-first framework",
    text: "Placeholder description for recovery support, consistency tracking, and daily nutrition habits.",
  },
  {
    icon: BadgeCheck,
    title: "Simple coaching system",
    text: "Placeholder description for accountability, feedback loops, and long-term habit building.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="section-shell py-24">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="rounded-[2rem] border border-blue-100/80 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-900 p-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.28)] sm:p-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-blue-200">
            About Me
          </p>
          <h2 className="headline-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
            Sailee Sakpal
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-blue-50/85">
            Placeholder description. Add Sailee Sakpal&apos;s background, certifications,
            coaching philosophy, and the kind of clients she works with here.
          </p>
          <a
            href="#pricing"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-100"
          >
            Explore plans
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-4">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.5rem] border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-sm"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}