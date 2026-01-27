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
            Privacy Policy
          </h2>
          <p className="text-sm text-gray-500 mt-2">Last updated: 23 Jan 2026</p>

          <div className="mt-6 space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              This Privacy Policy explains how SecuFi ("SecuFi", "we", "us", or "our") collects, uses, discloses, and protects personal information when you access or use the SecuFi website, applications, and related services (collectively, the "Services"). This policy also provides specific disclosures regarding our use of Google OAuth and Google APIs, including the Gmail API.
            </p>

            <h3 className="text-2xl font-bold text-gray-900">
              Information We Collect
            </h3>
            <p>We collect the following categories of information:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Account Information:</strong> Name, email address, and other information you provide when creating or managing your account.
              </li>
              <li>
                <strong>Usage and Device Information:</strong> Log data, device information, and usage data required to operate, secure, and improve the Services.
              </li>
              <li>
                <strong>Gmail Data (Consent-Based):</strong> With your explicit consent, SecuFi accesses limited Gmail data using the Gmail API solely for the purposes described below.
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900">How We Use Information</h3>
            <p>We use personal information to:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Provide, operate, and improve the Services.</li>
              <li>Build and maintain a user's financial asset vault.</li>
              <li>Detect, prevent, and respond to security issues and abuse.</li>
              <li>Comply with applicable legal and regulatory obligations.</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900">
              Google OAuth & Gmail API Disclosure
            </h3>
            <p>
              SecuFi's use and transfer of information received from Google APIs complies with the Google API Services User Data Policy, including the Limited Use requirements.
            </p>
            
            <h4 className="text-xl font-bold text-gray-900">Use of Gmail API</h4>
            <ul className="list-disc pl-6 space-y-3">
              <li>SecuFi uses the Gmail API with read-only access (gmail.readonly) only after you grant explicit permission.</li>
              <li>Gmail access is used solely to identify financial transaction emails such as investment confirmations, insurance policies, and bank statements, in order to build your financial asset vault.</li>
              <li>Access is user-initiated and time-bounded. By default, SecuFi retrieves emails from the most recent 30 days. You may explicitly extend this window up to 90 days in increments of 30 days.</li>
            </ul>

            <h4 className="text-xl font-bold text-gray-900">Data Minimization</h4>
            <ul className="list-disc pl-6 space-y-3">
              <li>SecuFi identifies financial emails using limited metadata such as subject lines and message snippets.</li>
              <li>Only emails identified as financial are processed and stored.</li>
              <li>All non-financial emails are discarded immediately and are not stored or retained.</li>
            </ul>

            <h4 className="text-xl font-bold text-gray-900">Restrictions on Use</h4>
            <ul className="list-disc pl-6 space-y-3">
              <li>SecuFi does not modify, delete, send, or monitor emails.</li>
              <li>SecuFi does not use Gmail data for advertising, marketing, or profiling.</li>
              <li>SecuFi does not sell Google user data or share it with third parties for advertising purposes.</li>
            </ul>

            <h4 className="text-xl font-bold text-gray-900">Revocation of Access</h4>
            <p>You may revoke SecuFi's access to your Google account at any time via your Google Account settings or by disconnecting your Google account within the SecuFi application.</p>

            <h3 className="text-2xl font-bold text-gray-900">Data Sharing</h3>
            <p>
              We may share information with trusted service providers that assist in operating the Services, subject to contractual confidentiality and security obligations. We may also disclose information if required by law or to protect the rights, safety, or security of SecuFi, our users, or the public.
            </p>

            <h3 className="text-2xl font-bold text-gray-900">Data Retention and Deletion</h3>
            <p>
              We retain personal information only for as long as necessary to provide the Services and meet legal or regulatory requirements.
              You may delete your SecuFi account at any time from within the application. Upon account deletion, all associated personal data, including Gmail-derived data, is permanently deleted from our systems.
            </p>

            <h3 className="text-2xl font-bold text-gray-900">Security</h3>
            <p>
              We implement reasonable technical and organizational safeguards designed to protect personal information.
            </p>
            
            <h4 className="text-xl font-bold text-gray-900">Data Encryption</h4>
            <p>
              SecuFi uses industry-standard encryption and secure transmission protocols to protect personal information, including Gmail-derived data, both in transit and at rest. Access to such data is restricted to authorized systems and personnel and protected using appropriate technical and organizational controls.
              While we take security seriously, no system can be guaranteed to be completely secure.
            </p>

            <h3 className="text-2xl font-bold text-gray-900">Your Choices</h3>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Access, correct, or delete your personal information.</li>
              <li>Manage and revoke consent-based access to connected data sources such as Gmail.</li>
              <li>Delete your account and associated data from within the application.</li>
              <li>Opt out of non-essential communications.</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900">Contact Us</h3>
            <p>If you have questions about this Privacy Policy or our data practices, please contact us at info@secufi.in.</p>
          </div>
        </section>

        <div className="my-12 border-t border-gray-200" />

        <section id="terms" className="scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-900">
            Terms of Service (Google OAuth Verification)
          </h2>
          <p className="text-sm text-gray-500 mt-2">Last updated: 23 Jan 2026</p>

          <div className="mt-6 space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              These Terms of Service ("Terms") govern your access to and use of the SecuFi website, applications, and related services (collectively, the "Services"). By accessing or using the Services, you agree to these Terms.
            </p>

            <h3 className="text-2xl font-bold text-gray-900">Eligibility</h3>
            <p>
              You must be legally capable of entering into these Terms and must comply with applicable laws and regulations when using the Services.
            </p>

            <h3 className="text-2xl font-bold text-gray-900">Account Access</h3>
            <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide accurate and up-to-date information.</p>

            <h3 className="text-2xl font-bold text-gray-900">Acceptable Use</h3>
            <p>You agree to:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Use the Services only for lawful purposes.</li>
              <li>Not interfere with or disrupt the operation or security of the Services.</li>
              <li>Not attempt to access data without proper authorization.</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900">Google OAuth</h3>
            <p>
              When you connect a Google account, you authorize SecuFi to access specific Google data strictly in accordance with your consent and applicable Google API policies. You may revoke this access at any time via your Google Account settings or within the SecuFi application.
            </p>

            <h3 className="text-2xl font-bold text-gray-900">Intellectual Property</h3>
            <p>
              All content, trademarks, and intellectual property within the Services are owned by SecuFi or its licensors. You may not copy, modify, or distribute any portion of the Services without authorization.
            </p>

            <h3 className="text-2xl font-bold text-gray-900">Termination</h3>
            <p>
              We may suspend or terminate access to the Services if you violate these Terms or pose a security or legal risk. You may discontinue use of the Services at any time by deleting your account.
            </p>

            <h3 className="text-2xl font-bold text-gray-900">Disclaimers and Limitation of Liability</h3>
            <p>
              The Services are provided on an "as is" basis without warranties of any kind. To the maximum extent permitted by law, SecuFi shall not be liable for indirect, incidental, or consequential damages arising from use of the Services.
            </p>

            <h3 className="text-2xl font-bold text-gray-900">Contact Us</h3>
            <p>If you have questions about these Terms, please contact us at info@secufi.in.</p>
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
