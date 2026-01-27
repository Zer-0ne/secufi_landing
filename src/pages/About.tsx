import { useEffect } from "react";
import Footer from "../components/Footer";
import { setPageMetadata } from "../utils/seo";

const About = () => {
  useEffect(() => {
    setPageMetadata({
      title: "About SecuFi",
      description:
        "Learn about SecuFi’s mission to help families stay secure, organized, and claim ready.",
      canonical: "https://www.secufi.in/about",
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-emerald-50 text-gray-900">
      <main className="relative max-w-6xl mx-auto px-6 py-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-10 right-12 w-80 h-80 bg-gradient-to-br from-teal-200/50 to-blue-200/40 rounded-full blur-[120px] floating-orb" />
          <div className="absolute bottom-12 left-10 w-96 h-96 bg-gradient-to-tr from-emerald-200/50 to-teal-200/40 rounded-full blur-[140px] floating-orb" />
        </div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 border border-teal-200 rounded-full shadow-sm">
            <span className="text-xs font-semibold tracking-[0.2em] text-teal-700 uppercase">
              About SecuFi
            </span>
          </div>

          <h1 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
            Clear, secure readiness for Indian families and advisors.
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl leading-relaxed">
            SecuFi helps households and advisors organize assets, nominees, and
            compliance tasks in one secure place so critical documents and
            instructions are always accessible.
          </p>
          <div className="mt-8 grid gap-3 text-gray-600">
            <p className="font-semibold text-gray-900">Who it’s for</p>
            <p>• Indian families who want a reliable digital vault and guidance.</p>
            <p>• Advisors who need consent-based visibility for client readiness.</p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-white/90 border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Empower every household to stay organized, compliant, and ready
                for life’s critical moments with an experience that feels simple
                and reassuring.
              </p>
            </div>
            <div className="bg-white/90 border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                What We Believe
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Security and clarity should be accessible to every family.
                Insightful guidance and transparent consent help everyone stay
                prepared without stress.
              </p>
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

export default About;
