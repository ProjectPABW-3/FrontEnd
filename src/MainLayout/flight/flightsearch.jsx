import React from 'react';
import { FaPlane, FaHotel, FaMapMarkerAlt, FaCalendarAlt, FaUser, FaSearch } from 'react-icons/fa';
import { FaChevronLeft, FaChevronRight, FaRegCalendarAlt } from 'react-icons/fa';
import langit from "../../assets/umum/langit.jpg";

const FlightSearchPage = () => {
  return (
    <div className="bg-[#F8F8F8] min-h-screen py-10 px-6 flex flex-col items-center">

      {/* TAB PILIHAN */}
      <div className="flex bg-white rounded-t-xl overflow-hidden shadow ml-[-756px]">
        <button className="flex items-center gap-2 px-8 py-4 font-semibold" style={{ backgroundColor: '#00B4D8', color: '#3F5F75' }}>
          <FaPlane style={{ color: '#465277' }} /> Flights
        </button>
        <button className="flex items-center gap-2 px-8 py-4 text-gray-500 hover:bg-blue-100 font-semibold">
          <FaHotel style={{ color: '#60B5EE' }} /> Hotels
        </button>
      </div>

      {/* FORM SEARCH */}
      <div className="bg-white rounded-tr-xl rounded-b-xl shadow-lg px-8 py-9 w-full max-w-5xl flex flex-col items-center">
        <div className="flex w-full justify-between items-center overflow-hidden">

          {/* Kolom 1: Dari */}
          <div className="flex items-center gap-3 flex-1 px-6 py-4">
            <FaPlane style={{ color: '#60B5EE' }} className="text-xl rotate-180" />
            <div>
              <p className="text-gray-400 text-sm">From</p>
              <p className="font-bold">Balikpapan (BPN)</p>
            </div>
          </div>

          {/* Garis pemisah */}
          <div className="h-12 w-px bg-gray-400"></div>

          {/* Kolom 2: Tujuan */}
          <div className="flex items-center gap-3 flex-1 px-6 py-4">
            <FaPlane style={{ color: '#60B5EE' }} className="text-xl" />
            <div>
              <p className="text-gray-400 text-sm">To</p>
              <p className="font-bold">Kuala Lumpur (XKLA)</p>
            </div>
          </div>

          {/* Garis pemisah */}
          <div className="h-12 w-px bg-gray-400"></div>

          {/* Kolom 3: Tanggal Pergi */}
          <div className="flex items-center gap-3 flex-1 px-6 py-4">
            <FaCalendarAlt style={{ color: '#60B5EE' }} className="text-xl" />
            <div>
              <p className="text-gray-400 text-sm">Departure Date</p>
              <p className="font-bold">13 Juli 2025</p>
            </div>
          </div>

          {/* Garis pemisah */}
          <div className="h-12 w-px bg-gray-400"></div>

          {/* Kolom 4: Tanggal Pulang */}
          <div className="flex items-center gap-3 flex-1 px-6 py-4">
            <FaCalendarAlt style={{ color: '#60B5EE' }} className="text-xl" />
            <div>
              <p className="text-gray-400 text-sm">Return Date</p>
              <p className="font-bold">13 Juli 2025</p>
            </div>
          </div>

        </div>
      </div>

      {/* CONTAINER UNTUK BACKGROUND LANGIT DAN TOMBOL */}
      <div className="relative w-full max-w-5xl mt-8">

       {/* BACKGROUND LANGIT */}
        <div
        className=" bg-cover bg-center w-full h-[160px] rounded-b-[180px] rounded-br-[10px] overflow-hidden -mt-10 "
        style={{
            backgroundImage: `url(${langit})`,
        }}
        ></div>

        {/* TOMBOL SEARCH DI DEPAN */}
        <button
          className="absolute left-1/2 -top-[30%] transform -translate-x-1/2 -translate-y-1/2 z-10 py-3 px-8 rounded-full flex items-center gap-2 shadow-xl hover:bg-blue-900 transition"
          style={{ backgroundColor: '#023E8A', color: 'white' }}
        >
          Search Flight <FaSearch style={{ color: 'white' }} />
        </button>
      </div>

      {/* SCROLL TANGGAL DAN HARGA */}
      <div className="-mt-26 w-full max-w-5xl overflow-x-auto relative z-20 ml-70">

 {/* Panah kiri */}
  <button className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white shadow p-2 rounded-full">
    <FaChevronLeft />
  </button>

  {/* Panah kanan */}
  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 z-30 bg-white shadow p-2 rounded-full">
    <FaChevronRight />
  </button>

  {/* Ikon kalender */}
  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-30 bg-white shadow p-2 rounded-full">
    <FaRegCalendarAlt />
  </div>

        <div className="flex gap-3">
          {['Fri, 6 Juni', 'Sat, 7 Juni', 'Fri, 6 Juni', 'Fri, 6 Juni', 'Fri, 6 Juni', 'Fri, 6 Juni'].map((date, index) => (
            <div key={index} className="bg-white rounded-xl px-4 py-3 shadow text-center min-w-[120px]">
              <p className="font-semibold text-sm">{date}</p>
              <p className="text-sm text-[#023E8A] font-bold">Rp. 5.540.000</p>
            </div>
          ))}
        </div>
      </div>








{/* WRAPPER BIRU */}
<div className="bg-blue-100 rounded-[30px] py-10 px-6 mt-36 ml-160">

  {/* KONTEN UTAMA */}
  <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">

    {/* SIDEBAR FILTER */}
    <div className="md:col-span-1">
      {/* Filter akan dimasukkan di sini */}
    </div>

    {/* KONTEN PENERBANGAN */}
    <div className="md:col-span-3 space-y-6">

      {/* KARTU PENERBANGAN */}
      <div className="bg-white rounded-b-[30px] shadow p-6 flex flex-col gap-4">

        {/* HEADER KARTU */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-lg font-semibold">Lion Air, Batik Air Malaysia</h2>
            <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded mt-1 inline-block">Ekonomi</span>
            <p className="text-xs text-gray-500 mt-1">Keberangkatan: <span className="text-red-500 font-medium">AirAsia</span></p>
          </div>
          <div className="text-right">
            <p className="text-[#D62828] font-bold text-lg">Rp. 4.540.000</p>
            <p className="text-sm text-gray-500">/ 1 Penumpang</p>
            <button className="mt-2 px-4 py-2 bg-[#023E8A] text-white rounded-full text-sm shadow hover:bg-blue-900">Pilih</button>
          </div>
        </div>

        {/* WAKTU PENERBANGAN */}
        <div className="flex items-center justify-between border-t pt-4 text-sm">
          <p className="font-semibold">15.45 <span className="text-xs">BPN</span></p>
          <p className="text-gray-500">1 Stop</p>
          <p className="font-semibold">18.45 <span className="text-xs">KUL</span></p>
        </div>

        {/* BAGASI */}
        <div className="flex items-center text-sm text-gray-600 gap-2">
          <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 2a2 2 0 0 0-2 2v1H2v2h1v10a2 2 0 0 0 2 2v1a2 2 0 1 0 4 0v-1h6v1a2 2 0 1 0 4 0v-1a2 2 0 0 0 2-2V7h1V5h-2V4a2 2 0 0 0-2-2H6zm0 2h12v1H6V4zm-1 3h14v10H5V7z"/>
          </svg>
          <p>8 kg <span className="text-gray-400">per penumpang</span></p>
        </div>

        {/* DETAIL PERJALANAN */}
        <div className="bg-gray-50 rounded-xl p-4 mt-2 text-sm space-y-2">
          <p className="font-medium">Keberangkatan, July 13</p>
          <div className="flex items-start gap-4">
            <div className="text-right">
              <p>15.45</p>
              <p className="text-xs text-gray-500">July 13</p>
            </div>
            <div className="flex flex-col items-center text-gray-400">
              <span className="material-icons">flight_takeoff</span>
              <div className="h-6 border-l border-gray-300"></div>
              <span className="material-icons">place</span>
            </div>
            <div>
              <p className="font-semibold">Kuala Lumpur</p>
              <p className="text-xs text-gray-500">Bandara Internasional Kuala Lumpur (KUL)</p>
              <div className="mt-1 text-xs text-gray-700 bg-gray-100 inline-block px-2 py-1 rounded">
                AirAsia, AK 483 - Ekonomi
              </div>
            </div>
          </div>

          <div className="ml-14 text-xs text-gray-500">3 Jam</div>

          <div className="flex items-start gap-4 ml-14">
            <div className="text-right w-[50px]">
              <p>15.45</p>
              <p className="text-xs text-gray-500">July 13</p>
            </div>
            <div>
              <p className="font-semibold">Balikpapan</p>
              <p className="text-xs text-gray-500">Bandara Sepinggan (BPN)</p>
            </div>
          </div>
        </div>

        {/* TOMBOL DETAIL */}
        <div className="text-right">
          <button className="text-red-600 text-sm hover:underline">Lihat detail</button>
        </div>
      </div>

    </div>
  </div>
</div>











    </div>
  );
};

export default FlightSearchPage;
