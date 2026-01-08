import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { setPageMetadata } from "../utils/seo";

const TermsOfService = () => {
  useEffect(() => {
    setPageMetadata({
      title: "SecuFi Terms of Service",
      description:
        "Read the SecuFi Terms of Service for Google OAuth verification and use of the platform.",
      canonical: "https://www.secufi.in/terms-of-service",
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-emerald-50 text-gray-900">
      <main id="top" className="relative max-w-5xl mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="text-sm font-semibold text-teal-700 uppercase tracking-[0.2em]">
            SecuFi
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Terms of Service (for Google OAuth Verification)
          </h1>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: 07 Jan 2026
          </p>
        </div>

        <section className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            These Terms of Service ("Terms") govern your access to and use of
            the SecuFi website, applications, and related services
            (collectively, the "Services"). By accessing or using the Services,
            you agree to these Terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Eligibility</h2>
          <p>
            You must be legally capable of entering into these Terms and comply
            with applicable laws and regulations when using the Services.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Account Access</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              You are responsible for maintaining the confidentiality of your
              account credentials.
            </li>
            <li>
              You agree to provide accurate information and keep your account
              details up to date.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">Acceptable Use</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Use the Services only for lawful purposes.</li>
            <li>Do not attempt to interfere with or disrupt the Services.</li>
            <li>
              Do not misuse or attempt to access data without proper
              authorization.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">
            Google OAuth Verification
          </h2>
          <p>
            When you connect a Google account, you authorize SecuFi to access
            specific Google data only to provide the Services you request. You
            may revoke access at any time in your Google account settings.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            Intellectual Property
          </h2>
          <p>
            All content, trademarks, and intellectual property in the Services
            are owned by SecuFi or its licensors. You may not copy, modify, or
            distribute any part of the Services without permission.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Termination</h2>
          <p>
            We may suspend or terminate your access to the Services if you
            violate these Terms or pose a security risk. You may discontinue
            use of the Services at any time.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Disclaimers</h2>
          <p>
            The Services are provided "as is" without warranties of any kind,
            express or implied. SecuFi disclaims all warranties to the maximum
            extent permitted by law.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            Limitation of Liability
          </h2>
          <p>
            SecuFi will not be liable for any indirect, incidental, special, or
            consequential damages arising from your use of the Services.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
          <p>
            If you have questions about these Terms, please contact us.
          </p>
        </section>

        <div className="mt-16 border-t border-gray-200 pt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="text-gray-700">
            Need help?{" "}
            <Link to="/contact" className="text-teal-600 font-semibold">
              Contact us
            </Link>
            .
          </div>
          <div className="flex flex-wrap gap-6 text-sm font-semibold text-teal-700">
            <Link to="/" className="hover:text-teal-900">
              Return to Home
            </Link>
            <Link to="/contact" className="hover:text-teal-900">
              Contact
            </Link>
            <a href="#top" className="hover:text-teal-900">
              Back to top
            </a>
          </div>
        </div>
      </main>
      <div className="max-w-5xl mx-auto px-6 pb-12">
        <Footer />
      </div>
    </div>
  );
};

export default TermsOfService;
