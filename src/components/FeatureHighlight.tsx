import React from "react";
import { motion } from "framer-motion";
import type { Variants, HTMLMotionProps } from "framer-motion";
import { cn } from "../lib/utils";

interface FeatureHighlightProps extends HTMLMotionProps<"div"> {
  icon?: React.ReactNode;
  title: string;
  features: React.ReactNode[];
  footer?: React.ReactNode;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Réduit de 0.2s à 0.08s pour être plus rapide
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};

const FeatureHighlight = React.forwardRef<
  HTMLDivElement,
  FeatureHighlightProps
>(({ className, icon, title, features, footer, ...props }, ref) => {
  return (
    <motion.div
      ref={ref}
      className={cn(
        "flex max-w-lg flex-col items-start space-y-4 p-8 text-left",
        className
      )}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      {...props}
    >
      {icon && <motion.div variants={itemVariants}>{icon}</motion.div>}

      <motion.h2
        variants={itemVariants}
        className="text-4xl font-bold tracking-tight text-slate-800 dark:text-white transition-colors duration-1000"
      >
        {title}
      </motion.h2>

      <div className="flex flex-col space-y-2">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="text-2xl text-muted-foreground"
          >
            {feature}
          </motion.div>
        ))}
      </div>
      
      {footer && <motion.div variants={itemVariants}>{footer}</motion.div>}
    </motion.div>
  );
});

FeatureHighlight.displayName = "FeatureHighlight";

export { FeatureHighlight };

