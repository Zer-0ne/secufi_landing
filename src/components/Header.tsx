import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-30 w-full">
      <div className="absolute inset-0 bg-white/80 backdrop-blur-md border-b border-white/60 shadow-sm" />
      <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 group"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-blue-400 rounded-xl blur-md opacity-50 group-hover:opacity-70 transition-opacity" />
            <img
              src="./Images/logo.jpeg"
              alt="SecuFi Logo"
              className="relative h-10 w-10 rounded-xl border border-white shadow-lg"
            />
          </div>
          <span className="text-xl font-bold text-gray-900">SecuFi</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700">
          <a href="/#about" className="hover:text-teal-600 transition-colors">
            About
          </a>
          <a href="/#features" className="hover:text-teal-600 transition-colors">
            Features
          </a>
          <a
            href="/#for-advisors"
            className="hover:text-teal-600 transition-colors"
          >
            For Advisors
          </a>
          <a
            href="/#security"
            className="hover:text-teal-600 transition-colors"
          >
            Security
          </a>
          <Link to="/contact" className="hover:text-teal-600 transition-colors">
            Contact
          </Link>
          <div className="relative group">
            <button
              type="button"
              className="flex items-center gap-1 text-gray-700 hover:text-teal-600 transition-colors"
            >
              Legal
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute right-0 mt-3 w-56 rounded-2xl border border-gray-200 bg-white shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all">
              <div className="px-3 py-2">
                <Link
                  to="/privacy-policy"
                  className="block px-3 py-2 rounded-xl text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms-of-service"
                  className="block px-3 py-2 rounded-xl text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-gray-200 bg-white/90 text-gray-700 shadow-sm"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden relative bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-6 grid gap-3 text-sm font-medium text-gray-700">
            <a
              href="/#about"
              className="rounded-xl px-4 py-2 bg-gray-50 hover:bg-teal-50 hover:text-teal-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="/#features"
              className="rounded-xl px-4 py-2 bg-gray-50 hover:bg-teal-50 hover:text-teal-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a
              href="/#for-advisors"
              className="rounded-xl px-4 py-2 bg-gray-50 hover:bg-teal-50 hover:text-teal-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              For Advisors
            </a>
            <a
              href="/#security"
              className="rounded-xl px-4 py-2 bg-gray-50 hover:bg-teal-50 hover:text-teal-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Security
            </a>
            <Link
              to="/contact"
              className="rounded-xl px-4 py-2 bg-gray-50 hover:bg-teal-50 hover:text-teal-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="border-t border-gray-200 pt-3 mt-2 text-xs uppercase tracking-[0.2em] text-gray-400">
              Legal
            </div>
            <Link
              to="/privacy-policy"
              className="rounded-xl px-4 py-2 bg-gray-50 hover:bg-teal-50 hover:text-teal-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="rounded-xl px-4 py-2 bg-gray-50 hover:bg-teal-50 hover:text-teal-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
