"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type BentoCardProps = {
  title: string;
  description?: string;
  className?: string;
  children?: ReactNode;
};

export function BentoCard({
  title,
  description,
  className = "",
  children,
}: BentoCardProps) {
  return (
    <motion.article
      whileHover={{ scale: 1.02, y: -3 }}
      transition={{ type: "spring", stiffness: 240, damping: 22 }}
      className={`rounded-2xl border border-zinc-200/80 bg-white/90 p-6 shadow-sm backdrop-blur-sm transition-colors hover:border-sky-300 dark:border-zinc-800 dark:bg-zinc-900/70 dark:hover:border-sky-700 ${className}`}
    >
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
