import React, { useState } from 'react';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [formUser, setFormUser] = useState({ id: null, nama: '', email: '' });

  const handleTambahUser = () => {
    if (!formUser.nama || !formUser.email) return;

    if (formUser.id === null) {
      // Tambah baru
      setUsers([...users, { id: Date.now(), nama: formUser.nama, email: formUser.email }]);
    } else {
      // Edit user
      setUsers(users.map(u => (u.id === formUser.id ? formUser : u)));
    }
    setFormUser({ id: null, nama: '', email: '' });
  };

  const handleEditUser = (user) => {
    setFormUser(user);
  };

  const handleHapusUser = (id) => {
    setUsers(users.filter(u => u.id !== id));
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-10 max-w-3xl mx-auto">
      <h3 className="text-2xl font-semibold mb-4">Manajemen Pengguna</h3>
      <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-md">
        <input
          type="text"
          placeholder="Nama"
          value={formUser.nama}
          onChange={(e) => setFormUser({ ...formUser, nama: e.target.value })}
          className="border border-gray-300 rounded-md p-2"
        />
        <input
          type="email"
          placeholder="Email"
          value={formUser.email}
          onChange={(e) => setFormUser({ ...formUser, email: e.target.value })}
          className="border border-gray-300 rounded-md p-2"
        />
        <button
          onClick={handleTambahUser}
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {formUser.id === null ? 'Tambah Pengguna' : 'Simpan Perubahan'}
        </button>
      </div>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead className="bg-gray-200 text-gray-600 uppercase text-sm">
          <tr>
            <th className="py-2 px-4 border border-gray-300 text-left">Nama</th>
            <th className="py-2 px-4 border border-gray-300 text-left">Email</th>
            <th className="py-2 px-4 border border-gray-300 text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-100 cursor-pointer">
              <td className="py-2 px-4 border border-gray-300">{user.nama}</td>
              <td className="py-2 px-4 border border-gray-300">{user.email}</td>
              <td className="py-2 px-4 border border-gray-300 text-center space-x-2">
                <button
                  onClick={() => handleEditUser(user)}
                  className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleHapusUser(user.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
          {users.length === 0 && (
            <tr>
              <td colSpan="3" className="text-center py-4 text-gray-500">
                Belum ada pengguna
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
};

export default UserManagement;
