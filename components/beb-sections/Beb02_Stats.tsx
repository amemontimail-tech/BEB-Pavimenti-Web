"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import AnimatedSection from "@/components/beb-ui/BebAnimatedSection";
import { useLanguage } from "@/lib/BebLanguageContext";

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Extract numbers and non-numbers
    const numMatch = value.match(/\d+[.,\d]*/);
    if (!numMatch) {
      setDisplayValue(value);
      return;
    }

    const numStr = numMatch[0];
    const prefix = value.substring(0, numMatch.index);
    const suffix = value.substring(numMatch.index! + numStr.length);

    // remove dots and commas to parse
    const target = parseInt(numStr.replace(/[.,]/g, ""), 10);
    if (isNaN(target)) {
      setDisplayValue(value);
      return;
    }

    const duration = 2500; // 2.5 seconds
    const startTime = performance.now();

    const update = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // easeOutExpo easing function for smooth deceleration
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = Math.floor(easeProgress * target);

      // Format number based on original format (if it had dots or commas)
      const hasDot = numStr.includes(".");
      const hasComma = numStr.includes(",");
      let formattedNum = currentVal.toString();
      if (hasDot) {
        formattedNum = currentVal.toLocaleString("it-IT");
      } else if (hasComma) {
        formattedNum = currentVal.toLocaleString("en-US");
      }

      setDisplayValue(`${prefix}${formattedNum}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setDisplayValue(value); // Ensure exact final string
      }
    };

    requestAnimationFrame(update);
  }, [isInView, value]);

  // Initial render should show the prefix + 0 + suffix if we want to avoid layout shift,
  // or just "0" depending on preference. Showing just "0" initially is fine, but to match
  // the user's "0" request closely we can start with "0".
  return <span ref={ref}>{displayValue === "0" ? "0" : displayValue}</span>;
}

export default function Stats() {
  const { t } = useLanguage();

  const stats = [
    { value: t.home.stat1Value, label: t.home.stat1Label },
    { value: t.home.stat2Value, label: t.home.stat2Label },
    { value: t.home.stat3Value, label: t.home.stat3Label },
  ];

  return (
    <section className="border-y border-border bg-white py-20 lg:py-28" id="stats">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-0 md:divide-x md:divide-border">
          {stats.map((stat, i) => (
            <AnimatedSection
              key={i}
              delay={i * 0.15}
              className="text-center"
            >
              <div className="font-serif text-5xl tracking-tight text-foreground lg:text-6xl">
                <AnimatedNumber value={stat.value} />
              </div>
              <div className="mt-3 text-xs tracking-widest uppercase text-muted">
                {stat.label}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
