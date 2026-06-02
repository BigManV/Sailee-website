import { Component as TypewriterTestimonial } from "@/components/ui/typewriter-testimonial";

const testimonials = [
  {
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    audio: "",
    text: "Sailee helped me simplify my match-week meals and I finally stopped feeling flat in the second half. Placeholder text here if you want to rewrite this later.",
    name: "Aarav Sharma",
    jobtitle: "Football Midfielder",
  },
  {
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    audio: "",
    text: "The structure was easy to follow, recovery got better, and my energy stayed steady through double training days. Edit this quote anytime.",
    name: "Isha Mehta",
    jobtitle: "National Swimmer",
  },
  {
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=600&q=80",
    audio: "",
    text: "I came in for fat-loss guidance but ended up improving performance, routine, and confidence with food. This is another editable placeholder.",
    name: "Vivaan Patil",
    jobtitle: "Strength Athlete",
  },
  {
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
    audio: "",
    text: "The best part was how practical everything felt. Nothing extreme, just clean coaching that actually worked around my schedule.",
    name: "Anaya Kulkarni",
    jobtitle: "Runner",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
    audio: "",
    text: "My competition prep felt calmer because the plan was already mapped out. You can replace this with your own client story later.",
    name: "Kabir Deshmukh",
    jobtitle: "Boxer",
  },
  {
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=600&q=80",
    audio: "",
    text: "I liked that the approach stayed performance-first instead of becoming a crash diet. Super easy to understand and follow.",
    name: "Diya Nair",
    jobtitle: "Badminton Player",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-shell py-24">
      <div className="mb-12 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-primary">
          Testimonials
        </p>
        <h2 className="headline-balance text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
          Hover to preview athlete stories
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
          Indian names are already in place, and every quote is easy for you to edit later.
        </p>
      </div>

      <div className="rounded-[2rem] border border-blue-100/80 bg-white/80 px-6 py-16 shadow-sm backdrop-blur-sm">
        <TypewriterTestimonial testimonials={testimonials} />
      </div>
    </section>
  );
}