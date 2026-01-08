import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-20 pt-12 border-t border-gray-200">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center shadow-md">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-gray-900">SecuFi</span>
        </Link>

        <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
          <Link to="/about" className="hover:text-teal-600 transition-colors">
            About
          </Link>
          <Link
            to="/features"
            className="hover:text-teal-600 transition-colors"
          >
            Features
          </Link>
          <Link
            to="/for-advisors"
            className="hover:text-teal-600 transition-colors"
          >
            For Advisors
          </Link>
          <Link
            to="/security"
            className="hover:text-teal-600 transition-colors"
          >
            Security
          </Link>
          <Link to="/privacy-policy" className="hover:text-teal-600 transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms-of-service" className="hover:text-teal-600 transition-colors">
            Terms of Service
          </Link>
          <Link to="/contact" className="hover:text-teal-600 transition-colors">
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
