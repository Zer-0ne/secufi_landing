import { ArrowRight, Shield, CheckCircle, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section
      id="security"
      className="relative py-32 px-6 bg-gradient-to-b from-teal-50 to-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-teal-200 to-blue-200 rounded-full blur-[150px] opacity-30 animate-pulse"
          style={{ animationDuration: "6s" }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="bg-white border border-gray-200 rounded-3xl p-12 md:p-16 text-center hover:border-teal-300 transition-all duration-500 shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl opacity-30" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 border border-teal-300 rounded-full mb-8">
              <Shield className="w-4 h-4 text-teal-700" />
              <span className="text-sm font-semibold text-teal-700">
                Bank-Grade Security
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Protect Your Family's Future
              <br />
              <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                Starting Today
              </span>
            </h2>

            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join 10,000+ Indian families who have secured their financial
              future with SecuFi. Create your digital will and discover all your
              assets in just 5 minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="https://secufi-client.vercel.app/login"
                className="group px-10 py-5 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-3"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </a>
              <button
                onClick={() => navigate("/advisor-signup")}
                className="px-10 py-5 bg-blue-50 border border-blue-200 text-blue-700 rounded-full font-semibold text-lg hover:bg-blue-100 hover:border-blue-300 transition-all duration-300 inline-flex items-center justify-center gap-3"
              >
                Schedule Demo
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center gap-3 group">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div className="font-semibold text-gray-900">
                  No Credit Card Required
                </div>
                <div className="text-sm text-gray-600">
                  Start free, upgrade anytime
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 group">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="font-semibold text-gray-900">
                  5-Minute Setup
                </div>
                <div className="text-sm text-gray-600">
                  Get started instantly
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 group">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="font-semibold text-gray-900">100% Secure</div>
                <div className="text-sm text-gray-600">
                  Encrypted & compliant
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </section>
  );
};

export default CTA;
