import { useEffect } from "react";
import Footer from "../components/Footer";
import { setPageMetadata } from "../utils/seo";
import { TrendingUp, Compass, Sparkles } from "lucide-react";

const advisorBenefits = [
  {
    title: "Unified visibility",
    description:
      "See client assets across institutions in one view with clear context.",
  },
  {
    title: "Actionable insights",
    description:
      "Identify nominee gaps and compliance issues before they become urgent.",
  },
  {
    title: "Client trust",
    description:
      "Consent-based data access keeps your advisory relationships transparent.",
  },
];

const ForAdvisorsPage = () => {
  useEffect(() => {
    setPageMetadata({
      title: "SecuFi for Advisors",
      description:
        "Discover how SecuFi helps advisors unlock portfolio visibility and proactive client insights.",
      canonical: "https://www.secufi.in/for-advisors",
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-emerald-50 text-gray-900">
      <main className="relative max-w-6xl mx-auto px-6 py-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-8 left-16 w-80 h-80 bg-gradient-to-br from-blue-200/50 to-teal-200/40 rounded-full blur-[120px] floating-orb" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tr from-emerald-200/50 to-teal-200/40 rounded-full blur-[140px] floating-orb" />
        </div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 border border-blue-200 rounded-full shadow-sm">
            <TrendingUp className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-semibold tracking-[0.2em] text-blue-700 uppercase">
              For Advisors
            </span>
          </div>

          <h1 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
            Grow AUM with clarity and client confidence.
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl leading-relaxed">
            SecuFi equips advisors with consent-based insights so you can guide
            families toward stronger financial readiness while building trust.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {advisorBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white/90 border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white/90 border border-gray-200 rounded-3xl p-10 shadow-lg flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-teal-500 text-white shadow-md">
              <Compass className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Advisory workflows that feel effortless
              </h2>
              <p className="text-gray-600 leading-relaxed">
                From onboarding to action plans, SecuFi surfaces priorities so
                you can focus on guidance, not paperwork.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-blue-700">
              <Sparkles className="w-4 h-4" />
              Client-ready insights
            </div>
          </div>
        </div>
      </main>

      <div className="max-w-6xl mx-auto px-6 pb-12">
        <Footer />
      </div>
    </div>
  );
};

export default ForAdvisorsPage;
