import { useEffect, useState } from 'react';

export default function Payment1() {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const deadline = new Date().getTime() + 24 * 60 * 60 * 1000;

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = deadline - now;

      if (distance <= 0) {
        setCountdown('Waktu pembayaran habis');
        clearInterval(timer);
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
        <span>Booking ID : 232425</span>
      </div>

      <div className="p-5 text-center text-gray-500">
        <h2 className="text-gray-500 text-sm">Total Harga Bayar</h2>
        <div className="text-2xl font-bold my-2">Rp650.000</div>

        <div className="text-left text-sm text-gray-500 mt-5 space-y-1">
            <p className="font-medium text-lg ">Mesra Business Resort & Hotel</p>
            <div className="grid grid-cols-2 pr-44 text-sm font-medium text-gray-400">
                <p>Check In</p>
                <p className="text-right text-gray-600">23 Mei 2024</p>
                <p>Check Out</p>
                <p className="text-right text-gray-600">24 Mei 2024</p>
            </div>

          <div className='flex flex-row gap-20 font-medium text-gray-400'>
            <p>Check Out</p>
            <p>24 Mei 2024</p>
          </div>
          <p className='font-medium text-gray-400'>Prestige Room</p>
          <p className='font-medium text-gray-400'>1 Kamar - 2 Guest</p>
        </div>

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
