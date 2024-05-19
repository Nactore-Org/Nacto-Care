import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import MenuOverlay from "./MenuOverlay";
import { FaXmark } from "react-icons/fa6";
const navLinks = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "Careers",
    to: "/careers",
  },
  {
    title: "Blog",
    to: "/blog",
  },
  {
    title: "Contact",
    to: "/contact",
  },
  {
    title: "About",
    to: "/about",
  },
];

function Header() {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  return (
    <div className="app-header">
      <div className="flex justify-between md:justify-evenly sticky top-0 z-[999] backdrop-blur-sm items-center py-[1.5rem] px-4 md:px-10 ">
        <div className="hover:scale-105 duration-100 ease-in-out">
          <Link to="/">
            <img width={70} src="\assets\icon.png" alt="Logo" />
          </Link>
        </div>
        <div>
          <ul className="hidden md:flex gap-8 font-medium">
            <li className="hover:scale-110 duration-100 ease-in-out">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `cursor-pointer text-gray-800 ${
                    isActive
                      ? "text-black underline decoration-green-500 underline-offset-[0.5rem] decoration-2"
                      : "text-gray-500"
                  } hover:text-green-500`
                }
              >
                Home
              </NavLink>
            </li>

            <li className="hover:scale-110 duration-100 ease-in-out">
              <NavLink
                to="/careers"
                className={({ isActive }) =>
                  `cursor-pointer text-gray-800 ${
                    isActive
                      ? "text-black underline decoration-green-500 underline-offset-[0.5rem] decoration-2"
                      : "text-gray-500"
                  } transition-all hover:text-green-500`
                }
              >
                Careers
              </NavLink>
            </li>

            <li className="hover:scale-110 duration-100 ease-in-out">
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `cursor-pointer text-gray-800 ${
                    isActive
                      ? "text-black underline decoration-green-500 underline-offset-[0.5rem] decoration-2"
                      : "text-gray-500"
                  } transition-all hover:text-green-500`
                }
              >
                Blog
              </NavLink>
            </li>

            <li className="hover:scale-110 duration-100 ease-in-out">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `cursor-pointer text-gray-800 ${
                    isActive
                      ? "text-black underline decoration-green-500 underline-offset-[0.5rem] decoration-2"
                      : "text-gray-500"
                  } transition-all hover:text-green-500`
                }
              >
                Contact
              </NavLink>
            </li>

            <li className="hover:scale-110 duration-100 ease-in-out">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `cursor-pointer text-gray-800 ${
                    isActive
                      ? "text-black underline decoration-green-500 underline-offset-[0.5rem] decoration-2"
                      : "text-gray-500"
                  } transition-all hover:text-green-500`
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          {isNavBarOpen ? (
            <img
              id="hamburger"
              width="30"
              height="30"
              src="https://img.icons8.com/ios-filled/50/dc2626/menu--v1.png"
              alt="menu--v1"
              onClick={() => {
                setIsNavBarOpen(!isNavBarOpen);
              }}
            />
          ) : (
            <FaXmark
              id="hamburger"
              alt="x-mark"
              className="w-[30px] h-[30px] text-[#DC2626]"
              onClick={() => {
                setIsNavBarOpen(!isNavBarOpen);
              }}
            />
          )}
        </div>
        <div className="hidden md:flex gap-6">
          <button className="bg-green-600 hover:scale-105 hover:shadow-lg hover:shadow-green-300 transition-all text-white px-[1.8rem] font-medium py-[0.5rem] rounded-sm shadow-lg shadow-green-200">
            <Link to="/login">Login</Link>
          </button>
          <button className="bg-green-600 hover:scale-105 hover:shadow-lg hover:shadow-green-300 transition-all text-white px-[1.8rem] font-medium py-[0.5rem] rounded-sm shadow-lg shadow-green-200">
            <Link to="signup">Signup</Link>
          </button>
        </div>
      </div>
      {isNavBarOpen && (
        <MenuOverlay links={navLinks} setIsNavBarOpen={setIsNavBarOpen} />
      )}
    </div>
  );
}

export default Header;
