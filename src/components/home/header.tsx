'use client';

import { motion, type Variants } from 'framer-motion';
import { ArrowDown, Bot, Code, Sparkles, Zap } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export default function Header() {
  return (
    <motion.section
      id="home"
      className="relative min-h-screen overflow-hidden dark:bg-gradient-to-br dark:from-dark-bg dark:via-dark-surface dark:to-dark-bg bg-gradient-to-br from-light-bg via-white to-light-bg"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full dark:bg-primary-500/20 bg-primary-400/20 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full dark:bg-accent-500/20 bg-accent-400/20 blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full dark:bg-primary-400/10 bg-primary-300/10 blur-[150px]" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsla(210,83%,53%,.1)_1px,transparent_1px),linear-gradient(to_bottom,hsla(270,91%,65%,.1)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-20">
        <motion.div
          className="mb-8 inline-flex items-center gap-3 rounded-full px-6 py-3 glass-effect dark:glass-effect glass-effect-light shadow-lg"
          variants={itemVariants}
        >
          <Sparkles className="h-5 w-5 text-primary-400 dark:text-primary-400" />
          <span className="text-sm font-medium gradient-text">
            AI-Powered DevOps Solutions
          </span>
        </motion.div>

        <motion.h1
          className="mb-6 text-center text-6xl font-bold tracking-tight md:text-8xl lg:text-9xl"
          variants={itemVariants}
        >
          <span className="gradient-text">DevOps GPT</span>
        </motion.h1>

        <motion.p
          className="mb-12 max-w-2xl text-center text-xl dark:text-primary-100 text-primary-700 md:text-2xl font-medium"
          variants={itemVariants}
        >
          From Setup to Scale, We&apos;ve Got You Covered
        </motion.p>

        <motion.div variants={itemVariants}>
          <a
            href="#our-services"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-primary-600 to-accent-600 px-8 py-4 text-lg font-semibold text-white shadow-2xl shadow-primary-500/50 transition-all duration-300 hover:scale-105 hover:shadow-primary-500/70"
          >
            <span className="relative z-10">Our Services</span>
            <ArrowDown className="relative z-10 h-5 w-5 transition-transform group-hover:translate-y-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-primary-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </a>
        </motion.div>

        {/* Feature badges */}
        <motion.div
          className="mt-16 flex flex-wrap items-center justify-center gap-4"
          variants={itemVariants}
        >
          {[
            { icon: Bot, text: 'AI Assistant' },
            { icon: Code, text: 'Code Templates' },
            { icon: Zap, text: 'Automation' },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="rounded-full px-4 py-2 glass-effect dark:glass-effect glass-effect-light"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.2 }}
            >
              <feature.icon className="mr-2 inline h-4 w-4 text-primary-400" />
              <span className="text-sm font-medium dark:text-primary-200 text-primary-700">
                {feature.text}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating decoration */}
        <motion.div
          className="absolute bottom-10 left-10 hidden text-4xl md:block"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          ⚡
        </motion.div>
      </div>
    </motion.section>
  );
}
