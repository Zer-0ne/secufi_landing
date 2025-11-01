import { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import FamilyNetworkAnimation from './animations/FamilyNetworkAnimation';
import ProgressRing from './animations/ProgressRing';

const Hero = () => {
  const [phase, setPhase] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const phaseTimings = [0, 2500, 5000, 7500];
    const timers = phaseTimings.map((delay, index) =>
      setTimeout(() => setPhase(index), delay)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#16223e] via-[#232e4d] to-[#1a2540]">
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-[#10d8c4] to-[#43e97b] rounded-full blur-[140px]"
          style={{ animation: 'blobFloat 12s ease-in-out infinite' }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-gradient-to-r from-[#7467ef] to-[#10d8c4] rounded-full blur-[130px]"
          style={{ animation: 'blobFloat 14s ease-in-out infinite', animationDelay: '2s' }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-gradient-to-r from-[#ffab40] to-[#ff784b] rounded-full blur-[120px]"
          style={{ animation: 'blobFloat 16s ease-in-out infinite', animationDelay: '4s' }}
        />
        <div
          className="absolute bottom-1/3 right-1/3 w-[420px] h-[420px] bg-gradient-to-r from-[#009966] to-[#10d8c4] rounded-full blur-[125px]"
          style={{ animation: 'blobFloat 15s ease-in-out infinite', animationDelay: '6s' }}
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <FamilyNetworkAnimation />
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-card glass-card-hover rounded-full mb-8 border border-white/20">
              <Sparkles className="w-4 h-4 text-[#10d8c4] animate-pulse" />
              <span className="text-sm font-medium text-white/90">Powered by AI · Consent-first</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-white mb-2">Your Family's</span>
              <span className="block bg-gradient-to-r from-[#10d8c4] via-[#43e97b] to-[#ffab40] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Net-Worth OS
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/70 mb-10 leading-relaxed max-w-xl">
              See all your money in one place, keep important papers safe, and get a Readiness Score that guides you to fix nominee & KYC gaps—so your family is always prepared.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="group relative px-10 py-5 bg-gradient-to-r from-[#43e97b] to-[#009966] rounded-full font-semibold text-lg text-white overflow-hidden transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 glow-green shadow-xl">
                <span className="relative z-10 flex items-center gap-2">
                  Start Free (≈5 min)
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#009966] to-[#43e97b] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              <button className="px-10 py-5 glass-card glass-card-hover rounded-full font-semibold text-lg text-white border-white/20 shadow-xl">
                Watch Demo
              </button>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="glass-card rounded-full px-5 py-3 border-white/10">
                <div className="text-sm font-medium text-white/80">≈5 min setup</div>
              </div>
              <div className="glass-card rounded-full px-5 py-3 border-white/10">
                <div className="text-sm font-medium text-white/80">Encrypted, India-hosted</div>
              </div>
              <div className="glass-card rounded-full px-5 py-3 border-white/10">
                <div className="text-sm font-medium text-white/80">AI-assisted</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="space-y-6">
              <div
                className={`glass-card glass-card-hover rounded-3xl p-6 border-l-4 transition-all duration-700 ${
                  phase >= 0 ? 'opacity-100 translate-x-0 border-[#10d8c4]' : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: '0ms' }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#10d8c4] to-[#7467ef] flex items-center justify-center flex-shrink-0 shadow-lg glow-teal">
                    <div className="w-6 h-6 rounded-full bg-white/90" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">Household Map</h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Add spouse, parents, children—set nominees & guardians. See who owns what at a glance.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`glass-card glass-card-hover rounded-3xl p-6 border-l-4 transition-all duration-700 ${
                  phase >= 1 ? 'opacity-100 translate-x-0 border-[#10d8c4]' : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#10d8c4] to-[#43e97b] flex items-center justify-center flex-shrink-0 shadow-lg glow-teal">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">Family Members</h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Add everyone once. We auto-organise details and link them to the right accounts.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`glass-card glass-card-hover rounded-3xl p-6 border-l-4 transition-all duration-700 ${
                  phase >= 2 ? 'opacity-100 translate-x-0 border-[#3b82f6]' : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3b82f6] to-[#43e97b] flex items-center justify-center flex-shrink-0 shadow-lg" style={{ boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' }}>
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">Assets & Accounts</h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Banks, Mutual Funds, Insurance, EPF/PPF, Demat—organised in one view.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`glass-card glass-card-hover rounded-3xl p-6 border-l-4 transition-all duration-700 ${
                  phase >= 3 ? 'opacity-100 translate-x-0 border-[#ffab40]' : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: '900ms' }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ffab40] to-[#ff784b] flex items-center justify-center flex-shrink-0 shadow-lg glow-orange">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">Family Vault</h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Store CAS, policy PDFs, ID/address proofs—searchable, secure, and easy to share.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 glass-card rounded-2xl p-6 border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm font-medium text-white/80">Hover or tap nodes to explore</div>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#10d8c4] animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-[#43e97b] animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="w-2 h-2 rounded-full bg-[#ffab40] animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#10d8c4] via-[#43e97b] to-[#ffab40] rounded-full transition-all duration-1000"
                  style={{ width: `${Math.min(((phase + 1) / 4) * 100, 100)}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProgressRing />

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 6s ease infinite;
        }

        @keyframes blobFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-30px, 30px) scale(0.9); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
