"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type TimelineItem = {
  degree: string;
  school: string;
  period: string;
};

type EducationTimelineProps = {
  items: TimelineItem[];
};

function TimelineNode({ item, index }: { item: TimelineItem; index: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });

  return (
    <li ref={ref} className="relative pl-7">
      <motion.span
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={
          isInView
            ? {
                scale: 1,
                opacity: 1,
                boxShadow: "0 0 0 7px rgba(14, 165, 233, 0.15)",
              }
            : { scale: 0.8, opacity: 0.5, boxShadow: "0 0 0 0px rgba(0,0,0,0)" }
        }
        transition={{ duration: 0.35, delay: index * 0.08 }}
        className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full bg-sky-500 dark:bg-sky-400"
      />
      <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{item.degree}</p>
      <p className="text-xs text-zinc-600 dark:text-zinc-300">{item.school}</p>
      <p className="text-xs text-zinc-500 dark:text-zinc-400">{item.period}</p>
    </li>
  );
}

export function EducationTimeline({ items }: EducationTimelineProps) {
  return (
    <ol className="relative flex flex-col gap-5 before:absolute before:left-[6px] before:top-2 before:h-[calc(100%-1rem)] before:w-[1.5px] before:bg-zinc-200 dark:before:bg-zinc-700">
      {items.map((item, index) => (
        <TimelineNode key={`${item.degree}-${item.school}`} item={item} index={index} />
      ))}
    </ol>
  );
}
