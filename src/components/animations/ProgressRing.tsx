import { useEffect, useState, useRef } from 'react';

const ProgressRing = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const targetProgress = 81;
  const animationRef = useRef<number>();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2500;
    const startTime = Date.now();
    const startProgress = 0;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progressValue = Math.min(elapsed / duration, 1);

      const eased = progressValue < 0.5
        ? 4 * progressValue * progressValue * progressValue
        : 1 - Math.pow(-2 * progressValue + 2, 3) / 2;

      setProgress(Math.floor(startProgress + (targetProgress - startProgress) * eased));

      if (progressValue < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!mediaQuery.matches) {
      animate();
    } else {
      setProgress(targetProgress);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isExpanded && containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };

    if (isExpanded && isMobile) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isExpanded, isMobile]);

  const circumference = 2 * Math.PI * 42;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const shouldShowExpanded = !isMobile || isExpanded;

  return (
    <div
      className={`fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        } ${shouldShowExpanded ? 'pointer-events-auto' : 'pointer-events-none'}`}
    >
      <div className="relative" ref={containerRef}>
        <div className="absolute inset-0 bg-gradient-to-br from-teal-400/30 to-blue-400/30 rounded-3xl blur-2xl scale-110" />

        <div
          className={`relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-teal-200/50 hover:border-teal-300/70 transition-all duration-500 hover:shadow-teal-200/50 hover:shadow-3xl ${shouldShowExpanded
              ? "p-4 sm:p-6 w-auto min-w-[200px] sm:min-w-[280px] pointer-events-none"
              : "p-2 w-16 h-16 sm:w-20 sm:h-20 pointer-events-auto cursor-pointer"
            }`}
          onClick={(e) => {
            e.stopPropagation();
            if (isMobile) {
              setIsExpanded(!isExpanded);
            }
          }}
        >
          {shouldShowExpanded ? (
            <>
              <div className="relative w-20 h-20 sm:w-32 sm:h-32 mx-auto group">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#14b8a6" />
                      <stop offset="50%" stopColor="#10d8c4" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="rgba(229, 231, 235, 0.5)"
                    strokeWidth="7"
                  />

                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="url(#progressGradient)"
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    filter="url(#glow)"
                    className="transition-all duration-300"
                    style={{ transition: 'stroke-dashoffset 0.3s ease' }}
                  />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-teal-600 via-emerald-600 to-blue-600 bg-clip-text text-transparent">
                    {progress}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 font-semibold">/100</div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
              </div>

              <div className="mt-2 sm:mt-4 text-center">
                <div className="text-xs sm:text-sm font-bold text-gray-900 leading-snug mb-1">
                  Claim-Readiness Score
                </div>
                <div className="inline-flex items-center gap-1 px-2 py-1 sm:gap-1.5 sm:px-3 sm:py-1.5 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-full border border-teal-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                  <div className="text-[10px] sm:text-xs text-teal-700 font-semibold">
                    Getting Started
                  </div>
                </div>
                <div className="text-[10px] sm:text-xs text-gray-600 mt-1 sm:mt-2 leading-relaxed max-w-[120px] sm:max-w-[160px] mx-auto">
                  You're on your way! Let's improve this together.
                </div>
              </div>
            </>
          ) : (
            <div className="relative w-full h-full group">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#14b8a6" />
                    <stop offset="50%" stopColor="#10d8c4" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>

                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="rgba(229, 231, 235, 0.5)"
                  strokeWidth="7"
                />

                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="url(#progressGradient)"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  className="transition-all duration-300"
                  style={{ transition: 'stroke-dashoffset 0.3s ease' }}
                />
              </svg>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-lg font-bold bg-gradient-to-r from-teal-600 via-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  {progress}
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgressRing;