import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./MainLayout/login";
import Signup from "./MainLayout/signup";
import Home from "./MainLayout/homepage";
import Footer from "./components/footer/footer";
import ProfilSetting from "./MainLayout/profilSetting";
import DashboardMitra from "./MainLayout/mitra/dashboardMitra";
import AdminDashboard from "./MainLayout/admin/AdminDashboard";
import BookingPesawat from "./MainLayout/booking/bookingPesawat";
import Payment1 from "./MainLayout/payment/payment1";
import Payment2 from "./MainLayout/payment/payment2";
import Users from "./MainLayout/admin/UserManagement";
import ProductManagement from "./MainLayout/admin/ProductManagement";
import Sidebarprofile from "./components/sidebarprofile/sidebarprofile";
import Emoney from "./MainLayout/profile/emoney";
import Account from "./MainLayout/profile/account";
import Booking from "./MainLayout/profile/booking";
import Passengers from "./MainLayout/profile/passengers";
import Logout from "./MainLayout/profile/logout";
import Homepage from "./MainLayout/homepage";
import Aboutus from "./MainLayout/aboutus";


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
        {/* tambahkan route lainnya jika perlu */}
      </Routes>
    </Router>
  );
}

export default App;
