import React, { useState } from 'react';

const AvailabilityManagement = () => {
  const [availabilities, setAvailabilities] = useState([]);
  const [formAvailability, setFormAvailability] = useState({
    id: null,
    jenis: '', // 'Kamar Hotel' atau 'Kursi Penerbangan'
    deskripsi: '',
    jumlah: '',
  });

  // Simpan data (Tambah / Edit)
  const handleSimpan = () => {
    if (!formAvailability.jenis.trim() || !formAvailability.deskripsi.trim() || !formAvailability.jumlah) {
      alert('Semua field harus diisi');
      return;
    }
    if (isNaN(formAvailability.jumlah) || Number(formAvailability.jumlah) < 0) {
      alert('Jumlah harus angka dan tidak negatif');
      return;
    }

    if (formAvailability.id === null) {
      // Tambah baru
      setAvailabilities([
        ...availabilities,
        { ...formAvailability, id: Date.now(), jumlah: Number(formAvailability.jumlah) },
      ]);
    } else {
      // Update yang ada
      setAvailabilities(
        availabilities.map((a) =>
          a.id === formAvailability.id
            ? { ...formAvailability, jumlah: Number(formAvailability.jumlah) }
            : a
        )
      );
    }

    setFormAvailability({ id: null, jenis: '', deskripsi: '', jumlah: '' });
  };

  // Edit
  const handleEdit = (a) => {
    setFormAvailability({ ...a, jumlah: a.jumlah.toString() });
  };

  // Hapus
  const handleHapus = (id) => {
    if (window.confirm('Yakin ingin menghapus data ketersediaan ini?')) {
      setAvailabilities(availabilities.filter((a) => a.id !== id));
      if (formAvailability.id === id) {
        setFormAvailability({ id: null, jenis: '', deskripsi: '', jumlah: '' });
      }
    }
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-10 max-w-4xl mx-auto">
      <h3 className="text-2xl font-semibold mb-4">Manajemen Ketersediaan</h3>

      {/* Form Input */}
      <div className="mb-6 grid grid-cols-1 sm:grid-cols-4 gap-4 max-w-3xl">
        <select
          value={formAvailability.jenis}
          onChange={(e) => setFormAvailability({ ...formAvailability, jenis: e.target.value })}
          className="border border-gray-300 rounded-md p-2"
        >
          <option value="">-- Pilih Jenis --</option>
          <option value="Kamar Hotel">Kamar Hotel</option>
          <option value="Kursi Penerbangan">Kursi Penerbangan</option>
        </select>
        <input
          type="text"
          placeholder="Deskripsi (misal: Deluxe Room / Flight 123)"
          value={formAvailability.deskripsi}
          onChange={(e) => setFormAvailability({ ...formAvailability, deskripsi: e.target.value })}
          className="border border-gray-300 rounded-md p-2"
        />
        <input
          type="number"
          placeholder="Jumlah tersedia"
          value={formAvailability.jumlah}
          onChange={(e) => setFormAvailability({ ...formAvailability, jumlah: e.target.value })}
          className="border border-gray-300 rounded-md p-2"
          min="0"
        />
        <button
          onClick={handleSimpan}
          className="bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          {formAvailability.id === null ? 'Tambah Data' : 'Simpan Perubahan'}
        </button>
      </div>

      {/* Tabel */}
      <table className="min-w-full border-collapse border border-gray-300 max-w-3xl">
        <thead className="bg-gray-200 text-gray-600 uppercase text-sm">
          <tr>
            <th className="py-2 px-4 border border-gray-300">Jenis</th>
            <th className="py-2 px-4 border border-gray-300">Deskripsi</th>
            <th className="py-2 px-4 border border-gray-300">Jumlah Tersedia</th>
            <th className="py-2 px-4 border border-gray-300 text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {availabilities.length > 0 ? (
            availabilities.map((a) => (
              <tr key={a.id} className="hover:bg-gray-100 cursor-pointer">
                <td className="py-2 px-4 border border-gray-300">{a.jenis}</td>
                <td className="py-2 px-4 border border-gray-300">{a.deskripsi}</td>
                <td className="py-2 px-4 border border-gray-300 text-right">{a.jumlah}</td>
                <td className="py-2 px-4 border border-gray-300 text-center space-x-2">
                  <button
                    onClick={() => handleEdit(a)}
                    className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleHapus(a.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center py-4 text-gray-500">
                Data ketersediaan belum ada
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
};

export default AvailabilityManagement;
