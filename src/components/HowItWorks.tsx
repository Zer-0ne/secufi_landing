import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles, Shield, Scan, Network, CheckCircle, Lock, FileText } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Create Your Will',
    description: 'Answer simple questions. Our AI creates a legally valid will and maps your family structure.',
    highlight: '5 minutes',
    icon: FileText,
    color: 'from-[#ffab40] to-[#ff784b]',
    glowColor: 'rgba(255, 171, 64, 0.3)',
  },
  {
    number: '02',
    title: 'Connect & Consent',
    description: 'Grant access to email and SMS. Our AI scans for bank accounts, insurance policies, and investments.',
    highlight: 'Auto-discovery',
    icon: Scan,
    color: 'from-[#43e97b] to-[#009966]',
    glowColor: 'rgba(67, 233, 123, 0.3)',
  },
  {
    number: '03',
    title: 'Review Your Graph',
    description: 'See all your assets, nominees, and family relationships unified in one clean dashboard.',
    highlight: 'Complete view',
    icon: Network,
    color: 'from-[#10d8c4] to-[#7467ef]',
    glowColor: 'rgba(16, 216, 196, 0.3)',
  },
  {
    number: '04',
    title: 'Fix & Optimize',
    description: 'Get alerts for nominee gaps, KYC issues, or compliance problems. Fix them with guided playbooks.',
    highlight: 'Stay compliant',
    icon: CheckCircle,
    color: 'from-[#7467ef] to-[#3b82f6]',
    glowColor: 'rgba(116, 103, 239, 0.3)',
  },
  {
    number: '05',
    title: 'Stay Protected',
    description: 'Access your Tax Pack, Claims Kit, and succession documents anytime. Share with advisors securely.',
    highlight: 'Always ready',
    icon: Shield,
    color: 'from-[#3b82f6] to-[#10d8c4]',
    glowColor: 'rgba(59, 130, 246, 0.3)',
  },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              setActiveStep(index);
            }
          });
        },
        { threshold: [0.5] }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const VisualDisplay = ({ step }: { step: number }) => {
    switch (step) {
      case 0:
        return (
          <div className="w-full h-full flex flex-col items-center justify-center animate-fadeIn">
            <div className="space-y-4 w-full max-w-sm mb-8">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="h-16 bg-gradient-to-r from-[#ffab40]/20 to-[#ff784b]/20 rounded-2xl border border-[#ffab40]/30 backdrop-blur-sm animate-slideInRight"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#ffab40] to-[#ff784b] rounded-full text-white font-semibold shadow-lg">
              <FileText className="w-5 h-5" />
              Creating Will...
            </div>
          </div>
        );

      case 1:
        return (
          <div className="w-full h-full flex flex-col items-center justify-center animate-fadeIn">
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 border-4 border-[#43e97b]/30 border-t-[#43e97b] rounded-full animate-spin" style={{ animationDuration: '2s' }} />
              </div>
              <div className="relative grid grid-cols-3 gap-4 p-16">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="w-16 h-16 bg-gradient-to-br from-[#43e97b]/30 to-[#009966]/30 rounded-xl border border-[#43e97b]/40 backdrop-blur-sm animate-pulse"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
            </div>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#43e97b] to-[#009966] rounded-full text-white font-semibold shadow-lg">
              <Scan className="w-5 h-5 animate-pulse" />
              Scanning Assets...
            </div>
          </div>
        );

      case 2:
        return (
          <div className="w-full h-full flex flex-col items-center justify-center animate-fadeIn">
            <svg className="w-full h-80 max-w-lg mb-8" viewBox="0 0 400 400">
              <circle cx="200" cy="200" r="40" fill="url(#centralGradient)" className="animate-pulse" />

              {[0, 1, 2, 3, 4, 5].map((i) => {
                const angle = (i / 6) * Math.PI * 2 - Math.PI / 2;
                const x = 200 + Math.cos(angle) * 120;
                const y = 200 + Math.sin(angle) * 120;

                return (
                  <g key={i}>
                    <line
                      x1="200"
                      y1="200"
                      x2={x}
                      y2={y}
                      stroke="url(#lineGradient)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      className="animate-dash"
                    />
                    <circle
                      cx={x}
                      cy={y}
                      r="20"
                      fill="url(#nodeGradient)"
                      className="animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  </g>
                );
              })}

              <defs>
                <linearGradient id="centralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10d8c4" />
                  <stop offset="100%" stopColor="#7467ef" />
                </linearGradient>
                <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10d8c4" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10d8c4" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#7467ef" stopOpacity="0.5" />
                </linearGradient>
              </defs>
            </svg>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#10d8c4] to-[#7467ef] rounded-full text-white font-semibold shadow-lg">
              <Network className="w-5 h-5" />
              Building Graph...
            </div>
          </div>
        );

      case 3:
        return (
          <div className="w-full h-full flex flex-col items-center justify-center animate-fadeIn">
            <div className="space-y-4 w-full max-w-md mb-8">
              {[
                { label: 'KYC Status', status: 'Complete' },
                { label: 'Nominee Check', status: 'Fixed' },
                { label: 'Compliance', status: 'Verified' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-[#7467ef]/30 animate-slideInRight"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <span className="text-white/90 font-medium">{item.label}</span>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#43e97b]" />
                    <span className="px-4 py-2 bg-gradient-to-r from-[#43e97b] to-[#009966] rounded-full text-white text-sm font-semibold">
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#7467ef] to-[#3b82f6] rounded-full text-white font-semibold shadow-lg">
              <CheckCircle className="w-5 h-5" />
              All Systems Go!
            </div>
          </div>
        );

      case 4:
        return (
          <div className="w-full h-full flex flex-col items-center justify-center animate-fadeIn">
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-r from-[#3b82f6]/20 to-[#10d8c4]/20 blur-2xl animate-pulse" />
              </div>
              <div className="relative flex items-center justify-center h-48">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#3b82f6] to-[#10d8c4] flex items-center justify-center shadow-2xl animate-bounce">
                  <Lock className="w-16 h-16 text-white" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-8 max-w-md">
              {['Tax Pack', 'Claims Kit', 'Documents'].map((item, i) => (
                <div
                  key={i}
                  className="p-4 bg-gradient-to-br from-[#3b82f6]/20 to-[#10d8c4]/20 rounded-xl border border-[#3b82f6]/30 backdrop-blur-sm text-center animate-fadeIn"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <div className="text-sm text-white/80 font-medium">{item}</div>
                </div>
              ))}
            </div>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#3b82f6] to-[#10d8c4] rounded-full text-white font-semibold shadow-lg">
              <Shield className="w-5 h-5" />
              Protected & Ready
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-[#0f1729] via-[#1a2540] to-[#0f1729] overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute top-1/4 -left-48 w-[600px] h-[600px] bg-gradient-to-r from-[#43e97b]/10 to-[#10d8c4]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 -right-48 w-[600px] h-[600px] bg-gradient-to-r from-[#7467ef]/10 to-[#ffab40]/10 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">How </span>
            <span className="bg-gradient-to-r from-[#10d8c4] via-[#43e97b] to-[#7467ef] bg-clip-text text-transparent">
              SecuFi
            </span>
            <span className="text-white"> Works</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            From setup to protection in minutes. Watch AI transform your financial legacy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              const isPassed = activeStep > index;

              return (
                <div
                  key={index}
                  ref={(el) => (stepRefs.current[index] = el)}
                  className="scroll-mt-32"
                >
                  <div
                    className={`relative glass-card rounded-3xl p-8 border transition-all duration-500 ${
                      isActive
                        ? 'border-white/30 shadow-2xl scale-100'
                        : 'border-white/10 scale-95 opacity-70'
                    }`}
                  >
                    <div className="flex items-start gap-6">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} p-4 flex-shrink-0 transition-all duration-500`}
                        style={{
                          boxShadow: isActive ? `0 20px 60px ${step.glowColor}` : 'none',
                        }}
                      >
                        <step.icon className={`w-full h-full text-white ${isActive ? 'animate-pulse' : ''}`} />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span
                            className={`text-sm font-bold transition-colors duration-500 ${
                              isActive ? 'text-[#10d8c4]' : 'text-white/50'
                            }`}
                          >
                            {step.number}
                          </span>
                          <h3
                            className={`text-xl font-bold transition-colors duration-500 ${
                              isActive ? 'text-white' : 'text-white/60'
                            }`}
                          >
                            {step.title}
                          </h3>
                        </div>

                        <p
                          className={`text-sm leading-relaxed mb-4 transition-colors duration-500 ${
                            isActive ? 'text-white/80' : 'text-white/50'
                          }`}
                        >
                          {step.description}
                        </p>

                        <span
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-500 ${
                            isActive
                              ? 'bg-gradient-to-r from-[#10d8c4]/20 to-[#7467ef]/20 text-[#10d8c4] border border-[#10d8c4]/30'
                              : 'bg-white/5 text-white/50 border border-white/10'
                          }`}
                        >
                          {isActive && <Sparkles className="w-3 h-3" />}
                          {step.highlight}
                        </span>
                      </div>

                      {isPassed && (
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#43e97b] to-[#009966] flex items-center justify-center flex-shrink-0 animate-fadeIn">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                      )}
                    </div>

                    {isActive && (
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#10d8c4] via-[#7467ef] to-[#10d8c4] rounded-3xl opacity-20 blur-xl -z-10" />
                    )}
                  </div>
                </div>
              );
            })}

            <div className="mt-8">
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#10d8c4] via-[#43e97b] to-[#7467ef] transition-all duration-500 rounded-full"
                  style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                />
              </div>
            </div>
          </div>

          <div className="hidden lg:block sticky top-32">
            <div className="glass-card rounded-3xl p-12 border border-white/20 min-h-[600px] flex items-center justify-center">
              <VisualDisplay step={activeStep} />
            </div>
          </div>
        </div>

        <div className="text-center mt-20">
          <button className="group px-10 py-5 bg-gradient-to-r from-[#43e97b] to-[#009966] rounded-full font-semibold text-lg text-white transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center gap-3">
            Get Started Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes dash {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: 100; }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }

        .animate-slideInRight {
          animation: slideInRight 0.5s ease-out both;
        }

        .animate-dash {
          stroke-dashoffset: 0;
          animation: dash 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
