import React from "react";
import CompanyLogo from "../images/Food_App_Logo.jpg";

// Footer component for footer section
const Footer = () => {
  return (
    <footer className="h-14 bg-gradient-to-t from-black flex justify-center">
      <a className="flex" href="/">
        <strong className="mx-2">
          Fast<span>Feast</span>
        </strong>

        <img
          className="w-13 h-10 mr-6"
          src={CompanyLogo}
          alt="Fast Feast Logo"
        />
      </a>
      Created with ❤️ by
      <a
        className="mx-2"
        href="https://www.linkedin.com/in/ananaymhjn/"
        target="_blank"
      >
        Ananay Mahajan
      </a>
    </footer>
  );
};
export default Footer;
