import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./MainLayout/login";
import Signup from "./MainLayout/signup";
import Home from "./MainLayout/homepage";
import Navbarhome from "./components/navbar/navbarhome";
import Footer from "./components/footer/footer";
import ProfilSetting from "./MainLayout/profilSetting";
import DashboardMitra from "./MainLayout/mitra/dashboardMitra";
import AdminDashboard from "./MainLayout/admin/AdminDashboard";
import Users from "./MainLayout/admin/UserManagement";
import ProductManagement from "./MainLayout/admin/ProductManagement";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/navbarhome" element={<Navbarhome />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/profil/setting" element={<ProfilSetting />} />
        <Route path="/dashboard-mitra" element={<DashboardMitra />} />
        <Route path="/dashboard-admin" element={<AdminDashboard />}/>
        <Route path="/UserManagement" element={<Users />} />
        <Route path="/ProductManagement" element={<ProductManagement />} />
        {/* tambahkan route lainnya jika perlu */}
      </Routes>
    </Router>
  );
}

export default App;
