'use client';

import { motion, type Variants } from 'framer-motion';
import { Bot, Cog, FileCode, Rocket, Sparkles, Target, TrendingUp, Zap } from 'lucide-react';

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function AboutUs() {
  const features = [
    {
      icon: Cog,
      title: 'Critical Admin Panel',
      desc: 'Manage and oversee your DevOps operations seamlessly with complete control and transparency.',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Bot,
      title: 'AI-Powered Chatbot',
      desc: 'Quickly resolve issues with our intelligent assistant available 24/7 to support your team.',
      gradient: 'from-primary-500 to-accent-500',
    },
    {
      icon: FileCode,
      title: 'Code Templates',
      desc: 'Automatically create tailored templates for DevOps tools, accelerating development.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Rocket,
      title: 'Installation Automation',
      desc: 'Generate installation guides and configurations for a wide range of DevOps tools.',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  const stats = [
    { icon: Target, value: '100+', label: 'DevOps Tools' },
    { icon: Zap, value: '24/7', label: 'AI Support' },
    { icon: TrendingUp, value: '99%', label: 'Satisfaction' },
  ];

  return (
    <motion.section
      id="about"
      className="relative overflow-hidden dark:bg-gradient-to-b dark:from-dark-surface dark:via-dark-bg dark:to-dark-surface bg-gradient-to-b from-light-surface via-light-bg to-light-surface py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-1/4 h-[600px] w-[600px] rounded-full dark:bg-primary-500/5 bg-primary-400/5 blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-0 h-[600px] w-[600px] rounded-full dark:bg-accent-500/5 bg-accent-400/5 blur-[150px]"></div>
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div className="text-center mb-20" variants={itemVariants}>
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 glass-effect dark:glass-effect glass-effect-light mb-6">
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
              <Sparkles className="h-4 w-4 text-primary-400" />
            </motion.div>
            <span className="text-sm font-medium gradient-text">About Us</span>
          </div>
          <h2 className="text-5xl font-bold mb-6 md:text-7xl">
            <span className="gradient-text">
              Revolutionizing DevOps with AI
            </span>
          </h2>
          <p className="text-xl dark:text-primary-300 text-primary-700 max-w-3xl mx-auto md:text-2xl">
            Welcome to <span className="font-bold text-primary-400">Hobs.ai</span>, where we transform DevOps management with the power of artificial intelligence
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div className="mb-20" variants={itemVariants}>
          <div className="rounded-3xl glass-effect dark:glass-effect glass-effect-light p-12 backdrop-blur-xl">
            <p className="text-xl leading-relaxed dark:text-primary-100 text-primary-800 md:text-2xl text-center">
              We believe that{' '}
              <span className="font-bold italic text-primary-400">
                Hard Operations Need Boosting Solutions
              </span>
              —this philosophy inspired the name <span className="font-bold text-primary-400">HOBS</span>.
              Our AI-driven platform empowers organizations to optimize DevOps practices while minimizing
              resource expenditures and simplifying tool management.
            </p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div className="mb-20" variants={itemVariants}>
          <h3 className="text-3xl font-bold mb-12 text-center dark:text-white text-primary-800 md:text-4xl">
            Our Core Features
          </h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="rounded-2xl glass-effect dark:glass-effect glass-effect-light p-8 h-full transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-4 dark:text-white text-primary-800">
                    {feature.title}
                  </h4>
                  <p className="text-base leading-relaxed dark:text-primary-200 text-primary-700">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div className="mb-20" variants={itemVariants}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center rounded-2xl glass-effect dark:glass-effect glass-effect-light p-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                    delay: idx * 0.2,
                    ease: 'easeInOut',
                  }}
                >
                  <stat.icon className="h-12 w-12 mx-auto mb-4 text-primary-400" />
                </motion.div>
                <div className="text-4xl font-bold mb-2 gradient-text">
                  {stat.value}
                </div>
                <div className="text-lg dark:text-primary-300 text-primary-700">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div variants={itemVariants}>
          <div className="rounded-3xl bg-gradient-to-br from-primary-500/20 via-accent-500/20 to-primary-500/20 p-12 text-center border-2 border-primary-500/30 backdrop-blur-xl">
            <p className="text-2xl leading-relaxed dark:text-white text-primary-800 md:text-3xl font-bold">
              Join us in shaping the future of DevOps—where efficiency meets intelligence,
              and operational excellence becomes the standard.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
