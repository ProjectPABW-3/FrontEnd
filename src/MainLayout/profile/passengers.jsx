import React from 'react';
import Sidebarprofile from '../../components/sidebarprofile/sidebarprofile';
import Navbarprofile from '../../components/navbar/navbarprofile';
import Footer from '../../components/footer/footer';

const passengers = [
  { id: 1, name: 'Ms. Ni Wayan Rini Kurniati' },
  { id: 2, name: 'Ms. Nasya Deani Amanda' },
  { id: 3, name: 'Ms. Azzatul Nabila Kahar' },
  { id: 4, name: 'Ms. Dewi Purnamasari' },
];

const Passengers = () => {
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

      {/* Content */}
      <div className="flex-1">
        <div className="bg-white border rounded shadow-md p-6">
          <h2 className="text-lg font-semibold mb-1">List of Passengers</h2>
          <p className="text-sm text-gray-500 mb-6">You can add up to 40 passengers</p>

          <ul className="space-y-4 mb-6">
            {passengers.map((passengers, index) => (
              <li key={passengers.id} className="flex justify-between items-center border p-3 rounded shadow-sm">
                <div className="flex items-center gap-2 font-medium">
                  <span>{index + 1}.</span>
                  <span>{passengers.name}</span>
                </div>
                <div className="flex gap-4 text-sm text-[#60b5ee] font-medium">
                  <button className="hover:underline">Edit</button>
                  <button className="hover:underline">Remove</button>
                </div>
              </li>
            ))}
          </ul>

          <button className="w-full bg-[#60b5ee] hover:bg-blue-600 text-white font-semibold py-2 rounded shadow">
            Add Passengers
          </button>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Passengers;
