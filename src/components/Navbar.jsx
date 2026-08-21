import { useState } from "react";

import {
  ArrowRight,
  Menu,
  Search,
  X,
} from "lucide-react";

import {
  Link,
  NavLink,
} from "react-router-dom";

const links = [
  {
    label: "Service",
    to: "/services",
  },
  {
    label: "Solutions",
    to: "/services",
  },
  {
    label: "Hire & Teams",
    to: "/teams",
  },
  {
    label: "Company",
    to: "/about",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute left-0 right-0 top-0 z-50">

      <div className="section-shell">

        <div className="flex h-[76px] items-center justify-between gap-5">

          {/* Logo */}

          <Link
            to="/"
            className="shrink-0"
            aria-label="ValueCoders home"
          >
            <div className="flex items-center gap-2">

              <div className="relative h-11 w-10">

                <span className="absolute left-0 top-1 h-5 w-5 rotate-45 bg-white" />

                <span className="absolute left-3 top-4 h-5 w-5 rotate-45 bg-blue-500" />

                <span className="absolute left-5 top-0 h-5 w-5 rotate-45 bg-slate-300" />

              </div>

              <div className="leading-none">

                <div className="text-[19px] font-extrabold tracking-tight text-white">
                  Value
                  <span className="text-yellow-400">
                    Coders
                  </span>

                  <sup className="ml-0.5 text-[7px] text-gray-300">
                    TM
                  </sup>
                </div>

                <div className="mt-1 text-[6px] tracking-[.18em] text-slate-300">
                  ENGINEERING VELOCITY
                </div>

              </div>

            </div>
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-7 lg:flex">

            {links.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className="text-[12px] font-medium text-white/90 transition hover:text-white"
              >
                {link.label}
              </NavLink>
            ))}

          </nav>

          {/* Desktop Actions */}

          <div className="hidden items-center gap-3 lg:flex">

            <div className="flex h-9 w-[145px] items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 text-[10px] text-white/70 backdrop-blur">
              <Search size={13} className="shrink-0" />

              <input
                type="text"
                placeholder="Search or describe what..."
                className="min-w-0 flex-1 bg-transparent text-[10px] text-white outline-none placeholder:text-white/70"
              />

              <kbd className="ml-auto shrink-0 rounded bg-white/10 px-1.5 py-0.5 text-[8px]">
                ⌘ K
              </kbd>
            </div>

            <Link
              to="/contact"
              className="flex h-9 items-center gap-2 rounded-full bg-yellow-400 px-4 text-[11px] font-bold text-slate-950 transition hover:bg-yellow-300"
            >
              Get an Estimate

              <ArrowRight size={13} />

            </Link>

          </div>

          {/* Mobile Menu Button */}

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="rounded-lg border border-white/20 p-2 text-white lg:hidden"
            aria-label="Toggle navigation"
          >
            {open ? (
              <X size={21} />
            ) : (
              <Menu size={21} />
            )}
          </button>

        </div>

        {/* Mobile Menu */}

        {open && (
          <div className="rounded-2xl border border-white/10 bg-brand-950/95 p-4 shadow-2xl backdrop-blur lg:hidden">

            <div className="grid gap-2">

              {links.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-white hover:bg-white/10"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-xl bg-yellow-400 px-4 py-3 text-center text-sm font-bold text-slate-950"
              >
                Get an Estimate
              </Link>

            </div>

          </div>
        )}

      </div>

    </header>
  );
}