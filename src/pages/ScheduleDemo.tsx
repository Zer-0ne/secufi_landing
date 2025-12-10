import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  Briefcase,
  Building2,
  MessageSquare,
  CheckCircle2,
  ArrowLeft,
  Video,
  Shield,
  Zap,
  TrendingUp,
} from "lucide-react";
// import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
// const supabase = createClient(supabaseUrl, supabaseAnonKey);

const ScheduleDemo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    preferredDate: "",
    preferredTime: "",
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    interests: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const benefits = [
    {
      icon: Shield,
      title: "Complete Protection",
      description: "See how SecuFi secures your family's financial future",
    },
    {
      icon: Zap,
      title: "5-Minute Setup",
      description: "Learn how quick and easy it is to get started",
    },
    {
      icon: TrendingUp,
      title: "Asset Discovery",
      description: "Discover how AI finds all your hidden assets",
    },
  ];

  const timeSlots = [
    "9:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 1:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM",
    "5:00 PM - 6:00 PM",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // const { error: insertError } = await supabase
      //   .from("demo_requests")
      //   .insert([
      //     {
      //       name: formData.name,
      //       email: formData.email,
      //       phone: formData.phone,
      //       company: formData.company || null,
      //       role: formData.role || null,
      //       preferred_date: formData.preferredDate || null,
      //       preferred_time: formData.preferredTime || null,
      //       timezone: formData.timezone,
      //       interests: formData.interests || null,
      //       message: formData.message || null,
      //     },
      //   ]);

      // if (insertError) throw insertError;

      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        role: "",
        preferredDate: "",
        preferredTime: "",
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        interests: "",
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

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
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
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-200 rounded-full mb-6">
              <Video className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700">
                Live Product Demo
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gray-900">See SecuFi in</span>
              <br />
              <span className="bg-gradient-to-r from-teal-600 via-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Action
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Book a personalized demo with our team and discover how SecuFi can
              transform your family's financial security in just 5 minutes.
            </p>

            <div className="space-y-6 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-teal-600" />
                What You'll Learn
              </h2>

              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-teal-300 transition-all duration-300 shadow-sm hover:shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
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

            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 border-2 border-blue-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    30-Minute Demo Session
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our expert will walk you through the platform, answer your
                    questions, and show you exactly how SecuFi works for your
                    specific needs.
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
                      <Calendar className="w-10 h-10 text-teal-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Schedule Your Demo
                    </h2>
                    <p className="text-gray-600">
                      Fill in your details and we'll reach out to confirm
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2"
                      >
                        <User className="w-4 h-4 text-gray-500" />
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
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2"
                      >
                        <Mail className="w-4 h-4 text-gray-500" />
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
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2"
                      >
                        <Phone className="w-4 h-4 text-gray-500" />
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

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2"
                        >
                          <Building2 className="w-4 h-4 text-gray-500" />
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-colors text-gray-900"
                          placeholder="Optional"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="role"
                          className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2"
                        >
                          <Briefcase className="w-4 h-4 text-gray-500" />
                          Role
                        </label>
                        <input
                          type="text"
                          id="role"
                          name="role"
                          value={formData.role}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-colors text-gray-900"
                          placeholder="Optional"
                        />
                      </div>
                    </div>

                    <div className="bg-teal-50 rounded-xl p-4 border border-teal-200">
                      <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-teal-600" />
                        Preferred Schedule (Optional)
                      </h3>

                      <div className="space-y-3">
                        <div>
                          <label
                            htmlFor="preferredDate"
                            className="block text-xs font-medium text-gray-600 mb-1"
                          >
                            Date
                          </label>
                          <input
                            type="date"
                            id="preferredDate"
                            name="preferredDate"
                            value={formData.preferredDate}
                            onChange={handleChange}
                            min={getTomorrowDate()}
                            className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-teal-500 focus:outline-none transition-colors text-gray-900 text-sm bg-white"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="preferredTime"
                            className="block text-xs font-medium text-gray-600 mb-1"
                          >
                            Time Slot
                          </label>
                          <select
                            id="preferredTime"
                            name="preferredTime"
                            value={formData.preferredTime}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-teal-500 focus:outline-none transition-colors text-gray-900 text-sm bg-white"
                          >
                            <option value="">Select a time</option>
                            {timeSlots.map((slot) => (
                              <option key={slot} value={slot}>
                                {slot}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="interests"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        What interests you most?
                      </label>
                      <select
                        id="interests"
                        name="interests"
                        value={formData.interests}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-colors text-gray-900 bg-white"
                      >
                        <option value="">Select an option</option>
                        <option value="Asset Discovery">
                          Asset Discovery & Tracking
                        </option>
                        <option value="Digital Will">Digital Will Creation</option>
                        <option value="Family Protection">
                          Family Protection & Claims
                        </option>
                        <option value="Tax Management">Tax Management</option>
                        <option value="All Features">All Features</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2"
                      >
                        <MessageSquare className="w-4 h-4 text-gray-500" />
                        Additional Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-colors text-gray-900 resize-none"
                        placeholder="Any specific questions or requirements? (optional)"
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
                      className="w-full px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl font-semibold text-lg text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        "Submitting..."
                      ) : (
                        <>
                          <Calendar className="w-5 h-5" />
                          Request Demo
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-gray-500">
                      We'll confirm your demo within 24 hours
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-100 to-green-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Demo Requested!
                  </h2>
                  <p className="text-lg text-gray-600 mb-2">
                    Thank you for your interest in SecuFi.
                  </p>
                  <p className="text-gray-600 mb-8">
                    Our team will reach out within 24 hours to confirm your demo
                    schedule.
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

export default ScheduleDemo;
