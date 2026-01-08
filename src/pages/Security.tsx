import { useEffect } from "react";
import Footer from "../components/Footer";
import { setPageMetadata } from "../utils/seo";
import { ShieldCheck, Lock, Eye, Server } from "lucide-react";

const securityHighlights = [
  {
    icon: ShieldCheck,
    title: "HTTPS everywhere",
    description:
      "All traffic is protected with HTTPS to keep data secure in transit.",
  },
  {
    icon: Lock,
    title: "Encryption at rest & transit",
    description:
      "Sensitive data is encrypted both while stored and while moving across systems.",
  },
  {
    icon: Eye,
    title: "Google OAuth consent-based access",
    description:
      "Access to Google data is only granted after explicit consent and can be revoked any time.",
  },
  {
    icon: Server,
    title: "No data selling or ads",
    description:
      "SecuFi does not sell user data and does not run advertising based on your data.",
  },
];

const Security = () => {
  useEffect(() => {
    setPageMetadata({
      title: "SecuFi Security",
      description:
        "Learn how SecuFi safeguards your information with layered security and transparent consent.",
      canonical: "https://www.secufi.in/security",
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-emerald-50 text-gray-900">
      <main className="relative max-w-6xl mx-auto px-6 py-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-16 left-1/3 w-72 h-72 bg-gradient-to-br from-blue-200/40 to-teal-200/40 rounded-full blur-[120px] floating-orb" />
          <div className="absolute bottom-10 right-12 w-96 h-96 bg-gradient-to-tr from-emerald-200/50 to-cyan-200/40 rounded-full blur-[140px] floating-orb" />
          <div className="absolute top-24 right-16 w-24 h-24 border-2 border-teal-300/40 rounded-3xl rotate-45 floating-shape" />
        </div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 border border-teal-200 rounded-full shadow-sm">
            <ShieldCheck className="w-4 h-4 text-teal-600" />
            <span className="text-xs font-semibold tracking-[0.2em] text-teal-700 uppercase">
              Security
            </span>
          </div>

          <h1 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
            Security you can feel confident about.
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl leading-relaxed">
            Protecting your family’s financial information is central to
            everything we do. Our security approach aligns with the principles
            described in the Privacy Policy and keeps access transparent and
            consent-based.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {securityHighlights.map((item) => (
              <div
                key={item.title}
                className="bg-white/90 border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center shadow-md mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <div className="max-w-6xl mx-auto px-6 pb-12">
        <Footer />
      </div>
    </div>
  );
};

export default Security;
