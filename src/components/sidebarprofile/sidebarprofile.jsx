import { FaClipboardList, FaCog, FaSignOutAlt, FaUsers, FaWallet } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Sidebarprofile = () => {
  const location = useLocation();
  const activeClass = "text-[#60b5ee] font-semibold";
  const inactiveClass = "text-gray-700 hover:text-[#60b5ee]";

  return (
    <div className="w-64 h-full bg-white border rounded shadow p-4">
      {/* Hapus baris ini jika tidak ada isi */}
      {/* <div className="flex items-center space-x-4 mb-6"></div> */}

      <ul className="space-y-4 text-sm pt-2">
        <li>
          <Link to="/emoney" className={`flex items-center ${location.pathname === "/emoney" ? activeClass : inactiveClass}`}>
            <FaWallet className="mr-2" />
            E-Money
          </Link>
        </li>
        <li>
          <Link to="/booking" className={`flex items-center ${location.pathname === "/booking" ? activeClass : inactiveClass}`}>
            <FaClipboardList className="mr-2" />
            My Booking
          </Link>
        </li>
        <li>
          <Link to="/passengers" className={`flex items-center ${location.pathname === "/passengers" ? activeClass : inactiveClass}`}>
            <FaUsers className="mr-2" />
            Saved Passenger Details
          </Link>
        </li>
        <li>
          <Link to="/account" className={`flex items-center ${location.pathname === "/account" ? activeClass : inactiveClass}`}>
            <FaCog className="mr-2" />
            My Account
          </Link>
        </li>
        <li>
          <Link to="/logout" className={`flex items-center ${location.pathname === "/logout" ? activeClass : inactiveClass}`}>
            <FaSignOutAlt className="mr-2" />
            Log Out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebarprofile;
