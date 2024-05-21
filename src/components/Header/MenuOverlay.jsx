import React from "react"; // Importing React to use JSX syntax
import PropTypes from "prop-types"; // Importing PropTypes for type-checking
import { Link, NavLink } from "react-router-dom"; // Importing Link and NavLink for navigation

const MenuOverlay = ({ links, setIsNavBarOpen }) => {
  // Function to handle click event, which closes the navigation bar
  const handleClick = () => {
    setIsNavBarOpen(false);
  };

  return (
    // ul element to contain the menu links
    <ul className="absolute md:hidden w-screen items-center text-center z-20 app-header h-[calc(100vh-7.375rem)] flex flex-col justify-evenly">
      {/* Mapping over the links array to create each link item */}
      {links.map((link, index) => (
        <li key={index}>
          {/* Using index as the key for each list item */}
          <div className="flex flex-col">
            {/* NavLink component for navigation, applying active and hover styles */}
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                `cursor-pointer text-gray-800 ${
                  isActive
                    ? "text-black underline decoration-green-500 underline-offset-[0.5rem] decoration-2"
                    : "text-gray-500"
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
          className="bg-green-600 hover:scale-105 hover:shadow-lg hover:shadow-green-300 transition-all text-white px-[1.8rem] font-medium py-[0.5rem] rounded-sm shadow-lg shadow-green-200"
          onClick={handleClick} // Added onClick to close the menu
        >
          <Link to="/login">Login</Link> {/* Link to the login page */}
        </button>
      </li>
      {/* Signup button */}
      <li>
        <button 
          className="bg-green-600 hover:scale-105 hover:shadow-lg hover:shadow-green-300 transition-all text-white px-[1.8rem] font-medium py-[0.5rem] rounded-sm shadow-lg shadow-green-200"
          onClick={handleClick} // Added onClick to close the menu
        >
          <Link to="signup">Signup</Link> {/* Link to the signup page */}
        </button>
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
