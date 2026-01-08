import { useEffect, useState } from "react";
import { ArrowRight, Shield, Check, Sparkles } from "lucide-react";
import FamilyNetworkAnimation from "./animations/FamilyNetworkAnimation";
import ProgressRing from "./animations/ProgressRing";
import { useNavigate } from "react-router-dom";

const isPlatformAllowedForAnimation = () => {
  if (typeof window === "undefined") {
    return false;
  }
  const userAgent = window.navigator.userAgent;
  const isWindows = userAgent.indexOf("Win") !== -1;
  const isAndroid = userAgent.indexOf("Android") !== -1;
  return isWindows || isAndroid;
};

const Hero = () => {
  const [phase, setPhase] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setShowAnimation(isPlatformAllowedForAnimation());

    const phaseTimings = [0, 1000, 2000, 3000];
    const timers = phaseTimings.map((delay, index) =>
      setTimeout(() => setPhase(index), delay)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-teal-50 to-emerald-50"
    >
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgb(16, 216, 196) 1px, transparent 1px), linear-gradient(to bottom, rgb(16, 216, 196) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Floating gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-[10%] left-[15%] w-[600px] h-[600px] bg-gradient-to-br from-teal-200/40 to-blue-200/40 rounded-full blur-[100px] floating-orb"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-[40%] right-[10%] w-[500px] h-[500px] bg-gradient-to-br from-emerald-200/40 to-teal-200/40 rounded-full blur-[100px] floating-orb"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-[10%] left-[40%] w-[450px] h-[450px] bg-gradient-to-br from-blue-200/40 to-cyan-200/40 rounded-full blur-[100px] floating-orb"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] right-[15%] w-32 h-32 border-2 border-teal-300/30 rounded-3xl rotate-45 floating-shape" />
        <div className="absolute bottom-[30%] left-[10%] w-24 h-24 border-2 border-blue-300/30 rounded-full floating-shape" style={{ animationDelay: "1s" }} />
        <div className="absolute top-[60%] right-[25%] w-20 h-20 bg-gradient-to-br from-emerald-300/20 to-teal-300/20 rounded-2xl rotating-shape" />
      </div>

      {showAnimation && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
          <FamilyNetworkAnimation />
        </div>
      )}

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Premium Badge */}
            <div className="relative inline-flex items-center gap-3 px-6 py-3 mb-8 group">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-emerald-400 to-blue-400 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-all duration-500" />
              <div className="absolute inset-[1px] bg-white rounded-2xl shadow-lg" />

              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent shimmer" />
              </div>

              <div className="relative flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-emerald-400 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
                  <img
                    src="./Images/logo.jpeg"
                    alt="SecuFi Logo"
                    className="relative aspect-square h-16 rounded-full border-2 border-white shadow-xl"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="block bg-gradient-to-r from-teal-600 via-emerald-600 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient text-4xl font-bold tracking-tight">
                    SecuFi
                  </span>
                  <Shield className="w-5 h-5 text-teal-600 animate-pulse" />
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              <span className="block text-gray-900 mb-2">
                Secure, organized and claim ready
              </span>
              <span className="block bg-gradient-to-r from-teal-600 via-emerald-600 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                together as a family
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-xl">
              See all your assets in one place, keep important papers safe, and
              get a Readiness Score that guides you to fix nominee & KYC gaps—so
              your family is always prepared.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="https://secufi-client.vercel.app/login"
                className="group relative px-10 py-5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl font-semibold text-lg text-white overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Free (≈5 min)
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-white rounded-xl px-5 py-3 border border-gray-200 shadow-sm">
                <Check className="w-4 h-4 text-teal-600" />
                <div className="text-sm font-medium text-gray-700">
                  ≈5 min setup
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-xl px-5 py-3 border border-gray-200 shadow-sm">
                <Check className="w-4 h-4 text-teal-600" />
                <div className="text-sm font-medium text-gray-700">
                  Encrypted, India-hosted
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="space-y-5">
              <div
                className={`bg-white rounded-3xl p-8 border-l-4 border-teal-500 transition-all duration-700 shadow-xl hover:shadow-2xl ${
                  phase >= 0
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center flex-shrink-0 shadow-lg glow-teal">
                    <div className="w-7 h-7 rounded-full bg-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Household Map
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      Add spouse, parents, children—set nominees & guardians.
                      See who owns what at a glance.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`bg-white rounded-3xl p-8 border-l-4 border-emerald-500 transition-all duration-700 shadow-xl hover:shadow-2xl ${
                  phase >= 1
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}
                style={{ transitionDelay: "150ms" }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0 shadow-lg glow-green">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Family Members
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      Add everyone once. We auto-organise details and link them
                      to the right accounts.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`bg-white rounded-3xl p-8 border-l-4 border-blue-500 transition-all duration-700 shadow-xl hover:shadow-2xl ${
                  phase >= 2
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg glow-blue">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08-.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Assets & Accounts
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      Banks, Mutual Funds, Insurance, EPF/PPF, Demat—organised
                      in one view.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`bg-white rounded-3xl p-8 border-l-4 border-orange-500 transition-all duration-700 shadow-xl hover:shadow-2xl ${
                  phase >= 3
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}
                style={{ transitionDelay: "450ms" }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center flex-shrink-0 shadow-lg glow-orange">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Family Vault
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      Store CAS, policy PDFs, ID/address proofs—searchable,
                      secure, and easy to share.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-br from-white/80 to-teal-50/50 backdrop-blur-xl rounded-3xl p-8 border border-teal-200/50 shadow-xl">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-teal-600" />
                  <div className="text-sm font-semibold text-gray-700">
                    Your Journey to Financial Security
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                  <div
                    className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
                    style={{ animationDelay: "0.2s" }}
                  />
                  <div
                    className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"
                    style={{ animationDelay: "0.4s" }}
                  />
                </div>
              </div>
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                <div
                  className="h-full bg-gradient-to-r from-teal-500 via-emerald-500 to-blue-500 rounded-full transition-all duration-1000 shadow-lg"
                  style={{
                    width: `${Math.min(((phase + 1) / 4) * 100, 100)}%`,
                  }}
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-xs font-medium text-gray-500">
                <span>Getting Started</span>
                <span>{Math.min(((phase + 1) / 4) * 100, 100).toFixed(0)}% Complete</span>
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
          animation: gradient 8s ease infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }

        @keyframes floating-orb {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
          33% { transform: translate(40px, -40px) scale(1.1); opacity: 0.5; }
          66% { transform: translate(-40px, 40px) scale(0.9); opacity: 0.3; }
        }
        .floating-orb {
          animation: floating-orb 20s ease-in-out infinite;
        }

        @keyframes floating-shape {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }
        .floating-shape {
          animation: floating-shape 15s ease-in-out infinite;
        }

        @keyframes rotating-shape {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(1); }
        }
        .rotating-shape {
          animation: rotating-shape 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
