// Header component for header section: Logo, Nav Items
import React from "react";
import CompanyLogo from "../images/Food_App_Logo.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-teal-300">
      <a href="/">
        <img
          className="px-4 py-1 w-28"
          src={CompanyLogo}
          alt="Fast Feast Logo"
        />
      </a>
      <div className="">
        <ul className="flex align-middle">
          <li className="p-5">
            <Link to="/">Home</Link>
          </li>
          <li className="p-5">
            <Link to="/about">About</Link>
          </li>

          <li className="p-5">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-5">
            <Link to="/cart">Cart 🛒({cartItems.length})</Link>
          </li>
          <li className="p-5">
            <i className="p-5"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
