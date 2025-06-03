import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./MainLayout/login";
import Signup from "./MainLayout/signup";
import Home from "./MainLayout/homepage";
import HotelSearchPage from "./MainLayout/hotel/hotelsearch"; 
import HotelDetailPage from "./MainLayout/hotel/hoteldetail"; 
import HotelBooking from "./MainLayout/hotel/hotelbooking"; 
import FlightSearch from "./MainLayout/flight/flightsearch";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/hotel-search" element={<HotelSearchPage />} /> 
        <Route path="/hotel-detail" element={<HotelDetailPage />} /> 
        <Route path="/hotel-booking" element={<HotelBooking />} /> 
        <Route path="/flight-search" element={<FlightSearch />} />
      </Routes>
    </Router>
  );
}

export default App;
