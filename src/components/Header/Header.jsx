import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="app-header">
      <div className="flex justify-between md:justify-evenly sticky top-0 z-[999] backdrop-blur-sm items-center py-[1.5rem] px-4 md:px-10 ">
        <div>
          <Link to="/">
            <div className="flex items-center animate-pulse">
              <img width={50} src="\assets\icon.png" alt="Logo" />
              <h5 style={{fontFamily: "Just Another Hand", letterSpacing: '.12rem'}} className=" text-2xl font-semibold">Nacto-Care</h5>
            </div>
          </Link>
        </div>
        <div>
          <ul className="hidden md:flex gap-8 font-medium">
            <li>
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

            <li>
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

            <li>
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

            <li>
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
          <img
            id="hamburger"
            width="30"
            height="30"
            src="https://img.icons8.com/ios-filled/50/dc2626/menu--v1.png"
            alt="menu--v1"
          />
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
    </div>
  );
}

export default Header;
