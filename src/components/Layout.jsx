import React from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Helmet } from "react-helmet";

function Layout() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
      <Link
        to="/feedback"
        className="fixed bottom-4 left-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
        
      >
        Help Us Improve!
      </Link>
      <Helmet>
        <script src="https://cdn.botpress.cloud/webchat/v2/inject.js" defer async></script>
        <script src="https://mediafiles.botpress.cloud/b2905264-a15e-41ab-83e9-7db49dbaabc3/webchat/v2/config.js" defer async></script>
      </Helmet>
    </div>
  );
}

export default Layout;
