import { useState } from "react";
import {
  ArrowLeft,
  Users,
  Shield,
  Lock,
  FileText,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  Building2,
  Wallet,
  Heart,
  Home,
  FileCheck,
  Share2,
  Bell,
  BarChart3,
  Smartphone,
  Clock,
  Award,
  Eye,
  Download,
  Search,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const AllFeatures = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Features" },
    { id: "organization", name: "Organization" },
    { id: "security", name: "Security & Compliance" },
    { id: "insights", name: "Insights & Planning" },
    { id: "sharing", name: "Family Collaboration" },
  ];

  const features = [
    {
      category: "organization",
      icon: Users,
      title: "Household Map",
      description:
        "Create a comprehensive family tree with spouse, parents, children, and extended family. Set nominees and guardians for each asset.",
      benefits: [
        "Visual family tree interface",
        "Automatic relationship mapping",
        "Nominee assignment tracking",
        "Guardian designation for minors",
      ],
      color: "from-teal-500 to-emerald-500",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
    },
    {
      category: "organization",
      icon: Wallet,
      title: "Asset Aggregation",
      description:
        "Consolidate all your financial accounts in one secure place. Banks, mutual funds, insurance, EPF/PPF, demat accounts, and more.",
      benefits: [
        "Multi-institution support",
        "Real-time account linking",
        "Automated categorization",
        "Portfolio overview dashboard",
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      category: "organization",
      icon: FileText,
      title: "Family Vault",
      description:
        "Secure document storage for all important papers. CAS statements, policy PDFs, ID proofs, address proofs—all searchable and organized.",
      benefits: [
        "Encrypted cloud storage",
        "Advanced search capabilities",
        "Document expiry reminders",
        "Version control & history",
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      category: "organization",
      icon: Building2,
      title: "Property Management",
      description:
        "Track real estate holdings, property documents, rental agreements, and property tax records in one organized system.",
      benefits: [
        "Property deed storage",
        "Tax payment tracking",
        "Rental income monitoring",
        "Maintenance record keeping",
      ],
      color: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
    {
      category: "security",
      icon: Shield,
      title: "Bank-Grade Encryption",
      description:
        "Your data is protected with AES-256 encryption, the same standard used by banks and financial institutions worldwide.",
      benefits: [
        "End-to-end encryption",
        "Zero-knowledge architecture",
        "India-hosted data centers",
        "Regular security audits",
      ],
      color: "from-red-500 to-rose-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
    {
      category: "security",
      icon: Lock,
      title: "Access Controls",
      description:
        "Granular permission settings let you control who sees what. Share specific documents or entire portfolios with family members.",
      benefits: [
        "Role-based permissions",
        "Temporary access grants",
        "Activity audit logs",
        "Revocation controls",
      ],
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
    },
    {
      category: "security",
      icon: FileCheck,
      title: "Compliance Tracking",
      description:
        "Stay on top of KYC requirements, policy renewals, and regulatory compliance deadlines across all your accounts.",
      benefits: [
        "KYC status monitoring",
        "Renewal date tracking",
        "Automatic compliance alerts",
        "Document requirement checklists",
      ],
      color: "from-green-500 to-teal-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      category: "insights",
      icon: BarChart3,
      title: "Readiness Score",
      description:
        "Get a comprehensive score that measures how prepared your family is for any eventuality. Actionable insights to improve.",
      benefits: [
        "Real-time score calculation",
        "Gap identification",
        "Prioritized action items",
        "Progress tracking over time",
      ],
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
    },
    {
      category: "insights",
      icon: TrendingUp,
      title: "Portfolio Analytics",
      description:
        "Understand your wealth distribution across asset classes, identify concentration risks, and optimize your allocation.",
      benefits: [
        "Asset allocation visualization",
        "Risk assessment tools",
        "Performance tracking",
        "Diversification recommendations",
      ],
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
    },
    {
      category: "insights",
      icon: AlertTriangle,
      title: "Gap Analysis",
      description:
        "Identify missing nominees, outdated KYC, unsigned nominations, and other critical gaps that could cause problems.",
      benefits: [
        "Automated gap detection",
        "Severity classification",
        "Resolution guidance",
        "Completion tracking",
      ],
      color: "from-rose-500 to-pink-500",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-200",
    },
    {
      category: "insights",
      icon: Award,
      title: "Smart Recommendations",
      description:
        "Get personalized suggestions to improve your financial preparedness based on your unique family situation.",
      benefits: [
        "Context-aware suggestions",
        "Priority-based ordering",
        "Implementation guides",
        "Impact predictions",
      ],
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-50",
      borderColor: "border-violet-200",
    },
    {
      category: "sharing",
      icon: Share2,
      title: "Secure Sharing",
      description:
        "Share specific information with family members, advisors, or lawyers while maintaining complete control over access.",
      benefits: [
        "Selective information sharing",
        "Time-limited access",
        "View-only or edit permissions",
        "Instant revocation",
      ],
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
    },
    {
      category: "sharing",
      icon: Bell,
      title: "Family Notifications",
      description:
        "Keep everyone in the loop with smart notifications about important updates, deadlines, and required actions.",
      benefits: [
        "Customizable alerts",
        "Multi-channel notifications",
        "Reminder scheduling",
        "Emergency broadcasts",
      ],
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
    },
    {
      category: "sharing",
      icon: Eye,
      title: "Transparency Dashboard",
      description:
        "Family members get appropriate visibility into household finances based on their role and permissions.",
      benefits: [
        "Role-specific views",
        "Privacy-first design",
        "Customizable visibility",
        "Activity tracking",
      ],
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      category: "organization",
      icon: Search,
      title: "Intelligent Search",
      description:
        "Find any document, account, or piece of information instantly with powerful search and filtering capabilities.",
      benefits: [
        "Full-text search",
        "Advanced filters",
        "Tag-based organization",
        "Search history",
      ],
      color: "from-gray-500 to-slate-500",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200",
    },
    {
      category: "organization",
      icon: Download,
      title: "Export & Reports",
      description:
        "Generate comprehensive reports for tax filing, estate planning, or financial reviews. Export in multiple formats.",
      benefits: [
        "PDF & Excel exports",
        "Custom report builder",
        "Tax-ready formats",
        "Scheduled generation",
      ],
      color: "from-slate-500 to-gray-500",
      bgColor: "bg-slate-50",
      borderColor: "border-slate-200",
    },
    {
      category: "insights",
      icon: Clock,
      title: "Timeline View",
      description:
        "See your financial journey over time. Track when accounts were opened, policies purchased, and nominees updated.",
      benefits: [
        "Chronological visualization",
        "Event filtering",
        "Milestone tracking",
        "Future planning view",
      ],
      color: "from-amber-500 to-yellow-500",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
    },
    {
      category: "security",
      icon: Smartphone,
      title: "Multi-Factor Authentication",
      description:
        "Enhanced security with two-factor authentication, biometric login, and device management.",
      benefits: [
        "2FA/MFA support",
        "Biometric authentication",
        "Trusted device management",
        "Session monitoring",
      ],
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
    },
  ];

  const filteredFeatures =
    activeCategory === "all"
      ? features
      : features.filter((f) => f.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-emerald-50">
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgb(16, 216, 196) 1px, transparent 1px), linear-gradient(to bottom, rgb(16, 216, 196) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <button
            onClick={() => navigate("/")}
            className="group mb-8 flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Home</span>
          </button>

          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Complete Feature Set
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to organize, secure, and manage your family's
              financial life in one comprehensive platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {[
              "Asset discovery",
              "Digital vault",
              "Claim-readiness score",
              "Nominee & document hygiene",
            ].map((item) => (
              <div
                key={item}
                className="bg-white/90 border border-gray-200 rounded-2xl p-5 text-center text-sm font-semibold text-gray-700 shadow-sm hover:shadow-lg transition-all"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:shadow-md hover:scale-102 border border-gray-200"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFeatures.map((feature, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl p-8 border-2 ${feature.borderColor} hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-5 rounded-2xl blur-2xl group-hover:opacity-10 transition-opacity" />

                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                <div className="space-y-3">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-white rounded-3xl p-12 shadow-2xl border-2 border-teal-200">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 mb-6">
                <Heart className="w-10 h-10 text-white" />
              </div>

              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Ready to Get Started?
              </h2>

              <p className="text-xl text-gray-600 mb-8">
                Join thousands of families who have organized their financial
                life with SecuFi. Setup takes just 5 minutes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://my.secufi.in/login"
                  className="group relative px-10 py-5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl font-semibold text-lg text-white overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
                >
                  <span className="relative z-10">Start Free Trial</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>

                <button
                  onClick={() => navigate("/advisor-signup")}
                  className="px-10 py-5 bg-white border-2 border-teal-500 text-teal-600 rounded-2xl font-semibold text-lg hover:bg-teal-50 transition-all duration-300"
                >
                  Schedule a Demo
                </button>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-500" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-500" />
                  <span>Free 30-day trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-500" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <Footer />
      </div>
    </div>
  );
};

export default AllFeatures;
