'use client';

import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Code, Download, MessageCircle, Zap } from 'lucide-react';
import Image from 'next/image';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Services() {
  return (
    <motion.section
      id="our-services"
      className="relative dark:bg-gradient-to-b dark:from-dark-surface dark:via-dark-bg dark:to-dark-surface bg-gradient-to-b from-light-surface via-light-bg to-light-surface py-24 md:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent"></div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        <motion.div
          className="mx-auto mb-20 max-w-4xl text-center"
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
              <Zap className="h-4 w-4 text-primary-400" />
            </motion.div>
            <span className="text-sm font-medium gradient-text">Services</span>
          </div>
          <h2 className="mb-6 text-5xl font-bold md:text-7xl">
            <span className="gradient-text">
              An AI-powered assistant that simplifies DevOps tasks
            </span>
          </h2>
          <p className="text-lg dark:text-primary-200 text-primary-700 md:text-xl">
            Your one-stop platform for DevOps problem-solving, infrastructure
            templates, and seamless automation setup.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            className="group relative overflow-hidden rounded-3xl glass-effect dark:glass-effect glass-effect-light p-8 backdrop-blur-xl lg:col-span-2 lg:p-12 hover:scale-[1.02] transition-transform duration-300"
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <div className="relative grid gap-8 md:grid-cols-2">
              <div>
                <div className="mb-6 inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 p-4 shadow-lg shadow-primary-500/50">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-4 text-4xl font-bold">
                  <span className="gradient-text">DevOps Chatbot</span>
                </h3>
                <p className="mb-6 dark:text-primary-200 text-primary-700 md:text-lg">
                  Get instant answers to all your DevOps questions, from CI/CD
                  pipelines to infrastructure issues. Just ask!
                </p>
                <button className="group/btn flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 px-6 py-3 text-white backdrop-blur-sm transition-all hover:shadow-lg hover:shadow-primary-500/50">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-64 w-64 md:h-80 md:w-80">
                  <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-br from-primary-500 to-accent-500 opacity-20 blur-3xl"></div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="relative"
                  >
                    <Image
                      src="/images/shape-2.png"
                      alt="Chatbot"
                      width={320}
                      height={320}
                      className="object-contain"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="group relative overflow-hidden rounded-3xl glass-effect dark:glass-effect glass-effect-light p-8 backdrop-blur-xl transition-all duration-500 hover:scale-[1.02]"
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-accent-500/0 opacity-0 transition-opacity duration-500 group-hover:from-primary-500/10 group-hover:to-accent-500/10 group-hover:opacity-100"></div>
            <div className="relative">
              <div className="mb-6 inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-primary-500 p-4 shadow-lg shadow-blue-500/50">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h4 className="mb-4 text-4xl font-bold">
                <span className="gradient-text">Code Templates</span>
              </h4>
              <p className="mb-6 dark:text-primary-300 text-primary-700">
                Access ready-to-use templates for tools like Terraform, Ansible
                and more—simplify your workflows with optimized,
                production-ready modules.
              </p>
              <div className="flex justify-center">
                <div className="relative h-48 w-48">
                  <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-br from-blue-500 to-primary-500 opacity-20 blur-2xl"></div>
                  <Image
                    src="/images/shape-3.png"
                    alt="Code Templates"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="group relative overflow-hidden rounded-3xl glass-effect dark:glass-effect glass-effect-light p-8 backdrop-blur-xl transition-all duration-500 hover:scale-[1.02]"
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-accent-500/0 opacity-0 transition-opacity duration-500 group-hover:from-primary-500/10 group-hover:to-accent-500/10 group-hover:opacity-100"></div>
            <div className="relative">
              <div className="mb-6 inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 p-4 shadow-lg shadow-green-500/50">
                <Download className="h-8 w-8 text-white" />
              </div>
              <h4 className="mb-4 text-4xl font-bold">
                <span className="gradient-text">Installation Automation</span>
              </h4>
              <p className="mb-6 dark:text-primary-300 text-primary-700">
                This section helps you generate a bash script or a docker
                compose file based on the environment you choose. You don&apos;t
                need to search for instructions on installing DevOps tools. Just
                specify what you need and get it.
              </p>
              <div className="flex justify-center">
                <div className="relative h-48 w-48">
                  <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-br from-green-500 to-emerald-500 opacity-20 blur-2xl"></div>
                  <Image
                    src="/images/shape-4.png"
                    alt="Installation"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
