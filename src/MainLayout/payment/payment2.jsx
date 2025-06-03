import { useEffect, useState } from 'react';
import { FaPlane } from 'react-icons/fa';

export default function Payment2() {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const deadline = new Date().getTime() + 24 * 60 * 60 * 1000;

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = deadline - now;

      if (distance <= 0) {
        setCountdown('Waktu pembayaran habis');
        return;
      }

      const hours = String(Math.floor((distance / (1000 * 60 * 60)) % 24)).padStart(2, '0');
      const minutes = String(Math.floor((distance / (1000 * 60)) % 60)).padStart(2, '0');
      const seconds = String(Math.floor((distance / 1000) % 60)).padStart(2, '0');

      setCountdown(`Bayar dalam ${hours}:${minutes}:${seconds}`);
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-md mx-auto mt-6 bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-[#60B5EE] text-white flex justify-between items-center px-4 py-3 text-sm font-medium">
        <span>&lt; Pembayaran</span>
        <span>Booking ID : 232426</span>
      </div>

      <div className="p-5 text-center">
        <h2 className="text-gray-500 text-sm">Total Harga Bayar</h2>
        <div className="text-2xl font-bold my-2 text-gray-500">Rp1.250.000</div>

        <div className="text-sm text-gray-500 mt-5 flex items-center justify-between px-2">
          <div className="text-left">
            <p className="font-semibold">Balikpapan (BPN)</p>
            <p>Sepinggan</p>
            <p>10.15</p>
          </div>

          <div className="text-gray-400 text-xl">
            <FaPlane className="mx-4 rotate-90 sm:rotate-0" />
          </div>

          <div className="text-right">
            <p className="font-semibold">Makassar (UPG)</p>
            <p>Hasanuddin</p>
            <p>11.00</p>
          </div>
        </div>

        <div className="text-sm text-gray-500 mt-3">Kamis, 23 Mei 2024</div>
        <div className="text-sm text-gray-500">Super Air Jet</div>

        <hr className=" border-gray-300 border-[1px] my-5" />

        <div className="font-medium text-sm text-gray-500 mb-2">Metode Pembayaran</div>

        <div className="flex justify-between items-center border border-gray-300 rounded-xl px-4 py-3 cursor-pointer hover:bg-gray-50">
          <div className="text-left">
            <a href="#" className="text-[#78C3F3] font-semibold block">SkyPay</a>
            <div className="font-semibold text-lg text-gray-500">Rp1.500.000</div>
          </div>
          <div className="text-gray-500 text-2xl">&gt;</div>
        </div>

        <div className="text-sm text-black mt-5">{countdown}</div>
      </div>
    </div>
  );
}
