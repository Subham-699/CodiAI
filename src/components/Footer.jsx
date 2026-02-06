// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#0b0b12] text-white border-t border-white/10 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div>
            <Link
              to="/"
              className="text-2xl font-bold tracking-tight
              bg-gradient-to-r from-purple-400 via-red-500 to-red-700
              bg-clip-text text-transparent"
            >
              CodiAI
            </Link>

            <p className="mt-3 text-gray-400 text-sm leading-relaxed">
              Empowering the next generation of learners through personalized,
              AI-driven educational experiences.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
              Platform
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-purple-400 transition text-sm">
                  All Courses
                </Link>
              </li>
              <li>
                <Link to="/learning" className="text-gray-300 hover:text-purple-400 transition text-sm">
                  AI Tutor
                </Link>
              </li>
              <li>
                <Link to="/roadmap" className="text-gray-300 hover:text-purple-400 transition text-sm">
                  Learning Roadmap
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-purple-400 transition text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-purple-400 transition text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-purple-400 transition text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
              Stay Connected
            </h4>

            <p className="text-gray-400 text-sm mb-3">
              Join our AI newsletter for updates.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="bg-[#0e0e16] border border-white/10
                text-gray-200 text-sm rounded-l-lg px-4 py-2
                focus:outline-none focus:border-purple-500 w-full"
              />
              <button
                className="bg-gradient-to-r from-purple-500 to-blue-500
                text-black px-4 py-2 rounded-r-lg font-semibold
                hover:opacity-90 transition"
              >
                →
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10
          flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} CodiAI. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link to="/privacy" className="text-gray-500 hover:text-white transition text-xs">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-white transition text-xs">
              Terms of Service
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
