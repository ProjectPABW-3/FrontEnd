import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import logo from "../../assets/logo.svg";
import bgnavbar from "../../assets/bgnavbar.jpg";

const NavbarProfile = ({ isLoggedIn, userName }) => {
  return (
    <nav
      className="w-full shadow-md px-6 py-4 flex items-center justify-between bg-cover bg-center"
      style={{ backgroundImage: `url(${bgnavbar})` }}
    >
      <Link to={"/"}>
        {" "}
        <img src={logo} alt="logo" className="h-20" />{" "}
      </Link>

      <ul className="flex space-x-6 text-sm font-extrabold text-gray-500">
        <li>
          <Link to="/" className="hover:text-yellow-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/hotels" className="hover:text-yellow-300">
            Hotels
          </Link>
        </li>
        <li>
          <Link to="/flights" className="hover:text-yellow-300">
            Flights
          </Link>
        </li>
        <li>
          <Link to="/promo" className="hover:text-yellow-300">
            Promo
          </Link>
        </li>
      </ul>

      <div className="flex items-center space-x-2 text-gray-800 font-semibold">
        <Link
          to="/profileemoney"
          className="flex items-center space-x-2 hover:text-yellow-300"
        >
          <span>{isLoggedIn ? userName : "Guest"}</span>
          <FaUserCircle size={24} />
        </Link>
      </div>
    </nav>
  );
};

export default NavbarProfile;
