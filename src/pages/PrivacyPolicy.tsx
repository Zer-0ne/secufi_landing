import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { setPageMetadata } from "../utils/seo";

const PrivacyPolicy = () => {
  useEffect(() => {
    setPageMetadata({
      title: "SecuFi Privacy Policy",
      description:
        "Read the SecuFi Privacy Policy, including Google OAuth and Google APIs disclosure details.",
      canonical: "https://www.secufi.in/privacy-policy",
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
            Privacy Policy (Google OAuth & Google APIs Disclosure)
          </h1>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: 07 Jan 2026
          </p>
        </div>

        <section className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            This Privacy Policy explains how SecuFi collects, uses, discloses,
            and protects personal information when you access or use the SecuFi
            website, applications, and related services (collectively, the
            "Services"). It also provides specific disclosures about our use of
            Google OAuth and Google APIs.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            Information We Collect
          </h2>
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

          <h2 className="text-2xl font-bold text-gray-900">
            How We Use Information
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Provide and improve the Services.</li>
            <li>Detect, prevent, and respond to security issues.</li>
            <li>Comply with legal and regulatory obligations.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">
            Google OAuth & Google APIs Disclosure
          </h2>
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

          <h2 className="text-2xl font-bold text-gray-900">Data Sharing</h2>
          <p>
            We share information with trusted service providers that help us
            operate the Services, subject to confidentiality and security
            obligations. We may also disclose information if required by law or
            to protect SecuFi, our users, or the public.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Data Retention</h2>
          <p>
            We retain personal information only as long as necessary to provide
            the Services and meet legal obligations. You may request deletion of
            your data by contacting us.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Security</h2>
          <p>
            We maintain technical and organizational safeguards designed to
            protect your information. No system is completely secure, and we
            cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Your Choices</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Access, correct, or delete your information.</li>
            <li>Manage consent-based access to data sources.</li>
            <li>Opt out of non-essential communications.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us.
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

export default PrivacyPolicy;
