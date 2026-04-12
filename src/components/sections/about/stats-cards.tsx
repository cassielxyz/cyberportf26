import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface StatsCardsProps {
  cardClassName: string;
}

export function StatsCards({ cardClassName }: StatsCardsProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* Skills Card */}
      <Card className={cn(cardClassName, 'w-full')}>
        <CardHeader>
          <CardTitle>Skills & Expertise</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto_1fr]">
            
            {/* Left Column: Networking & Programming */}
            <div className="flex flex-col gap-8">
              <div>
                <h4 className="mb-3 font-mono text-sm font-semibold text-cyan-500">
                  Networking & Cybersecurity:
                </h4>
                <div className="flex flex-col gap-2">
                  {[
                    'CCNA Fundamentals',
                    'IP Addressing & Subnetting',
                    'Routing & Switching',
                    'Network Troubleshooting',
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-cyan-300/30 bg-gray-100/50 px-3 py-1.5 font-mono text-xs font-medium text-gray-700 transition-all hover:-translate-x-1 hover:border-cyan-500 hover:shadow-md dark:border-cyan-900/30 dark:bg-gray-800/50 dark:text-gray-300 dark:hover:border-cyan-500"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="mb-3 font-mono text-sm font-semibold text-cyan-500">
                  Programming & Development:
                </h4>
                <div className="flex flex-col gap-2">
                  {[
                    'Python',
                    'Java',
                    'JavaScript',
                    'HTML/CSS',
                    'Git & GitHub',
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-cyan-300/30 bg-gray-100/50 px-3 py-1.5 font-mono text-xs font-medium text-gray-700 transition-all hover:-translate-x-1 hover:border-cyan-500 hover:shadow-md dark:border-cyan-900/30 dark:bg-gray-800/50 dark:text-gray-300 dark:hover:border-cyan-500"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Divider - Animated Vertical Line */}
            <div className="hidden md:flex flex-col items-center justify-center py-2 h-full">
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-px bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-40 min-h-[200px]"
              />
            </div>

            {/* Right Column: Creative Tools */}
            <div className="flex flex-col gap-8">
              <div>
                <h4 className="mb-3 font-mono text-sm font-semibold text-cyan-500">
                  Creative & Editing Tools:
                </h4>
                <div className="flex flex-col gap-2">
                  {[
                    'Adobe After Effects',
                    'Premiere Pro',
                    'DaVinci Resolve',
                    'Alight Motion',
                    'Lightroom',
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-cyan-300/30 bg-gray-100/50 px-3 py-1.5 font-mono text-xs font-medium text-gray-700 transition-all hover:translate-x-1 hover:border-cyan-500 hover:shadow-md dark:border-cyan-900/30 dark:bg-gray-800/50 dark:text-gray-300 dark:hover:border-cyan-500"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </CardContent>
      </Card>
    </div>
  );
}
