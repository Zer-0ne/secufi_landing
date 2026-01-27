import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative z-20 pointer-events-auto mt-20 pt-12 border-t border-gray-200">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <Link to="/" className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-lg">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center shadow-md">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-gray-900">SecuFi</span>
        </Link>

        <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
          <Link to="/about" className="transition-colors hover:text-teal-600 hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded">
            About
          </Link>
          <Link
            to="/features"
            className="transition-colors hover:text-teal-600 hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded"
          >
            Features
          </Link>
          <Link
            to="/advisors"
            className="transition-colors hover:text-teal-600 hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded"
          >
            For Advisors
          </Link>
          <Link
            to="/security"
            className="transition-colors hover:text-teal-600 hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded"
          >
            Security
          </Link>
          <Link to="/legal#privacy" className="transition-colors hover:text-teal-600 hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded">
            Privacy
          </Link>
          <Link to="/legal#terms" className="transition-colors hover:text-teal-600 hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded">
            Terms
          </Link>
          <Link to="/contact" className="transition-colors hover:text-teal-600 hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded">
            Contact
          </Link>
        </div>

        <div className="text-sm text-gray-600">
          © 2025 SecuFi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
