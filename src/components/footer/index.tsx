'use client';

import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Globe, Mail } from 'lucide-react';
import Link from 'next/link';

// 复用 Navbar 中的社交链接数据
const socialLinks = [
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jesowinraja6',
    icon: <FaLinkedin className="size-5" />,
  },
  {
    title: 'GitHub',
    url: 'https://github.com/cassielxyz',
    icon: <FaGithub className="size-5" />,
  },
  {
    title: 'Portfolio Website',
    url: 'https://jesowin.live/',
    icon: <Globe className="size-5" />,
  },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/_cassiel_x',
    icon: <FaInstagram className="size-5" />,
  },
  {
    title: 'Email',
    url: 'mailto:jesowinraja6@gmail.com',
    icon: <Mail className="size-5" />,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full overflow-hidden bg-linear-to-b from-transparent to-cyan-200/50 py-6 backdrop-blur-xs dark:to-black/50 sm:py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        viewport={{
          margin: '10%',
          amount: 0.1,
        }}
        className="container mx-auto px-3 sm:px-4 md:px-8 lg:px-12"
      >
        <div className="flex flex-col items-center justify-between gap-4 sm:gap-6 md:flex-row">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="text-lg font-bold sm:text-xl">
              cassielxyz
            </Link>
            <p className="mt-1 text-xs text-muted-foreground sm:mt-2 sm:text-sm">
              © {currentYear} All rights reserved
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="mb-2 flex flex-wrap justify-center gap-2 sm:mb-4 sm:gap-4">
              {socialLinks.map(({ title, url, icon }) => (
                <SocialLink key={title} href={url} icon={icon} label={title} />
              ))}
            </div>
            <p className="text-xs text-muted-foreground sm:text-sm">
              Made with ❤️ by{' '}
              <Link
                className="transition-colors hover:text-cyan-500 hover:underline dark:hover:text-cyan-400"
                href="https://github.com/cassielxyz"
                target="_blank"
                rel="noopener noreferrer"
              >
                @cassielxyz
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

// 修改 SocialLink 組件的樣式
function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'rounded-full p-1.5 sm:p-2 transition-colors', // 調整 padding
        'text-foreground/80 hover:text-foreground',
        'bg-transparent hover:bg-cyan-300/10 dark:hover:bg-cyan-900/30'
      )}
      aria-label={label}
    >
      {icon}
    </Link>
  );
}
