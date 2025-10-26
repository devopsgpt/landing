"use client";

import { motion, type Variants } from "framer-motion";
import { Eye } from "lucide-react";
import Image from "next/image";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function VisualTour() {
  return (
    <motion.section
      className="relative overflow-hidden dark:bg-gradient-to-b dark:from-dark-bg dark:via-dark-surface dark:to-dark-bg bg-gradient-to-b from-light-bg via-light-surface to-light-bg py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent"></div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        <motion.div
          className="mb-16 flex flex-col items-center justify-center text-center"
          variants={itemVariants}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 glass-effect dark:glass-effect glass-effect-light">
            <motion.div
              animate={{
                rotate: [0, 15, -15, 15, 0],
                scale: [1, 1.1, 1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
                ease: 'easeInOut',
              }}
            >
              <Eye className="h-4 w-4 text-primary-400" />
            </motion.div>
            <span className="text-sm font-medium gradient-text">Visual Tour</span>
          </div>
          <h2 className="mb-6 text-5xl font-bold md:text-7xl">
            <span className="gradient-text">
              Simplify DevOps with Templates and Automation
            </span>
          </h2>
          <p className="max-w-3xl text-lg dark:text-primary-300 text-primary-700 md:text-xl">
            See how our app makes DevOps tasks easier, automate workflows, and
            simplify your processes with just a few clicks
          </p>
        </motion.div>

        <div className="container mx-auto mb-20 grid w-full grid-cols-1 items-center justify-center gap-12 lg:grid-cols-2">
          <motion.div
            variants={imageVariants}
            className="order-2 lg:order-1"
          >
            <div className="relative overflow-hidden rounded-3xl glass-effect dark:glass-effect glass-effect-light shadow-2xl">
              <Image
                src="/images/ui-1.png"
                alt="Template Selection"
                width={800}
                height={600}
                className="w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-surface/50 to-transparent dark:from-dark-surface/50"></div>
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="order-1 lg:order-2"
          >
            <div className="rounded-2xl glass-effect dark:glass-effect glass-effect-light p-8 backdrop-blur-xl">
              <p className="text-2xl font-bold leading-relaxed dark:text-primary-100 text-primary-800 md:text-3xl">
                You can choose the type of template you need to generate.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="container mx-auto grid w-full grid-cols-1 items-center justify-center gap-12 lg:grid-cols-2">
          <motion.div
            variants={itemVariants}
            className="order-2 lg:order-1"
          >
            <div className="rounded-2xl glass-effect dark:glass-effect glass-effect-light p-8 backdrop-blur-xl">
              <p className="text-2xl font-bold leading-relaxed dark:text-primary-100 text-primary-800 md:text-3xl">
                You can simply provide your inputs and click &quot;Generate&quot; to create your
                template.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={imageVariants}
            className="order-1 lg:order-2"
          >
            <div className="relative overflow-hidden rounded-3xl glass-effect dark:glass-effect glass-effect-light shadow-2xl">
              <Image
                src="/images/ui-2.png"
                alt="Template Generation"
                width={800}
                height={600}
                className="w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-surface/50 to-transparent dark:from-dark-surface/50"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
