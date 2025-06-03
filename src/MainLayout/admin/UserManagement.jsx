import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", role: "" });
  const [showAddModal, setShowAddModal] = useState(false);

  const dummyUsers = [
    { id: 1, name: "John", email: "john@example.com", role: "User" },
    { id: 2, name: "Jane", email: "jane@example.com", role: "Admin" },
    { id: 3, name: "Budi", email: "budi@example.com", role: "User" },
    { id: 4, name: "Adel", email: "adel@example.com", role: "User" },
    { id: 5, name: "Angel", email: "angel@example.com", role: "User" },
    { id: 6, name: "Mini", email: "mini@example.com", role: "User" }
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

  const handleAddSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/api/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(() => {
        setShowAddModal(false);
        fetchUsers();
      })
      .catch((err) => console.error(err));
  };

  const exportCSV = () => {
    const csvRows = [
      ["Name", "Email", "Role"],
      ...users.map((u) => [u.name, u.email, u.role]),
    ];
    const csvContent =
      "data:text/csv;charset=utf-8," +
      csvRows.map((row) => row.join(",")).join("\n");
    const link = document.createElement("a");
    link.setAttribute("href", encodeURI(csvContent));
    link.setAttribute("download", "users.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
              <NavLink to="/dashboard-admin" 
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
      <main className="flex-1 min-h-screen bg-gradient-to-br from-white via-blue-50 to-sky-100 p-8">
        <h1 className="text-3xl font-semibold mb-8 text-gray-800">User Management</h1>

        {/* Toolbar */}
        <div className="bg-white/90 border border-blue-200 rounded-xl p-4 shadow-sm flex justify-between items-center mb-4">
          <div>
            <p className="text-lg font-semibold text-gray-700">Total Users: {users.length}</p>
          </div>
          <div className="flex gap-2">
            <button onClick={exportCSV} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Export CSV</button>
            <button onClick={() => { setFormData({ name: "", email: "", role: "" }); setShowAddModal(true); }} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">+ Add User</button>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-md border border-blue-100 rounded-2xl shadow-lg p-6 mt-6">
        <div className="mb-6 pl-4 pt-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">User List</h2>
            <input
            type="text"
            placeholder="Search by name or email..."
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 mr-4 max-w-xs"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
              <div key={user.id} className="bg-sky-50 border border-blue-100 rounded-xl p-6 shadow hover:shadow-xl hover:bg-sky-100 transition-all">
                <h3 className="text-xl font-bold text-blue-900">{user.name}</h3>
                <p className="text-slate-500">{user.email}</p>
                <span className="mt-2 inline-block px-3 py-1 bg-gradient-to-r from-sky-100 to-blue-100 text-blue-700 rounded-full text-xs font-medium shadow-sm">{user.role}</span>
                <div className="mt-4 flex gap-2">
                  <button
                  onClick={() => handleEditClick(user)}
                  className="bg-gradient-to-r from-blue-500 to-sky-500 text-white px-4 py-1 rounded-full shadow hover:from-sky-600 hover:to-blue-600"
                  >
                    Edit
                  </button>
                  <button
                  onClick={() => handleDelete(user.id)}
                  className="bg-gradient-to-r from-red-400 to-red-600 text-white px-4 py-1 rounded-full shadow hover:from-red-500 hover:to-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
              ))
            ) : (
            <p className="text-gray-500 col-span-full text-center">No users found.</p>
            )}
          </div>
        </div>

        {/* Edit Modal */}
        {editingUser !== null && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
          role="dialog"
          aria-modal="true">
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
        {/* Add User Modal */}
        {showAddModal && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
          role="dialog"
          aria-modal="true">
            <form onSubmit={handleAddSubmit} className="bg-white p-6 rounded shadow-lg w-96">
              <h2 className="text-lg font-bold mb-4">Add New User</h2>
              <input className="w-full mb-3 p-2 border rounded" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Name" required />
              <input className="w-full mb-3 p-2 border rounded" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Email" required />
              <select className="w-full mb-4 p-2 border rounded" value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} required>
                <option value="">Select Role</option>
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
              <div className="flex justify-end gap-2">
                <button type="button" className="px-4 py-2 bg-gray-300 rounded" onClick={() => setShowAddModal(false)}>Cancel</button>
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Add</button>
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  );
};

export default UserManagement;
