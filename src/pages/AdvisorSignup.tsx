import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Eye,
  TrendingUp,
  Users,
  Shield,
  Bell,
  Sparkles,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";
import { submitPartnerSignup } from "../utils/api";


const AdvisorSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    advisorType: "",
    companyName: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const benefits = [
    {
      icon: Eye,
      title: "See a Unified View",
      description:
        "Bring all their holdings in banks, insurers, and mutual funds into a single view",
      color: "from-teal-500 to-emerald-500",
      bgColor: "from-teal-50 to-emerald-50",
    },
    {
      icon: Bell,
      title: "Track Policy Details",
      description:
        "Get reminders for insurance policies that are about to expire",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
    },
    {
      icon: TrendingUp,
      title: "Discover New Opportunities",
      description:
        "Spot growth opportunities beyond their existing investments",
      color: "from-orange-500 to-amber-500",
      bgColor: "from-orange-50 to-amber-50",
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description:
        "Keep client data secure with bank-grade encryption and compliance",
      color: "from-emerald-500 to-green-500",
      bgColor: "from-emerald-50 to-green-50",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const apiData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        role: formData.advisorType,
        company_name: formData.companyName,
        additional_info: formData.message,
      };
      
      await submitPartnerSignup(apiData);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        advisorType: "",
        companyName: "",
        message: "",
      });
    } catch (err) {
      setError((err as Error).message || "Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-emerald-50">
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

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Home</span>
        </button>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-200 rounded-full mb-6">
              <Users className="w-4 h-4 text-teal-600" />
              <span className="text-sm font-semibold text-teal-700">
                For Financial Advisors
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gray-900">Sign Up and</span>
              <br />
              <span className="bg-gradient-to-r from-teal-600 via-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Grow Your Business
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Help your clients get full visibility and make better financial
              decisions.
            </p>

            <div className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Benefits for Your Clients
                </h2>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-teal-300 transition-all duration-300 shadow-sm hover:shadow-xl"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <benefit.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-8 border-2 border-teal-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Join 500+ Advisors
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Trusted by MFDs, CAs, and financial planners across India to
                    deliver better outcomes for their clients.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-8">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border-2 border-gray-200">
              {!isSuccess ? (
                <>
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-100 to-emerald-100 flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-10 h-10"
                        viewBox="0 0 200 200"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="100" cy="70" r="30" fill="#14b8a6" />
                        <circle cx="70" cy="130" r="20" fill="#10b981" />
                        <circle cx="130" cy="130" r="20" fill="#3b82f6" />
                        <circle cx="100" cy="150" r="15" fill="#f59e0b" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Get Started Today
                    </h2>
                    <p className="text-gray-600">
                      Fill in your details and we'll reach out shortly
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-colors text-gray-900"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-colors text-gray-900"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-colors text-gray-900"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="advisorType"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        I am a *
                      </label>
                      <select
                        id="advisorType"
                        name="advisorType"
                        value={formData.advisorType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-colors text-gray-900 bg-white"
                      >
                        <option value="">Select your role</option>
                        <option value="MUTUAL_FUND_DISTRIBUTOR">
                          Mutual Fund Distributor (MFD)
                        </option>
                        <option value="CHARTERED_ACCOUNTANT">Chartered Accountant (CA)</option>
                        <option value="FINANCIAL_PLANNER">
                          Financial Planner
                        </option>
                        <option value="INSURANCE_ADVISOR">
                          Insurance Advisor
                        </option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="companyName"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Company/Firm Name
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-colors text-gray-900"
                        placeholder="Optional"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Additional Information
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-colors text-gray-900 resize-none"
                        placeholder="Tell us about your practice (optional)"
                      />
                    </div>

                    {error && (
                      <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
                        <p className="text-red-700 text-sm font-medium">
                          {error}
                        </p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl font-semibold text-lg text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? "Submitting..." : "Sign Up"}
                    </button>

                    <p className="text-center text-xs text-gray-500">
                      By signing up, you agree to our{" "}
                      <Link
                        to="/legal#terms"
                        className="text-teal-600 font-semibold hover:text-teal-700"
                      >
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        to="/legal#privacy"
                        className="text-teal-600 font-semibold hover:text-teal-700"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-100 to-green-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Thank You!
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    We've received your information. Our team will reach out to
                    you within 24 hours.
                  </p>
                  <button
                    onClick={() => navigate("/")}
                    className="px-8 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl font-semibold text-white hover:shadow-xl transition-all duration-300"
                  >
                    Back to Home
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvisorSignup;
