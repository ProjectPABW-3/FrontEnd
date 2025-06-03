import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const ProductManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [hotelPartners, setHotelPartners] = useState([]);
  const [flightPartners, setFlightPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [editType, setEditType] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [deleteType, setDeleteType] = useState("");
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [productList, setProductList] = useState([]);
  const [viewingPartner, setViewingPartner] = useState(null);

  const dummyHotels = [
    { id: 1, name: "Hotel Mawar", email: "mawar@hotel.com", type: "Hotel" },
    { id: 2, name: "Hotel Melati", email: "melati@hotel.com", type: "Hotel" },
  ];

  const dummyFlights = [
    { id: 1, name: "Garuda Indonesia", email: "contact@garuda.com", type: "Flight" },
    { id: 2, name: "Lion Air", email: "info@lionair.com", type: "Flight" },
  ];

  const dummyHotelProducts = {
  1: [
    {
      name: "Deluxe Room",
      roomType: "Deluxe",
      price: 120,
      availability: "8 rooms",
    },
    {
      name: "Standard Room",
      roomType: "Standard",
      price: 80,
      availability: "5 rooms",
    },
  ],
  2: [
    {
      name: "Suite Room",
      roomType: "Suite",
      price: 180,
      availability: "3 rooms",
    },
  ],
};

const dummyFlightProducts = {
  1: [
    {
      flightNumber: "GA123",
      origin: "Jakarta",
      destination: "Bali",
      departureTime: "10:00",
      seatsAvailable: 40,
      price: 150,
    },
    {
      flightNumber: "GA456",
      origin: "Jakarta",
      destination: "Surabaya",
      departureTime: "13:00",
      seatsAvailable: 30,
      price: 120,
    },
  ],
  2: [
    {
      flightNumber: "JT789",
      origin: "Medan",
      destination: "Yogyakarta",
      departureTime: "15:30",
      seatsAvailable: 25,
      price: 110,
    },
  ],
};


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
  
  const handleEdit = (type, id) => {
  const list = type === "Hotel" ? hotelPartners : flightPartners;
  const partner = list.find((p) => p.id === id);
  setSelectedPartner({ ...partner }); // clone it to avoid direct state mutation
  setEditType(type);
  setIsModalOpen(true);
};

const handleDelete = (type, id) => {
  const list = type === "Hotel" ? hotelPartners : flightPartners;
  const target = list.find((p) => p.id === id);
  setDeleteTarget(target);
  setDeleteType(type);
  setIsDeleteModalOpen(true);
};

const handleSaveEdit = async () => {
  try {
    const endpoint =
      editType === "Hotel"
        ? `http://localhost:3000/api/hotel-partners/${selectedPartner.id}`
        : `http://localhost:3000/api/flight-partners/${selectedPartner.id}`;

    const res = await fetch(endpoint, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(selectedPartner),
    });

    if (!res.ok) throw new Error("Failed to update");

    if (editType === "Hotel") {
      setHotelPartners((prev) =>
        prev.map((p) =>
          p.id === selectedPartner.id ? selectedPartner : p
        )
      );
    } else {
      setFlightPartners((prev) =>
        prev.map((p) =>
          p.id === selectedPartner.id ? selectedPartner : p
        )
      );
    }

    setIsModalOpen(false);
    setSelectedPartner(null);
  } catch (error) {
    console.error("Edit failed:", error);
    alert("Failed to update partner.");
  }
};


const confirmDeletePartner = async () => {
  try {
    const endpoint =
      deleteType === "Hotel"
        ? `http://localhost:3000/api/hotel-partners/${deleteTarget.id}`
        : `http://localhost:3000/api/flight-partners/${deleteTarget.id}`;

    const res = await fetch(endpoint, {
      method: "DELETE",
    });

    if (!res.ok) throw new Error("Failed to delete");

    if (deleteType === "Hotel") {
      setHotelPartners((prev) => prev.filter((p) => p.id !== deleteTarget.id));
    } else {
      setFlightPartners((prev) => prev.filter((p) => p.id !== deleteTarget.id));
    }

    setIsDeleteModalOpen(false);
    setDeleteTarget(null);
  } catch (error) {
    console.error("Delete failed:", error);
    alert("Failed to delete partner.");
  }
};

const handleViewProducts = async (type, partner) => {
  try {
    const endpoint =
      type === "Hotel"
        ? `http://localhost:3000/api/hotel-partners/${partner.id}/products`
        : `http://localhost:3000/api/flight-partners/${partner.id}/products`;

    const res = await fetch(endpoint);
    if (!res.ok) throw new Error("Failed to fetch");

    const products = await res.json();
    setProductList(products);
  } catch (error) {
    console.error("Error loading products, using dummy data:", error);
    const fallbackProducts =
      type === "Hotel"
        ? dummyHotelProducts[partner.id] || []
        : dummyFlightProducts[partner.id] || [];
    setProductList(fallbackProducts);
  }

  setViewingPartner(partner);
  setIsProductModalOpen(true);
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
                  <td className="p-3 border space-x-2">
                    <button
                    onClick={() => handleEdit(type, partner)}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                    onClick={() => handleDelete(type, partner)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                    <button
                    onClick={() => handleViewProducts(type, partner)}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                    >
                      View Products
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
      <main className="flex-1 min-h-screen bg-gradient-to-br from-white via-blue-50 to-sky-100 p-10">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Manage Products</h2>

        <div className="mb-8">
          <input
            type="text"
            placeholder="Search products by name or email..."
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
        
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Edit {editType} Partner</h2>
            <div className="space-y-4">
              <input
              type="text"
              className="w-full border p-2 rounded"
              placeholder="Name"
              value={selectedPartner.name}
              onChange={(e) =>
                setSelectedPartner({ ...selectedPartner, name: e.target.value })
              }
              />
              <input
              type="email"
              className="w-full border p-2 rounded"
              placeholder="Email"
              value={selectedPartner.email}
              onChange={(e) =>
                setSelectedPartner({ ...selectedPartner, email: e.target.value })
              }
              />
            </div>
            <div className="mt-6 flex justify-end space-x-4">
              <button
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
              onClick={handleSaveEdit}
              className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
            <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
            <p className="mb-4 text-gray-700">
              Are you sure you want to delete{" "}
              <span className="font-semibold">{deleteTarget?.name}</span> (
                {deleteType})?
            </p>
            <div className="flex justify-end space-x-4">
              <button
              onClick={() => setIsDeleteModalOpen(false)}
              className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
              onClick={confirmDeletePartner}
              className="px-4 py-2 bg-red-600 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {isProductModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full overflow-y-auto max-h-[80vh]">
            <h2 className="text-2xl font-bold mb-4">
              {viewingPartner?.name} Products
            </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {productList.length > 0 ? (
              productList.map((product, index) => (
              <div key={index} className="border p-4 rounded shadow bg-gray-50">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                {product.roomType && (
                  <>
                  <p>Room Type: {product.roomType}</p>
                  <p>Price: ${product.price}</p>
                  <p>Availability: {product.availability}</p>
                  </>
                )}
                {product.flightNumber && (
                  <>
                  <p>Flight: {product.flightNumber}</p>
                  <p>From: {product.origin}</p>
                  <p>To: {product.destination}</p>
                  <p>Departure: {product.departureTime}</p>
                  <p>Seats Available: {product.seatsAvailable}</p>
                  <p>Price: ${product.price}</p>
                  </>
                )}
              </div>
              ))
            ) : (
            <p>No products found.</p>
            )}
            </div>
            <div className="flex justify-end mt-6">
              <button
              onClick={() => setIsProductModalOpen(false)}
              className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
    </div>
  );
};

export default ProductManagement;
