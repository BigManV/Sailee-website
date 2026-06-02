"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { motion, AnimatePresence } from "framer-motion";

type Testimonial = {
  image: string;
  audio?: string;
  text: string;
  name: string;
  jobtitle: string;
};

type ComponentProps = {
  testimonials: Testimonial[];
};

export const Component: React.FC<ComponentProps> = ({ testimonials }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);
  const [hasBeenHovered, setHasBeenHovered] = useState<boolean[]>(
    new Array(testimonials.length).fill(false),
  );
  const [typedText, setTypedText] = useState("");
  const typewriterTimeoutRef = useRef<number | null>(null);

  const stopAudio = useCallback(() => {
    if (audioPlayerRef.current) {
      audioPlayerRef.current.pause();
      audioPlayerRef.current.currentTime = 0;
      audioPlayerRef.current.src = "";
      audioPlayerRef.current.load();
      audioPlayerRef.current = null;
    }
  }, []);

  const startTypewriter = useCallback((text: string) => {
    if (typewriterTimeoutRef.current) {
      window.clearTimeout(typewriterTimeoutRef.current);
    }

    setTypedText("");
    let i = 0;

    const type = () => {
      if (i <= text.length) {
        setTypedText(text.slice(0, i));
        i += 1;
        typewriterTimeoutRef.current = window.setTimeout(type, 32);
      }
    };

    type();
  }, []);

  const stopTypewriter = useCallback(() => {
    if (typewriterTimeoutRef.current) {
      window.clearTimeout(typewriterTimeoutRef.current);
      typewriterTimeoutRef.current = null;
    }
    setTypedText("");
  }, []);

  const handleMouseEnter = useCallback(
    (index: number) => {
      stopAudio();
      setHoveredIndex(index);

      const audio = testimonials[index].audio;
      if (audio) {
        const newAudio = new Audio(audio.startsWith("/") ? audio : `/audio/${audio}`);
        audioPlayerRef.current = newAudio;
        void newAudio.play().catch(() => undefined);
      }

      setHasBeenHovered((previous) => {
        const updated = [...previous];
        updated[index] = true;
        return updated;
      });

      startTypewriter(testimonials[index].text);
    },
    [startTypewriter, stopAudio, testimonials],
  );

  const handleMouseLeave = useCallback(() => {
    stopAudio();
    setHoveredIndex(null);
    stopTypewriter();
  }, [stopAudio, stopTypewriter]);

  useEffect(() => {
    return () => {
      stopAudio();
      stopTypewriter();
    };
  }, [stopAudio, stopTypewriter]);

  return (
    <div className="flex flex-wrap items-center justify-center gap-5">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          className="relative flex flex-col items-center"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.img
            src={testimonial.image}
            alt={testimonial.name}
            className="h-16 w-16 rounded-full border-4 border-slate-200 object-cover shadow-lg"
            animate={{
              borderColor:
                hoveredIndex === index || hasBeenHovered[index] ? "#2563eb" : "#e2e8f0",
            }}
            transition={{ duration: 0.3 }}
          />
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: -20 }}
                exit={{ opacity: 0, scale: 0.8, y: -10 }}
                transition={{ duration: 0.35 }}
                className="absolute bottom-20 w-64 max-w-xs rounded-2xl border border-blue-100 bg-white px-4 py-3 text-sm text-black shadow-2xl"
              >
                <div className="h-28 overflow-hidden whitespace-pre-wrap text-slate-700">
                  {typedText}
                  <span className="animate-blink">|</span>
                </div>
                <p className="mt-2 text-right font-semibold">{testimonial.name}</p>
                <p className="text-right text-sm text-slate-500">{testimonial.jobtitle}</p>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 transform">
                  <div className="h-3 w-3 rounded-full bg-white shadow-lg"></div>
                  <div className="mt-1 h-2 w-2 rounded-full bg-white shadow-lg"></div>
                  <div className="mt-1 h-1 w-1 rounded-full bg-white shadow-lg"></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};