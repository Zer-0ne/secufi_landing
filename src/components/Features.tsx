import { FileText, Search, Shield, BarChart3, Users, CheckCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const features = [
  {
    icon: FileText,
    title: 'Family Instructions Pack',
    description: 'Map family members, beneficiaries and key preferences in a review-ready document for your lawyer/CA—without legal jargon.',
    color: 'from-[#ffab40] to-[#ff784b]',
    glowColor: 'rgba(255, 171, 64, 0.4)',
    animationType: 'flip',
  },
  {
    icon: Search,
    title: 'Auto Asset Discovery',
    description: 'With your consent, we read emails, SMS and statements to find accounts, Mutual Funds (via CAS), insurance and investments—automatically.',
    color: 'from-[#43e97b] to-[#009966]',
    glowColor: 'rgba(67, 233, 123, 0.4)',
    animationType: 'scan',
  },
  {
    icon: Shield,
    title: 'Household Map',
    description: 'One view of people, nominees and guardians—link every asset to the right person, clearly.',
    color: 'from-[#10d8c4] to-[#7467ef]',
    glowColor: 'rgba(16, 216, 196, 0.4)',
    animationType: 'shield',
  },
  {
    icon: CheckCircle,
    title: 'Nominee & KYC Playbooks',
    description: 'Detect nominee gaps, name/address mismatches and FATCA/CKYC issues—then follow simple steps to fix them.',
    color: 'from-[#7467ef] to-[#3b82f6]',
    glowColor: 'rgba(116, 103, 239, 0.4)',
    animationType: 'check',
  },
  {
    icon: BarChart3,
    title: 'Tax Pack (FY)',
    description: 'Collect capital-gains, interest certificates, premiums and statements—export-ready for your CA or e-filing.',
    color: 'from-[#3b82f6] to-[#10d8c4]',
    glowColor: 'rgba(59, 130, 246, 0.4)',
    animationType: 'chart',
  },
  {
    icon: Users,
    title: 'Claims-Ready Kit',
    description: 'All documents and instructions your family needs for insurance claims and account transfers—one tap away.',
    color: 'from-[#43e97b] to-[#ffab40]',
    glowColor: 'rgba(67, 233, 123, 0.4)',
    animationType: 'pulse',
  },
];

const Features = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(features.length).fill(false));
  const [headerVisible, setHeaderVisible] = useState(false);
  const [animatedText, setAnimatedText] = useState('');
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);
  const fullText = 'organised & secure';

  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !headerVisible) {
            setHeaderVisible(true);
            let currentIndex = 0;
            const typeInterval = setInterval(() => {
              if (currentIndex <= fullText.length) {
                setAnimatedText(fullText.slice(0, currentIndex));
                currentIndex++;
              } else {
                clearInterval(typeInterval);
              }
            }, 80);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }

    const cardObservers = cardRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
              }, index * 150);
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      headerObserver.disconnect();
      cardObservers.forEach((observer) => observer?.disconnect());
    };
  }, [headerVisible]);

  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-[#0f1729] via-[#1a2540] to-[#0f1729] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-gradient-to-r from-[#43e97b]/20 to-[#10d8c4]/20 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-gradient-to-r from-[#7467ef]/20 to-[#ffab40]/20 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />

        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div ref={headerRef} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block text-white mb-3">
              Everything your family needs—
            </span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#43e97b] via-[#10d8c4] to-[#7467ef] bg-clip-text text-transparent">
                {animatedText}
                <span className={`inline-block w-1 h-12 ml-1 bg-[#10d8c4] ${headerVisible && animatedText.length < fullText.length ? 'animate-pulse' : 'opacity-0'}`} />
              </span>
              <div
                className={`absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#43e97b] via-[#10d8c4] to-[#7467ef] transition-all duration-1000 ${
                  headerVisible ? 'w-full' : 'w-0'
                }`}
                style={{
                  boxShadow: '0 0 20px rgba(16, 216, 196, 0.6)',
                }}
              />
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            From asset discovery and nominee & KYC fixes to claims preparation—guided by AI you control.
          </p>

          <div className={`mt-8 inline-flex items-center gap-3 px-6 py-3 glass-card rounded-full border border-white/10 transition-all duration-700 ${headerVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#43e97b] to-[#10d8c4] flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#43e97b] to-[#10d8c4] animate-ping opacity-75" />
            </div>
            <span className="text-sm font-medium text-white/90">Bank-grade security · encryption in transit & at rest</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`group relative rounded-3xl transition-all duration-700 ${
                visibleCards[index]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transformStyle: 'preserve-3d',
              }}
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
              }}
            >
              <div className="relative glass-card rounded-3xl p-8 h-full border border-white/10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-30 rounded-3xl blur-xl transition-all duration-500`}
                />

                <div className="relative z-10">
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} p-4 mb-6 relative overflow-hidden transition-all duration-500 group-hover:scale-110`}
                    style={{
                      boxShadow: `0 10px 40px ${feature.glowColor}`,
                    }}
                  >
                    {feature.animationType === 'flip' && (
                      <div className="absolute inset-0 flex items-center justify-center group-hover:animate-[flip_0.6s_ease-in-out]">
                        <feature.icon className="w-full h-full text-white p-2" />
                      </div>
                    )}

                    {feature.animationType === 'scan' && (
                      <div className="relative w-full h-full">
                        <feature.icon className="w-full h-full text-white group-hover:scale-110 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[scan_1s_ease-in-out]" />
                      </div>
                    )}

                    {feature.animationType === 'shield' && (
                      <div className="w-full h-full group-hover:animate-[spin_2s_ease-in-out]">
                        <feature.icon className="w-full h-full text-white" />
                      </div>
                    )}

                    {feature.animationType === 'check' && (
                      <div className="relative w-full h-full">
                        <feature.icon className="w-full h-full text-white group-hover:animate-[bounce_0.6s_ease-in-out]" />
                      </div>
                    )}

                    {feature.animationType === 'chart' && (
                      <div className="relative w-full h-full">
                        <feature.icon className="w-full h-full text-white" />
                        <div className="absolute bottom-0 left-0 right-0 h-0 bg-white/30 group-hover:animate-[growUp_1s_ease-in-out]" />
                      </div>
                    )}

                    {feature.animationType === 'pulse' && (
                      <div className="relative w-full h-full">
                        <feature.icon className="w-full h-full text-white group-hover:animate-[heartbeat_0.8s_ease-in-out_infinite]" />
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/80 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-white/60 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                    {feature.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className={`bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                      Learn more
                    </span>
                    <svg className="w-4 h-4 text-white/60 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-16 translate-x-16" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="group relative px-10 py-5 bg-gradient-to-r from-[#10d8c4] to-[#7467ef] rounded-full font-semibold text-lg text-white overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-xl">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Explore features
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#7467ef] to-[#10d8c4] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <button className="px-10 py-5 glass-card glass-card-hover rounded-full font-semibold text-lg text-white border-white/20 shadow-xl">
              Schedule a demo
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }

        @keyframes flip {
          0% { transform: rotateY(0deg); }
          50% { transform: rotateY(180deg); }
          100% { transform: rotateY(360deg); }
        }

        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        @keyframes growUp {
          0% { height: 0%; }
          100% { height: 100%; }
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
};

export default Features;
