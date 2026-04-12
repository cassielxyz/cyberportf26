'use client';

import { useState } from 'react';

import { TextScramble } from '@/components/textScramble';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { PlaySquare, Volume2, VolumeX } from 'lucide-react';

import { containerVariants, itemVariants } from '../variants';

const videos = [
  { id: 'd-PR-qfWsEY', title: 'Video 1' },
  { id: '69gFBXhlCvY', title: 'Video 2' },
  { id: 'So7HMBHaLOw', title: 'Video 3' },
  { id: 'dE-9C4VGsYc', title: 'Video 4' },
];

export default function VideoShowcase() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative mb-20 flex w-full items-center justify-center overflow-hidden pt-header">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          margin: '-10%',
          amount: 0.1,
        }}
        variants={containerVariants}
        className="w-full space-y-12 py-16"
      >
        <motion.div
          variants={itemVariants}
          transition={{ type: 'spring', duration: 0.4, bounce: 0.1 }}
          className="container mx-auto flex max-w-5xl items-center gap-4 px-4 sm:px-0"
        >
          <PlaySquare className="size-8 text-cyan-500 dark:text-teal-500" />
          <TextScramble
            segments={[{ text: '$ ./show_featured_work.sh', duration: 1000 }]}
            className="font-mono text-4xl font-bold after:ml-2 after:animate-cursor after:content-['|']"
            animate="animate"
          />
        </motion.div>

        <div className="w-full relative z-10 px-4">
          <p className="mx-auto max-w-2xl text-center font-mono text-sm text-gray-500 dark:text-gray-400 mb-12">
            Beyond networking, I have a strong passion for creative Video Editing. Hover over a video to watch it play seamlessly.
          </p>

          <div className="mx-auto grid max-w-md grid-cols-1 gap-12 sm:px-4">
            {videos.map((video, index) => {
              const isHovered = hoveredId === video.id;
              const isOtherHovered = hoveredId !== null && hoveredId !== video.id;

              return (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 80, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, margin: '0%' }}
                  onMouseEnter={() => setHoveredId(video.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  transition={{ 
                    type: 'spring', 
                    damping: 18, 
                    stiffness: 90, 
                    mass: 0.8,
                    delay: index * 0.1 
                  }}
                  className={cn(
                    "group relative mx-auto w-full cursor-pointer overflow-hidden rounded-xl border border-cyan-300/50 bg-black shadow-2xl backdrop-blur-xs transition-all duration-500 hover:z-20 dark:border-teal-900/50 dark:bg-gray-900 dark:hover:border-teal-500/80",
                    isOtherHovered ? "opacity-30 grayscale scale-95" : "opacity-100 grayscale-0 scale-100",
                    isHovered ? "shadow-[0_0_30px_rgba(6,182,212,0.4)] scale-105 border-cyan-400" : ""
                  )}
                >
                  <div className="relative w-full pb-[56.25%] bg-black">
                    {/* Always render the thumbnail as a placeholder/fallback */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.title}
                      className={cn(
                        "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
                        isHovered ? "opacity-0" : "opacity-100"
                      )}
                    />
                    
                    {/* Render iframe only when hovered to keep DOM exceptionally lightweight */}
                    {isHovered && (
                      <div className="absolute inset-0 overflow-hidden rounded-xl">
                        <iframe
                          className="pointer-events-none absolute -left-[10%] -top-[10%] h-[120%] w-[120%] object-cover animate-in fade-in duration-700"
                          src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=${video.id}&controls=0&modestbranding=1&rel=0&playsinline=1&showinfo=0&disablekb=1&fs=0`}
                          title={`Editing Skill Showcase ${index + 1}`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen={false}
                        ></iframe>
                      </div>
                    )}
                    
                    {!isHovered && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors duration-500">
                        <div className="rounded-full bg-cyan-500/80 p-4 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 dark:bg-teal-500/80">
                          <PlaySquare className="size-6" />
                        </div>
                      </div>
                    )}
                    
                    {/* Mute Toggle Button */}
                    <button
                      onClick={toggleMute}
                      className={cn(
                        "absolute bottom-4 right-4 z-30 flex items-center justify-center rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-all duration-300 hover:bg-black/80 hover:scale-110",
                        isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                      )}
                      aria-label={isMuted ? "Unmute video" : "Mute video"}
                    >
                      {isMuted ? <VolumeX className="size-5" /> : <Volume2 className="size-5 text-cyan-400 dark:text-teal-400" />}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
