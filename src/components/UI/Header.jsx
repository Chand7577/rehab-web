import Logo from "../../assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <>
      <header className="border-b border-gray-200 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={Logo} width={64} height={64} alt="Logo" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation - visible from 640px */}
          <nav className="hidden sm:flex sm:items-center sm:gap-8">
            <Link to="/"
              href="#Home"
              className="font-medium text-gray-700 transition-colors hover:text-indigo-600"
            >
              Home
            </Link>
            <Link to="/programs"
              href="#Programs"
              className="font-medium text-gray-700 transition-colors hover:text-indigo-600"
            >
              Programs
            </Link>
            <Link to="/why"
              href="#Why"
              className="font-medium text-gray-700 transition-colors hover:text-indigo-600"
            >
              Why Us
            </Link>
            <Link to="/about"
              href="#Abt"
              className="font-medium text-gray-700 transition-colors hover:text-indigo-600"
            >
              About Us
            </Link>
            <Link to="/contact"
              href="#Contact"
              className="font-medium text-gray-700 transition-colors hover:text-indigo-600"
            >
              Contact Us
            </Link>
          </nav>

          {/* Actions + Hamburger */}
          <div className="flex items-center gap-5">
            <button className="hidden rounded-full bg-green-400 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 md:block">
              WHATSAPP US NOW
            </button>

            {/* Hamburger - visible < 640px */}
            <button
              type="button"
              className="sm:hidden rounded p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onClick={handleMenu}
             
              aria-expanded={openMenu}
            >
              <span className="material-symbols-outlined text-3xl">
               menu
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
<div
  className={`
    overflow-hidden 
    bg-gradient-to-b from-gray-50 to-white
    shadow-xl
    transition-all duration-400 ease-out sm:hidden
    ${openMenu
      ? "max-h-[600px] opacity-100 pt-2"
      : "max-h-0 opacity-0 pt-0"}
  `}
>
  <nav className="flex flex-col px-4 py-5">
    <a
      href="#Home"
      className="group block rounded-xl px-6 py-4 text-gray-800 font-medium
                 transition-all duration-200
                 hover:bg-blue-300 hover:shadow-sm hover:scale-[1.02] hover:text-indigo-700
                 active:bg-indigo-50 active:scale-[0.99]"
      onClick={() => setOpenMenu(false)}
    >
      Home
    </a>

    <a
      href="#Programs"
      className="group block rounded-xl px-6 py-4 text-gray-800 font-medium
                 transition-all duration-200
                 hover:bg-blue-300 hover:shadow-sm hover:scale-[1.02] hover:text-indigo-700
                 active:bg-indigo-50 active:scale-[0.99]"
      onClick={() => setOpenMenu(false)}
    >
      Programs
    </a>

    <a
      href="#Why"
      className="group block rounded-xl px-6 py-4 text-gray-800 font-medium
                 transition-all duration-200
                 hover:bg-blue-300 hover:shadow-sm hover:scale-[1.02] hover:text-indigo-700
                 active:bg-indigo-50 active:scale-[0.99]"
      onClick={() => setOpenMenu(false)}
    >
      Why Us
    </a>

    <a
      href="#Abt"
      className="group block rounded-xl px-6 py-4 text-gray-800 font-medium
                 transition-all duration-200
                 hover:bg-blue-300 hover:shadow-sm hover:scale-[1.02] hover:text-indigo-700
                 active:bg-indigo-50 active:scale-[0.99]"
      onClick={() => setOpenMenu(false)}
    >
      About Us
    </a>

    <a
      href="#Contact"
      className="group block rounded-xl px-6 py-4 text-gray-800 font-medium
                 transition-all duration-200
                 hover:bg-blue-300 hover:shadow-sm hover:scale-[1.02] hover:text-blue-700
                 active:bg-indigo-50 active:scale-[0.99]"
      onClick={() => setOpenMenu(false)}
    >
      Contact Us
    </a>

    {/* PURCHASE NOW button */}
    <div className="mt-6 px-5 md:hidden">
      <button
        className="
          w-full rounded-full 
          bg-gradient-to-r from-red-400 to-red-500 
          px-8 py-4 text-base 
          font-semibold text-white 
          shadow-md 
          transition-all duration-250
          hover:from-red-500 hover:to-red-600 
          hover:shadow-lg hover:scale-[1.03]
          active:scale-[0.98] active:shadow-sm
          focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2
        "
      >
        PURCHASE NOW
      </button>
    </div>
  </nav>
</div>
    </>
  );
};

export default Header;