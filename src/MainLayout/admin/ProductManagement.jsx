import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const ProductManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [hotelPartners, setHotelPartners] = useState([]);
  const [flightPartners, setFlightPartners] = useState([]);
  const [loading, setLoading] = useState(true);

  const dummyHotels = [
    { id: 1, name: "Hotel Mawar", email: "mawar@hotel.com", type: "Hotel" },
    { id: 2, name: "Hotel Melati", email: "melati@hotel.com", type: "Hotel" },
  ];

  const dummyFlights = [
    { id: 1, name: "Garuda Indonesia", email: "contact@garuda.com", type: "Flight" },
    { id: 2, name: "Lion Air", email: "info@lionair.com", type: "Flight" },
  ];

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const hotelRes = await fetch("http://localhost:3000/api/hotel-partners");
        const flightRes = await fetch("http://localhost:3000/api/flight-partners");
  
        const hotels = await hotelRes.json();
        const flights = await flightRes.json();
  
        setHotelPartners(Array.isArray(hotels) && hotels.length > 0 ? hotels : dummyHotels);
        setFlightPartners(Array.isArray(flights) && flights.length > 0 ? flights : dummyFlights);
      } catch (error) {
        console.error("Error fetching partners:", error);
        setHotelPartners(dummyHotels);
        setFlightPartners(dummyFlights);
      } finally {
        setLoading(false);
      }
    };
  
    fetchPartners();
  }, []);
  

  const handleDelete = (type, id) => {
    alert(`Delete ${type} partner with id: ${id}`);
  };

  const handleEdit = (type, id) => {
    alert(`Edit ${type} partner with id: ${id}`);
  };

  const renderTable = (partners, type) => {
    const filtered = partners.filter(
      (partner) =>
        partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        partner.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 pl-4">{type} Partners</h3>
        <table className="w-full table-auto border border-gray-200 shadow-sm bg-white rounded-lg">
          <thead className="bg-blue-100 text-blue-900">
            <tr>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map((partner) => (
                <tr key={partner.id} className="hover:bg-blue-50">
                  <td className="p-3 border">{partner.name}</td>
                  <td className="p-3 border">{partner.email}</td>
                  <td className="p-3 border">
                    <button
                      onClick={() => handleEdit(type, partner.id)}
                      className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(type, partner.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="p-4 text-center text-gray-500">
                  No {type.toLowerCase()} partners found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-blue-600">SkyBook Admin</h2>
        </div>
        <nav className="p-6">
          <ul className="space-y-4">
            <li>
              <a href="/dashboard-admin" 
              className={({ isActive }) =>
                `text-gray-700 hover:text-blue-600 ${
                  isActive ? "font-bold text-blue-600" : ""
                }`
              }
              >
                🧭 Dashboard
              </a>
            </li>
            <li>
              <NavLink
                to="/UserManagement"
                className={({ isActive }) =>
                  `text-gray-700 hover:text-blue-600 ${
                    isActive ? "font-bold text-blue-600" : ""
                  }`
                }
              >
                👤 Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ProductManagement"
                className={({ isActive }) =>
                  `text-gray-700 hover:text-blue-600 ${
                    isActive ? "font-bold text-blue-600" : ""
                  }`
                }
              >
                📦 Products
              </NavLink>
            </li>
            <li>
              <a href="/reports" 
              className={({ isActive }) =>
                `text-gray-700 hover:text-blue-600 ${
                  isActive ? "font-bold text-blue-600" : ""
                }`
              }
              >
                📈 Reports
              </a>
            </li>
            <li>
              <a href="/login" className="text-red-600 hover:text-red-800 font-semibold">
                🚪 Logout
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Manage Partners</h2>

        <div className="mb-8">
          <input
            type="text"
            placeholder="Search partners by name or email..."
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 w-full max-w-md mr-4"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {loading ? (
          <p className="text-gray-500">Loading partner data...</p>
        ) : (
          <>
            {renderTable(hotelPartners, "Hotel")}
            {renderTable(flightPartners, "Flight")}
          </>
        )}
    </main>
    </div>
  );
};

export default ProductManagement;
