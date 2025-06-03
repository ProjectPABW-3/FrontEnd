import { FaPlane, FaSearch } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { Link } from "react-router";
import { AiOutlineCalendar } from "react-icons/ai";

const FlightCardSearch = () => {
  return (
    <>
      <div className="flex flex-wrap gap-4 justify-between items-end">
        <div className="flex items-center gap-2  border-gray-300 rounded-lg p-2 shadow-lg w-[160px] h-[48px]">
          <FiMapPin className="text-blue-600 text-xl flex-shrink-0" />
          <div className="flex flex-col">
            <label className="block text-gray-500 text-sm ">From</label>
            <input
              type="text"
              className="font-semibold focus:outline-none bg-transparent text-black text-sm"
              value="Balikpapan (BPN)"
              readOnly
            />
          </div>
        </div>

        <div className="flex items-center gap-2  border-gray-300 rounded-lg p-2 shadow-lg w-[200px] h-[48px]">
          <FiMapPin className="text-blue-500 text-xl flex-shrink-0" />
          <div className="flex flex-col">
            <label className="block text-gray-500 text-sm">To</label>
            <input
              type="text"
              className="font-semibold focus:outline-none bg-transparent text-black text-sm"
              value="Kuala Lumpur (KXLA)"
              readOnly
            />
          </div>
        </div>

        <div className="flex items-center gap-2  border-gray-300 rounded-lg p-2 shadow-lg w-[160px] h-[48px]">
          <FaPlane className="text-blue-500 text-xl flex-shrink-0" />
          <div className="flex flex-col">
            <label className="block text-gray-500 text-sm">Class</label>
            <select className="font-semibold focus:outline-none bg-transparent text-black text-sm">
              <option>Economy</option>
              <option>Business</option>
              <option>First Class</option>
            </select>
          </div>
        </div>

        <div className="flex items-center gap-2  border-gray-300 rounded-lg p-2 shadow-lg w-[160px] h-[48px]">
          <AiOutlineCalendar className="text-blue-500 text-xl" />
          <div>
            <label className="block text-gray-500 text-sm">Departure</label>
            <input
              type="date"
              className="font-semibold focus:outline-none bg transparant text-black text-sm"
            />
          </div>
        </div>

        <div className="flex items-center gap-2  border-gray-300 rounded-lg p-2 shadow-lg w-[160px] h-[48px]">
          <AiOutlineCalendar className="text-blue-500 text-xl" />
          <div>
            <label className="block text-gray-500 text-sm">Return</label>
            <input
              type="date"
              className="font-semibold focus:outline-none bg-transparant text-black text-sm"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightCardSearch;
