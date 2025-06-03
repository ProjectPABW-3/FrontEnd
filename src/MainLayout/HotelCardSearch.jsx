import { FaHotel } from "react-icons/fa";

const HotelCardSearch = () => {
  return (
    <div className="bg-white rounded-xl p-4 mt-4 shadow-md w-fit">
      <div className="flex flex-wrap gap-4 items-end">
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
      </div>
    </div>
  );
};

export default HotelCardSearch;
