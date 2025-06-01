import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", role: "" });

  const dummyUsers = [
    { id: 1, name: "Dummy John", email: "john@example.com", role: "User" },
    { id: 2, name: "Dummy Jane", email: "jane@example.com", role: "Admin" },
  ];

  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/users");
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        setUsers(data);
      } else {
        setUsers(dummyUsers);
      }
    } catch (err) {
      console.error("Error fetching users:", err);
      setUsers(dummyUsers); 
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/api/users/${id}`, {
      method: "DELETE",
    })
      .then(() => fetchUsers())
      .catch((err) => console.error(err));
  };

  const handleEditClick = (user) => {
    setEditingUser(user.id);
    setFormData({ name: user.name, email: user.email, role: user.role });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/api/users/${editingUser}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(() => {
        setEditingUser(null);
        fetchUsers();
      })
      .catch((err) => console.error(err));
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const sortedUsers = [...users].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const aValue = a[sortConfig.key].toLowerCase();
    const bValue = b[sortConfig.key].toLowerCase();
    if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });
  const filteredUsers = users.filter(
  (user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
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
              <NavLink to="/dashboard" 
              className={({ isActive }) =>
                `text-gray-700 hover:text-blue-600 ${
                  isActive ? "font-bold text-blue-600" : ""
                }`
              }
              >
                🧭 Dashboard
              </NavLink>
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
              <NavLink to="/ProductManagement" 
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
              <NavLink to="/reports" 
              className={({ isActive }) =>
                `text-gray-700 hover:text-blue-600 ${
                  isActive ? "font-bold text-blue-600" : ""
                }`
              }
              >
                📈 Reports
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className="text-red-600 hover:text-red-800 font-semibold">
                🚪 Logout
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-semibold mb-8 text-gray-800">User Management</h1>
        <div className="overflow-x-auto bg-white rounded-xl shadow border border-gray-200">
        <div className="mb-6 pl-4 pt-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">User List</h2>
            <input
            type="text"
            placeholder="Search by name or email..."
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 mr-4 max-w-xs"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
          <table className="min-w-full text-left">
          <thead className="bg-blue-100 text-blue-900">
            <tr>
              <th className="p-4 border cursor-pointer" onClick={() => handleSort("name")}>
                Name {sortConfig.key === "name" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
              </th>
              <th className="p-4 border cursor-pointer" onClick={() => handleSort("email")}>
                Email {sortConfig.key === "email" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
              </th>
              <th className="p-4 border cursor-pointer" onClick={() => handleSort("role")}>
                Role {sortConfig.key === "role" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
              </th>
              <th className="p-4 border">Actions</th>
            </tr>
          </thead>
            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-blue-50">
                  <td className="p-4 border">{user.name}</td>
                  <td className="p-4 border">{user.email}</td>
                  <td className="p-4 border">{user.role}</td>
                  <td className="p-4 border">
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                      onClick={() => handleEditClick(user)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-4 text-center text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
            </tbody>
          </table>
        </div>

        {/* Edit Modal */}
        {editingUser !== null && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <form
              onSubmit={handleEditSubmit}
              className="bg-white p-6 rounded shadow-lg w-96"
            >
              <h2 className="text-lg font-bold mb-4">Edit User</h2>
              <input
                className="w-full mb-3 p-2 border rounded"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Name"
                required
              />
              <input
                className="w-full mb-3 p-2 border rounded"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Email"
                required
              />
              <select
                className="w-full mb-4 p-2 border rounded"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                required
              >
                <option value="">Select Role</option>
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 rounded"
                  onClick={() => setEditingUser(null)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  );
};

export default UserManagement;
