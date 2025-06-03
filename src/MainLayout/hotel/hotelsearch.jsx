import React from "react";
import {
  FaSearch,
  FaUser,
  FaRegHeart,
  FaThumbsUp,
  FaHeart,
  FaStar,
  FaPlane,
  FaHotel,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import MBS1 from "../../assets/hotel/MBS1.jpg";
import MBS2 from "../../assets/hotel/MBS2.jpg";
import MBS3 from "../../assets/hotel/MBS3.jpg";
import MBS4 from "../../assets/hotel/BHL1.jpg";
import MBS5 from "../../assets/hotel/BHL2.jpg";
import { Link } from "react-router";

const HotelCard = ({ name, location, price, imageSrc }) => (
  <div className="flex bg-white shadow-lg rounded-xl p-6 mb-8 hover:shadow-2xl hover:scale-105 transition-all duration-500">
    <div className="w-1/3">
      <img
        src={imageSrc}
        alt={name}
        className="rounded-xl w-full h-full object-cover"
      />
    </div>
    <div className="w-2/3 pl-6 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500 flex items-center">
            <MdLocationOn className="mr-1" /> {location}
          </p>
        </div>
        <div className="flex items-center text-yellow-400 text-sm mt-1">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Show Cooking Restaurant, Kids Club, Recreation Room
        </p>
        <p className="text-sm text-gray-500">2+ Guests</p>
      </div>
      <div className="flex justify-between items-center mt-6">
        <FaThumbsUp className="text-black text-xl" />
        <div className="flex flex-col items-end">
          <p className="text-[#023E8A] font-poppins font-bold text-lg mb-2">
            Rp. {price}
          </p>
          <Link
            to={"/hotel-detail"}
            className="bg-[#023E8A] text-white rounded-lg px-14 py-1 hover:bg-[#969da5] transition-colors font-poppins font-bold"
          >
            Detail
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const Filters = () => (
  <div className="w-1/3 mr-8 -ml-60 bg-white p-4 rounded-lg shadow-md border border-black">
    <h2 className="text-lg font-semibold mb-2">
      Filter terbaru{" "}
      <span className="text-red-500 cursor-pointer text-sm ml-2">
        Hapus Semua
      </span>
    </h2>

    <div className="mb-6">
      <div className="flex flex-wrap gap-2">
        <button className="bg-blue-100 text-blue-700 rounded px-3 py-1">
          Promo
        </button>
        <button className="bg-gray-200 text-gray-700 rounded px-3 py-1">
          Homestay
        </button>
        <button className="bg-green-100 text-green-700 rounded px-3 py-1">
          Breakfast available
        </button>
      </div>
    </div>

    <div className="mb-6 border-t border-black pt-4">
      <h3 className="font-semibold mb-2">Price Range</h3>
      <input type="range" min="0" max="15000000000" className="w-full" />
      <div className="flex justify-between text-sm">
        <span>Rp.0</span>
        <span>Rp.15.000.000.000</span>
      </div>
    </div>

    <div className="mb-4 border-t border-black pt-4">
      <h3 className="font-semibold mb-2">Promo & Diskon</h3>
      <div className="flex flex-col gap-1 text-sm">
        <label>
          <input type="checkbox" className="mr-2" /> Promo for you
        </label>
        <label>
          <input type="checkbox" className="mr-2" /> EPIC SALE
        </label>
        <label>
          <input type="checkbox" className="mr-2" /> Best Price
        </label>
      </div>
    </div>

    <div className="mb-4 border-t border-black pt-4">
      <h3 className="font-semibold mb-2">Hotel Bintang</h3>
      <div className="flex flex-col gap-1 text-sm">
        {[1, 2, 3, 4, 5].map((star) => (
          <label key={star}>
            <input type="checkbox" className="mr-2" />{" "}
            {Array(star).fill("⭐").join(" ")}
          </label>
        ))}
      </div>
    </div>

    <div className="mt-6 border-t border-black pt-4">
      <h3 className="font-semibold mb-2">Accommodation Type</h3>
      <div className="flex flex-col gap-1 text-sm">
        {["Villa", "Hotel", "Apartement", "Homestay"].map((type, index) => (
          <label key={index}>
            <input type="checkbox" className="mr-2" /> {type}
          </label>
        ))}
      </div>
    </div>

    <div className="mt-6 border-t border-black pt-4">
      <h3 className="font-semibold mb-2">Popular Facilities</h3>
      <div className="flex flex-col gap-1 text-sm">
        {[
          "Breakfast Available",
          "Early Check-in",
          "Airport Transfer",
          "Late Check-out",
          "Pools",
        ].map((facility, index) => (
          <label key={index}>
            <input type="checkbox" className="mr-2" /> {facility}
          </label>
        ))}
      </div>
      <div className="text-blue-500 text-sm mt-1 cursor-pointer">See All</div>
    </div>

    <div className="mt-6 border-t border-black pt-4">
      <h3 className="font-semibold mb-2">More Flexibility</h3>
      <div className="flex flex-col gap-1 text-sm">
        <label>
          <input type="checkbox" className="mr-2" /> Bayar di hotel
        </label>
      </div>
    </div>

    <div className="mt-6 border-t border-black pt-4">
      <h3 className="font-semibold mb-2">Unique Facilities</h3>
      <div className="flex flex-col gap-1 text-sm">
        {["Golf", "Indoor Sports", "Entertainment Area"].map(
          (facility, index) => (
            <label key={index}>
              <input type="checkbox" className="mr-2" /> {facility}
            </label>
          )
        )}
      </div>
      <div className="text-blue-500 text-sm mt-1 cursor-pointer">See All</div>
    </div>

    <div className="mt-6 border-t border-black pt-4">
      <h3 className="font-semibold mb-2">Room Facilities</h3>
      <div className="flex flex-col gap-1 text-sm">
        {["Non Smoking Room", "Family Room"].map((facility, index) => (
          <label key={index}>
            <input type="checkbox" className="mr-2" /> {facility}
          </label>
        ))}
      </div>
      <div className="text-blue-500 text-sm mt-1 cursor-pointer">See All</div>
    </div>
  </div>
);

const HotelSearchPage = () => {
  return (
    <div className="bg-[#F8F8F8] min-h-screen py-10 px-6 flex flex-col items-center">
      <div className="flex bg-white rounded-t-xl overflow-hidden shadow ml-[-756px]">
        <button className="flex items-center gap-2 px-8 py-4 text-gray-500 hover:bg-blue-100 font-semibold">
          <FaPlane style={{ color: "#60B5EE" }} /> Flights
        </button>
        <button
          className="flex items-center gap-2 px-8 py-4 font-semibold"
          style={{ backgroundColor: "#00B4D8", color: "#3F5F75" }}
        >
          <FaHotel style={{ color: "#465277" }} /> Hotels
        </button>
      </div>

      <div className="bg-white rounded-tr-xl rounded-b-xl shadow-lg px-8 py-9 w-full max-w-5xl flex flex-col items-center">
        <div className="flex w-full justify-between items-center overflow-hidden">
          <div className="flex items-center gap-3 flex-1 px-6 py-4">
            <FaMapMarkerAlt style={{ color: "#60B5EE" }} className="text-xl" />
            <div>
              <p className="text-gray-400 text-sm">
                City, Destination, or Hotel Name
              </p>
              <p className="font-bold">Hotel Bintang 15</p>
            </div>
          </div>

          <div className="h-12 w-px bg-gray-400"></div>

          <div className="flex items-center gap-3 flex-1 px-6 py-4">
            <FaCalendarAlt style={{ color: "#60B5EE" }} className="text-xl" />
            <div>
              <p className="text-gray-400 text-sm">Check-in & Check-Out Date</p>
              <p className="font-bold">22 Apr 2025 - 30 Apr 2025</p>
            </div>
          </div>

          <div className="h-12 w-px bg-gray-400"></div>
          <div className="flex items-center gap-3 flex-1 px-6 py-4">
            <FaUser style={{ color: "#60B5EE" }} className="text-xl" />
            <div>
              <p className="text-gray-400 text-sm">Guests & Rooms</p>
              <p className="font-bold">2 Adult(s), 0 Child, 1 Room</p>
            </div>
          </div>
        </div>
      </div>

      <button
        className="mt-[-20px] py-3 px-8 rounded-full flex items-center gap-2 shadow-xl hover:bg-blue-900 transition"
        style={{ backgroundColor: "#023E8A", color: "white" }}
      >
        Search Hotels <FaSearch style={{ color: "white" }} />
      </button>

      <div className="flex w-full max-w-5xl mt-20 ml-60">
        <Filters />
        <div className="w-4/4 pl-4">
          <HotelCard
            name="Marina By Sand"
            location="Singapura"
            price="1.500.000"
            imageSrc={MBS1}
          />
          <HotelCard
            name="Bulgari Hotel London"
            location="London, Inggris"
            price="1.550.000"
            imageSrc={MBS2}
          />
          <HotelCard
            name="The Peninsula"
            location="Bali, Indonesia"
            price="2.000.000"
            imageSrc={MBS3}
          />
          <HotelCard
            name="Burj Al Arab"
            location="New York, USA"
            price="3.000.000"
            imageSrc={MBS4}
          />
          <HotelCard
            name="The Ritz Paris"
            location="Tokyo, Japan"
            price="2.500.000"
            imageSrc={MBS5}
          />
        </div>
      </div>
    </div>
  );
};

export default HotelSearchPage;
