import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SignOutButton } from "@clerk/clerk-react";

const Navbar = () => {
  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        bg-zinc-950/80 backdrop-blur
        border-b border-zinc-900
      "
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO — COLOR CHANGED ONLY */}
        <Link
          to="/"
          className="
            text-xl font-bold tracking-tight
            bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400
            bg-clip-text text-transparent
          "
        >
          CodiAI
        </Link>

        {/* NAV LINKS + SIGN OUT (UNCHANGED STRUCTURE) */}
        <div className="flex items-center gap-8 text-sm font-medium">
          {[
            { name: "Home", path: "/" },
            { name: "Learning", path: "/learning" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
          ].map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `
                transition-colors
                ${
                  isActive
                    ? "text-red-500"
                    : "text-zinc-300 hover:text-red-400"
                }
                `
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* SIGN OUT — LEFT AS IS */}
          <SignOutButton>
            <button className="text-zinc-300 hover:text-red-400 transition">
              Sign out
            </button>
          </SignOutButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
