import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import bgnavbar from "../../assets/bgnavbar.jpg";
import logo from "../../assets/logo.svg";
import { useEffect, useState } from "react";

const NavbarProfile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("name");
    if (token) {
      setIsLoggedIn(true);
      setUserName(name);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  return (
    <nav
      className="w-full shadow-md px-6 py-4 flex items-center justify-between bg-cover bg-center rounded-b-3xl"
      style={{ backgroundImage: `url(${bgnavbar})` }}
    >
      <Link to={"/"}>
        {" "}
        <img src={logo} alt="logo" className="h-30" />{" "}
      </Link>

      <ul className="flex space-x-6 text-base font-medium ml-80">
        <li>
          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>
        </li>
        <li>
          <Link to="/hotels" className="hover:text-blue-500">
            Hotels
          </Link>
        </li>
        <li>
          <Link to="/flights" className="hover:text-blue-500">
            Flights
          </Link>
        </li>
        <li>
          <Link to="/promo" className="hover:text-blue-500">
            About Us
          </Link>
        </li>
      </ul>

      <div className="flex items-center space-x-2 text-gray-800 font-semibold">
        <span>{isLoggedIn ? userName : "Guest"}</span>
        <FaUserCircle size={24} />
      </div>
    </nav>
  );
};

export default NavbarProfile;
