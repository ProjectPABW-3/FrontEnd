import React from 'react';
import { FaPlane, FaHotel, FaMapMarkerAlt, FaCalendarAlt, FaUser, FaSearch } from 'react-icons/fa';
import { FaChevronLeft, FaChevronRight, FaRegCalendarAlt } from 'react-icons/fa';
import langit from "../../assets/umum/langit.jpg";

const FlightSearchPage = () => {
  return (
    <div className="bg-[#F8F8F8] min-h-screen py-10 flex flex-col justify-between items-center">
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
      
      <div className='max-w-full flex flex-row justify-between mt-20'>
        {/* Left Bar */}
        <div className="w-[30%] bg-blue-50 p-6 rounded-xl text-sm font-sans">
          {/* Header filter */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-black">Filter dengan</h2>
            <button className="text-red-500 text-sm font-medium">Hapus Semua</button>
          </div>

          {/* Checkbox - AirAsia */}
          <div className="flex items-center mb-4">
            <input type="checkbox" className="w-4 h-4 border border-gray-400 mr-2" />
            <label className="text-black">Penerbangan AirAsia Saja</label>
          </div>

          <hr className="border-blue-200 my-4" />

          {/* Jumlah Transit */}
          <h3 className="text-lg font-medium text-black mb-2">Jumlah transit</h3>
          <div className="space-y-3 mb-4">
            <div className="flex items-center">
              <input type="checkbox" className="w-4 h-4 border border-gray-400 mr-2" />
              <label className="text-black">Semua</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="w-4 h-4 border border-gray-400 mr-2" />
              <label className="text-black">Non-stop</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="w-4 h-4 border border-gray-400 mr-2" />
              <label className="text-black">Hingga 1 perhentian</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="w-4 h-4 border border-gray-400 mr-2" />
              <label className="text-black">Hingga 2 perhentian</label>
            </div>

            <hr className="border-blue-200 my-4" />

            {/* Durasi */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-lg font-medium text-black">Durasi</label>
                <span className="text-sm text-gray-500">Hingga 59 jam</span>
              </div>
              <input
                type="range"
                min="0"
                max="59"
                className="w-full h-2 bg-blue-400 rounded-full appearance-none"
              />
            </div>

            {/* Hentikan Durasi */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-lg font-medium text-black">Hentikan durasi</label>
                <span className="text-sm text-gray-500">Hingga 25 jam</span>
              </div>
              <input
                type="range"
                min="0"
                max="25"
                className="w-full h-2 bg-blue-400 rounded-full appearance-none"
              />
            </div>

            {/* Kelas Kabin */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-black mb-3">Kelas kabin</h3>
              <div className="space-y-3">
                {["Ekonomi", "Ekonomi Premium", "Bisnis", "Kelas Pertama"].map((kelas) => (
                  <div key={kelas} className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 border border-gray-400 mr-2" />
                    <label className="text-black">{kelas}</label>
                  </div>
                ))}
              </div>
            </div>

            <hr className="border-blue-200 my-4" />

            {/* Maskapai */}
            <div className="mb-4">
              <h3 className="text-lg font-medium text-black mb-3">Maskapai</h3>
              <div className="flex items-center mb-3">
                <input type="checkbox" className="w-4 h-4 border border-gray-400 mr-2" />
                <label className="text-black">Semua Maskapai</label>
              </div>

              <div className="space-y-3">
                {/* Maskapai dengan logo */}
                {[
                  { name: "AirAsia Indonesia", logo: "/logos/airasia.png" },
                  { name: "Batik Air Malaysia", logo: "/logos/batikair.png" },
                  { name: "Garuda Indonesia", logo: "/logos/garuda.png" },
                  { name: "Lion Air", logo: "/logos/lionair.png" },
                  { name: "Malaysia Airlines", logo: "/logos/malaysia.png" },
                  { name: "Super Air Jet", logo: "/logos/superairjet.png" },
                ].map((maskapai) => (
                  <div key={maskapai.name} className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 border border-gray-400 mr-2" />
                    <img src={maskapai.logo} alt={maskapai.name} className="w-5 h-5 mr-2 object-contain" />
                    <label className="text-black">{maskapai.name}</label>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>

        <div className='flex flex-col w-[70%] gap-5'>
          {/* penerbangan keberangkatan 1 */}
          <div className=" max-w-md mx-auto pt-7 px-2 bg-[#EAF3FC] rounded-xl shadow-md overflow-hidden border border-gray-200">
            <h2 className="font-semibold text-gray-800 text-lg">Lion Air, Batik Air Malaysia</h2>
            <div className="px-6 py-4 bg-white rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <div className=''>
                  <span className="bg-[#D9D9D9] text-sm inline-block px-2 py-1 rounded text-gray-700 mb-2">Ekonomi</span>
                  <p className="text-sm italic text-gray-500 mb-4">Keberangkatan : AirAsia</p>
                </div>
                <div className='flex flex-col items-center justify-end text-right'>
                  <p className="text-[#FF9000] font-bold text-sm">Rp.4.540.000</p>
                  <p className="text-sm italic text-gray-500 mb-4">1 Penumpang</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-4">
                {/* Logo Maskapai */}
                <img src="/logo-airasia.png" alt="AirAsia" className="h-6 mr-4" />

                {/* Waktu & Bandara Keberangkatan */}
                <div className="text-center">
                  <p className="font-semibold text-lg">15.45</p>
                  <p className="text-sm text-gray-500">BPN</p>
                </div>

                {/* Garis & Info Stop */}
                <div className="flex flex-col items-center justify-center flex-1 px-4">
                  <p className="text-xs text-gray-500">1 Stop</p>
                  <div className="flex items-center w-full mt-1">
                    <div className="h-0.5 bg-gray-300 w-full"></div>
                    <svg
                      className="w-4 h-4 text-gray-400 -ml-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                {/* Waktu & Bandara Tujuan */}
                <div className="text-center">
                  <p className="font-semibold text-lg">18.45</p>
                  <p className="text-sm text-gray-500">KUL</p>
                </div>

                {/* Tombol Pilih */}
                <button className="bg-[#023E8A] hover:bg-blue-800 text-white font-semibold w-32 px-4 rounded-lg ml-4 shadow-md">
                  Pilih
                </button>
              </div>

              <hr className="mb-2" />
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <div className='flex flex-col'>
                  <img src="" alt="" />
                  <p>8 kg</p>
                  <p className="text-gray-400">per penumpang</p>
                </div>
                <div>
                  <a href="#" className="text-red-500 text-sm font-medium">Lihat detail</a>
                </div>
              </div>

              <p className="text-sm text-gray-800 font-semibold mb-2">Keberangkatan, July 13</p>

              <div className="flex items-start gap-4">
                {/* Kolom waktu & garis */}
                <div className="flex flex-col items-center text-xs text-gray-500">
                  <p className="text-black font-medium text-sm">15.45</p>
                  <p>July 13</p>

                  {/* Icon Pesawat */}
                  <div className="my-1 text-black">
                    <i className="fas fa-plane text-sm"></i>
                  </div>

                  <div className="w-px h-8 bg-gray-300 my-1"></div>
                  <p>3 Jam</p>
                  <div className="w-px h-8 bg-gray-300 my-1"></div>

                  {/* Icon Lokasi */}
                  <div className="my-1 text-black">
                    <i className="fas fa-location-dot text-sm"></i>
                  </div>

                  <p className="text-black font-medium text-sm">15.45</p>
                  <p>July 13</p>
                </div>

                {/* Kolom konten */}
                <div className="flex-1">
                  {/* Tujuan */}
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-800">Kuala Lumpur</p>
                    <p className="text-xs text-gray-500">Bandara International Kuala Lumpur (KUL)</p>
                  </div>

                  {/* Detail penerbangan */}
                  <div className="p-2 bg-gray-100 rounded-full mb-4 text-xs text-gray-600 inline-flex items-center gap-2">
                    <img src="/airasia-logo.png" alt="AirAsia" className="w-12 h-auto" /> {/* Ganti path sesuai kebutuhan */}
                    <div>
                      <p className="font-semibold">AirAsia, AK 483</p>
                      <p>Ekonomi</p>
                    </div>
                  </div>

                  {/* Asal */}
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Balikpapan</p>
                    <p className="text-xs text-gray-500">Bandara Sepinggan (BPN)</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* penerbangan keberangkatan 2 */}
          <div className=" max-w-md mx-auto pt-7 px-2 bg-[#EAF3FC] rounded-xl shadow-md overflow-hidden border border-gray-200">
            <h2 className="font-semibold text-gray-800 text-lg">Lion Air, Batik Air Malaysia</h2>
            <div className="px-6 py-4 bg-white rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <div className=''>
                  <span className="bg-[#D9D9D9] text-sm inline-block px-2 py-1 rounded text-gray-700 mb-2">Ekonomi</span>
                  <p className="text-sm italic text-gray-500 mb-4">Keberangkatan : AirAsia</p>
                </div>
                <div className='flex flex-col items-center justify-end text-right'>
                  <p className="text-[#FF9000] font-bold text-sm">Rp.4.540.000</p>
                  <p className="text-sm italic text-gray-500 mb-4">1 Penumpang</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-4">
                {/* Logo Maskapai */}
                <img src="/logo-airasia.png" alt="AirAsia" className="h-6 mr-4" />

                {/* Waktu & Bandara Keberangkatan */}
                <div className="text-center">
                  <p className="font-semibold text-lg">15.45</p>
                  <p className="text-sm text-gray-500">BPN</p>
                </div>

                {/* Garis & Info Stop */}
                <div className="flex flex-col items-center justify-center flex-1 px-4">
                  <p className="text-xs text-gray-500">1 Stop</p>
                  <div className="flex items-center w-full mt-1">
                    <div className="h-0.5 bg-gray-300 w-full"></div>
                    <svg
                      className="w-4 h-4 text-gray-400 -ml-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                {/* Waktu & Bandara Tujuan */}
                <div className="text-center">
                  <p className="font-semibold text-lg">18.45</p>
                  <p className="text-sm text-gray-500">KUL</p>
                </div>

                {/* Tombol Pilih */}
                <button className="bg-[#023E8A] hover:bg-blue-800 text-white font-semibold w-32 px-4 rounded-lg ml-4 shadow-md">
                  Pilih
                </button>
              </div>

              <hr className="mb-2" />
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <div className='flex flex-col'>
                  <img src="" alt="" />
                  <p>8 kg</p>
                  <p className="text-gray-400">per penumpang</p>
                </div>
                <div>
                  <a href="#" className="text-red-500 text-sm font-medium">Lihat detail</a>
                </div>
              </div>

              <p className="text-sm text-gray-800 font-semibold mb-2">Keberangkatan, July 13</p>

              <div className="flex items-start gap-4">
                {/* Kolom waktu & garis */}
                <div className="flex flex-col items-center text-xs text-gray-500">
                  <p className="text-black font-medium text-sm">15.45</p>
                  <p>July 13</p>

                  {/* Icon Pesawat */}
                  <div className="my-1 text-black">
                    <i className="fas fa-plane text-sm"></i>
                  </div>

                  <div className="w-px h-8 bg-gray-300 my-1"></div>
                  <p>3 Jam</p>
                  <div className="w-px h-8 bg-gray-300 my-1"></div>

                  {/* Icon Lokasi */}
                  <div className="my-1 text-black">
                    <i className="fas fa-location-dot text-sm"></i>
                  </div>

                  <p className="text-black font-medium text-sm">15.45</p>
                  <p>July 13</p>
                </div>

                {/* Kolom konten */}
                <div className="flex-1">
                  {/* Tujuan */}
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-800">Kuala Lumpur</p>
                    <p className="text-xs text-gray-500">Bandara International Kuala Lumpur (KUL)</p>
                  </div>

                  {/* Detail penerbangan */}
                  <div className="p-2 bg-gray-100 rounded-full mb-4 text-xs text-gray-600 inline-flex items-center gap-2">
                    <img src="/airasia-logo.png" alt="AirAsia" className="w-12 h-auto" /> {/* Ganti path sesuai kebutuhan */}
                    <div>
                      <p className="font-semibold">AirAsia, AK 483</p>
                      <p>Ekonomi</p>
                    </div>
                  </div>

                  {/* Asal */}
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Balikpapan</p>
                    <p className="text-xs text-gray-500">Bandara Sepinggan (BPN)</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* penerbangan keberangkatan 3 */}
          <div className=" max-w-md mx-auto pt-7 px-2 bg-[#EAF3FC] rounded-xl shadow-md overflow-hidden border border-gray-200">
            <h2 className="font-semibold text-gray-800 text-lg">Lion Air, Batik Air Malaysia</h2>
            <div className="px-6 py-4 bg-white rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <div className=''>
                  <span className="bg-[#D9D9D9] text-sm inline-block px-2 py-1 rounded text-gray-700 mb-2">Ekonomi</span>
                  <p className="text-sm italic text-gray-500 mb-4">Keberangkatan : AirAsia</p>
                </div>
                <div className='flex flex-col items-center justify-end text-right'>
                  <p className="text-[#FF9000] font-bold text-sm">Rp.4.540.000</p>
                  <p className="text-sm italic text-gray-500 mb-4">1 Penumpang</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-4">
                {/* Logo Maskapai */}
                <img src="/logo-airasia.png" alt="AirAsia" className="h-6 mr-4" />

                {/* Waktu & Bandara Keberangkatan */}
                <div className="text-center">
                  <p className="font-semibold text-lg">15.45</p>
                  <p className="text-sm text-gray-500">BPN</p>
                </div>

                {/* Garis & Info Stop */}
                <div className="flex flex-col items-center justify-center flex-1 px-4">
                  <p className="text-xs text-gray-500">1 Stop</p>
                  <div className="flex items-center w-full mt-1">
                    <div className="h-0.5 bg-gray-300 w-full"></div>
                    <svg
                      className="w-4 h-4 text-gray-400 -ml-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                {/* Waktu & Bandara Tujuan */}
                <div className="text-center">
                  <p className="font-semibold text-lg">18.45</p>
                  <p className="text-sm text-gray-500">KUL</p>
                </div>

                {/* Tombol Pilih */}
                <button className="bg-[#023E8A] hover:bg-blue-800 text-white font-semibold w-32 px-4 rounded-lg ml-4 shadow-md">
                  Pilih
                </button>
              </div>

              <hr className="mb-2" />
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <div className='flex flex-col'>
                  <img src="" alt="" />
                  <p>8 kg</p>
                  <p className="text-gray-400">per penumpang</p>
                </div>
                <div>
                  <a href="#" className="text-red-500 text-sm font-medium">Lihat detail</a>
                </div>
              </div>

              <p className="text-sm text-gray-800 font-semibold mb-2">Keberangkatan, July 13</p>

              <div className="flex items-start gap-4">
                {/* Kolom waktu & garis */}
                <div className="flex flex-col items-center text-xs text-gray-500">
                  <p className="text-black font-medium text-sm">15.45</p>
                  <p>July 13</p>

                  {/* Icon Pesawat */}
                  <div className="my-1 text-black">
                    <i className="fas fa-plane text-sm"></i>
                  </div>

                  <div className="w-px h-8 bg-gray-300 my-1"></div>
                  <p>3 Jam</p>
                  <div className="w-px h-8 bg-gray-300 my-1"></div>

                  {/* Icon Lokasi */}
                  <div className="my-1 text-black">
                    <i className="fas fa-location-dot text-sm"></i>
                  </div>

                  <p className="text-black font-medium text-sm">15.45</p>
                  <p>July 13</p>
                </div>

                {/* Kolom konten */}
                <div className="flex-1">
                  {/* Tujuan */}
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-800">Kuala Lumpur</p>
                    <p className="text-xs text-gray-500">Bandara International Kuala Lumpur (KUL)</p>
                  </div>

                  {/* Detail penerbangan */}
                  <div className="p-2 bg-gray-100 rounded-full mb-4 text-xs text-gray-600 inline-flex items-center gap-2">
                    <img src="/airasia-logo.png" alt="AirAsia" className="w-12 h-auto" /> {/* Ganti path sesuai kebutuhan */}
                    <div>
                      <p className="font-semibold">AirAsia, AK 483</p>
                      <p>Ekonomi</p>
                    </div>
                  </div>

                  {/* Asal */}
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Balikpapan</p>
                    <p className="text-xs text-gray-500">Bandara Sepinggan (BPN)</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>



















    </div>
  );
};

export default FlightSearchPage;
