import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { name: "Features", path: "/features" },
  { name: "Use Cases", path: "/use-cases" },
  { name: "Pricing", path: "/pricing" },
  { name: "Security", path: "/security" },
  { name: "Resources", path: "/resources" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full h-fit top-0 left-0 right-0 z-50 bg-[#3E5F44] text-white shadow-md">
      <div className="mx-auto max-w-7xl px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-bold text-brandLight"
          >
            EVENTLIVE
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${
                    isActive
                      ? "text-brand-light"
                      : "text-white/100 hover:text-brand-light"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/login"
              className="text-sm font-medium text-white/100 hover:text-brand-light"
            >
              Login
            </Link>

            <Link
              to="/get-started"
              className="rounded-lg bg-[#93da97] px-10 py-3 text-sm font-bold text-brand-dark hover:opacity-50 transition"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden rounded-md p-2 text-white hover:bg-white/20 transition"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-brand">
          <nav className="space-y-2 px-4 py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block text-sm font-medium ${
                    isActive
                      ? "text-brand-dark bg-[#93da97] rounded px-3 py-2"
                      : "text-white/90 hover:text-brand-dark hover:bg-[#93da97] rounded px-3 py-2"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <NavLink
              to="/login"
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-white/90 hover:bg-[#93da97] rounded px-3 py-2"
            >
              Login
            </NavLink>

            <NavLink
              to="/get-started"
              onClick={() => setOpen(false)}
              className="block rounded-lg bg-[#93da97] px-4 py-2 text-center text-sm font-semibold text-brand-dark"
            >
              Get Started
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
