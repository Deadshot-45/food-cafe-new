import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { link: "HOME", to: "/" },
    { link: "MENU", to: "/menu" },
    { link: "ABOUT", to: "/about" },
    { link: "CONTACT", to: "/contact" },
  ];

  return (
    <nav className="bg-gray-900 shadow-lg fixed w-full z-[999]">
      <div className="container mx-auto px-4 text-white">
        <div className="flex justify-between items-center h-16">
          <NavLink
            to="/"
            className="text-2xl font-bold text-primary text-[#facdb2]"
          >
            Food Cafe
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <NavLink
                to={item.to}
                key={index}
                className={({ isActive }) =>
                  `${
                    isActive ? "border-b text-[#facdb2]" : ""
                  } hover:text-primary transition-colors`
                }
              >
                {item.link}
              </NavLink>
            ))}
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `${
                  isActive ? "border-b text-[#facdb2]" : ""
                } hover:text-primary transition-colors`
              }
            >
              <FaShoppingCart className="text-xl" />
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className=" hover:text-primary focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item, index) => (
                <NavLink
                to={item.to}
                key={index}
                className="block px-3 py-2 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
               {item.link}
              </NavLink>
              ))}
              <NavLink
                to="/cart"
                className="block px-3 py-2 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                CART
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
