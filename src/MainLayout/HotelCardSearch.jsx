import { FaHotel } from "react-icons/fa";
import { FaCalendarAlt, FaMapMarkerAlt, FaDoorOpen } from "react-icons/fa";

const HotelCardSearch = () => {
  return (
    <div className="flex flex-wrap gap-4 items-end">
      {/* Tipe Hotel */}
      <div className="flex items-center gap-2 border-gray-300 rounded-lg p-2 shadow-lg w-[200px] h-[48px]">
        <FaHotel className="text-blue-600 text-xl flex-shrink-0" />
        <div className="flex flex-col">
          <label className="block text-gray-500 text-sm">Tipe Hotel</label>
          <select className="font-semibold focus:outline-none bg-transparent text-black text-sm">
            <option value="all">Semua</option>
            <option value="budget">Budget</option>
            <option value="business">Business</option>
            <option value="luxury">Luxury</option>
            <option value="resort">Resort</option>
            <option value="boutique">Boutique</option>
          </select>
        </div>
      </div>

      {/* Kota */}
      <div className="flex items-center gap-2 border-gray-300 rounded-lg p-2 shadow-lg w-[200px] h-[48px]">
        <FaMapMarkerAlt className="text-blue-600 text-xl flex-shrink-0" />
        <div className="flex flex-col">
          <label className="block text-gray-500 text-sm">Kota</label>
          <input
            type="text"
            placeholder="Masukkan kota"
            className="font-semibold bg-transparent text-black text-sm focus:outline-none"
          />
        </div>
      </div>

      {/* Tanggal Masuk */}
      <div className="flex items-center gap-2 border-gray-300 rounded-lg p-2 shadow-lg w-[200px] h-[48px]">
        <FaCalendarAlt className="text-blue-600 text-xl flex-shrink-0" />
        <div className="flex flex-col">
          <label className="block text-gray-500 text-sm">Tanggal Masuk</label>
          <input
            type="date"
            className="font-semibold bg-transparent text-black text-sm focus:outline-none"
          />
        </div>
      </div>

      {/* Tanggal Keluar */}
      <div className="flex items-center gap-2 border-gray-300 rounded-lg p-2 shadow-lg w-[200px] h-[48px]">
        <FaCalendarAlt className="text-blue-600 text-xl flex-shrink-0" />
        <div className="flex flex-col">
          <label className="block text-gray-500 text-sm">Tanggal Keluar</label>
          <input
            type="date"
            className="font-semibold bg-transparent text-black text-sm focus:outline-none"
          />
        </div>
      </div>

      {/* Pilih Kamar */}
      <div className="flex items-center gap-2 border-gray-300 rounded-lg p-2 shadow-lg w-[200px] h-[48px]">
        <FaDoorOpen className="text-blue-600 text-xl flex-shrink-0" />
        <div className="flex flex-col">
          <label className="block text-gray-500 text-sm">Jumlah Kamar</label>
          <select className="font-semibold focus:outline-none bg-transparent text-black text-sm">
            <option value="1">1 Kamar</option>
            <option value="2">2 Kamar</option>
            <option value="3">3 Kamar</option>
            <option value="4">4 Kamar</option>
            <option value="5">5+</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default HotelCardSearch;
