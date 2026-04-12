import { Avatar } from '@/components/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface PersonalInfoCardProps {
  cardClassName: string;
}

export function PersonalInfoCards({ cardClassName }: PersonalInfoCardProps) {
  return (
    <Card className={cn(cardClassName, 'h-full')}>
      <CardHeader>
        <CardTitle>./personal_info.txt</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-6 md:flex-row md:gap-6">
          {/* Avatar Section */}
          <div className="flex justify-center md:justify-start">
            <div className="relative size-32 shrink-0 group">
              {/* 雙重邊框線條 */}
              <div className="absolute inset-0 rounded-full border-2 border-cyan-300/60 dark:-teal-/60 transition-all duration-300 group-hover:border-cyan-400/80 dark:group-hover:border-cyan-300/80">
                <div className="absolute inset-1 rounded-full border border-cyan-400/40 dark:-teal-/40 transition-all duration-300 group-hover:border-cyan-500/60 dark:group-hover:border-cyan-400/60">
                  {/* 頭像容器 */}
                  <div className="absolute inset-2 rounded-full bg-cyan-50/50 dark:bg-gray-800/50 overflow-hidden">
                    <Avatar
                      email="oscarcoll.930714@gmail.com"
                      className="size-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
              {/* 裝飾角落線條 - 帶動畫 */}
              <div className="absolute -top-1 -right-1 size-4 border-r-2 border-t-2 border-cyan-400 dark:-teal- rounded-tr-lg transition-all duration-500 group-hover:scale-110 group-hover:border-cyan-500 dark:group-hover:border-cyan-300"></div>
              <div className="absolute -bottom-1 -left-1 size-4 border-l-2 border-b-2 border-cyan-400 dark:-teal- rounded-bl-lg transition-all duration-500 group-hover:scale-110 group-hover:border-cyan-500 dark:group-hover:border-cyan-300"></div>

              {/* 半圓弧線動畫 */}
              <div
                className="absolute -inset-1 animate-spin"
                style={{ animationDuration: '20s' }}
              >
                <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400/80 dark:-teal-/80"></div>
                <div className="absolute inset-0 rounded-full border-2 border-transparent border-b-cyan-500/70 dark:-teal-/70"></div>
              </div>
              <div
                className="absolute inset-1 animate-spin"
                style={{
                  animationDuration: '15s',
                  animationDirection: 'reverse',
                }}
              >
                <div className="absolute inset-0 rounded-full border-2 border-transparent border-l-cyan-500/80 dark:-teal-/80"></div>
                <div className="absolute inset-0 rounded-full border-2 border-transparent border-r-cyan-600/70 dark:-teal-/80"></div>
              </div>
            </div>
          </div>

          {/* Personal Info Section */}
          <div className="flex-1 space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <span className="font-mono font-bold text-cyan-500 dark:-teal- flex items-center gap-2">
                <span className="text-xl">🌐</span> Networking
              </span>
              <p className="text-sm mt-1">CCNA Fundamentals, IP Addressing & Subnetting, Routing & Switching, Network Troubleshooting</p>
            </div>
            <div>
              <span className="font-mono font-bold text-cyan-500 dark:-teal- flex items-center gap-2">
                <span className="text-xl">🛡️</span> Cybersecurity
              </span>
              <p className="text-sm mt-1">Phishing Detection, URL Analysis, Basic Threat Analysis</p>
            </div>
            <div>
              <span className="font-mono font-bold text-cyan-500 dark:-teal- flex items-center gap-2">
                <span className="text-xl">💻</span> Technical
              </span>
              <p className="text-sm mt-1">Python, Git & GitHub, Web Development Basics</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
