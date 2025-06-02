import React, { useState } from 'react';

const MitraManagement = () => {
  const [mitra, setMitra] = useState([]);
  const [formMitra, setFormMitra] = useState({ id: null, nama: '', kontak: '' });

  // Tambah atau edit mitra
  const handleSimpanMitra = () => {
    if (!formMitra.nama.trim() || !formMitra.kontak.trim()) {
      alert('Nama dan Kontak harus diisi');
      return;
    }

    if (formMitra.id === null) {
      // Tambah mitra baru
      setMitra([...mitra, { ...formMitra, id: Date.now() }]);
    } else {
      // Update mitra yang ada
      setMitra(mitra.map(m => (m.id === formMitra.id ? formMitra : m)));
    }

    // Reset form setelah simpan
    setFormMitra({ id: null, nama: '', kontak: '' });
  };

  // Edit mitra (isi form dengan data mitra yang dipilih)
  const handleEditMitra = (m) => {
    setFormMitra(m);
  };

  // Hapus mitra berdasarkan id
  const handleHapusMitra = (id) => {
    if (window.confirm('Yakin ingin menghapus mitra ini?')) {
      setMitra(mitra.filter(m => m.id !== id));
      if (formMitra.id === id) {
        setFormMitra({ id: null, nama: '', kontak: '' });
      }
    }
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-10 max-w-3xl mx-auto">
      <h3 className="text-2xl font-semibold mb-4">Manajemen Mitra</h3>

      {/* Form Input Mitra */}
      <div className="mb-6 max-w-md grid grid-cols-1 gap-4">
        <input
          type="text"
          placeholder="Nama Mitra"
          value={formMitra.nama}
          onChange={(e) => setFormMitra({ ...formMitra, nama: e.target.value })}
          className="border border-gray-300 rounded-md p-2"
        />
        <input
          type="text"
          placeholder="Kontak"
          value={formMitra.kontak}
          onChange={(e) => setFormMitra({ ...formMitra, kontak: e.target.value })}
          className="border border-gray-300 rounded-md p-2"
        />
        <button
          onClick={handleSimpanMitra}
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {formMitra.id === null ? 'Tambah Mitra' : 'Simpan Perubahan'}
        </button>
      </div>

      {/* Tabel daftar mitra */}
      <table className="min-w-full border-collapse border border-gray-300">
        <thead className="bg-gray-200 text-gray-600 uppercase text-sm">
          <tr>
            <th className="py-2 px-4 border border-gray-300 text-left">Nama Mitra</th>
            <th className="py-2 px-4 border border-gray-300 text-left">Kontak</th>
            <th className="py-2 px-4 border border-gray-300 text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {mitra.length > 0 ? (
            mitra.map((m) => (
              <tr key={m.id} className="hover:bg-gray-100 cursor-pointer">
                <td className="py-2 px-4 border border-gray-300">{m.nama}</td>
                <td className="py-2 px-4 border border-gray-300">{m.kontak}</td>
                <td className="py-2 px-4 border border-gray-300 text-center space-x-2">
                  <button
                    onClick={() => handleEditMitra(m)}
                    className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleHapusMitra(m.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center py-4 text-gray-500">
                Belum ada mitra
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
};

export default MitraManagement;
