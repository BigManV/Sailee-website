import { useMemo } from "react";
import {
  ArrowUpRight,
  Dumbbell,
  Facebook,
  Instagram,
  Linkedin,
  Sparkles,
  TimerReset,
  Twitter,
} from "lucide-react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { LayoutGroup } from "motion/react";
import { Button } from "@/components/ui/button";
import { TextRotate } from "@/components/ui/text-rotate";
import { useWebGLBackground } from "@/hooks/use-webgl-background";

const socialLinks = [Instagram, Twitter, Facebook, Linkedin];
const statItems = [
  { label: "Recovery plans", value: "1:1" },
  { label: "Performance focus", value: "Sport" },
  { label: "Check-ins", value: "Weekly" },
];

export function HeroSection() {
  const canvasRef = useWebGLBackground();
  const heroX = useMotionValue(0);
  const heroY = useMotionValue(0);

  const smoothX = useSpring(heroX, { stiffness: 120, damping: 18, mass: 0.5 });
  const smoothY = useSpring(heroY, { stiffness: 120, damping: 18, mass: 0.5 });

  const imageX = useTransform(smoothX, [-0.5, 0.5], [-18, 18]);
  const imageY = useTransform(smoothY, [-0.5, 0.5], [-14, 14]);
  const ringX = useTransform(smoothX, [-0.5, 0.5], [28, -28]);
  const ringY = useTransform(smoothY, [-0.5, 0.5], [18, -18]);
  const gridX = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);
  const gridY = useTransform(smoothY, [-0.5, 0.5], [-12, 12]);

  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 0.25], [0, 120]);
  const foregroundY = useTransform(scrollYProgress, [0, 0.25], [0, -55]);
  const cardY = useTransform(scrollYProgress, [0, 0.25], [0, -30]);

  const handlePointerMove = useMemo(
    () => (event: React.PointerEvent<HTMLElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      heroX.set(x);
      heroY.set(y);
    },
    [heroX, heroY],
  );

  const handlePointerLeave = useMemo(
    () => () => {
      heroX.set(0);
      heroY.set(0);
    },
    [heroX, heroY],
  );

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 -z-20">
        <canvas ref={canvasRef} className="absolute inset-0 h-[115%] w-full opacity-95" />
        <motion.div
          style={{ x: gridX, y: gridY }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.16),transparent_22%),radial-gradient(circle_at_80%_20%,rgba(96,165,250,0.18),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.46),rgba(255,255,255,0.88))]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(30,41,59,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(30,41,59,0.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
      </motion.div>

      <motion.div style={{ y: foregroundY }} className="section-shell relative z-10 min-h-[calc(100vh-5rem)] py-10 sm:py-14">
        <div className="flex min-h-[calc(100vh-8rem)] flex-col justify-between rounded-[2rem] border border-white/60 bg-white/40 p-6 shadow-[0_30px_120px_rgba(59,130,246,0.08)] backdrop-blur-md sm:p-8 lg:p-10">
          <div className="flex items-center justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.45em] text-primary">Nutri Edge</p>
              <p className="mt-2 text-2xl font-extrabold tracking-[-0.08em] text-slate-950">Sports Nutrition</p>
            </div>
            <div className="hidden items-center gap-3 md:flex">
              {socialLinks.map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="rounded-full border border-slate-300/80 bg-white/70 p-2 text-slate-600 transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid items-center gap-12 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-0">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                <Sparkles className="h-4 w-4 text-primary" />
                Science-backed coaching for athletes
              </div>

              <h1 className="headline-balance text-5xl font-extrabold leading-[0.92] tracking-[-0.08em] text-slate-950 sm:text-6xl lg:text-7xl">
                Eat with structure.
                <br />
                Perform with confidence.
              </h1>

              <LayoutGroup>
                <motion.div
                  layout
                  className="mt-6 flex flex-wrap items-center gap-3 text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl"
                >
                  <span>Be</span>
                  <TextRotate
                    texts={["Fit", "Better", "Faster"]}
                    mainClassName="min-w-[140px] justify-center overflow-hidden rounded-2xl bg-slate-950 px-4 py-2 text-white shadow-lg sm:min-w-[180px]"
                    staggerFrom="last"
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-110%", opacity: 0 }}
                    staggerDuration={0.03}
                    splitLevelClassName="overflow-hidden pb-1"
                    transition={{ type: "spring", damping: 24, stiffness: 260 }}
                    rotationInterval={2000}
                  />
                  <span>with Nutri Edge</span>
                </motion.div>
              </LayoutGroup>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                Personalized sports nutrition for better recovery, cleaner routines, and performance-ready fueling that fits real training schedules.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild className="rounded-full px-6">
                  <a href="#pricing">
                    View plans
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-6">
                  <a href="#about">About Sailee</a>
                </Button>
              </div>
            </motion.div>

            <motion.div style={{ y: cardY }} className="relative flex min-h-[420px] items-center justify-center lg:min-h-[560px]">
              <motion.div
                style={{ x: ringX, y: ringY }}
                className="absolute h-[320px] w-[320px] rounded-full bg-gradient-to-br from-blue-100 via-blue-300 to-blue-600 opacity-90 blur-[2px] sm:h-[420px] sm:w-[420px]"
              />
              <motion.div
                style={{ x: gridX, y: gridY }}
                className="absolute h-[360px] w-[360px] rounded-full border border-blue-200/70 [background:radial-gradient(circle,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.42)_48%,transparent_72%)] sm:h-[470px] sm:w-[470px]"
              />
              <motion.div
                style={{ x: imageX, y: imageY }}
                initial={{ opacity: 0, scale: 0.94, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-w-[360px]"
              >
                <div className="absolute -left-6 top-10 rounded-2xl border border-white/80 bg-white/80 p-4 shadow-xl backdrop-blur-md">
                  <Dumbbell className="h-7 w-7 text-primary" />
                </div>

                <div className="overflow-hidden rounded-[2rem] border border-white/80 bg-white/85 p-3 shadow-[0_24px_70px_rgba(15,23,42,0.16)] backdrop-blur-md">
                  <img
                    src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80"
                    alt="Sports nutrition athlete hero"
                    className="h-[420px] w-full rounded-[1.5rem] object-cover sm:h-[500px]"
                  />
                </div>

                <div className="absolute -right-4 bottom-8 rounded-[1.5rem] border border-white/80 bg-slate-950 px-5 py-4 text-white shadow-xl">
                  <p className="text-xs uppercase tracking-[0.3em] text-blue-200">Focus</p>
                  <div className="mt-2 flex items-center gap-3">
                    <TimerReset className="h-5 w-5 text-blue-300" />
                    <p className="text-sm font-semibold">Recovery. Rhythm. Results.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="grid gap-4 border-t border-slate-200/80 pt-6 sm:grid-cols-3"
          >
            {statItems.map((item) => (
              <div key={item.label} className="rounded-[1.25rem] border border-white/70 bg-white/75 px-5 py-4 backdrop-blur-sm">
                <p className="text-2xl font-extrabold tracking-tight text-slate-950">{item.value}</p>
                <p className="mt-1 text-sm text-slate-600">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}