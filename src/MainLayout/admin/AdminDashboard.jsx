import React from "react";
import { NavLink } from "react-router-dom";

const AdminDashboard = () => {
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
              <a href="/ProductManagement" 
              className={({ isActive }) =>
                `text-gray-700 hover:text-blue-600 ${
                  isActive ? "font-bold text-blue-600" : ""
                }`
              }
              >
                📦 Products
              </a>
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
      <main className="flex-1 min-h-screen bg-gradient-to-br from-white via-blue-50 to-sky-100 p-8">
        <h1 className="text-3xl font-semibold mb-8 text-gray-800">Welcome, Admin! 👋</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-medium text-gray-600">Total Users</h3>
            <p className="text-2xl font-bold text-blue-600 mt-2">123</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-medium text-gray-600">New Orders</h3>
            <p className="text-2xl font-bold text-blue-600 mt-2">45</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-medium text-gray-600">Revenue</h3>
            <p className="text-2xl font-bold text-green-600 mt-2">$1,200</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
