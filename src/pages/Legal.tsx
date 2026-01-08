import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import { setPageMetadata } from "../utils/seo";

const Legal = () => {
  const location = useLocation();

  useEffect(() => {
    setPageMetadata({
      title: "SecuFi Legal",
      description:
        "Read the SecuFi Privacy Policy and Terms of Service for Google OAuth verification.",
      canonical: "https://www.secufi.in/legal",
    });
  }, []);

  useEffect(() => {
    if (!location.hash) {
      return;
    }
    const id = location.hash.replace("#", "");
    const target = document.getElementById(id);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-emerald-50 text-gray-900">
      <main id="top" className="relative max-w-5xl mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="text-sm font-semibold text-teal-700 uppercase tracking-[0.2em]">
            SecuFi Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Privacy Policy & Terms of Service
          </h1>
          <p className="text-sm text-gray-500 mt-4">
            This page contains the full Privacy Policy and Terms of Service for
            SecuFi.
          </p>
        </div>

        <div className="mb-12">
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-teal-700">
            <a href="#privacy" className="hover:underline underline-offset-4">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:underline underline-offset-4">
              Terms of Service
            </a>
          </div>
          <details className="md:hidden border border-gray-200 rounded-2xl p-4 bg-white/70">
            <summary className="cursor-pointer font-semibold text-teal-700">
              Jump to section
            </summary>
            <div className="mt-3 flex flex-col gap-2 text-sm font-semibold text-teal-700">
              <a href="#privacy" className="hover:underline underline-offset-4">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:underline underline-offset-4">
                Terms of Service
              </a>
            </div>
          </details>
        </div>

        <section id="privacy" className="scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-900">
            Privacy Policy (Google OAuth & Google APIs Disclosure)
          </h2>
          <p className="text-sm text-gray-500 mt-2">Last updated: 07 Jan 2026</p>

          <div className="mt-6 space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              This Privacy Policy explains how SecuFi collects, uses, discloses,
              and protects personal information when you access or use the SecuFi
              website, applications, and related services (collectively, the
              "Services"). It also provides specific disclosures about our use of
              Google OAuth and Google APIs.
            </p>

            <h3 className="text-2xl font-bold text-gray-900">
              Information We Collect
            </h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                Account information such as name, email address, and phone number.
              </li>
              <li>
                Device, log, and usage information to operate and secure the
                Services.
              </li>
              <li>
                Consent-based access to financial documents or communications
                (e.g., emails or SMS) only when you explicitly authorize it.
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900">How We Use Information</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>Provide and improve the Services.</li>
              <li>Detect, prevent, and respond to security issues.</li>
              <li>Comply with legal and regulatory obligations.</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900">
              Google OAuth & Google APIs Disclosure
            </h3>
            <p>
              SecuFi’s use and transfer of information received from Google APIs
              to any other app will adhere to the Google API Services User Data
              Policy, including the Limited Use requirements. We only request the
              minimum scopes necessary to provide the Services, and we do not use
              Google user data for advertising.
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                Google OAuth access is used only after you grant explicit consent.
              </li>
              <li>
                We do not sell Google user data to third parties or use it for
                marketing purposes.
              </li>
              <li>
                Access to Google user data can be revoked at any time in your
                Google account settings.
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900">Data Sharing</h3>
            <p>
              We share information with trusted service providers that help us
              operate the Services, subject to confidentiality and security
              obligations. We may also disclose information if required by law or
              to protect SecuFi, our users, or the public.
            </p>

            <h3 className="text-2xl font-bold text-gray-900">Data Retention</h3>
            <p>
              We retain personal information only as long as necessary to provide
              the Services and meet legal obligations. You may request deletion of
              your data by contacting us.
            </p>

            <h3 className="text-2xl font-bold text-gray-900">Security</h3>
            <p>
              We maintain technical and organizational safeguards designed to
              protect your information. No system is completely secure, and we
              cannot guarantee absolute security.
            </p>

            <h3 className="text-2xl font-bold text-gray-900">Your Choices</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>Access, correct, or delete your information.</li>
              <li>Manage consent-based access to data sources.</li>
              <li>Opt out of non-essential communications.</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900">Contact Us</h3>
            <p>If you have questions about this Privacy Policy, please contact us.</p>
          </div>
        </section>

        <div className="my-12 border-t border-gray-200" />

        <section id="terms" className="scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-900">
            Terms of Service (for Google OAuth Verification)
          </h2>
          <p className="text-sm text-gray-500 mt-2">Last updated: 07 Jan 2026</p>

          <div className="mt-6 space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              These Terms of Service ("Terms") govern your access to and use of
              the SecuFi website, applications, and related services
              (collectively, the "Services"). By accessing or using the Services,
              you agree to these Terms.
            </p>

            <h3 className="text-2xl font-bold text-gray-900">Eligibility</h3>
            <p>
              You must be legally capable of entering into these Terms and comply
              with applicable laws and regulations when using the Services.
            </p>

            <h3 className="text-2xl font-bold text-gray-900">Account Access</h3>
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

            <h3 className="text-2xl font-bold text-gray-900">Acceptable Use</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>Use the Services only for lawful purposes.</li>
              <li>Do not attempt to interfere with or disrupt the Services.</li>
              <li>
                Do not misuse or attempt to access data without proper
                authorization.
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900">
              Google OAuth Verification
            </h3>
            <p>
              When you connect a Google account, you authorize SecuFi to access
              specific Google data only to provide the Services you request. You
              may revoke access at any time in your Google account settings.
            </p>

            <h3 className="text-2xl font-bold text-gray-900">Intellectual Property</h3>
            <p>
              All content, trademarks, and intellectual property in the Services
              are owned by SecuFi or its licensors. You may not copy, modify, or
              distribute any part of the Services without permission.
            </p>

            <h3 className="text-2xl font-bold text-gray-900">Termination</h3>
            <p>
              We may suspend or terminate your access to the Services if you
              violate these Terms or pose a security risk. You may discontinue
              use of the Services at any time.
            </p>

            <h3 className="text-2xl font-bold text-gray-900">Disclaimers</h3>
            <p>
              The Services are provided "as is" without warranties of any kind,
              express or implied. SecuFi disclaims all warranties to the maximum
              extent permitted by law.
            </p>

            <h3 className="text-2xl font-bold text-gray-900">
              Limitation of Liability
            </h3>
            <p>
              SecuFi will not be liable for any indirect, incidental, special, or
              consequential damages arising from your use of the Services.
            </p>

            <h3 className="text-2xl font-bold text-gray-900">Contact Us</h3>
            <p>If you have questions about these Terms, please contact us.</p>
          </div>
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
            <Link to="/" className="hover:underline underline-offset-4">
              Return to Home
            </Link>
            <Link to="/contact" className="hover:underline underline-offset-4">
              Contact
            </Link>
            <a href="#top" className="hover:underline underline-offset-4">
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

export default Legal;
