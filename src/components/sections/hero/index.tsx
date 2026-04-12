'use client';

import { useState } from 'react';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { TextScramble } from '../../textScramble';
import { containerVariants, itemVariants } from '../variants';
import { RotatingEmoji } from './rotatingEmoji';

export default function Hero() {
  const [isAnimating, setAnimating] = useState(true);

  // 保留文字排版相關的動畫配置
  const lineVariants = {
    initial: { width: 0, opacity: 0 },
    animate: {
      width: '12rem',
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.5,
      },
    },
  };

  const glitchAnimation = {
    animate: {
      textShadow: [
        '0 0 0 #00ffff',
        '2px 2px 0 #ff00ff',
        '-2px -2px 0 #00ffff',
        '0 0 0 #00ffff',
      ],
      x: ['0px', '-2px', '2px', '0px'],
      transition: {
        duration: 0.2,
        repeat: Infinity,
        repeatType: 'mirror' as const,
      },
    },
  };

  const springTransition = {
    type: 'spring' as const,
    stiffness: 70,
    damping: 15,
    mass: 1.8,
    velocity: 0.3,
  };

  const mouseVariants = {
    hover: {
      scale: 1.05,
    },
    tap: { scale: 0.95 },
  };

  const wheelVariants = {
    hover: {
      y: 0,
      transition: { duration: 0.3 },
    },
    tap: {
      y: 2,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden pt-header">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          margin: '-10%',
          amount: 0.1,
        }}
        variants={containerVariants}
        className="container flex flex-col items-center justify-center space-y-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', bounce: 0.5 }}
          className="relative flex items-center gap-4 px-8 text-4xl font-bold tracking-tight md:text-5xl lg:px-0 lg:text-6xl"
        >
          {/* 左上角線條 */}
          <motion.div
            initial="initial"
            animate={isAnimating ? 'initial' : 'animate'}
            variants={lineVariants}
            style={{ transformOrigin: 'left' }}
            className="shadow-glow absolute -left-20 -top-8 hidden h-[2px] bg-cyan-300 dark:-teal- lg:block"
          />

          {/* 保留文字排版動畫 */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 font-mono lg:gap-8"
            layout
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={springTransition}
          >
            <motion.div layout transition={springTransition}>
              <TextScramble
                segments={[{ text: 'SECURING THE NETWORK', duration: 2000 }]}
                className="relative text-center"
                onAnimationStart={() => setAnimating(true)}
                onAnimationEnd={() => setAnimating(false)}
                variants={glitchAnimation}
                animate="animate"
                renderText={(text) =>
                  text.split('').map((char, index) => {
                    if (index >= 5 && index <= 8) {
                      return (
                        <span key={index} className="text-blue-500">
                          {char}
                        </span>
                      );
                    }
                    if (index >= 13 && index <= 16) {
                      return (
                        <span key={index} className="text-green-500">
                          {char}
                        </span>
                      );
                    }
                    return <span key={index}>{char}</span>;
                  })
                }
              />
            </motion.div>

            {!isAnimating && (
              <motion.div
                layout
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  opacity: { duration: 1.2 },
                  x: { duration: 0.8, ease: 'easeOut' },
                  layout: springTransition,
                }}
                className="flex items-center"
              >
                <RotatingEmoji emojis={['🔒', '✌️', '💀']} interval={3000} />
              </motion.div>
            )}
          </motion.div>

          {/* 右下角線條 */}
          <motion.div
            initial="initial"
            animate={isAnimating ? 'initial' : 'animate'}
            variants={lineVariants}
            style={{ transformOrigin: 'right' }}
            className="shadow-glow absolute -bottom-8 -right-20 hidden h-[2px] bg-cyan-300 dark:bg-teal-500 lg:block"
          />
        </motion.h1>

        {/* Subtitle */}
        <div
          className={cn(
            'px-4 lg:px-0',
            'font-mono text-base text-gray-600 dark:text-gray-400 text-center',
            'transform transition-all duration-500 ease-out',
            !isAnimating
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          )}
        >
          CCNA Aspirant | Aspiring Network Engineer | Networking & Cybersecurity
        </div>

        <div
          className={cn(
            'px-4 lg:px-0 mt-4 max-w-2xl text-center',
            'font-mono text-sm text-gray-500 dark:text-gray-400',
            'transform transition-all duration-500 ease-out delay-200',
            !isAnimating
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          )}
        >
          Passionate about networking fundamentals and cybersecurity basics. 
          Dedicated to continuous learning and building real-world tools to solve practical problems.
        </div>

        {/* Socials Section */}
        <motion.div
          className={cn(
            'mt-8 flex items-center gap-6',
            'transform transition-all duration-500 ease-out delay-300',
            !isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          )}
        >
          {[
            { icon: (props: React.SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>, href: 'https://github.com/jesowin', label: 'GitHub' },
            { icon: (props: React.SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>, href: 'https://linkedin.com/in/jesowin', label: 'LinkedIn' },
            { icon: (props: React.SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>, href: 'mailto:contact@jesowin.live', label: 'Email' }
          ].map((social) => (
            <Link key={social.label} href={social.href} target="_blank">
              <motion.div
                whileHover={{ scale: 1.2, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white/5 shadow-md backdrop-blur-sm transition-all hover:border-cyan-500 hover:bg-cyan-50 dark:border-gray-800 dark:bg-black/40 dark:hover:border-teal-500 dark:hover:bg-teal-950/40"
              >
                <social.icon className="h-5 w-5 text-gray-600 transition-colors group-hover:text-cyan-500 dark:text-gray-400 dark:group-hover:text-teal-400" />
                <div className="absolute inset-0 -z-10 rounded-full opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100 dark:bg-teal-500/40" />
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* 滾動指示器改用 Tailwind */}
        <motion.div variants={itemVariants} className="absolute bottom-14">
          <Link href="#about">
            <motion.div
              className="flex h-10 w-7 cursor-pointer justify-center rounded-full border-2 border-black p-[0.3rem] dark:border-gray-300"
              whileHover="hover"
              whileTap="tap"
              variants={mouseVariants}
            >
              <motion.div
                className="h-[0.4rem] w-1 rounded-full bg-black dark:bg-gray-300"
                animate={{
                  y: [0, 4, 0],
                }}
                transition={{
                  duration: 1.5,
                  times: [0, 0.3, 1],
                  ease: ['easeIn', 'easeOut'],
                  repeat: Infinity,
                  repeatDelay: 0.2,
                }}
                variants={wheelVariants}
              />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
