import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import Sidebarprofile from "./components/sidebarprofile/sidebarprofile";
import Aboutus from "./MainLayout/aboutus";
import AdminDashboard from "./MainLayout/admin/AdminDashboard";
import ProductManagement from "./MainLayout/admin/ProductManagement";
import Users from "./MainLayout/admin/UserManagement";

import Artikel from "./MainLayout/Artikel";
import Artikel1 from "./MainLayout/Artikel1";
import Artikel2 from "./MainLayout/Artikel2";
import Artikel3 from "./MainLayout/Artikel3";
import BookingPesawat from "./MainLayout/booking/bookingPesawat";
import { default as Home, default as Homepage } from "./MainLayout/homepage";
import Login from "./MainLayout/login";
import DashboardMitra from "./MainLayout/mitra/dashboardMitra";
import Payment1 from "./MainLayout/payment/payment1";
import Payment2 from "./MainLayout/payment/payment2";
import Account from "./MainLayout/profile/account";
import Booking from "./MainLayout/profile/booking";
import Emoney from "./MainLayout/profile/emoney";
import Logout from "./MainLayout/profile/logout";
import Passengers from "./MainLayout/profile/passengers";
import ProfilSetting from "./MainLayout/profilSetting";
import Signup from "./MainLayout/signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/bookingPesawat" element={<BookingPesawat />} />
        <Route path="/payment1" element={<Payment1 />} />
        <Route path="/payment2" element={<Payment2 />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/profil/setting" element={<ProfilSetting />} />
        <Route path="/dashboard-mitra" element={<DashboardMitra />} />
        <Route path="/dashboard-admin" element={<AdminDashboard />}/>
        <Route path="/UserManagement" element={<Users />} />
        <Route path="/ProductManagement" element={<ProductManagement />} />
        <Route path="/Sidebarprofile" element={<Sidebarprofile />} />
        <Route path="/Emoney" element={<Emoney />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/passengers" element={<Passengers />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/Artikel" element={<Artikel />} />
        <Route path="/Artikel1" element={<Artikel1 />} />
        <Route path="/Artikel2" element={<Artikel2 />} />
        <Route path="/Artikel3" element={<Artikel3 />} />
        {/* tambahkan route lainnya jika perlu */}
      </Routes>
    </Router>
  );
}

export default App;
