'use client';

import { motion, type Variants } from 'framer-motion';
import { Linkedin, Send, Sparkles } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function ContactUs() {
  return (
    <motion.section
      id="contact"
      className="relative overflow-hidden dark:bg-gradient-to-b dark:from-dark-surface dark:via-dark-bg dark:to-dark-surface bg-gradient-to-b from-light-surface via-light-bg to-light-surface py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full dark:bg-primary-500/10 bg-primary-400/10 blur-[100px]"></div>
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full dark:bg-accent-500/10 bg-accent-400/10 blur-[100px]"></div>
      </div>

      <div className="container relative z-10 mx-auto max-w-4xl px-4">
        <motion.div
          className="mb-16 flex items-center gap-4"
          variants={itemVariants}
        >
          <div className="flex items-center gap-3 rounded-full px-6 py-3 glass-effect dark:glass-effect glass-effect-light">
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
              <Sparkles className="h-5 w-5 text-primary-400" />
            </motion.div>
            <span className="text-2xl font-bold gradient-text">Contact Us</span>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-primary-500/50 to-transparent"></div>
        </motion.div>

        <motion.div
          className="rounded-3xl glass-effect dark:glass-effect glass-effect-light p-8 backdrop-blur-xl shadow-2xl md:p-12"
          variants={itemVariants}
        >
          <div className="space-y-8">
            <div>
              <p className="text-xl leading-relaxed dark:text-primary-100 text-primary-800 md:text-2xl">
                We&apos;re here to assist with any questions, feedback, or support
                needs—just email us at{' '}
                <a
                  href="mailto:info@hobs.ai"
                  className="text-primary-400 underline transition-all hover:text-primary-300 font-bold"
                >
                  info@hobs.ai
                </a>
                . For partnerships, collaborations, or enterprise solutions,
                reach out at the same address. Let&apos;s work together to create
                smarter DevOps solutions!
              </p>
            </div>

            <div className="border-t border-dark-border/20 pt-8">
              <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold dark:text-white text-primary-800">
                <Send className="h-6 w-6 text-primary-400" />
                Follow us on social media
              </h3>
              <p className="mb-6 text-lg dark:text-primary-300 text-primary-700">
                Stay updated on the latest news, features, and insights:
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/hobsai/"
                className="group inline-flex items-center gap-3 rounded-xl px-6 py-4 text-lg glass-effect dark:glass-effect glass-effect-light transition-all hover:scale-105 dark:text-primary-200 text-primary-700"
              >
                <Linkedin className="h-6 w-6 text-primary-400 transition-transform group-hover:scale-110" />
                <span>LinkedIn</span>
              </a>
            </div>

            <div className="border-t border-dark-border/20 pt-8">
              <p className="text-xl leading-relaxed dark:text-primary-100 text-primary-800">
                We&apos;d love to hear from you! Let&apos;s build smarter DevOps solutions
                together.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
