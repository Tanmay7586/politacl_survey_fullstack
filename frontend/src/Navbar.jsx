import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", text: "Home", exact: true },
    { to: "/poll-survey", text: "Poll & Survey" },
    { to: "/upcoming-events", text: "Upcoming Political Events" },
    { to: "/create-poll", text: "Create Poll & Survey" },
    { to: "/blog", text: "Blog" },
    { to: "/contact", text: "Contact" },
  ];

  return (
    <nav className="bg-indigo-600 text-white sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-semibold">Logo</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    exact={link.exact}
                    className="hover:text-gray-200 transition-colors duration-200"
                    activeClassName="font-bold"
                  >
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Hamburger Menu Button - Visible below 768px */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-white"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <ul className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    exact={link.exact}
                    className="block px-3 py-2 rounded-md hover:bg-indigo-700"
                    activeClassName="bg-indigo-700 font-bold"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
