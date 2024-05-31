import React, { useState } from "react"; // Importing React to use JSX syntax
import PropTypes from "prop-types"; // Importing PropTypes for type-checking
import { Link, NavLink } from "react-router-dom"; // Importing Link and NavLink for navigation

const MenuOverlay = ({ links, setIsNavBarOpen, theme:[theme, handleThemeChange], toggleBodyScroll}) => {
  // Function to handle click event, which closes the navigation bar
  const handleClick = () => {
    toggleBodyScroll();
    setIsNavBarOpen(false);
    setClosingAnimation(true)
  };

  return (
    // ul element to contain the menu links
    <ul className="absolute md:hidden w-screen items-center text-center z-20 app-header open-animation flex flex-col justify-evenly">
      {/* Mapping over the links array to create each link item */}
      {links.map((link, index) => (
        <li key={index}>
          {/* Using index as the key for each list item */}
          <div className="flex flex-col">
            {/* NavLink component for navigation, applying active and hover styles */}
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
              onClick={handleClick} // Close navigation bar on link click
            >
              {link.title} {/* Display the link title */}
            </NavLink>
          </div>
        </li>
      ))}
      {/* Login button */}
      <li>
        <button 
          className="bg-green-600 hover:scale-105 hover:shadow-lg hover:shadow-green-300 transition-all text-white px-[1.8rem] font-medium py-[0.5rem] rounded-sm shadow-lg shadow-black"
          onClick={handleClick} // Added onClick to close the menu
        >
          <Link to="/login">Login</Link> {/* Link to the login page */}
        </button>
      </li>
      {/* Signup button */}
      <li>
        <button 
          className="bg-green-600 hover:scale-105 hover:shadow-lg hover:shadow-green-300 transition-all text-white px-[1.8rem] font-medium py-[0.5rem] rounded-sm shadow-lg shadow-black"
          onClick={handleClick} // Added onClick to close the menu
        >
          <Link to="signup">Signup</Link> {/* Link to the signup page */}
        </button>
      </li>
      <li>
        <div
          className={`tdnn relative h-8 w-16 rounded-full transition-all duration-500 ease-in-out ${
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
      </li>
    </ul>
  );
};

// PropTypes for type-checking the component's props
MenuOverlay.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired, // Each link should have a 'to' string
      title: PropTypes.string.isRequired, // Each link should have a 'title' string
    })
  ).isRequired,
  setIsNavBarOpen: PropTypes.func.isRequired, // setIsNavBarOpen should be a function
};

export default MenuOverlay; // Exporting the MenuOverlay component as default
