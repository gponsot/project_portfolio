"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type BentoCardProps = {
  title: string;
  description?: string;
  label?: string;
  className?: string;
  children?: ReactNode;
};

export function BentoCard({
  title,
  description,
  label,
  className = "",
  children,
}: BentoCardProps) {
  return (
    <motion.article
      whileHover={{ scale: 1.02, y: -3 }}
      transition={{ type: "spring", stiffness: 240, damping: 22 }}
      className={`rounded-3xl border border-zinc-200/80 bg-white/95 p-7 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-colors hover:border-sky-300 dark:border-zinc-800 dark:bg-zinc-900/75 dark:hover:border-sky-700 ${className}`}
    >
      {label ? (
        <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-400">
          {label}
        </p>
      ) : null}
      <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
        {title}
      </h2>
      {description ? (
        <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
          {description}
        </p>
      ) : null}
      {children ? <div className="mt-5">{children}</div> : null}
    </motion.article>
  );
}
