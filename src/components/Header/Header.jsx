import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import MenuOverlay from "./MenuOverlay";
import { FaXmark } from "react-icons/fa6";
import "../../index.css";
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

  const toggleBodyScroll = ()=>{
    const styles = {
      position:"fixed",
      overflow: "hidden"
    }
    
    if(document.body.style.position===""){
      for(const i in styles){
        document.body.style[i] = styles[i]
      }
      return
    }

    for(const i in styles){
      document.body.style[i] = ""
    }
  }

  return (
    <div className="app-header">
      <div className="flex justify-between md:justify-evenly fixed w-lvw top-0 z-[999] backdrop-blur-sm items-center py-[1.5rem] px-4 md:px-10 ">
        <div className="hover:scale-105 duration-100 ease-in-out">
          <Link to="/">
            <img width={70} src="\assets\icon.png" alt="Logo" />
          </Link>
        </div>
        <div className="md:mx-10 lg:mx-4">
          <ul className="hidden md:flex md:gap-3 lg:gap-6 font-medium">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="hover:scale-110 duration-100 ease-in-out"
              >
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `cursor-pointer ${
                      theme === "dark" ? "text-white" : "text-gray-800"
                    } ${
                      isActive
                        ? "underline decoration-green-500 underline-offset-[0.5rem] decoration-2"
                        : ""
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
                toggleBodyScroll()
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
                toggleBodyScroll()
                setIsNavBarOpen(!isNavBarOpen);
              }}
            />
          )}
        </div>
        <div className="hidden md:flex gap-4 mx-4">
          <button className="bg-green-600 hover:scale-105 hover:shadow-lg hover:shadow-green-300 transition-all text-white px-[1.5rem] font-medium py-[0.5rem] rounded-sm shadow-lg shadow-black">
            <Link to="/login">Login</Link>
          </button>
          <button className="bg-green-600 hover:scale-105 hover:shadow-lg hover:shadow-green-300 transition-all text-white px-[1.5rem] font-medium py-[0.5rem] rounded-sm shadow-lg shadow-black">
            <Link to="signup">Signup</Link>
          </button>
        </div>
        <div
          className={`hidden md:block tdnn relative h-8 w-16 rounded-full transition-all duration-500 ease-in-out ${
            theme === "dark" ? "bg-[#423966]" : "bg-[#FFBF71]"
          }`}
          onClick={handleThemeChange}
        >
          <div
            className={`moon absolute block rounded-full transition-all duration-600 ease-in-out ${
              theme === "dark"
                ? "top-[4px] left-[4px] w-[22px] h-[22px] rotate-[-75deg] bg-[#423966] shadow-[inset_6px_5px_0_0px_#D9FBFF,rgba(255,255,255,0.1)_0px_-14px_0_-9px,rgba(255,255,255,0.1)_6px_14px_0_-9px,rgba(255,255,255,0.1)_4px_26px_0_-8px,rgba(255,255,255,0.1)_12px_4px_0_-8px,rgba(255,255,255,0.1)_16px_16px_0_-9px,rgba(255,255,255,0.1)_12px_26px_0_-9px,rgba(255,255,255,0.1)_-8px_14px_0_-9px,rgba(255,255,255,0.1)_-2px_20px_0_-9px]"
                : "top-[9px] left-[36px] w-[14px] h-[14px] rotate-0 bg-white shadow-[inset_6px_6px_0_10px_white,0_-10px_0_-5px_white,7px_-7px_0_-6px_white,10px_0_0_-5px_white,7px_7px_0_-6px_white,0_10px_0_-5px_white,-7px_7px_0_-6px_white,-10px_0_0_-5px_white,-7px_-7px_0_-6px_white]"
            }`}
          ></div>
        </div>
      </div>
      {isNavBarOpen && (
        <MenuOverlay links={navLinks} setIsNavBarOpen={setIsNavBarOpen} theme={[theme, handleThemeChange]} />
      )}
    </div>
  );
}

export default Header;
