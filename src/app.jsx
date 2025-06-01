import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./MainLayout/login";
import Signup from "./MainLayout/signup";
import Home from "./MainLayout/homepage";
import AdminDashboard from "./MainLayout/admin/AdminDashboard";
//import EmoneyPage from './MainLayout/emoney/emoney';
import Users from "./MainLayout/admin/UserManagement";
import ProductManagement from "./MainLayout/admin/ProductManagement";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<AdminDashboard />}/>
        <Route path="/emoney" element={< emoney/>}/>
        <Route path="/UserManagement" element={<Users />} />
        <Route path="/ProductManagement" element={<ProductManagement />} />
        {/* tambahkan route lainnya jika perlu */}
      </Routes>
    </Router>
  );
}

export default App;
