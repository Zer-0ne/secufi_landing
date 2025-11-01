import { useEffect, useState, useRef } from 'react';

const ProgressRing = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const targetProgress = 81;
  const animationRef = useRef<number>();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
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

  const circumference = 2 * Math.PI * 40;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div
      className={`fixed bottom-8 right-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
      }`}
    >
      <div className="relative w-28 h-28 group cursor-pointer">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4f8ff7" />
              <stop offset="100%" stopColor="#00d4aa" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="6"
          />

          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="url(#progressGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            filter="url(#glow)"
            className="transition-all duration-300"
            style={{ transition: 'stroke-dashoffset 0.3s ease' }}
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-[#00d4aa] to-[#4f8ff7] bg-clip-text text-transparent">
            {progress}
          </div>
          <div className="text-xs text-gray-400 mt-1">/100</div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#00d4aa] to-[#4f8ff7] rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
      </div>

      <div className="mt-3 text-center px-2">
        <div className="text-xs text-gray-400 leading-snug">Claim-Readiness: {progress}/100</div>
        <div className="text-xs text-gray-500 mt-1">You're just getting started. Let's raise this together.</div>
      </div>
    </div>
  );
};

export default ProgressRing;
