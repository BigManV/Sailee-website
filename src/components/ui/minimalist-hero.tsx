import React from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Dumbbell } from "lucide-react";
import { cn } from "@/lib/utils";

interface MinimalistHeroProps {
  logoText: string;
  navLinks: { label: string; href: string }[];
  mainText: string;
  readMoreLink: string;
  imageSrc: string;
  imageAlt: string;
  overlayText: {
    part1: string;
    part2: string;
  };
  socialLinks: { icon: LucideIcon; href: string }[];
  locationText: string;
  className?: string;
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-sm font-semibold tracking-[0.28em] text-slate-700 transition-colors hover:text-primary"
  >
    {children}
  </a>
);

const SocialIcon = ({ href, icon: Icon }: { href: string; icon: LucideIcon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full border border-slate-300/80 p-2 text-slate-600 transition-colors hover:border-primary hover:text-primary"
  >
    <Icon className="h-4 w-4" />
  </a>
);

export const MinimalistHero = ({
  logoText,
  navLinks,
  mainText,
  readMoreLink,
  imageSrc,
  imageAlt,
  overlayText,
  socialLinks,
  locationText,
  className,
}: MinimalistHeroProps) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen w-full flex-col items-center justify-between overflow-hidden px-6 py-8 md:px-10 md:py-10",
        className,
      )}
    >
      <header className="z-30 flex w-full max-w-7xl items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-extrabold tracking-[0.22em] text-slate-950"
        >
          {logoText}
        </motion.div>

        <div className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-1.5 md:hidden"
          aria-label="Open menu"
        >
          <span className="block h-0.5 w-6 bg-slate-950"></span>
          <span className="block h-0.5 w-6 bg-slate-950"></span>
          <span className="block h-0.5 w-5 bg-slate-950"></span>
        </motion.button>
      </header>

      <div className="relative grid w-full max-w-7xl flex-grow grid-cols-1 items-center gap-10 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="z-20 order-2 text-center md:order-1 md:text-left"
        >
          <p className="mx-auto max-w-sm text-sm leading-7 text-slate-700 md:mx-0">
            {mainText}
          </p>
          <a
            href={readMoreLink}
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 underline decoration-primary underline-offset-4"
          >
            Read More
          </a>
        </motion.div>

        <div className="relative order-1 flex h-full items-center justify-center md:order-2">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="absolute z-0 h-[280px] w-[280px] rounded-full bg-gradient-to-br from-blue-100 via-blue-300 to-blue-600 shadow-glow md:h-[360px] md:w-[360px] lg:h-[430px] lg:w-[430px]"
          />
          <div className="absolute z-10 rounded-full border border-white/60 bg-white/70 p-4 shadow-lg backdrop-blur-sm">
            <Dumbbell className="h-10 w-10 text-primary" />
          </div>
          <motion.img
            src={imageSrc}
            alt={imageAlt}
            className="relative z-20 h-auto w-60 rounded-[2rem] border border-white/70 object-cover shadow-2xl md:w-72 lg:w-80"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            onError={(event) => {
              const target = event.target as HTMLImageElement;
              target.onerror = null;
              target.src =
                "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80";
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="z-20 order-3 flex items-center justify-center text-center md:justify-start"
        >
          <h1 className="text-6xl font-extrabold leading-[0.9] tracking-[-0.08em] text-slate-950 md:text-7xl lg:text-8xl">
            {overlayText.part1}
            <br />
            <span className="text-primary">{overlayText.part2}</span>
          </h1>
        </motion.div>
      </div>

      <footer className="z-30 flex w-full max-w-7xl items-center justify-between gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="flex items-center space-x-3"
        >
          {socialLinks.map((link, index) => (
            <SocialIcon key={index} href={link.href} icon={link.icon} />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="text-sm font-semibold text-slate-600"
        >
          {locationText}
        </motion.div>
      </footer>
    </div>
  );
};