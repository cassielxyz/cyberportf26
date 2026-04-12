'use client';

import { TextScramble } from '@/components/textScramble';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

import { containerVariants, itemVariants } from '../variants';
import { StatsCards } from './stats-cards';

export default function About() {
  const cardClassName =
    'relative border-cyan-300/50 dark:border-teal-900/50 bg-white/10 dark:bg-gray-800/10 backdrop-blur-xs shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(0,0,0,0.3)]';

  return (
    <div className="relative flex items-center justify-center overflow-hidden pt-header">
      <div className="container relative mx-auto px-4 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            margin: '-10%',
            amount: 0.1,
          }}
          variants={containerVariants}
          className="mx-auto max-w-5xl space-y-12"
        >
          {/* Title */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4"
          >
            <Terminal className="size-8 text-cyan-500 dark:text-teal-500" />
            <TextScramble
              segments={[{ text: '$ whoami', duration: 1000 }]}
              className="font-mono text-4xl font-bold after:ml-2 after:animate-cursor after:content-['|']"
              animate="animate"
            />
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-4">
            <StatsCards cardClassName={cardClassName} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
