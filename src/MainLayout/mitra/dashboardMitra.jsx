import React, { useState } from "react";

const loggedInMitraId = 1001;

const initialHotels = [
  {
    id: 1,
    ownerId: 1001,
    name: "Hotel Santika",
    availableRooms: 10,
    bookings: [
      { userId: 101, userName: "Budi", roomsBooked: 2 },
      { userId: 102, userName: "Ani", roomsBooked: 1 },
    ],
  },
];

const DashboardMitra = () => {
  const [hotel, setHotel] = useState(
    initialHotels.find((h) => h.ownerId === loggedInMitraId) || null
  );

  const tambahKamar = () => {
    if (!hotel) return;
    setHotel({ ...hotel, availableRooms: hotel.availableRooms + 1 });
  };

  const kurangiKamar = () => {
    if (!hotel) return;
    setHotel({
      ...hotel,
      availableRooms: hotel.availableRooms > 0 ? hotel.availableRooms - 1 : 0,
    });
  };

  if (!hotel) {
    return (
      <div className="flex min-h-screen bg-gray-100">
        <aside className="w-64 bg-white shadow-md">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-blue-600">SkyBook Mitra</h2>
          </div>
          <nav className="p-6">
            <ul className="space-y-4">
              <li>
                <a
                  href="/dashboard-mitra"
                  className="text-gray-700 hover:text-blue-600 font-bold text-blue-600"
                >
                  🧭 Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/logout"
                  className="text-red-600 hover:text-red-800 font-semibold"
                >
                  🚪 Logout
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="flex-1 min-h-screen bg-gradient-to-br from-white via-blue-50 to-sky-100 p-8">
          <h1 className="text-3xl font-semibold mb-8 text-gray-800">
            Welcome, Mitra! 👋
          </h1>
          <p className="text-gray-600">Belum ada hotel yang Anda tambahkan.</p>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-blue-600">SkyBook Mitra</h2>
        </div>
        <nav className="p-6">
          <ul className="space-y-4">
            <li>
              <a
                href="/dashboard-mitra"
                className="text-gray-700 hover:text-blue-600 font-bold text-blue-600"
              >
                🧭 Dashboard
              </a>
            </li>
            <li>
              <a
                href="/logout"
                className="text-red-600 hover:text-red-800 font-semibold"
              >
                🚪 Logout
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-h-screen bg-gradient-to-br from-white via-blue-50 to-sky-100 p-8">
        <h1 className="text-3xl font-semibold mb-8 text-gray-800">
          Welcome, Mitra! 👋
        </h1>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 max-w-md">
          <h3 className="text-lg font-medium text-gray-600">{hotel.name}</h3>

          <p className="text-xl font-bold text-blue-600 mt-2">
            Kamar tersedia: {hotel.availableRooms}
          </p>

          <div className="flex gap-3 mt-4">
            <button
              onClick={tambahKamar}
              className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
            >
              + Tambah Kamar
            </button>
            <button
              onClick={kurangiKamar}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              - Kurangi Kamar
            </button>
          </div>

          <div className="mt-6">
            <h4 className="text-md font-semibold text-gray-700">
              Pemesanan oleh User:
            </h4>
            {hotel.bookings.length === 0 ? (
              <p className="text-gray-500">Belum ada pemesanan.</p>
            ) : (
              <ul className="list-disc list-inside text-gray-600">
                {hotel.bookings.map((b, i) => (
                  <li key={i}>
                    {b.userName} - {b.roomsBooked} kamar
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardMitra;
