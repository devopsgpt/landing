"use client";

import { motion, type Variants } from "framer-motion";
import { Quote, Sparkles } from "lucide-react";

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

export default function CustomerFeedback() {
  const feedbacks = [
    "This platform saved us countless hours with its ready-to-use Terraform templates and real-time troubleshooting assistance.",
    "The chatbot has streamlined our DevOps operations significantly. It provides instant answers to infrastructure-related queries, saving countless hours.",
    "Using Terraform templates from the platform, we set up a complex infrastructure in no time. The templates are well-organized and easy to adapt.",
    "Jenkins' integration has made our CI/CD process incredibly smooth. The step-by-step guides from the platform helped us onboard quickly.",
  ];

  // Duplicate feedbacks for smooth infinite scroll
  const duplicatedFeedbacks = [...feedbacks, ...feedbacks, ...feedbacks];

  return (
    <motion.section
      className="relative overflow-hidden dark:bg-gradient-to-b dark:from-dark-bg dark:via-dark-surface dark:to-dark-bg bg-gradient-to-b from-light-bg via-light-surface to-light-bg py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full dark:bg-primary-500/10 bg-primary-400/10 blur-[100px]"></div>
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full dark:bg-accent-500/10 bg-accent-400/10 blur-[100px]"></div>
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4">
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
            <span className="text-2xl font-bold gradient-text">Customer Feedbacks</span>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-primary-500/50 to-transparent"></div>
        </motion.div>

        {/* Infinite scrolling container */}
        <div className="overflow-hidden w-full">
          <div className="relative">
            <motion.div
              className="flex gap-6"
              animate={{
                x: ['-50%', '0%'],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 30,
                  ease: 'linear',
                },
              }}
            >
              {duplicatedFeedbacks.map((feedback, index) => (
                <div
                  key={`feedback-${index}`}
                  className="flex-shrink-0 w-[500px] md:w-[600px] lg:w-[700px]"
                >
                  <div className="group rounded-3xl glass-effect dark:glass-effect glass-effect-light p-8 backdrop-blur-xl h-full">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-accent-500">
                        <Quote className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-lg leading-relaxed dark:text-primary-200 text-primary-700 italic md:text-xl">
                          {feedback}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats section */}
        <motion.div
          className="mt-20 text-center"
          variants={itemVariants}
        >
          <h3 className="mb-4 text-3xl font-bold dark:text-white text-primary-800 md:text-4xl">
            Customer Satisfaction with Chatbots
          </h3>
          <p className="mx-auto max-w-2xl text-lg dark:text-primary-300 text-primary-700 md:text-xl">
            According to a survey, 77% of consumers find automated services like
            chatbots useful for addressing their questions, showing the increasing
            trust in these solutions.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
