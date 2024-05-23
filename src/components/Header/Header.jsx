import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import MenuOverlay from "./MenuOverlay";
import { FaXmark } from "react-icons/fa6";
import '../../index.css';
import { ThemeContext } from "../../main";

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
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [themes, setThemes] = useState("light");

  const handleThemeChange = () => {
    toggleTheme();
    setThemes((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="app-header">
      <div className="flex justify-between md:justify-evenly sticky top-0 z-[999] backdrop-blur-sm items-center py-[1.5rem] px-4 md:px-10 ">
        <div className="hover:scale-105 duration-100 ease-in-out">
          <Link to="/">
            <img width={70} src="\assets\icon.png" alt="Logo" />
          </Link>
        </div>
        <div className="md:mx-10 lg:mx-4">
          <ul className="hidden md:flex md:gap-3 lg:gap-6 font-medium">
            {navLinks.map((link, index) => (
              <li key={index} className="hover:scale-110 duration-100 ease-in-out">
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `cursor-pointer ${theme === "dark" ? "text-white" : "text-gray-800"
                    } ${isActive
                      ? "text-black underline decoration-green-500 underline-offset-[0.5rem] decoration-2"
                      : "text-gray-500"
                    } hover:text-green-500`
                  }
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden">
          {isNavBarOpen ? (
            <FaXmark
              id="hamburger"
              alt="x-mark"
              className="w-[30px] h-[30px] text-[#DC2626]"
              onClick={() => {
                setIsNavBarOpen(!isNavBarOpen);
              }}
            />
          ) : (
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
          )}
        </div>
        <div className="hidden md:flex gap-4 mx-4">
          <button className="bg-green-600 hover:scale-105 hover:shadow-lg hover:shadow-green-300 transition-all text-white px-[1.5rem] font-medium py-[0.5rem] rounded-sm shadow-lg shadow-green-200">
            <Link to="/login">Login</Link>
          </button>
          <button className="bg-green-600 hover:scale-105 hover:shadow-lg hover:shadow-green-300 transition-all text-white px-[1.5rem] font-medium py-[0.5rem] rounded-sm shadow-lg shadow-green-200">
            <Link to="signup">Signup</Link>
          </button>
        </div>
        <div
          className={`toggle-button ${themes === "dark" ? "dark" : ""}`}
          onClick={handleThemeChange}
        ></div>
      </div>
      {isNavBarOpen && (
        <MenuOverlay links={navLinks} setIsNavBarOpen={setIsNavBarOpen} />
      )}
    </div>
  );
}

export default Header;
