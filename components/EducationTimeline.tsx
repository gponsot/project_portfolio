"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type TimelineItem = {
  degree: string;
  school: string;
  period: string;
  location: string;
  logo?: string;
};

type EducationTimelineProps = {
  items: TimelineItem[];
};

function TimelineNode({ item, index }: { item: TimelineItem; index: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });
  const isLeft = index % 2 === 0;

  return (
    <li
      ref={ref}
      className={`relative grid grid-cols-1 gap-3 py-3 md:grid-cols-2 md:gap-10 ${
        index % 2 === 0 ? "md:-translate-x-3" : "md:translate-x-3"
      }`}
    >
      <motion.p
        initial={{ opacity: 0, y: -8 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
        transition={{ duration: 0.3, delay: index * 0.06 }}
        className={`hidden text-xs font-medium text-zinc-500 md:block dark:text-zinc-400 ${
          isLeft ? "md:col-start-1 md:text-right md:pr-8" : "md:col-start-2 md:pl-8"
        }`}
      >
        {item.period}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -20 : 20 }}
        transition={{ duration: 0.35, delay: index * 0.08 }}
        className={`${isLeft ? "md:col-start-1" : "md:col-start-2"} rounded-2xl border border-zinc-200/80 bg-zinc-50/85 p-4 shadow-[0_12px_28px_-18px_rgba(15,23,42,0.45)] dark:border-zinc-700 dark:bg-zinc-800/60`}
      >
        <div className="flex items-start gap-3">
          {item.logo ? (
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-zinc-200 bg-white dark:border-zinc-700">
              <Image
                src={item.logo}
                alt={`${item.school} logo`}
                fill
                sizes="40px"
                className="object-contain p-1"
              />
            </div>
          ) : null}
          <div>
            <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{item.degree}</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">{item.school}</p>
            <p className="text-xs text-zinc-500 md:hidden dark:text-zinc-400">{item.period}</p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">{item.location}</p>
          </div>
        </div>
      </motion.div>

      <motion.span
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={
          isInView
            ? {
                scale: 1,
                opacity: 1,
                boxShadow: "0 0 0 10px rgba(14, 165, 233, 0.2)",
              }
            : { scale: 0.8, opacity: 0.5, boxShadow: "0 0 0 0px rgba(0,0,0,0)" }
        }
        transition={{ duration: 0.35, delay: index * 0.08 }}
        className="absolute left-1/2 top-8 hidden h-5 w-5 -translate-x-1/2 rounded-full border-4 border-white bg-sky-500 md:block dark:border-zinc-900"
      />
      <div className="absolute left-1/2 top-0 hidden h-full w-[3px] -translate-x-1/2 rounded-full bg-zinc-300 md:block dark:bg-zinc-700" />
    </li>
  );
}

export function EducationTimeline({ items }: EducationTimelineProps) {
  return (
    <ol className="relative flex flex-col gap-5">
      {items.map((item, index) => (
        <TimelineNode key={`${item.degree}-${item.school}`} item={item} index={index} />
      ))}
    </ol>
  );
}
