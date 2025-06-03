import React from 'react';
import { useState } from "react";
import { FaPlane, FaHotel,  FaConciergeBell,  FaUtensils, FaBath, FaShuttleVan, FaBookOpen, FaMapMarkerAlt,
          FaChild, FaWheelchair, FaBusinessTime, FaPlaneDeparture, FaHorse, FaShoppingBag, FaUsers, FaWifi as FaWifiAlt, 
          FaBaby, FaCalendarAlt, FaUser, FaSearch, FaStar, FaUserTie, FaUserNurse, FaUserGraduate, FaArrowLeft  } from "react-icons/fa";
import { MdLocationOn } from 'react-icons/md';
import NavbarProfile from '../../../src/components/navbar/NavbarProfile';
import Footer from '../../../src/components/footer/footer';
import Logo from "../../assets/logo.svg";
import MBS3 from '../../assets/hotel/MBS3.jpg';
import TP3 from '../../assets/hotel/TP3.jpg';
import SVT1 from '../../assets/hotel/SVT1.jpg';
import BHL1 from '../../assets/hotel/BHL1.jpg';
import BAA2 from '../../assets/hotel/BAA2.jpg';
import { Link } from 'react-router';

const HotelDetailPage = () => {
  const hotel = {
    name: "Marina By Sand",
    description:
      "Marina Bay Sands is a modern architectural marvel, known worldwide for its rooftop infinity pool that seems to float above the city skyline. The hotel is part of a massive resort complex that includes a casino, luxury shopping mall, convention center, and the ArtScience Museum.",
    address: "10 Bayfront Avenue, Marina Bay 018956, Singapore"
  };

  const [activeSection, setActiveSection] = useState("overview");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  const buttonClass = (id) =>
    `px-8 py-3 font-semibold transition-colors duration-300 ${
      activeSection === id
        ? "bg-[#00B4D8] text-white"
        : "bg-transparent text-gray-500"
    }`;

  return (
    <div className="bg-[#F8F8F8] w-full min-h-screen px-0 -pt-4 pb-10 flex flex-col items-center">
      <NavbarProfile />

      {/* TAB PILIHAN */}
      <div className="flex bg-white rounded-t-xl overflow-hidden shadow ml-[-756px] -mt-20 z-10 relative">
        <button className="flex items-center gap-2 px-8 py-4 text-gray-500 hover:bg-blue-100 font-semibold">
          <FaPlane style={{ color: '#60B5EE' }} /> Flights
        </button>
        <button className="flex items-center gap-2 px-8 py-4 font-semibold" style={{ backgroundColor: '#00B4D8', color: '#3F5F75' }}>
          <FaHotel style={{ color: '#465277' }} /> Hotels
        </button>
      </div>

      <div className="bg-white rounded-tr-xl rounded-b-xl shadow-lg px-8 py-9 w-full max-w-5xl flex flex-col items-center">
        <div className="flex w-full justify-between items-center overflow-hidden">
          
          <div className="flex items-center gap-3 flex-1 px-6 py-4">
            <FaMapMarkerAlt style={{ color: '#60B5EE' }} className="text-xl" />
            <div>
              <p className="text-gray-400 text-sm">City, Destination, or Hotel Name</p>
              <p className="font-bold">Hotel Bintang 15</p>
            </div>
          </div>

          <div className="h-12 w-px bg-gray-400"></div>

          <div className="flex items-center gap-3 flex-1 px-6 py-4">
            <FaCalendarAlt style={{ color: '#60B5EE' }} className="text-xl" />
            <div>
              <p className="text-gray-400 text-sm">Check-in & Check-Out Date</p>
              <p className="font-bold">22 Apr 2025 - 30 Apr 2025</p>
            </div>
          </div>

          <div className="h-12 w-px bg-gray-400"></div>

          <div className="flex items-center gap-3 flex-1 px-6 py-4">
            <FaUser style={{ color: '#60B5EE' }} className="text-xl" />
            <div>
              <p className="text-gray-400 text-sm">Guests & Rooms</p>
              <p className="font-bold">2 Adult(s), 0 Child, 1 Room</p>
            </div>
          </div>

        </div>
      </div>

      <button className="mt-[-20px] py-3 px-8 rounded-full flex items-center gap-2 shadow-xl hover:bg-blue-900 transition" style={{ backgroundColor: '#023E8A', color: 'white' }}>
        Search Hotels <FaSearch style={{ color: 'white' }} />
      </button>

      <div className="w-full max-w-[1150px] bg-[#F7FDFF] rounded-2xl p-12 mt-20">
        <div className="flex justify-center -mt-[70px] z-10 relative">
          <div className="flex bg-gray-200 rounded-full overflow-hidden">
            <button
              className={buttonClass("overview")}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setActiveSection("overview");
              }}
            >
              Overview
            </button>
            <button
              className={buttonClass("kamar")}
              onClick={() => scrollToSection("kamar")}
            >
              Kamar
            </button>
            <button
              className={buttonClass("fasilitas")}
              onClick={() => scrollToSection("fasilitas")}
            >
              Fasilitas
            </button>
            <button
              className={buttonClass("review")}
              onClick={() => scrollToSection("review")}
            >
              Review
            </button>
          </div>
        </div>
    
        <div className="flex flex-row items-start gap-8 mb-12 mt-30">
          <div className="w-[240px] h-[350px] bg-gray-300 rounded-none overflow-hidden">
            <img
              src={BHL1}
              alt="Gambar 1"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-[240px] h-[300px] bg-gray-300 rounded-none mt-6 overflow-hidden">
            <img
              src={BAA2}
              alt="Gambar 2"
              className="w-full h-full object-cover"
            />
          </div>
      
        <div className="flex-1">
            <p className="text-gray-400 text-sm">Welcome To</p>
            <h1 className="text-3xl font-bold mb-4">{hotel.name}</h1>
            <p className="text-gray-700">{hotel.description}</p>
        </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-6">
          <div className="bg-white shadow-lg rounded-xl p-6 flex items-start gap-4 w-full max-w-sm">
            <div className="w-24 h-24 bg-gray-200 rounded"></div>
            <div>
              <h2 className="font-semibold text-lg mb-2">Location & Maps</h2>
              <div className="flex items-center text-sm text-gray-500">
                <MdLocationOn className="mr-2" />
                <span>{hotel.address}</span>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-sm">
            <h2 className="font-semibold text-lg mb-4 text-center">In The Area</h2>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>{hotel.address}</li>
              <li>{hotel.address}</li>
              <li>{hotel.address}</li>
              <li>{hotel.address}</li>
            </ul>
          </div>
        </div>

        <div
          id="kamar"
          className="w-full bg-[#00B6DE] flex items-center justify-center gap-4 rounded-xl py-2 px-2 mb-6 mt-30 relative overflow-visible"
        >
          {/* Logo Sky Book */}
          <div className="relative w-[60px] h-[50px]">
            <img
              src={Logo}
              alt="Sky Book Logo"
              className="absolute scale-[2.5] -top-4 -left-4"
            />
          </div>

          <p className="text-white text-[18px] font-bold font-[Poppins] text-center">
            Choose Sky Book’s top-rated partners for a smoother, more satisfying stay experience!
          </p>
        </div>

          <section className="mt-16">
            <div
              className="rounded-xl shadow-md p-6"
              style={{
                background: 'linear-gradient(to bottom, #A8DBFB 70%, #D9E3E9 100%)',
                backgroundColor: 'rgba(140, 212, 236, 0.2)',
              }}
            >
              {/* Judul */}
              <h2
                className="text-[28px] font-extrabold text-center mb-6"
                style={{ fontFamily: 'Playfair Display' }}
              >
                Prestige Room
              </h2>

              <div className="flex flex-col md:flex-row gap-6">
                {/* Gambar */}
                <img
                  src={MBS3}
                  alt="Prestige Room"
                  className="w-[411px] h-[411px] rounded-md object-cover mx-auto"
                />

                {/* Informasi */}
                <div className="flex-1 space-y-4 text-gray-800">
                  {/* Informasi Kamar */}
                  <div>
                    <h3
                      className="text-[18px] font-extrabold mb-1"
                      style={{ fontFamily: 'Poppins' }}
                    >
                      Informasi Kamar
                    </h3>
                    <div className="flex items-center gap-6 text-[16px] italic font-medium" style={{ fontFamily: 'Poppins' }}>
                      <p>📏 25.7 m²</p>
                      <p>👤 2 Guest</p>
                    </div>
                  </div>

                  <hr />

                  {/* Fasilitas Kamar */}
                  <div>
                    <h3
                      className="text-[18px] font-extrabold mb-1"
                      style={{ fontFamily: 'Poppins' }}
                    >
                      Fasilitas Kamar
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-[16px] italic font-medium" style={{ fontFamily: 'Poppins' }}>
                      <p>● AC</p>
                      <p>● Gorden Anti Tembus Cahaya</p>
                      <p>● Air Minum Kemasan</p>
                      <p>● City View</p>
                      <p>● Mesin Kopi / Teh</p>
                      <p>● Televisi</p>
                      <p>● Kulkas</p>
                    </div>
                  </div>

                  <hr />

                  {/* Fasilitas Kamar Mandi */}
                  <div>
                    <h3
                      className="text-[18px] font-extrabold mb-1"
                      style={{ fontFamily: 'Poppins' }}
                    >
                      Fasilitas Kamar Mandi
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-[16px] italic font-medium" style={{ fontFamily: 'Poppins' }}>
                      <p>● Shower</p>
                      <p>● Air Hangat</p>
                      <p>● Bathtub</p>
                      <p>● Perlengkapan Mandi</p>
                    </div>
                  </div>

                  <hr />

                  {/* About */}
                  <div>
                    <h3
                      className="text-[18px] font-extrabold mb-1"
                      style={{ fontFamily: 'Poppins' }}
                    >
                      About This Room
                    </h3>
                    <p
                      className="text-justify text-[16px] italic font-medium"
                      style={{ fontFamily: 'Poppins' }}
                    >
                      Prestige Room, a perfect blend of sophistication and comfort
                      designed for discerning travelers. With floor-to-ceiling windows
                      offering a glimpse of the bustling city skyline, this room is
                      tailored for both business and leisure stays.
                    </p>
                  </div>
                </div>
              </div>

              {/* Harga dan Tombol */}
              <div className="-mt-15">
                <p
                  className="text-[18px] font-bold"
                  style={{ fontFamily: 'Poppins' }}
                >
                  Starting From
                </p>
                <p
                  className="font-bold text-[18px]"
                  style={{ color: '#FF9000', fontFamily: 'Poppins' }}
                >
                  Rp.5.540.000{' '}
                  <span
                    className="text-[13px] italic font-medium text-gray-600"
                    style={{ fontFamily: 'Poppins' }}
                  >
                    / room / night(s)
                  </span>
                </p>

                {/* Tombol */}
                <div className="flex flex-col gap-4 mt-4 w-fit">
                  <button
                    className="bg-blue-900 text-white px-6 py-2 rounded-lg font-bold text-[18px] shadow hover:opacity-90"
                    style={{ fontFamily: 'Poppins' }}
                  >
                    Breakfast Include &nbsp; Rp.8.540.000
                  </button>
                  <button
                    className="bg-blue-900 text-white px-6 py-2 rounded-lg font-bold text-[18px] shadow hover:opacity-90"
                    style={{ fontFamily: 'Poppins' }}
                  >
                    Breakfast No Include &nbsp; Rp.5.540.000
                  </button>
                </div>
              </div>
            </div>
          </section>


          <section className="mt-16">
            <div
              className="rounded-xl shadow-md p-6"
              style={{
                background: 'linear-gradient(to bottom, #A8DBFB 70%, #D9E3E9 100%)',
                backgroundColor: 'rgba(140, 212, 236, 0.2)',
              }}
            >
              {/* Judul */}
              <h2
                className="text-[28px] font-extrabold text-center mb-6"
                style={{ fontFamily: 'Playfair Display' }}
              >
                Prestige Room
              </h2>

              <div className="flex flex-col md:flex-row gap-6">
                {/* Gambar */}
                <img
                  src={TP3}
                  alt="Prestige Room"
                  className="w-[411px] h-[411px] rounded-md object-cover mx-auto"
                />

                {/* Informasi */}
                <div className="flex-1 space-y-4 text-gray-800">
                  {/* Informasi Kamar */}
                  <div>
                    <h3
                      className="text-[18px] font-extrabold mb-1"
                      style={{ fontFamily: 'Poppins' }}
                    >
                      Informasi Kamar
                    </h3>
                    <div className="flex items-center gap-6 text-[16px] italic font-medium" style={{ fontFamily: 'Poppins' }}>
                      <p>📏 25.7 m²</p>
                      <p>👤 2 Guest</p>
                    </div>
                  </div>

                  <hr />

                  {/* Fasilitas Kamar */}
                  <div>
                    <h3
                      className="text-[18px] font-extrabold mb-1"
                      style={{ fontFamily: 'Poppins' }}
                    >
                      Fasilitas Kamar
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-[16px] italic font-medium" style={{ fontFamily: 'Poppins' }}>
                      <p>● AC</p>
                      <p>● Gorden Anti Tembus Cahaya</p>
                      <p>● Air Minum Kemasan</p>
                      <p>● City View</p>
                      <p>● Mesin Kopi / Teh</p>
                      <p>● Televisi</p>
                      <p>● Kulkas</p>
                    </div>
                  </div>

                  <hr />

                  {/* Fasilitas Kamar Mandi */}
                  <div>
                    <h3
                      className="text-[18px] font-extrabold mb-1"
                      style={{ fontFamily: 'Poppins' }}
                    >
                      Fasilitas Kamar Mandi
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-[16px] italic font-medium" style={{ fontFamily: 'Poppins' }}>
                      <p>● Shower</p>
                      <p>● Air Hangat</p>
                      <p>● Bathtub</p>
                      <p>● Perlengkapan Mandi</p>
                    </div>
                  </div>

                  <hr />

                  {/* About */}
                  <div>
                    <h3
                      className="text-[18px] font-extrabold mb-1"
                      style={{ fontFamily: 'Poppins' }}
                    >
                      About This Room
                    </h3>
                    <p
                      className="text-justify text-[16px] italic font-medium"
                      style={{ fontFamily: 'Poppins' }}
                    >
                      Prestige Room, a perfect blend of sophistication and comfort
                      designed for discerning travelers. With floor-to-ceiling windows
                      offering a glimpse of the bustling city skyline, this room is
                      tailored for both business and leisure stays.
                    </p>
                  </div>
                </div>
              </div>

              {/* Harga dan Tombol */}
              <div className="-mt-15">
                <p
                  className="text-[18px] font-bold"
                  style={{ fontFamily: 'Poppins' }}
                >
                  Starting From
                </p>
                <p
                  className="font-bold text-[18px]"
                  style={{ color: '#FF9000', fontFamily: 'Poppins' }}
                >
                  Rp.5.540.000{' '}
                  <span
                    className="text-[13px] italic font-medium text-gray-600"
                    style={{ fontFamily: 'Poppins' }}
                  >
                    / room / night(s)
                  </span>
                </p>

                {/* Tombol */}
                <div className="flex flex-col gap-4 mt-4 w-fit">
                  <button
                    className="bg-blue-900 text-white px-6 py-2 rounded-lg font-bold text-[18px] shadow hover:opacity-90"
                    style={{ fontFamily: 'Poppins' }}
                  >
                    Breakfast Include &nbsp; Rp.8.540.000
                  </button>
                  <button
                    className="bg-blue-900 text-white px-6 py-2 rounded-lg font-bold text-[18px] shadow hover:opacity-90"
                    style={{ fontFamily: 'Poppins' }}
                  >
                    Breakfast No Include &nbsp; Rp.5.540.000
                  </button>
                </div>
              </div>
            </div>
          </section>


          <section className="mt-16">
            <div
              className="rounded-xl shadow-md p-6"
              style={{
                background: 'linear-gradient(to bottom, #A8DBFB 70%, #D9E3E9 100%)',
                backgroundColor: 'rgba(140, 212, 236, 0.2)',
              }}
            >
              {/* Judul */}
              <h2
                className="text-[28px] font-extrabold text-center mb-6"
                style={{ fontFamily: 'Playfair Display' }}
              >
                Prestige Room
              </h2>

              <div className="flex flex-col md:flex-row gap-6">
                {/* Gambar */}
                <img
                  src={SVT1}
                  alt="Prestige Room"
                  className="w-[411px] h-[411px] rounded-md object-cover mx-auto"
                />

                {/* Informasi */}
                <div className="flex-1 space-y-4 text-gray-800">
                  {/* Informasi Kamar */}
                  <div>
                    <h3
                      className="text-[18px] font-extrabold mb-1"
                      style={{ fontFamily: 'Poppins' }}
                    >
                      Informasi Kamar
                    </h3>
                    <div className="flex items-center gap-6 text-[16px] italic font-medium" style={{ fontFamily: 'Poppins' }}>
                      <p>📏 25.7 m²</p>
                      <p>👤 2 Guest</p>
                    </div>
                  </div>

                  <hr />

                  {/* Fasilitas Kamar */}
                  <div>
                    <h3
                      className="text-[18px] font-extrabold mb-1"
                      style={{ fontFamily: 'Poppins' }}
                    >
                      Fasilitas Kamar
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-[16px] italic font-medium" style={{ fontFamily: 'Poppins' }}>
                      <p>● AC</p>
                      <p>● Gorden Anti Tembus Cahaya</p>
                      <p>● Air Minum Kemasan</p>
                      <p>● City View</p>
                      <p>● Mesin Kopi / Teh</p>
                      <p>● Televisi</p>
                      <p>● Kulkas</p>
                    </div>
                  </div>

                  <hr />

                  {/* Fasilitas Kamar Mandi */}
                  <div>
                    <h3
                      className="text-[18px] font-extrabold mb-1"
                      style={{ fontFamily: 'Poppins' }}
                    >
                      Fasilitas Kamar Mandi
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-[16px] italic font-medium" style={{ fontFamily: 'Poppins' }}>
                      <p>● Shower</p>
                      <p>● Air Hangat</p>
                      <p>● Bathtub</p>
                      <p>● Perlengkapan Mandi</p>
                    </div>
                  </div>

                  <hr />

                  {/* About */}
                  <div>
                    <h3
                      className="text-[18px] font-extrabold mb-1"
                      style={{ fontFamily: 'Poppins' }}
                    >
                      About This Room
                    </h3>
                    <p
                      className="text-justify text-[16px] italic font-medium"
                      style={{ fontFamily: 'Poppins' }}
                    >
                      Prestige Room, a perfect blend of sophistication and comfort
                      designed for discerning travelers. With floor-to-ceiling windows
                      offering a glimpse of the bustling city skyline, this room is
                      tailored for both business and leisure stays.
                    </p>
                  </div>
                </div>
              </div>

              {/* Harga dan Tombol */}
              <div className="-mt-15">
                <p
                  className="text-[18px] font-bold"
                  style={{ fontFamily: 'Poppins' }}
                >
                  Starting From
                </p>
                <p
                  className="font-bold text-[18px]"
                  style={{ color: '#FF9000', fontFamily: 'Poppins' }}
                >
                  Rp.5.540.000{' '}
                  <span
                    className="text-[13px] italic font-medium text-gray-600"
                    style={{ fontFamily: 'Poppins' }}
                  >
                    / room / night(s)
                  </span>
                </p>

                {/* Tombol */}
                <div className="flex flex-col gap-4 mt-4 w-fit">
                  <button
                    className="bg-blue-900 text-white px-6 py-2 rounded-lg font-bold text-[18px] shadow hover:opacity-90"
                    style={{ fontFamily: 'Poppins' }}
                  >
                    Breakfast Include &nbsp; Rp.8.540.000
                  </button>
                  <button
                    className="bg-blue-900 text-white px-6 py-2 rounded-lg font-bold text-[18px] shadow hover:opacity-90"
                    style={{ fontFamily: 'Poppins' }}
                  >
                    Breakfast No Include &nbsp; Rp.5.540.000
                  </button>
                </div>
              </div>
            </div>
          </section>

            <div id="fasilitas" className="w-full bg-[#00B6DE] flex items-center justify-center gap-4 rounded-xl py-2 px-2 mb-6 mt-30 relative overflow-visible">
              {/* Logo Sky Book */}
              <div className="relative w-[60px] h-[50px]">
                <img
                  src={Logo}
                  alt="Sky Book Logo"
                  className="absolute scale-[2.5] -top-4 -left-4"
                />
              </div>

              <p className="text-white text-[18px] font-bold font-[Poppins] text-center">
                All facilities in Marina By Sand Singapura
              </p>
            </div>

              <div className="p-10 font-[Poppins] grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Hotel Service */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <FaHotel className="text-2xl" />
                    <h2 className="text-[20px] font-extrabold">Hotel Service</h2>
                  </div>
                  <ul className="text-[16px] font-medium space-y-1">
                    <li>Ballhub</li>
                    <li>Welcoming Drink</li>
                    <li>Concierge</li>
                    <li>Doorman</li>
                    <li>Express Check-in</li>
                    <li>Express Check-out</li>
                    <li>Front Desk</li>
                    <li>24 Hours Receptionist</li>
                    <li>24 Hours Security</li>
                    <li>Laundry Service</li>
                    <li>Luggage Storage</li>
                    <li>Multilingual Staff</li>
                    <li>Porter</li>
                    <li>Wedding service</li>
                  </ul>
                </div>

                {/* Public Facilities */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <FaConciergeBell className="text-2xl" />
                    <h2 className="text-[20px] font-extrabold">Public Facilities</h2>
                  </div>
                  <ul className="text-[16px] font-medium space-y-1">
                    <li>Parking</li>
                    <li>Coffee / tea in lobby</li>
                    <li>Coffee shop</li>
                    <li>Elevator</li>
                    <li>24 Hour room service</li>
                    <li>Restaurant</li>
                    <li>Breakfast restaurant</li>
                    <li>Lunch restaurant</li>
                    <li>Room service</li>
                    <li>Safety deposit box</li>
                    <li>WiFi in public area</li>
                  </ul>
                </div>

                {/* Food & Drinks */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <FaUtensils className="text-2xl" />
                    <h2 className="text-[20px] font-extrabold">Food & Drinks</h2>
                  </div>
                  <ul className="text-[16px] font-medium space-y-1">
                    <li>A la carte breakfast</li>
                    <li>A la carte dinner</li>
                    <li>A la carte lunch</li>
                    <li>Restaurant with AC</li>
                    <li>Breakfast</li>
                    <li>Buffet breakfast</li>
                    <li>Cafe</li>
                    <li>Dining area</li>
                    <li>Show cooking restaurant</li>
                    <li>Snacks</li>
                    <li>Vegetarian meal</li>
                  </ul>
                </div>

                {/* In Room Facilities */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <FaBath className="text-2xl" />
                    <h2 className="text-[20px] font-extrabold">In Room Facilities</h2>
                  </div>
                  <ul className="text-[16px] font-medium space-y-1">
                    <li>Bathtub</li>
                    <li>Cable TV</li>
                    <li>Desk</li>
                    <li>Hairdryer</li>
                    <li>In room safe</li>
                    <li>Kitchenette</li>
                    <li>Minibar</li>
                    <li>Refrigerator</li>
                    <li>Separate shower and tub</li>
                    <li>Shower</li>
                    <li>TV</li>
                  </ul>
                </div>

                {/* Transportation */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <FaShuttleVan className="text-2xl" />
                    <h2 className="text-[20px] font-extrabold">Transportation</h2>
                  </div>
                  <ul className="text-[16px] font-medium space-y-1">
                    <li>Airport transfer</li>
                    <li>Area shuttle</li>
                    <li>Area shuttle with surcharge</li>
                    <li>Bicycle rental</li>
                    <li>Car rental</li>
                    <li>Secure parking</li>
                    <li>Shopping center shuttle</li>
                    <li>Shopping center shuttle (surcharge)</li>
                    <li>Valet parking</li>
                    <li>Valet parking (surcharge)</li>
                  </ul>
                </div>

                {/* General */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <FaBookOpen className="text-2xl" />
                    <h2 className="text-[20px] font-extrabold">General</h2>
                  </div>
                  <ul className="text-[16px] font-medium space-y-1">
                    <li>AC</li>
                    <li>Ballroom</li>
                    <li>Banquet</li>
                    <li>Connecting rooms</li>
                    <li>Family room</li>
                    <li>Non-smoking room</li>
                    <li>Swimming pool</li>
                    <li>Rooftop terrace</li>
                    <li>Smoking area</li>
                  </ul>
                </div>

              {/* Things To Do */}
                <div>
                  <h3 className="flex items-center font-bold text-lg">
                    <FaChild className="mr-2" /> Things To Do
                  </h3>
                  <ul className="list-disc ml-6">
                    <li>Children play area</li>
                    <li>Entertainment for children</li>
                    <li>Fitness center</li>
                    <li>Garden</li>
                    <li>Massage</li>
                    <li>Outdoor pool</li>
                    <li>Spa</li>
                  </ul>
                </div>

                {/* Business Facilities */}
                <div>
                  <h3 className="flex items-center font-bold text-lg">
                    <FaBusinessTime className="mr-2" /> Business Facilities
                  </h3>
                  <ul className="list-disc ml-6">
                    <li>Computer station</li>
                    <li>Conference hostess</li>
                    <li>Banquet</li>
                    <li>Conference room</li>
                    <li>Meeting facilities</li>
                    <li>Projector</li>
                  </ul>
                </div>

                {/* Nearby Facilities */}
                  <div>
                    <h3 className="flex items-center font-bold text-lg">
                      <FaShoppingBag className="mr-2" /> Nearby Facilities
                    </h3>
                    <ul className="list-disc ml-6">
                      <li>ATM/Banking</li>
                      <li>Gift shop</li>
                      <li>Grocery</li>
                      <li>Laundry</li>
                      <li>Shops</li>
                    </ul>
                  </div>

                  {/* Accessibility */}
                    <div>
                      <h3 className="flex items-center font-bold text-lg">
                        <FaWheelchair className="mr-2" /> Accessibility
                      </h3>
                      <ul className="list-disc ml-6">
                        <li>Disabled access friendly</li>
                        <li>Accessible parking</li>
                        <li>In-room accessibility</li>
                        <li>Wheelchair accessible</li>
                      </ul>
                    </div>

                    {/* Family Facilities */}
                    <div>
                      <h3 className="flex items-center font-bold text-lg">
                        <FaBaby className="mr-2" /> Family Facilities
                      </h3>
                      <ul className="list-disc ml-6">
                        <li>Kids club</li>
                        <li>Children club (surcharge)</li>
                        <li>Children pool</li>
                      </ul>
                    </div>

                    {/* Sports */}
                    <div>
                      <h3 className="flex items-center font-bold text-lg">
                        <FaHorse className="mr-2" /> Sports
                      </h3>
                      <ul className="list-disc ml-6">
                        <li>Fitness center</li>
                        <li>Horse riding</li>
                      </ul>
                    </div>

                    {/* Kids and Pets */}
                    <div>
                      <h3 className="flex items-center font-bold text-lg">
                        <FaUsers className="mr-2" /> Kids and Pets
                      </h3>
                      <ul className="list-disc ml-6">
                        <li>Highchairs</li>
                      </ul>
                    </div>

                    {/* Connectivity */}
                    <div>
                      <h3 className="flex items-center font-bold text-lg">
                        <FaWifiAlt className="mr-2" /> Connectivity
                      </h3>
                      <ul className="list-disc ml-6">
                        <li>Free WiFi</li>
                      </ul>
                    </div>

                    {/* Shuttle Service */}
                    <div>
                      <h3 className="flex items-center font-bold text-lg">
                        <FaPlaneDeparture className="mr-2" /> Shuttle Service
                      </h3>
                      <ul className="list-disc ml-6">
                        <li>Airport transfer (surcharge)</li>
                      </ul>
                    </div>
                  </div>

                   <div id="review" className="w-full bg-[#00B6DE] flex items-center justify-center gap-4 rounded-xl py-2 px-2 mb-6 mt-20 relative overflow-visible">
                    {/* Logo Sky Book */}
                    <div className="relative w-[60px] h-[50px]">
                      <img
                        src={Logo}
                        alt="Sky Book Logo"
                        className="absolute scale-[2.5] -top-4 -left-4"
                      />
                    </div>

                    <p className="text-white text-[18px] font-bold font-[Poppins] text-center">
                      Review Marina By Sand
                    </p>
                  </div>

                    <div className="p-6 space-y-12">
                      <div className="max-w-4xl mx-auto p-6 bg-white border rounded-md shadow-md">
                      <div className="flex flex-col md:flex-row items-center gap-6">
                        {/* Kiri: Bintang dan Lingkaran Rating */}
                        <div className="flex flex-col items-center space-y-3">
                          {/* Bintang */}
                          <div className="flex text-yellow-400 text-2xl">
                            {[...Array(5)].map((_, i) => (
                              <FaStar key={i} />
                            ))}
                          </div>

                          {/* Lingkaran Rating */}
                          <div className="relative w-24 h-24">
                            <svg viewBox="0 0 36 36" className="w-full h-full">
                              <path
                                className="text-gray-300"
                                stroke="currentColor"
                                strokeWidth="3.8"
                                fill="none"
                                d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                              <path
                                className="text-blue-500"
                                stroke="currentColor"
                                strokeWidth="3.8"
                                fill="none"
                                strokeDasharray="85, 100"
                                d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center text-blue-600 text-xl font-bold">
                              8,5
                            </div>
                          </div>
                        </div>

                        {/* Tengah: Deskripsi Rating */}
                        <div className="flex-1 space-y-1 text-center md:text-left">
                          <p className="text-blue-600 font-bold text-lg">Very Good</p>
                          <p className="text-sm text-gray-700 font-semibold">
                            From 30.275 Revuews
                          </p>
                          <p className="text-xs text-gray-500">Provided by travelers on Sky Book</p>
                        </div>

                        {/* Kanan: Progress Bar */}
                        <div className="space-y-2 w-full md:w-1/2 text-sm text-gray-700">
                          <div className="flex items-center justify-between">
                            <span>Cleanliness</span>
                            <div className="flex-1 mx-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full w-[85%] bg-blue-400"></div>
                            </div>
                            <span>8,5</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Room Comfort</span>
                            <div className="flex-1 mx-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full w-[92%] bg-blue-400"></div>
                            </div>
                            <span>9,2</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Meal</span>
                            <div className="flex-1 mx-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full w-[84%] bg-blue-400"></div>
                            </div>
                            <span>8,4</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Service and Facilities</span>
                            <div className="flex-1 mx-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full w-[83%] bg-blue-400"></div>
                            </div>
                            <span>8,3</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  

                      {/* Testimonial Section */}
                      <div className="text-center">
                        <h2 className="text-2xl font-bold mb-6">What Customers Say About Us</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
                          {[
                            {
                              rating: "10/10",
                              name: "Lily Angelie",
                              icon: <FaUserNurse className="text-pink-500" />,
                            },
                            {
                              rating: "8.5/10",
                              name: "William Robert",
                              icon: <FaUserTie className="text-green-600" />,
                            },
                            {
                              rating: "9/10",
                              name: "Jessica",
                              icon: <FaUserGraduate className="text-red-500" />,
                            },
                          ].map((review, i) => (
                            <div
                              key={i}
                              className="border rounded-lg p-4 bg-white shadow hover:shadow-md transition"
                            >
                              <p className="text-right font-semibold mb-2">{review.rating}</p>
                              <p className="text-sm text-gray-600 mb-4">
                                Booking tickets and hotels is super easy! The interface is user-friendly, the
                                process is fast, and there are no hidden fees. Highly recommended
                              </p>
                              <div className="flex items-center space-x-2 mt-4">
                                <div className="text-2xl">{review.icon}</div>
                                <span className="font-bold">{review.name}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 mb-4">
                    <Link to="/homepage">
                      <button className="flex items-center gap-2 bg-[#023E8A] text-white px-6 py-2 rounded-lg hover:bg-[#0077B6] transition font-bold">
                        <FaArrowLeft />
                        Kembali ke Home
                      </button>
                    </Link>
                  </div>
 
                 <footer className=" w-full text-black py-10 ">
                  <Footer />
                </footer>
            </div>
         );
      };

export default HotelDetailPage;