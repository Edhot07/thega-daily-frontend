import { useState } from "react";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="w-full text-white  backdrop-blur-md sticky top-0 z-50">
      <div className="relative max-w-7xl flex items-center justify-between mx-auto px-4 py-3">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img
            src="../../public/thegadaily.png"
            className="size-12 rounded-full"
            alt="Logo"
          />
          <span className="text-xl font-semibold">Thega Daily</span>
        </a>

        {/* Hamburger button */}
        <button
          onClick={toggleMenu}
          aria-expanded={isOpen}
          className="md:hidden p-2 rounded hover:bg-white/10 transition"
        >
          {isOpen ? (
            /* Close icon */
            <svg className="w-6 h-6" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            /* Hamburger icon */
            <svg className="w-6 h-6" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Menu */}
        <div
          className={`
    absolute md:static text-center
    top-full left-0
    w-full md:w-auto
    bg-cyan-800 md:bg-transparent
    rounded-b-xl
    overflow-hidden

    transform transition-all duration-500 ease-in-out origin-top

    ${
      isOpen
        ? "translate-y-0 opacity-100 max-h-96"
        : "-translate-y-full opacity-0 max-h-0"
    }

    md:translate-y-0 md:opacity-100 md:max-h-full
  `}
        >
          <ul
            className="
    flex flex-col md:flex-row
    gap-2 md:gap-6
    p-4 md:p-0
    font-medium
  "
          >
            <li>
              <a
                href="#home"
                onClick={closeMenu}
                className="block py-2 hover:text-blue-400 transition"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={closeMenu}
                className="block py-2 hover:text-blue-400 transition"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#services"
                onClick={closeMenu}
                className="block py-2 hover:text-blue-400 transition"
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={closeMenu}
                className="block py-2 hover:text-blue-400 transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
