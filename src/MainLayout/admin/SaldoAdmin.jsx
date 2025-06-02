import React, { useState } from 'react';

const SaldoAdmin = () => {
  const [saldo, setSaldo] = useState(0);
  const [inputSaldo, setInputSaldo] = useState('');

  const handleTambah = () => {
    const value = parseInt(inputSaldo, 10);
    if (!isNaN(value) && value > 0) {
      setSaldo(saldo + value);
      setInputSaldo('');
    }
  };

  const handleKurangi = () => {
    const value = parseInt(inputSaldo, 10);
    if (!isNaN(value) && value > 0 && saldo - value >= 0) {
      setSaldo(saldo - value);
      setInputSaldo('');
    }
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-10 max-w-md mx-auto">
      <h3 className="text-2xl font-semibold mb-4 text-center">Saldo Admin</h3>
      <p className="text-center text-lg mb-4">Saldo Saat Ini: <span className="font-bold">{saldo}</span></p>
      <div className="flex gap-4">
        <input
          type="number"
          placeholder="Masukkan jumlah"
          value={inputSaldo}
          onChange={(e) => setInputSaldo(e.target.value)}
          className="flex-grow border border-gray-300 rounded-md p-2"
          min="1"
        />
        <button onClick={handleTambah} className="bg-green-600 text-white px-4 rounded hover:bg-green-700 transition">
          Tambah
        </button>
        <button onClick={handleKurangi} className="bg-red-600 text-white px-4 rounded hover:bg-red-700 transition">
          Kurangi
        </button>
      </div>
    </section>
  );
};

export default SaldoAdmin;
