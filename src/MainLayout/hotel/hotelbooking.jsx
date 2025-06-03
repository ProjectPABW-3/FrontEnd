import React from "react";
import { FaUserFriends, FaBed, FaTimesCircle } from "react-icons/fa";
import pesawat from "../../assets/umum/pesawat.jpg";
import BAA1 from '../../assets/hotel/BAA1.jpg';
import Logo from "../../assets/logo.svg";

export default function HotelBooking() {
  return (
    <div className="min-h-screen bg-[#F8F8F8] flex flex-col items-center -py-2 px-4 overflow-hidden">
      {/* Top decoration frame for airplane graphics */}
      <div className="relative w-screen h-40">
        <img
          src={pesawat}
          alt="Airplane graphic"
          className="absolute top-0 left-0 w-full h-40 object-cover object-top z-0"
        />
       </div>
        {/* Main content container */}
        <div
          className="relative z-10 bg-white pt-20 pb-4 px-6 -mt-15 w-full max-w-5xl"
          style={{
            borderTopLeftRadius: 40,
            borderTopRightRadius: 180,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          }}
        >
          {/* Progress indicator */}
          <div className="flex items-center justify-between absolute -top-5 left-40 right-50">
            {/* Step 1 - Booking */}
            <div className="flex items-center gap-2 relative" style={{ left: "10px" }}>
              <div className="absolute -left-40 top-5 transform -translate-y-1/2 w-45 h-1 bg-[#00B4D8]" />
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-[#00B4D8] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <span className="text-sm font-semibold mt-1">Booking</span>
              </div>
            </div>

            {/* Arrow */}
            <div className="text-gray-400 text-6xl relative" style={{ top: "-17px" , left: "-25px" }}>→</div>

            {/* Step 2 - Payment */}
            <div className="flex flex-col items-center relative" style={{ right: "80px" }}>
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold text-sm">
                2
              </div>
              <span className="text-sm text-gray-400 mt-1">Payment</span>
            </div>
          </div>

          {/* Logo outside top left corner */}
          <img
            src={Logo}
            alt="SkyBook Logo"
            className="absolute -top-23 -left-15 w-40"
          />

          {/* Member Welcome Message + Divider */}
          <div className="mt-1 w-[900px] border-t-2 border-gray-300 pt-4 mx-auto">
            
          </div>
        </div>
      
      

      {/* Content */}
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-6 bg-white p-6 shadow-md">
        <h2 className="text-lg font-medium -mt-6">
           Hi, <strong>Azzatul Nabila</strong>! Enjoy these perks as a<br />
            SkyBook Bronze Priority Member
           </h2>
          <p className="text-sm text-blue-500 mt-1">
           Login as Azzatul Nabila (Google)
         </p>
       {/* Left Perks */}
        <div className="flex flex-col gap-6">
          <div
            className="rounded-t-[30px] rounded-b-[30px] pt-6 pb-1 px-1 mb-4"
            style={{ backgroundColor: "#e0f2fe" }}
          >
            <div className="bg-white p-6 rounded-b-[30px] shadow-sm min-h-[130px] flex flex-col justify-center">
              <h3 className="font-bold text-lg text-center border-b border-gray-400 border-opacity-50 pb-2 mb-3">
                24/7 Customer Service
              </h3>
              <p className="text-sm text-gray-600 text-center">
                Hubungi agen kami kapan saja Anda membutuhkannya.
              </p>
            </div>
          </div>

          <div
            className="rounded-t-[30px] rounded-b-[30px] pt-6 pb-1 px-1"
            style={{ backgroundColor: "#e0f2fe"}}
          >
            <div className="bg-white p-6 rounded-b-[30px] shadow-sm min-h-[130px] flex flex-col justify-center">
              <h3 className="font-bold text-lg text-center border-b border-gray-400 border-opacity-50 pb-2 mb-3">
                Cashback Points
              </h3>
              <p className="text-sm text-gray-600 text-center">
                Kumpulkan lebih banyak poin yang dapat Anda gunakan nanti.
              </p>
            </div>
          </div>
        </div>


        {/* Right Booking Summary */}
        <div
          className="relative rounded-t-[30px] rounded-b-[30px] pt-40 pb-6 px-4 -mt-20"
          style={{ backgroundColor: "#e0f2fe" }}
        >
          {/* Putih sebagai background saja */}
        <div className="absolute top-49 left-2 right-2 bg-white rounded-b-[30px] shadow-md h-[345px] z-0"></div>

          {/* Konten di atasnya */}
          <div className="relative z-10 -mt-40">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-xl">Marina By Sand</h3>
              <div className="text-yellow-400 text-xl">★★★★★</div>
            </div>
            <img
              src={BAA1}
              alt="Hotel"
              className="relative h-40 object-cover mb-4"
                style={{
                  width: '100%',   
                  marginLeft: '0', 
                  borderRadius: 0,   
                }}
              />

            <p className="text-sm mb-2">Booking 1 Malam</p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="rounded-lg p-3 text-center bg-gray-100">
                <p className="text-xs text-gray-500">Check-in</p>
                <p className="font-bold text-sm">Rab, 13 Jul 2025</p>
                <p className="text-xs text-gray-400">From 14:00</p>
              </div>
              <div className="rounded-lg p-3 text-center bg-gray-100">
                <p className="text-xs text-gray-500">Check-out</p>
                <p className="font-bold text-sm">Kam, 14 Jul 2025</p>
                <p className="text-xs text-gray-400">Before 14:00</p>
              </div>
            </div>

            <p className="font-semibold mb-2">(1x) Prestige Room – Room Only</p>

            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li className="flex items-center gap-2">
                <FaUserFriends className="text-gray-500" /> 2 Guest
              </li>
              <li className="flex items-center gap-2">
                <FaBed className="text-gray-500" /> 2 Twin Bed
              </li>
              <li className="flex items-center gap-2">
                <FaTimesCircle className="text-gray-500" /> Breakfast not included
              </li>
            </ul>

            <div className="pt-2 text-sm">
              <p>Total room price</p>
              <p className="font-bold text-orange-600 text-lg">Rp.988.000</p>
              <p className="text-xs text-gray-500">1 room(s), 1 night(s)</p>
            </div>
          </div>
        </div>
      </div>


      {/* Contact Details Section */}
      <div className="w-full max-w-5xl bg-white p-6 mt-6 rounded-xl shadow-md border border-gray-400">
        <h2 className="text-lg font-semibold mb-2">Contact Details (for E-voucher)</h2>
        <p className="text-sm text-gray-600 mb-4">
          Harap isi semua kolom dengan benar untuk memastikan Anda menerima voucher konfirmasi pemesanan di email Anda.
        </p>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Full Name (as in Passport/Official ID Card)
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder=""
          />
          <p className="text-xs text-gray-500 mt-1 italic">
            Harap gunakan hanya alfabet (A–Z), tanpa judul, karakter khusus, dan tanda baca.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Mobile Number <span className="text-red-500">*</span></label>
            <div className="flex">
              <input
                type="tel"
                className="w-full border border-gray-300 rounded-r-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="e.g. 812345678"
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">e.g. +62812345678, for Country Code (+62) and Mobile No. 0812345678</p>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email <span className="text-red-500">*</span></label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="e.g. email@example.com"
            />
          </div>
        </div>

        <div className="flex gap-4 mt-6">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
            <span className="text-sm">I am the guest</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
            <span className="text-sm">I’m booking for another person</span>
          </div>
        </div>
      </div>


      {/* Special Request Section */}
      <div className="w-full max-w-5xl bg-white p-6 mt-6 rounded-xl shadow-md border border-gray-400">
        <h2 className="text-lg font-semibold mb-2">Let us know if you have any request</h2>
        <p className="text-sm text-gray-600 mb-4">
          Anda akan mengetahui ketersediaan permintaan tambahan saat check-in. Biaya tambahan mungkin dikenakan, tetapi Anda masih dapat membatalkan permintaan tersebut nanti.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            "Non-smoking Room",
            "Hight Floor",
            "Check-in Time",
            "Others",
            "Connecting Rooms",
            "Bed Type",
            "Check-out Time",
          ].map((item, idx) => (
            <label key={idx} className="flex items-center gap-2 text-sm font-medium">
              <input
                type="checkbox"
                className="form-checkbox w-5 h-5 text-blue-600 border-gray-300 rounded"
                defaultChecked
              />
              {item}
            </label>
          ))}
        </div>
      </div>


      {/* Add-ons for Your Stay */}
      <div className="w-full max-w-5xl bg-white p-6 mt-6 rounded-xl shadow-md border border-gray-200">
        <h2 className="text-lg font-semibold mb-4">Add-ons for Your Stay</h2>

        {/* Box 1 */}
        <div className="border border-gray-300 rounded-lg p-4 mb-4 space-y-3">
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              className="form-checkbox w-5 h-5 mt-1 text-blue-600"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-xl">🛡️</span>
                <h3 className="font-semibold text-sm">Hotel Insurance</h3>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Lindungi masa menginap Anda dari pembatalan, hilangnya reservasi pemesanan, dan banyak lagi.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-3 space-y-2 text-sm text-gray-800">
            <div className="flex items-start gap-2">
              <span className="text-blue-500">✔️</span>
              <p>Up to IDR500.000 per room per night for loss of hotel booking nights</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-500">✔️</span>
              <p>Up to IDR2.000.000 for hotel cancellation for certain reasons</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-500">✔️</span>
              <p>Up to IDR2.500.000 for loss of or damage to baggage and personal property</p>
            </div>
            <p className="text-sm font-semibold text-blue-600 text-right">Rp.22.478</p>
          </div>
        </div>

        {/* Box 2 */}
        <div className="border border-gray-300 rounded-lg p-4 mb-4 space-y-3">
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              className="form-checkbox w-5 h-5 mt-1 text-blue-600"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-xl">✈️</span>
                <h3 className="font-semibold text-sm">Travel Insurance</h3>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Melindungi perjalanan Anda dari penundaan, kehilangan bagasi, dan lainnya.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-3 space-y-2 text-sm text-gray-800">
            <div className="flex items-start gap-2">
              <span className="text-blue-500">✔️</span>
              <p>Flight delay compensation</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-500">✔️</span>
              <p>Baggage loss up to IDR3.000.000</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-500">✔️</span>
              <p>Medical assistance during travel</p>
            </div>
            <p className="text-sm font-semibold text-blue-600 text-right">Rp.18.000</p>
          </div>
        </div>

        {/* Box 3 */}
        <div className="border border-gray-300 rounded-lg p-4 mb-4 space-y-3">
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              className="form-checkbox w-5 h-5 mt-1 text-blue-600"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-xl">🏨</span>
                <h3 className="font-semibold text-sm">Room Upgrade</h3>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Nikmati kamar dengan pemandangan terbaik dan fasilitas tambahan.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-3 space-y-2 text-sm text-gray-800">
            <div className="flex items-start gap-2">
              <span className="text-blue-500">✔️</span>
              <p>Pemandangan city view atau ocean view</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-500">✔️</span>
              <p>Upgrade ke kamar yang lebih luas (jika tersedia)</p>
            </div>
            <p className="text-sm font-semibold text-blue-600 text-right">Rp.50.000</p>
          </div>
        </div>
      </div>



      {/* Price Details Section */}
      <div className="w-full max-w-5xl bg-white p-6 mt-4 rounded-xl shadow-md border border-gray-200">
        <h2 className="text-lg font-semibold mb-4">Price details</h2>

        <div className="flex justify-between text-sm text-gray-800 mb-2">
          <div>
            <p className="font-semibold">Room Price</p>
            <p className="text-gray-500">(1x) Prestige Room – Room Only (1 night)</p>
          </div>
          <p className="font-medium">Rp.678.478</p>
        </div>

        <div className="flex justify-between text-sm text-gray-800 mb-4">
          <p className="font-semibold">Taxes and Fees</p>
          <p className="font-medium">Rp.678.478</p>
        </div>

        <hr className="mb-4" />

        <div className="flex justify-between items-center text-lg font-semibold mb-4">
          <p>Total Price</p>
          <p className="text-orange-500">Rp.988.000</p>
        </div>

        <button className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 rounded-lg shadow-md transition">
          Continue To Payment
        </button>
       </div>
      <div className="h-30"></div>

    </div>
  );
}
