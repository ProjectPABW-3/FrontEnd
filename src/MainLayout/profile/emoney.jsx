import React from 'react';
import Sidebarprofile from '../../components/sidebarprofile/sidebarprofile';
import Navbarprofile from '../../components/navbar/navbarprofile';
import Footer from '../../components/footer/footer';
import { FaPlusCircle, FaMoneyBillAlt, FaHistory } from 'react-icons/fa';

const Emoney = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* Navbar */}
      <Navbarprofile />

      {/* Main section with Sidebar + Content */}
      <div className="flex flex-1 px-8 py-10 gap-8">
        
        {/* Sidebar with fixed width */}
        <div className="w-64">
          <Sidebarprofile />
        </div>

        {/* Content area expands */}
        <div className="flex-1">
          <div className="relative bg-[#60b5ee] text-white p-6 rounded-t shadow-md">
            <p className="absolute top-4 right-6 text-sm font-semibold">User ID : 232425</p>
            <div className="flex flex-col items-center justify-center text-center mt-10">
              <p className="font-medium">Saldo</p>
              <p className="text-2xl font-bold mt-2">Rp 1.500.000</p>
            </div>
          </div>

          <div className="bg-white border rounded-b shadow-md p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-0">
            <div className="flex flex-col items-center text-[#60b5ee] hover:text-[#60b5ee] cursor-pointer">
              <FaPlusCircle size={28} />
              <p className="mt-2 font-medium">Top Up</p>
            </div>
            <div className="flex flex-col items-center text-[#60b5ee] hover:text-[#60b5ee] cursor-pointer">
              <FaMoneyBillAlt size={28} />
              <p className="mt-2 font-medium">Tarik Saldo</p>
            </div>
            <div className="flex flex-col items-center text-[#60b5ee] hover:text-[#60b5ee] cursor-pointer">
              <FaHistory size={28} />
              <p className="mt-2 font-medium">History</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Emoney;
