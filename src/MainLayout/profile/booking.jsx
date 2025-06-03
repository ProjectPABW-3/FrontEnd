import { FaClipboardList } from "react-icons/fa";
import Footer from "../../components/footer/footer";
import Navbarprofile from "../../components/navbar/navbarprofile";
import Sidebarprofile from "../../components/sidebarprofile/sidebarprofile";
import HistoriPembelian from "../../components/history/HistoriPembelian";

const Booking = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbarprofile />
      <div className="flex flex-1 px-8 py-10 gap-8">
        {/* Sidebar */}
        <div className="w-64">
          <Sidebarprofile />
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-6">
          {/* Reschedule Banner */}
          <div className="bg-[#60b5ee] text-white p-5 rounded shadow-md flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <p className="uppercase font-bold text-sm tracking-wider">Easy</p>
              <h3 className="text-xl font-semibold mt-1">RESCHEDULE</h3>
            </div>
            <div className="mt-4 md:mt-0 text-sm">
              <p className="font-semibold">Sky Book Easy Reschedule</p>
              <p>
                Changes are unavoidable
                <br />
                Make this one easy
              </p>
              <button className="mt-2 underline">Learn more</button>
            </div>
          </div>

          {/* Active E-tickets & Vouchers */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              Active E-tickets & Vouchers
            </h3>
            <div className="bg-gray-50 border rounded shadow-sm p-4 flex items-start space-x-4">
              <div className="bg-blue-100 text-[#60b5ee] p-3 rounded-full">
                <FaClipboardList size={20} />
              </div>
              <div>
                <p className="font-bold text-gray-800">
                  No Active Bookings Found
                </p>
                <p className="text-sm text-gray-600">
                  Anything you booked shows up here, but it seems like you
                  haven’t made any. Let’s create one via homepage
                </p>
              </div>
            </div>
          </div>

          {/* Purchase List */}
          <div>
            <h3 className="text-lg font-bold mb-4">Purchase List</h3>
            <div className="bg-gray-50 border rounded shadow-sm p-4">
              <p>
                View your{" "}
                <span className="text-blue-500 underline cursor-pointer">
                  Purchase History
                </span>
              </p>
            </div>
          </div>

          {/* Purchase History Component */}
          <div>
            <h3 className="text-lg font-bold mb-2">Purchase List</h3>
            <div className="bg-gray-50 border rounded shadow-sm p-4">
              <HistoriPembelian />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Booking;
