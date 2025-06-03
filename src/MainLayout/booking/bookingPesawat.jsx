import React, { useState } from 'react';
import Select from 'react-select';
import { FaPlaneDeparture, FaMoneyBillWave, FaSuitcaseRolling, FaCheckCircle} from 'react-icons/fa';
import bgUpper from '../../assets/bookingPesawat/bg-upper.svg';
import arrow from '../../assets/bookingPesawat/arrow.svg';
import Continue from '../../assets/bookingPesawat/continue.svg';
import logo from '../../assets/bookingPesawat/logo.png';
import userIcon from '../../assets/bookingPesawat/userIcon.svg';
import bagasi from '../../assets/bookingPesawat/bagasi.svg';
import seat from '../../assets/bookingPesawat/seat.svg';
import refund from '../../assets/bookingPesawat/refund.svg';
import travel from '../../assets/bookingPesawat/travel.svg';
import baggage from '../../assets/bookingPesawat/baggage.svg';
import flightDelay from '../../assets/bookingPesawat/flightDelay.svg';

import ID from '../../assets/bookingPesawat/ID.png';
import USA from '../../assets/bookingPesawat/USA.png';
import UK from '../../assets/bookingPesawat/UK.png';
import Singapore from '../../assets/bookingPesawat/singapore.png';
import India from '../../assets/bookingPesawat/india.png';
import Japan from '../../assets/bookingPesawat/japan.png';

const countryCodes = [
  { code: '+62', flag: ID },
  { code: '+1', flag: USA },
  { code: '+44', flag: UK },
  { code: '+65', flag: Singapore },
  { code: '+91', flag: India },
  { code: '+81', flag: Japan },
];

const formatOptionLabel = ({ code, flag }) => (
  <div className="flex items-center gap-2">
    <img src={flag} alt={code} className="w-5 h-4 object-cover rounded-sm" />
    <span>{code}</span>
  </div>
);

const BookingSteps = () => {
  const [singleName, setSingleName] = useState('');
  const [singleName1, setSingleName1] = useState(false);
  const [singleName2, setSingleName2] = useState(false);
  const [countryCode, setCountryCode] = useState('+62'); // Tambahkan ini

  const selectedOption = countryCodes.find((item) => item.code === countryCode);

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Regex sederhana untuk validasi email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Masukkan email yang valid.");
    } else {
      setError("");
    }
  };

  const [checkedRefund, setCheckedRefund] = React.useState(false);
  const [checkedInsurance, setCheckedInsurance] = React.useState(false);
  const [checkedDelay, setCheckedDelay] = React.useState(false);
  const [checkedBaggage, setCheckedBaggage] = React.useState(false);

  return (
    <div className='max-w-full bg-[#F5F5F5] overflow-x-hidden'>
      <div className="relative">
        {/* Background header */}
        <div
          className="w-full h-36 sm:h-60 bg-no-repeat bg-cover bg-center shadow-md flex flex-col justify-end pt-5 px-2 sm:px-4"
          style={{ backgroundImage: `url(${bgUpper})` }}
        >
          <div className="relative w-full flex justify-center items-center top-12 z-20">
            {/* Logo kiri */}
            <img
              src={logo}
              alt="Skybook Logo"
              className="absolute left-2 sm:left-4 w-28 sm:w-36 md:w-44 lg:w-48 z-10"
            />

            {/* Step Container */}
            <div className="rounded-t-lg flex items-center justify-center px-3 sm:px-8 md:px-12 py-6 w-full max-w-[90%] sm:gap-12 md:gap-16 lg:gap-20">
              {/* Step 1 - Active */}
              <div className="flex flex-col items-center relative text-center">
                <div className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-cyan-600 text-white rounded-full flex items-center justify-center text-lg sm:text-xl md:text-2xl">
                  <FaPlaneDeparture />
                </div>
                <div className="text-sm sm:text-base font-bold mt-2">1</div>
                <div className="text-xs sm:text-sm md:text-base font-bold">Detail Trip</div>
              </div>

              {/* Arrow */}
              <div className="relative w-8 sm:w-12 md:w-14 lg:w-16 h-8 sm:h-12 md:h-14 lg:h-16 opacity-50">
                <img
                  src={arrow}
                  alt="Arrow"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Step 2 - Inactive */}
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gray-300 text-white rounded-full flex items-center justify-center text-lg sm:text-xl md:text-2xl">
                  <FaMoneyBillWave />
                </div>
                <div className="text-sm sm:text-base font-bold mt-2">2</div>
                <div className="text-xs sm:text-sm md:text-base font-bold">Payment</div>
              </div>
            </div>
          </div>

          {/* White container bawah */}
          <div className="h-44 z-10 bg-white flex flex-col justify-end items-center p-4 sm:p-6 mx-[5%] rounded-t-3xl shadow-md" />
        </div>

      </div>

      {/* Flight Summary and Price Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 sm:p-6 md:p-10 max-w-full mx-auto">
        {/* Flight Summary */}
        <div
          className="flex flex-col justify-end rounded-xl pt-4 px-3 sm:px-4 w-full space-y-3 bg-no-repeat bg-cover bg-center shadow-md"
          style={{ backgroundImage: `url(${bgUpper})` }}
        >
          <div className="bg-white rounded-b-xl flex flex-col justify-end p-4 sm:p-6">
            <div className="flex justify-between items-center mb-3 border-[#91A6C5] border-b-2 pb-2">
              <h2 className="text-xl sm:text-2xl font-medium">Flight Summary</h2>
              <span className="text-xs sm:text-sm text-[#78C9F5] font-extrabold cursor-pointer hover:text-[#61aad2]">
                Details
              </span>
            </div>

            {/* Route */}
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <div>
                <div className="bg-gray-300 px-2 py-0.5 text-[10px] sm:text-xs rounded-md inline-block text-gray-700 font-semibold mb-1">
                  Depart
                </div>
                <p className="font-medium">Balikpapan (BPN)</p>
                <p className="text-gray-500 text-xs">Sat, 07 Jul 2023<br />13:05</p>
              </div>

              <div className="text-center">
                <p className="font-light mb-1">1 Stop</p>
                <div className="relative w-24 sm:w-32 h-0.5 bg-gray-400 mx-auto rounded-full">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-6 border-t-transparent border-b-transparent border-l-gray-500" />
                </div>
              </div>

              <div className='pl-5'>
                <p className="font-medium">K. Lumpur (KUL)</p>
                <p className="text-gray-500 text-xs">Sat, 07 Jul 2023<br />18:45</p>
              </div>
            </div>

            {/* Airline Info */}
            <div className="flex items-center gap-2 mt-3">
              <p className="text-sm font-medium text-gray-700">Malaysia Airlines</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="border-[#78D039] border text-[#3B9A41] text-xs font-semibold px-3 py-1 rounded-full">
                Reschedule available
              </span>
              <span className="border-[#78D039] border text-[#3B9A41] text-xs font-semibold px-3 py-1 rounded-full">
                Refundable
              </span>
            </div>
          </div>
        </div>

        {/* Price Details */}
        <div
          className="flex flex-col justify-end rounded-xl pt-4 px-3 sm:px-4 w-full space-y-3 bg-no-repeat bg-cover bg-center shadow-md"
          style={{ backgroundImage: `url(${bgUpper})` }}
        >
          <div className="bg-white rounded-b-xl flex flex-col justify-end p-4 sm:p-6">
            <div className="flex justify-between items-center mb-3 border-[#91A6C5] border-b-2 pb-2">
              <h2 className="text-xl sm:text-2xl font-medium">Flight Summary</h2>
            </div>

            {/* Route */}
            <div className="flex flex-col text-xs sm:text-sm">
              <div>
                <div className="flex justify-between pt-2">
                  <p className="font-medium">Malaysia Airlines (Dewasa) x3</p>
                  <p className="text-gray-500">Rp. 5.571.500</p>
                </div>
                <div className="flex justify-between pt-2">
                  <p className="font-medium">Asuransi Perjalanan</p>
                  <p className="text-gray-500">Rp. 540.200</p>
                </div>
                <div className="flex justify-between pt-2">
                  <p className="font-medium">100% Jaminan Pengembalian Dana</p>
                  <p className="text-gray-500">Rp. 1.543.200</p>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center border-[#91A6C5] border-t-2 pt-5 mt-5">
                  <p className="font-medium">Total Pembayaran</p>
                  <p className="text-[#FF9000] text-sm font-bold">Rp. 7.654.900</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/*Contact Detail */}
      <form
        onSubmit={handleSubmit}
        className="max-w-full mx-auto mt-12 p-4 sm:p-6 md:p-10 bg-[#F7FDFF] shadow-md rounded-xl space-y-6"
      >
        <div className="font-medium text-2xl sm:text-3xl">
          Contact Details (for E-ticket/Voucher)
        </div>

        {/* Info Login */}
        <div className="bg-[#ABD3ED] p-3 sm:p-4 flex items-center gap-3 rounded-md">
          <img src={userIcon} alt="User Icon" className="w-10 h-10" />
          <p className="text-base sm:text-lg font-semibold">Logged in as Azzatul Nabila</p>
        </div>

        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-gray-500 font-medium mb-1">
              First / Given Name & Middle Name (ex: Azzatul Nabila)
            </label>
            <input
              type="text"
              disabled={singleName}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
            <p className="text-xs italic text-gray-500 mt-1">(tanpa judul dan tanda baca)</p>
          </div>

          <div>
            <label className="block text-sm text-gray-500 font-medium mb-1">
              Family Name / Last Name (ex: Kahar)
            </label>
            <input
              type="text"
              disabled={singleName}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
            <p className="text-xs italic text-gray-500 mt-1">(tanpa judul dan tanda baca)</p>
          </div>
        </div>

        {/* Checkbox */}
        <div className="flex items-center gap-2">
          <input
            id="singleName"
            type="checkbox"
            checked={singleName}
            onChange={() => setSingleName(!singleName)}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded"
          />
          <label htmlFor="singleName" className="text-sm">
            Penumpang ini hanya memiliki 1 nama
          </label>
        </div>

        {/* Mobile & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Nomor HP */}
          <div>
            <label className="block text-sm text-gray-500 font-medium mb-1">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
              <div className="sm:w-1/3">
                <Select
                  options={countryCodes}
                  getOptionValue={(e) => e.code}
                  formatOptionLabel={formatOptionLabel}
                  value={selectedOption}
                  onChange={(e) => setCountryCode(e.code)}
                  isSearchable={false}
                  className="w-full min-w-0"
                />
              </div>
              <input
                type="tel"
                className="sm:w-2/3 w-full border border-gray-300 rounded-md px-3 py-2 mt-2 sm:mt-0 focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="812345678"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, '');
                }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-1 italic">
              e.g. {countryCode}812345678, for Country Code {countryCode}
            </p>
            <p className="text-xs text-gray-500 italic">Mobile No. 0812345678</p>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-500 font-medium mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full border ${
                error ? 'border-red-500' : 'border-gray-300'
              } rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300`}
              placeholder="email@example.com"
              required
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            <p className="text-xs text-gray-500 mt-1 italic">e.g. email@example.com</p>
          </div>
        </div>
      </form>

      {/* Traveler Details 1 */}
      <div className="max-w-full mx-4 mt-10 p-6 bg-[#F7FDFF] rounded-xl shadow-md space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium">Traveler Details</h2>
        </div>

        <div className="bg-[#ABD3ED] p-4 flex flex-wrap items-center gap-3">
          <p className="text-base sm:text-lg font-semibold">Penumpang Dewasa 1</p>
        </div>

        {/* Warning Box */}
        <div className="bg-[#FFEFC3] border-l-4 border-[#FFCC84] p-4 rounded-md text-sm">
          <p className="font-semibold text-lg text-gray-600 mb-2">
            ⚠️ Harap perhatikan hal-hal berikut:
          </p>
          <p className="text-sm text-gray-700">
            Karena Anda bepergian/transit ke luar negeri, Anda harus memasukkan nama Anda persis seperti yang tertera di paspor Anda. Jika tidak, maskapai penerbangan dapat menolak Anda untuk naik atau mengenakan biaya tambahan untuk perubahan nama.
          </p>
          <a href="#" className="text-[#0084FF] font-bold text-sm mt-2 inline-block">
            Lihat panduan masukkan nama
          </a>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 gap-4">
          {/* Title */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Title <span className="text-red-500">*</span>
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300">
                <option value="">Pilih</option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Ms">Ms</option>
              </select>
            </div>
          </div>

          {/* Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                First / Given Name & Middle Name (if eca) (ex : Azzatul Nabila)
              </label>
              <input
                type="text"
                disabled={singleName1}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
              <p className="text-xs text-gray-500 mt-1">(tanpa judul dan tanda baca)</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Family Name / Last Name (ex : Kahar)
              </label>
              <input
                type="text"
                disabled={singleName1}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
              <p className="text-xs text-gray-500 mt-1">(tanpa judul dan tanda baca)</p>
            </div>
          </div>

          {/* Checkbox */}
          <div className="flex items-center mt-2">
            <input
              id="singleName"
              type="checkbox"
              checked={singleName1}
              onChange={() => setSingleName1(!singleName1)}
              className="h-4 w-4 mr-2 text-blue-600 border-gray-300 rounded"
            />
            <label htmlFor="singleName" className="text-sm">Penumpang ini hanya memiliki 1 nama</label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Tanggal Lahir */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Tanggal Lahir
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
              <p className="text-xs text-gray-500 mt-1">
                Penumpang Dewasa (Usia 12 tahun ke atas)
              </p>
            </div>

            {/* Kebangsaan */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Kebangsaan <span className="text-red-500">*</span>
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300">
                <option value="">Pilih</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Singapore">Singapore</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Traveler Details 2 */}
      <div>
        <div className="max-w-full mx-4 mt-10 p-4 md:p-6 bg-[#F7FDFF] rounded-xl shadow-md space-y-6">
          {/* Header */}
          <div>
            <h2 className="text-2xl md:text-4xl font-medium">Traveler Details</h2>
          </div>

          {/* Section Label */}
          <div className="bg-[#ABD3ED] p-3 md:p-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
            <p className="text-base md:text-lg font-semibold">Penumpang Dewasa 2</p>
          </div>

          {/* Warning Box */}
          <div className="bg-[#FFEFC3] border-l-[10px] border-[#FFCC84] p-4 rounded-md text-sm relative">
            <p className="font-medium text-xl md:text-2xl text-gray-400 mb-2">
              ⚠️ Harap perhatikan hal-hal berikut:
            </p>
            <p>
              Karena Anda bepergian/transit ke luar negeri, Anda harus memasukkan nama Anda persis seperti yang tertera di paspor Anda. Jika tidak, maskapai penerbangan dapat menolak Anda untuk naik atau mengenakan biaya tambahan untuk perubahan nama.
            </p>
            <a href="#" className="text-[#0084FF] font-bold text-sm mt-2 inline-block">
              Lihat panduan masukkan nama
            </a>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 gap-4">
            {/* Title */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Title <span className="text-red-500">*</span>
                </label>
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300">
                  <option value="">Pilih</option>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Ms">Ms</option>
                </select>
              </div>
            </div>

            {/* Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* First Name */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  First / Given Name & Middle Name (if eca) (ex : Azzatul Nabila)
                </label>
                <input
                  type="text"
                  disabled={singleName2}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
                <p className="text-xs text-gray-500 mt-1">(tanpa judul dan tanda baca)</p>
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Family Name / Last Name (ex : Kahar)
                </label>
                <input
                  type="text"
                  disabled={singleName2}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
                <p className="text-xs text-gray-500 mt-1">(tanpa judul dan tanda baca)</p>
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-center mt-2">
              <input
                id="singleName"
                type="checkbox"
                checked={singleName2}
                onChange={() => setSingleName2(!singleName2)}
                className="h-4 w-4 mr-2 text-blue-600 border-gray-300 rounded"
              />
              <p className="text-sm">Penumpang ini hanya memiliki 1 nama</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Tanggal Lahir */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Tanggal Lahir</label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Penumpang Dewasa (Usia 12 tahun ke atas)
                </p>
              </div>

              {/* Nationality */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Kebangsaan <span className="text-red-500">*</span>
                </label>
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300">
                  <option value="">Pilih</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Singapore">Singapore</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flight Essentials */}
      <div className="max-w-full mx-4 mt-10 p-4 md:p-6 bg-gradient-to-b from-[#AAF6FF] to-[#3DD0E1] rounded-xl shadow-md space-y-6">
        <h2 className="text-2xl md:text-4xl font-semibold">Flight Essentials</h2>

        {/* Bagasi Section */}
        <div className="flex flex-col md:flex-row items-start gap-4 bg-white rounded-md p-4 shadow-sm">
          <img src={bagasi} alt="Bagasi Icon" className="w-12 h-auto mt-1" />  
          <div className="flex flex-col gap-3">
            <div>
              <h2 className="font-medium text-base md:text-lg text-gray-800">Bagasi</h2>
              <p className="text-sm font-semibold text-gray-400">
                Berkemaslah! Anda dapat membawa barang bawaan seberat 25 kg per penumpang.
              </p>
            </div>
            <div>
              <p className="font-medium text-base md:text-lg mb-2">Jatah bagasi Anda saat ini</p>
              <div className="w-full md:w-[250px] border bg-[#F7FDFF] border-gray-300 rounded-lg px-4 py-2 flex flex-col gap-1 text-sm font-medium">
                <span className="rounded-md font-medium">1. BPN {'>'} KUL</span>
                <span className="flex items-center gap-2 text-gray-600">
                  <FaSuitcaseRolling className="text-gray-500" />
                  25 kg/pax
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Nomor Seat Section */}
        <div className="flex flex-col gap-4 bg-white rounded-md p-4 shadow-sm">
          <div className="flex flex-col md:flex-row items-start gap-4">
            <img src={seat} className="w-12 h-auto mt-1" />
            <div>
              <h3 className="font-medium text-base md:text-lg">Nomor Seat</h3>
              <p className="text-sm font-semibold text-gray-400">
                Tidak ingin duduk di kursi tengah? Amankan kursi Anda sekarang!
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-2 md:gap-0 px-1 md:px-5">
            <div className="flex flex-row gap-3">
              <p className="font-bold text-sm md:text-base">From</p>
              <p className="text-[#FF9000] font-bold text-sm md:text-base">Rp.54.7500</p>
            </div>
            <button className="text-[#78C9F5] font-extrabold text-lg md:text-2xl hover:text-[#6ab3db] cursor-pointer">
              Select &gt;
            </button>
          </div>
        </div>
      </div>

      {/* Refund Guarantee */}
      <div className="max-w-full mx-4 mt-10 bg-white rounded-xl shadow-md p-5 space-y-3">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <img src={refund} alt="Refund Icon" className="w-20 h-auto" />
            <h2 className="text-3xl font-medium text-gray-900">Refund Guarantee</h2>
          </div>
          {!checkedRefund && (
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={checkedRefund}
              onChange={() => setCheckedRefund(!checkedRefund)}
            />
            <div className="w-6 h-6 rounded-sm border-2 border-black flex items-center justify-center peer-checked:bg-[#3EADD5] peer-checked:border-[#3EADD5] peer-checked:text-white transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-black peer-checked:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </label>
          )}
        </div>

        {/* Price */}
        {!checkedRefund && (
          <div className="flex flex-col gap-2 px-5">
            <p className="line-through text-gray-400 text-sm font-bold">Rp.560.000 / Pax</p>
            <div className='flex flex-row items-center'>
              <p className="text-[#FF9000] font-bold text-lg">Rp.540.000 </p>
              <p className="text-gray-500 text-sm">/ Pax</p>
            </div>
          </div>
        )}

        {/* Features */}
        <ul className="space-y-2 px-5 text-gray-600 text-sm">
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-[#3EADD5] mt-1" />
            <span className='text-gray-400 font-semibold'>
              tambahkan fleksibilitas untuk membatalkan penerbangan Anda karena alasan apa pun hingga 24 jam sebelum keberangkatan
            </span>
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-[#3EADD5] mt-1" />
            <span className='text-gray-400 font-semibold'>
              mencakup alasan pembatalan apa pun, termasuk alasan pribadi
            </span>
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-[#3EADD5] mt-1" />
            <span className='text-gray-400 font-semibold'>
              cukup ajukan pengembalian dana Anda di SkyBook, tidak perlu formulir atau klaim!
            </span>
          </li>
        </ul>

        {/* Link */}
        <button className="px-5 text-[#53AAD9] text-sm font-semibold hover:underline">More Info</button>

        {/* After Checked */}
        {checkedRefund && (
        <div className="flex justify-between items-end bg-[#EBF8FF] rounded-b-xl px-5 py-3">
          <div className="flex flex-col gap-2">
            <span className="text-xs text-[#3CCC46] bg-[#D7F9C2] px-3 py-1 rounded-full w-fit font-semibold">
              Pengembalian Dana Dijamin
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-[#FF9000] font-bold text-lg">Rp.540.000</span>
              <span className="text-sm text-gray-500">/ Pax</span>
            </div>
          </div>

          <button
            onClick={() => setCheckedRefund(false)}
            className="flex items-center text-[#78C9F5] font-extrabold text-lg hover:text-[#67b0d7]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            Remove
          </button>
        </div>
        )}
      </div>

      {/* Travel Insurance */}
      <div className="max-w-full mx-4 mt-10 bg-white rounded-xl shadow-md p-5 space-y-3">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <img src={travel} alt="Refund Icon" className="w-20 h-auto" />
            <h2 className="text-3xl font-medium text-gray-900">Travel Insurance</h2>
          </div>
          {!checkedInsurance && (
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={checkedInsurance}
              onChange={() => setCheckedInsurance(!checkedInsurance)}
            />
            <div className="w-6 h-6 rounded-sm border-2 border-black flex items-center justify-center peer-checked:bg-[#3EADD5] peer-checked:border-[#3EADD5] peer-checked:text-white transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-black peer-checked:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </label>
          )}
        </div>

        {/* Price */}
        {!checkedInsurance && (
          <div className="flex flex-col gap-2 px-5">
            <p className="line-through text-gray-400 text-sm font-bold">Rp.200.000 / Pax</p>
            <div className='flex flex-row items-center'>
              <p className="text-[#FF9000] font-bold text-lg">Rp.180.000 </p>
              <p className="text-gray-500 text-sm">/ Pax</p>
            </div>
          </div>
        )}

        {/* Features */}
        <ul className="space-y-2 px-5 text-gray-600 text-sm">
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-[#3EADD5] mt-1" />
            <span className='text-gray-400 font-semibold'>
              perlindungan kecelakaan : hingga Rp 500.000.000
            </span>
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-[#3EADD5] mt-1" />
            <span className='text-gray-400 font-semibold'>
              Pembatalan perjalanan oleh penumpang (karena alasan tertentu): hingga Rp30.000.000
            </span>
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-[#3EADD5] mt-1" />
            <span className='text-gray-400 font-semibold'>
              Keterlambatan penerbangan dan bagasi: hingga Rp7.500.000
            </span>
          </li>
        </ul>

        {/* Link */}
        <button className="px-5 text-[#53AAD9] text-sm font-semibold hover:underline">More Info</button>

        {/* After Checked */}
        {checkedInsurance && (
        <div className="flex justify-between items-end bg-[#EBF8FF] rounded-b-xl px-5 py-3">
          <div className="flex flex-col gap-2">
            <span className="text-xs text-[#3CCC46] bg-[#D7F9C2] px-3 py-1 rounded-full w-fit font-semibold">
              Perjalanan Anda terlindungi
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-[#FF9000] font-bold text-lg">Rp.540.000</span>
              <span className="text-sm text-gray-500">/ Pax</span>
            </div>
          </div>

          <button
            onClick={() => setCheckedInsurance(false)}
            className="flex items-center text-[#78C9F5] font-extrabold text-lg hover:text-[#67b0d7]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            Remove
          </button>
        </div>
        )}
      </div>

      {/* Flight Delay */}
      <div className="max-w-full mx-4 mt-10 bg-white rounded-xl shadow-md p-5 space-y-3">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <img src={flightDelay} alt="Refund Icon" className="w-20 h-auto" />
            <h2 className="text-3xl font-medium text-gray-900">Flight Delay Insurance</h2>
          </div>
          {!checkedDelay && (
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={checkedDelay}
              onChange={() => setCheckedDelay(!checkedDelay)}
            />
            <div className="w-6 h-6 rounded-sm border-2 border-black flex items-center justify-center peer-checked:bg-[#3EADD5] peer-checked:border-[#3EADD5] peer-checked:text-white transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-black peer-checked:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </label>
          )}
        </div>

        {/* Price */}
        {!checkedDelay && (
          <div className="flex flex-row items-center gap-2 px-5">
            <p className="text-[#FF9000] font-bold text-lg">Rp.54.000 </p>
            <p className="text-gray-500 text-sm">/ Pax</p>
          </div>
        )}

        {/* Features */}
        <ul className="space-y-2 px-5 text-gray-600 text-sm">
          <li className="flex items-start gap-2">
            <span className='text-gray-400 font-semibold'>
              Penundaan bisa terjadi kapan saja. gunakan perlindungan ini agar Anda tidak stres nantinya
            </span>
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-[#3EADD5] mt-1" />
            <span className='text-gray-400 font-semibold'>
              Dapatkan kompensasi hingga IDR600k jika penerbangan Anda tertunda selama 90 menit
            </span>
          </li>
        </ul>

        {/* Link */}
        <button className="px-5 text-[#53AAD9] text-sm font-semibold hover:underline">More Info</button>

        {/* After Checked */}
        {checkedDelay && (
        <div className="flex justify-between items-end bg-[#EBF8FF] rounded-b-xl px-5 py-3">
          <div className="flex flex-col gap-2">
            <span className="text-xs text-[#3CCC46] bg-[#D7F9C2] px-3 py-1 rounded-full w-fit font-semibold">
              Kompensasi Keterlambatan Dijamin
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-[#FF9000] font-bold text-lg">Rp.54.000</span>
              <span className="text-sm text-gray-500">/ Pax</span>
            </div>
          </div>

          <button
            onClick={() => setCheckedDelay(false)}
            className="flex items-center text-[#78C9F5] font-extrabold text-lg hover:text-[#67b0d7]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            Remove
          </button>
        </div>
        )}
      </div>

      {/* Baggage Loss */}
      <div className="max-w-full mx-4 mt-10 bg-white rounded-xl shadow-md p-5 space-y-3">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <img src={baggage} alt="Refund Icon" className="w-20 h-auto" />
            <h2 className="text-3xl font-medium text-gray-900">Baggage Loss Protection</h2>
          </div>
          {!checkedBaggage && (
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={checkedBaggage}
              onChange={() => setCheckedBaggage(!checkedBaggage)}
            />
            <div className="w-6 h-6 rounded-sm border-2 border-black flex items-center justify-center peer-checked:bg-[#3EADD5] peer-checked:border-[#3EADD5] peer-checked:text-white transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-black peer-checked:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </label>
          )}
        </div>

        {/* Price */}
        {!checkedBaggage && (
          <div className="flex flex-row items-center gap-2 px-5">
            <p className="text-[#FF9000] font-bold text-lg">Rp.19.900 </p>
            <p className="text-gray-500 text-sm">/ Pax</p>
          </div>
        )}

        {/* Features */}
        <ul className="space-y-2 px-5 text-gray-600 text-sm">
          <li className="flex items-start gap-2">
            <span className='text-gray-400 font-semibold'>
              Dapatkan ganti rugi jika bagasi dan barang bawaan Anda hilang atau rusak hingga Rp 20 juta
            </span>
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-[#3EADD5] mt-1" />
            <span className='text-gray-400 font-semibold'>
              Hilang atau rusak : hingga Rp 5 juta / barang
            </span>
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-[#3EADD5] mt-1" />
            <span className='text-gray-400 font-semibold'>
              Biaya perbaikan : hingga Rp 1 juta / item
            </span>
          </li>
        </ul>

        {/* Link */}
        <button className="px-5 text-[#53AAD9] text-sm font-semibold hover:underline">More Info</button>

        {/* After Checked */}
        {checkedBaggage && (
        <div className="flex justify-between items-end bg-[#EBF8FF] rounded-b-xl px-5 py-3">
          <div className="flex flex-col gap-2">
            <span className="text-xs text-[#3CCC46] bg-[#D7F9C2] px-3 py-1 rounded-full w-fit font-semibold">
              Ganti Rugi Kehilangan Bagasi Dijamin
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-[#FF9000] font-bold text-lg">Rp.540.000</span>
              <span className="text-sm text-gray-500">/ Pax</span>
            </div>
          </div>

          <button
            onClick={() => setCheckedBaggage(false)}
            className="flex items-center text-[#78C9F5] font-extrabold text-lg hover:text-[#67b0d7]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            Remove
          </button>
        </div>
        )}
      </div>

      {/* Tombol Button Cuntinue */}
      <div className='max-w-full flex justify-end mx-4 my-10 '>
        <button className="bg-[#7DD3FC] hover:bg-[#38bdf8] text-white font-semibold px-6 py-2 rounded-full shadow-md flex items-center gap-2 transition cursor-pointer">
          Continue
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BookingSteps;
