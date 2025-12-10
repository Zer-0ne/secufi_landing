import {
  FileText,
  Search,
  Shield,
  BarChart3,
  Users,
  CheckCircle,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: FileText,
    title: "Family Instructions Pack",
    description:
      "Map family members, beneficiaries and key preferences in a review-ready document for your lawyer/CA—without legal jargon.",
    highlight: "Legal-ready docs",
    color: "from-orange-500 to-amber-500",
    bgColor: "from-orange-50 to-amber-50",
    iconColor: "text-orange-600",
    borderColor: "border-orange-200",
  },
  {
    icon: Search,
    title: "Auto Asset Discovery",
    description:
      "With your consent, we read emails, SMS and statements to find accounts, Mutual Funds (via CAS), insurance and investments—automatically.",
    highlight: "AI-powered scanning",
    color: "from-emerald-500 to-green-600",
    bgColor: "from-emerald-50 to-green-50",
    iconColor: "text-emerald-600",
    borderColor: "border-emerald-200",
  },
  {
    icon: Shield,
    title: "Household Map",
    description:
      "One view of people, nominees and guardians—link every asset to the right person, clearly.",
    highlight: "Complete visibility",
    color: "from-teal-500 to-cyan-500",
    bgColor: "from-teal-50 to-cyan-50",
    iconColor: "text-teal-600",
    borderColor: "border-teal-200",
  },
  {
    icon: CheckCircle,
    title: "Nominee & KYC Playbooks",
    description:
      "Detect nominee gaps, name/address mismatches and FATCA/CKYC issues—then follow simple steps to fix them.",
    highlight: "Compliance made easy",
    color: "from-blue-500 to-indigo-500",
    bgColor: "from-blue-50 to-indigo-50",
    iconColor: "text-blue-600",
    borderColor: "border-blue-200",
  },
  {
    icon: BarChart3,
    title: "Tax Pack (FY)",
    description:
      "Collect capital-gains, interest certificates, premiums and statements—export-ready for your CA or e-filing.",
    highlight: "Tax-ready exports",
    color: "from-cyan-500 to-blue-500",
    bgColor: "from-cyan-50 to-blue-50",
    iconColor: "text-cyan-600",
    borderColor: "border-cyan-200",
  },
  {
    icon: Users,
    title: "Claims-Ready Kit",
    description:
      "All documents and instructions your family needs for insurance claims and account transfers—one tap away.",
    highlight: "Family protection",
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-50 to-emerald-50",
    iconColor: "text-green-600",
    borderColor: "border-green-200",
  },
];

const Features = () => {
  const navigate = useNavigate();

  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    new Array(features.length).fill(false)
  );
  const [headerVisible, setHeaderVisible] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeaderVisible(true);
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
              }, index * 100);
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
  }, []);

  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(16, 216, 196) 1px, transparent 0)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-teal-100/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-100/40 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div ref={headerRef} className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-200 rounded-full mb-6">
            <Shield className="w-4 h-4 text-teal-600" />
            <span className="text-sm font-semibold text-teal-700">Comprehensive Protection</span>
          </div>

          <h2 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="block text-gray-900 mb-3">
              Everything your family needs—
            </span>
            <span className="bg-gradient-to-r from-teal-600 via-emerald-600 to-blue-600 bg-clip-text text-transparent">
              organised & secure
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From asset discovery and nominee & KYC fixes to claims
            preparation—guided by AI you control.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`group relative transition-all duration-700 ${
                visibleCards[index]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className={`relative bg-white rounded-3xl p-8 h-full border-2 ${feature.borderColor} hover:border-opacity-60 transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-2`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-4 mb-6 transition-all duration-500 group-hover:scale-110 shadow-lg`}
                  >
                    <feature.icon className="w-full h-full text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>

                  <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${feature.bgColor} border ${feature.borderColor} rounded-full text-sm font-semibold ${feature.iconColor}`}>
                    <CheckCircle className="w-4 h-4" />
                    {feature.highlight}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="https://secufi-client.vercel.app/login"
              className="group relative px-10 py-5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl font-semibold text-lg text-white overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Explore All Features
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            <button
              onClick={() => navigate("/contact")}
              className="px-10 py-5 bg-white border-2 border-gray-200 hover:border-teal-300 rounded-2xl font-semibold text-lg text-gray-700 hover:text-teal-600 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
