import React, { createContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout.jsx";
import LandingPage from "./Pages/LandingPage.jsx";
import CareersPage from "./Pages/CareersPage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import SignupPage from "./Pages/SignupPage.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import BlogPage from "./Pages/BlogPage.jsx";
import Booking from "./Pages/Booking.jsx";
import Blogs from "./Pages/Blogs.jsx";
import PrivacyPolicy from "./Pages/PrivacyPolicy.jsx";
import Licensing from "./Pages/Licensing.jsx";
import TermsAndConditions from "./Pages/TermsAndConditions.jsx";
import BrandCenter from "./Pages/BrandCenter.jsx";
import ScrollToTopButton from "./ScrollToTopButton"; // Import ScrollToTopButton
import Guidelines from "./Pages/Guidelines.jsx";
import Services from "./Pages/Services.jsx";
import Faq from "./Pages/Faq.jsx";
import FeedbackPage from "./Pages/FeedbackForm.jsx"; // Import FeedbackPage
import NotFound from "./Pages/NotFound.jsx";
import Nurses from "./Pages/Nurses.jsx";
import Patients from "./Pages/Patients.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<LandingPage />} />
      <Route path="careers" element={<CareersPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="ourbrand" element={<BrandCenter />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="services" element={<Services />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="blog" element={<BlogPage />} />
      <Route path="blog/:slug" element={<Blogs />} />
      <Route path="/book-nurse" element={<Booking />} />
      <Route path="privacypolicy" element={<PrivacyPolicy />} />
      <Route path="guidelines" element={<Guidelines/>}/>
      <Route path="licensing" element={<Licensing />} />
      <Route path="termsandconditions" element={<TermsAndConditions />} />
      <Route path="findnurses" element={<Nurses/>}/>
      <Route path="findpatients" element={<Patients/>}/>
      <Route path="faq" element={<Faq/>}/>
      <Route path="feedback" element={<FeedbackPage />} /> {/* Feedback route */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme || "light";
  });

  const toggleTheme = () => {
    setTheme((curr) => {
      const newTheme = curr === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <React.StrictMode>
        <RouterProvider router={router} />
        <ScrollToTopButton /> {/* Add ScrollToTopButton here */}
      </React.StrictMode>
    </ThemeContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
