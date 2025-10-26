"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative border-t border-dark-border/20 dark:bg-gradient-to-b dark:from-dark-bg dark:to-dark-surface bg-gradient-to-b from-light-surface to-light-bg py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <p className="text-sm dark:text-primary-300 text-primary-700 md:text-base">
            Stay Ahead with Automation | Trusted by DevOps Experts Globally |
            Empowering DevOps, One Query at a Time
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/tos"
              className="text-primary-400 transition-all hover:text-primary-300 hover:underline font-medium"
            >
              Terms of Service
            </Link>
            <div className="h-4 w-px bg-dark-border/30 dark:bg-dark-border/30"></div>
            <span className="text-primary-500 font-medium">© 2024 Hobs.ai</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
