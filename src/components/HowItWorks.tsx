import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Sparkles,
  Shield,
  Scan,
  Network,
  CheckCircle,
  FileText,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Connect & Consent",
    description:
      "Grant access to email and SMS. Our AI scans for bank accounts, insurance policies, and investments.",
    highlight: "Auto-discovery",
    icon: Scan,
    color: "from-emerald-500 to-green-600",
    bgColor: "from-emerald-50 to-green-50",
    borderColor: "border-emerald-300",
    iconColor: "text-emerald-600",
  },
  {
    number: "02",
    title: "Review Your Graph",
    description:
      "See all your assets, nominees, and family relationships unified in one clean dashboard.",
    highlight: "Complete view",
    icon: Network,
    color: "from-teal-500 to-cyan-600",
    bgColor: "from-teal-50 to-cyan-50",
    borderColor: "border-teal-300",
    iconColor: "text-teal-600",
  },
  {
    number: "03",
    title: "Fix & Optimize",
    description:
      "Get alerts for nominee gaps, KYC issues, or compliance problems. Fix them with guided playbooks.",
    highlight: "Stay compliant",
    icon: CheckCircle,
    color: "from-blue-500 to-indigo-600",
    bgColor: "from-blue-50 to-indigo-50",
    borderColor: "border-blue-300",
    iconColor: "text-blue-600",
  },
  {
    number: "04",
    title: "Create Your Will",
    description:
      "Answer simple questions. Our AI creates a legally valid will and maps your family structure.",
    highlight: "5 minutes",
    icon: FileText,
    color: "from-orange-500 to-amber-600",
    bgColor: "from-orange-50 to-amber-50",
    borderColor: "border-orange-300",
    iconColor: "text-orange-600",
  },
  {
    number: "05",
    title: "Stay Protected",
    description:
      "Access your Tax Pack, Claims Kit, and succession documents anytime. Share with advisors securely.",
    highlight: "Always ready",
    icon: Shield,
    color: "from-cyan-500 to-blue-600",
    bgColor: "from-cyan-50 to-blue-50",
    borderColor: "border-cyan-300",
    iconColor: "text-cyan-600",
  },
];

const HowItWorks = () => {
  const navigate = useNavigate();
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
    const currentStep = steps[step];

    switch (step) {
      case 0:
        return (
          <div className="w-full h-full flex flex-col items-center justify-center animate-fadeIn">
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-40 h-40 border-4 border-emerald-300 border-t-emerald-500 rounded-full animate-spin"
                  style={{ animationDuration: "2s" }}
                />
              </div>
              <div className="relative grid grid-cols-3 gap-4 p-16">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-green-100 rounded-xl border-2 border-emerald-200 animate-pulse shadow-sm"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
            </div>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl text-white font-semibold shadow-lg">
              <Scan className="w-5 h-5 animate-pulse" />
              Scanning Assets...
            </div>
          </div>
        );

      case 1:
        return (
          <div className="w-full h-full flex flex-col items-center justify-center animate-fadeIn">
            <svg className="w-full h-80 max-w-lg mb-8" viewBox="0 0 400 400">
              <circle
                cx="200"
                cy="200"
                r="40"
                fill="url(#centralGradient)"
                className="animate-pulse"
              />

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
                      strokeWidth="3"
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
                <linearGradient
                  id="centralGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#14b8a6" />
                  <stop offset="100%" stopColor="#0891b2" />
                </linearGradient>
                <linearGradient
                  id="nodeGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#14b8a6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
                <linearGradient
                  id="lineGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#0891b2" stopOpacity="0.6" />
                </linearGradient>
              </defs>
            </svg>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl text-white font-semibold shadow-lg">
              <Network className="w-5 h-5" />
              Building Graph...
            </div>
          </div>
        );

      case 2:
        return (
          <div className="w-full h-full flex flex-col items-center justify-center animate-fadeIn">
            <div className="space-y-4 w-full max-w-md mb-8">
              {[
                { label: "KYC Status", status: "Complete" },
                { label: "Nominee Check", status: "Fixed" },
                { label: "Compliance", status: "Verified" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-6 bg-white rounded-2xl border-2 border-blue-200 shadow-sm animate-slideInRight"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <span className="text-gray-800 font-semibold">
                    {item.label}
                  </span>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full text-white text-sm font-semibold shadow-sm">
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl text-white font-semibold shadow-lg">
              <CheckCircle className="w-5 h-5" />
              All Systems Go!
            </div>
          </div>
        );

      case 3:
        return (
          <div className="w-full h-full flex flex-col items-center justify-center animate-fadeIn">
            <div className="space-y-4 w-full max-w-sm mb-8">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="h-16 bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl border-2 border-orange-200 shadow-sm animate-slideInRight"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl text-white font-semibold shadow-lg">
              <FileText className="w-5 h-5" />
              Creating Will...
            </div>
          </div>
        );

      case 4:
        return (
          <div className="w-full h-full flex flex-col items-center justify-center animate-fadeIn">
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-r from-cyan-200 to-blue-200 blur-2xl animate-pulse" />
              </div>
              <div className="relative flex items-center justify-center h-48">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-2xl animate-bounce">
                  <Shield className="w-16 h-16 text-white" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-8 max-w-md">
              {["Tax Pack", "Claims Kit", "Documents"].map((item, i) => (
                <div
                  key={i}
                  className="p-4 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl border-2 border-cyan-200 shadow-sm text-center animate-fadeIn"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <div className="text-sm text-gray-700 font-semibold">
                    {item}
                  </div>
                </div>
              ))}
            </div>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl text-white font-semibold shadow-lg">
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
    <section
      id="how-it-works"
      className="relative py-32 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(16, 216, 196) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-teal-100/50 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-100/50 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-200 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-teal-600" />
            <span className="text-sm font-semibold text-teal-700">Step by Step Guide</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gray-900">How </span>
            <span className="bg-gradient-to-r from-teal-600 via-emerald-600 to-blue-600 bg-clip-text text-transparent">
              SecuFi
            </span>
            <span className="text-gray-900"> Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From setup to protection in minutes. Watch AI transform your
            financial legacy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
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
                    className={`relative bg-white rounded-3xl p-8 border-2 transition-all duration-500 shadow-lg ${
                      isActive
                        ? `${step.borderColor} shadow-2xl scale-100`
                        : "border-gray-200 scale-95 opacity-80"
                    }`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.bgColor} rounded-3xl opacity-0 transition-opacity duration-500 ${isActive ? 'opacity-100' : ''}`} />

                    <div className="relative flex items-start gap-6">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} p-4 flex-shrink-0 transition-all duration-500 shadow-lg ${isActive ? 'scale-110' : ''}`}
                      >
                        <step.icon
                          className={`w-full h-full text-white ${
                            isActive ? "animate-pulse" : ""
                          }`}
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span
                            className={`text-sm font-bold transition-colors duration-500 ${
                              isActive ? step.iconColor : "text-gray-400"
                            }`}
                          >
                            {step.number}
                          </span>
                          <h3
                            className={`text-xl font-bold transition-colors duration-500 ${
                              isActive ? "text-gray-900" : "text-gray-500"
                            }`}
                          >
                            {step.title}
                          </h3>
                        </div>

                        <p
                          className={`text-base leading-relaxed mb-4 transition-colors duration-500 ${
                            isActive ? "text-gray-700" : "text-gray-500"
                          }`}
                        >
                          {step.description}
                        </p>

                        <span
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-500 ${
                            isActive
                              ? `bg-gradient-to-r ${step.bgColor} ${step.iconColor} border-2 ${step.borderColor}`
                              : "bg-gray-100 text-gray-500 border-2 border-gray-200"
                          }`}
                        >
                          {isActive && <Sparkles className="w-4 h-4" />}
                          {step.highlight}
                        </span>
                      </div>

                      {isPassed && (
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center flex-shrink-0 animate-fadeIn shadow-lg">
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="mt-8">
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                <div
                  className="h-full bg-gradient-to-r from-teal-500 via-emerald-500 to-blue-500 transition-all duration-500 rounded-full shadow-lg"
                  style={{
                    width: `${((activeStep + 1) / steps.length) * 100}%`,
                  }}
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-sm font-semibold text-gray-600">
                <span>Getting Started</span>
                <span>{Math.min(((activeStep + 1) / steps.length) * 100, 100).toFixed(0)}% Complete</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block sticky top-32">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 border-2 border-gray-200 shadow-2xl min-h-[600px] flex items-center justify-center">
              <VisualDisplay step={activeStep} />
            </div>
          </div>
        </div>

        <div className="text-center mt-20">
          <a
            href="https://my.secufi.in/login"
            className="group px-10 py-5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl font-semibold text-lg text-white transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center gap-3"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>

      <style>{`
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
