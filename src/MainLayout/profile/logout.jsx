import React, { useState } from "react";
import Sidebarprofile from "../../components/sidebarprofile/sidebarprofile";
import NavbarProfile from "../../components/navbar/NavbarProfile";
import Footer from "../../components/footer/footer";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const klikLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("role");
    localStorage.removeItem("email");
    navigate("/");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <NavbarProfile />
      <div className="flex flex-1 px-8 py-10 gap-8">
        <div className="w-64">
          <Sidebarprofile />
        </div>

        <div className="flex-1">
          <div className="bg-white border rounded shadow-md p-6 max-w-xl">
            <h2 className="text-lg font-semibold mb-2">Logging Out</h2>
            <p className="text-sm text-gray-600 mb-6">
              Oh, no! You’ll miss a lot of things by logging out: Sky Book,
              Price Alerts, and other member-only rewards. Are you sure want to
              log out?
            </p>

            <div className="flex flex-col gap-3">
              <button
                onClick={klikLogout}
                className="w-full bg-[#60b5ee] hover:bg-[#6078ee] hover:cursor-pointer text-white font-semibold py-2 rounded"
              >
                YES
              </button>
              <button className="w-full border border-gray-100 text-blue-500 hover:bg-blue-50 font-semibold py-2 rounded">
                NO
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Logout;
