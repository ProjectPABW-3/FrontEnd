import { AiOutlineCalendar } from "react-icons/ai";
import { FaPlane, FaSearch } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { MdFlightTakeoff, MdHotel } from "react-icons/md";
import Gambar1 from "../assets/Homepage/Gambar1.jpg";
import WhyChooseUs from "../assets/Homepage/WhyChooseUs.jpg";
import NavbarHome from "../components/navbar/NavbarHome";
import { Link } from "react-router";

const Homepage = () => {
  return (
    <>
      <NavbarHome />
      <div className="bg-white">
        <div
          className="relative bg-cover bg-center h-110"
          style={{ backgroundImage: `url(${Gambar1})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"> </div>
          <div className="relative text-white flex flex-col items-center justify-start h-full pt-24">
            <h1 className="text-4xl font-bold mb-8">
              Plan Your Dream Trip - Fast and Easy!
            </h1>

            <div className="flex flex-col w-fit container mx-auto">
              <div className="bg-white rounded-t-xl shadow-md w-fit px-4 py-2 mt-10">
                <div className="flex items-center gap-4">
                  {/* Button Flights (aktif) */}
                  <button className="flex items-center gap-2 text-gray-500 hover:text-blue-600 font-semibold pb-1">
                    <MdFlightTakeoff className="text-gray-500 text-xl group-hover:text-blue-600" />
                    Flights
                  </button>

                  {/* Separator */}
                  <div className="h-6 w-px bg-gray-300"></div>

                  {/* Button Hotels */}
                  <button className="flex items-center gap-2 text-blue-800 font-semibold border-b-2 border-blue-800">
                    <MdHotel className="text-blue-800 text-xl" />
                    Hotels
                  </button>
                </div>
              </div>

              {/* Card */}
              <div className="bg-white rounded-xl p-4 mt-2 shadow-md w-fit">
                <div className="flex flex-wrap gap-4 justify-between items-end">
                  <div className="flex items-center gap-2  border-gray-300 rounded-lg p-2 shadow-lg w-[160px] h-[48px]">
                    <FiMapPin className="text-blue-600 text-xl flex-shrink-0" />
                    <div className="flex flex-col">
                      <label className="block text-gray-500 text-sm ">
                        From
                      </label>
                      <input
                        type="text"
                        className="font-semibold focus:outline-none bg-transparent text-black text-sm"
                        value="Balikpapan (BPN)"
                        readOnly
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2  border-gray-300 rounded-lg p-2 shadow-lg w-[200px] h-[48px]">
                    <FiMapPin className="text-blue-500 text-xl flex-shrink-0" />
                    <div className="flex flex-col">
                      <label className="block text-gray-500 text-sm">To</label>
                      <input
                        type="text"
                        className="font-semibold focus:outline-none bg-transparent text-black text-sm"
                        value="Kuala Lumpur (KXLA)"
                        readOnly
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2  border-gray-300 rounded-lg p-2 shadow-lg w-[160px] h-[48px]">
                    <FaPlane className="text-blue-500 text-xl flex-shrink-0" />
                    <div className="flex flex-col">
                      <label className="block text-gray-500 text-sm">
                        Class
                      </label>
                      <select className="font-semibold focus:outline-none bg-transparent text-black text-sm">
                        <option>Economy</option>
                        <option>Business</option>
                        <option>First Class</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center gap-2  border-gray-300 rounded-lg p-2 shadow-lg w-[160px] h-[48px]">
                    <AiOutlineCalendar className="text-blue-500 text-xl" />
                    <div>
                      <label className="block text-gray-500 text-sm">
                        Departure
                      </label>
                      <input
                        type="date"
                        className="font-semibold focus:outline-none bg transparant text-black text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2  border-gray-300 rounded-lg p-2 shadow-lg w-[160px] h-[48px]">
                    <AiOutlineCalendar className="text-blue-500 text-xl" />
                    <div>
                      <label className="block text-gray-500 text-sm">
                        Return
                      </label>
                      <input
                        type="date"
                        className="font-semibold focus:outline-none bg-transparant text-black text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-center">
                  <Link
                    to={"/hotel-search"}
                    className="flex items-center gap-2 bg-blue-900 text-white px-8 py-1 rounded-xl shadow hover:bg-blue-800 hover:cursor-pointer transition"
                  >
                    Search Flight
                    <FaSearch className="h-3 mt-[2px]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="text-center p-10">
          <h2 className="text-2xl font-bold ">
            Uncover a new you across Asia and beyond.
          </h2>
          <p>Every journey reveals a new story — make it yours.</p>
        </section>

        {/* Travel Destination Cards */}
        <section className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white  rounded-lg shadow-md overflow-hidden">
            <img
              src="/src/assets/Homepage/Gambar2.jpg"
              alt="Best In Bali"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">Best In Bali</h3>
              <div className="flex items-center">
                <FaPlane className="text-gray-500 mr-2" />
                <AiOutlineCalendar className="text-gray-500 mr-2" />
              </div>
              <button className="mt-3 bg-blue-900 text-white px-4 py-1 rounded">
                Book Now
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="/src/assets/Homepage/Gambar3.jpg"
              alt="Best In Nusa Tenggara"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">Best In Nusa Tenggara</h3>
              <div className="flex items-center">
                <FaPlane className="text-gray-500 mr-2" />
                <AiOutlineCalendar className="text-gray-500 mr-2" />
              </div>
              <button className="mt-3 bg-blue-900 text-white px-4 py-1 rounded">
                Book Now
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="/src/assets/Homepage/Gambar4.jpg"
              alt="Best In Lombok"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">Best In Lombok</h3>
              <div className="flex items-center">
                <FaPlane className="text-gray-500 mr-2" />
                <AiOutlineCalendar className="text-gray-500 mr-2" />
              </div>
              <button className="mt-3 bg-blue-900 text-white px-4 py-1 rounded">
                Book Now
              </button>
            </div>
          </div>

          <div className="bg-white  rounded-lg shadow-md overflow-hidden">
            <img
              src="/src/assets/Homepage/Gambar5.jpg"
              alt="Best In Jakarta"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">Best In Jakarta</h3>
              <div className="flex items-center">
                <FaPlane className="text-gray-500 mr-2" />
                <AiOutlineCalendar className="text-gray-500 mr-2" />
              </div>
              <button className="mt-3 bg-blue-900 text-white px-4 py-1 rounded">
                Book Now
              </button>
            </div>
          </div>

          <div className="bg-white  rounded-lg shadow-md overflow-hidden">
            <img
              src="/src/assets/Homepage/Gambar6.jpg"
              alt="Best In Yogyakarta"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">Best In Yogyakarta</h3>
              <div className="flex items-center">
                <FaPlane className="text-gray-500 mr-2" />
                <AiOutlineCalendar className="text-gray-500 mr-2" />
              </div>
              <button className="mt-3 bg-blue-900 text-white px-4 py-1 rounded">
                Book Now
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="/src/assets/Homepage/Gambar7.jpg"
              alt="Best In Malang"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">Best In Malang</h3>
              <div className="flex items-center">
                <FaPlane className="text-gray-500 mr-2" />
                <AiOutlineCalendar className="text-gray-500 mr-2" />
              </div>
              <button className="mt-3 bg-blue-900 text-white px-4 py-1 rounded">
                Book Now
              </button>
            </div>
          </div>
        </section>

        <section className="tw-full">
          <img
            src="src/assets/Homepage/Travel.jpg"
            alt="Time to Travel Banner"
            className="w-full h-auto object-cover mt-10"
          />

          <div className="text-center p-6">
            <h3 className="text-2xl font-bold mb-2 mt-5">
              Global Journeys Await: Grab Your Travel Essentials
            </h3>
            <p className="mb-1">
              Every great trip begins with the right guide.
            </p>
          </div>
        </section>

        {/* Image Grid */}
        <section className="p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          <img
            src="/src/assets/Homepage/Gambar8.jpg"
            className="w-full h-60 object-cover"
            alt="1"
          />
          <img
            src="/src/assets/Homepage/Gambar9.jpg"
            className="w-full h-60 object-cover"
            alt="2"
          />
          <img
            src="/src/assets/Homepage/Gambar10.jpg"
            className="w-full h-60 object-cover"
            alt="3"
          />
          <img
            src="/src/assets/Homepage/Gambar11.jpg"
            className="w-full h-60 object-cover"
            alt="4"
          />
          <img
            src="/src/assets/Homepage/Gambar12.jpg"
            className="w-full h-60 object-cover"
            alt="5"
          />
          <img
            src="/src/assets/Homepage/Gambar13.jpg"
            className="w-full h-60 object-cover"
            alt="6"
          />
          <img
            src="/src/assets/Homepage/Gambar14.jpg"
            className="w-full h-60 object-cover"
            alt="7"
          />
          <img
            src="/src/assets/Homepage/Gambar8.jpg"
            className="w-full h-60 object-cover"
            alt="8"
          />
        </section>

        {/* Why Choose Us Section */}
        <div
          className="relative bg-cover bg-center h-[440px] "
          style={{ backgroundImage: `url(${WhyChooseUs})` }}
        >
          <div className="absolute inset-0 flex flex-col  items-center justify-center text-center text-white">
            <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
              <h2 className="text-3xl sm:text-2xl font-bold mb-2 text-center text-black font-playfair">
                Why choose Us{" "}
              </h2>
              <p className="mt-2 text-1xl sm:text-xl mb-6 text-black font-poppins">
                Your journey starts with smart choices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-6 lg:px-8">
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-black">
                  Easy Booking
                </h3>
                <p className="font-poppins text-2x1 text-black">
                  We simplify the travel planning process. With a clean,
                  user-friendly interface, you can book flights and hotels in
                  minutes — no stress, no confusion.
                </p>
              </div>

              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-black">
                  No Hidden Fees
                </h3>
                <p className="font-poppins text-2x1 text-black">
                  No surprises at checkout. Our prices are fully transparent, so
                  you know exactly what you’re paying for — from the start to
                  finish.
                </p>
              </div>

              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-black">
                  Trusted Accommodation
                </h3>
                <p className="font-poppins text-2x1 text-black">
                  We carefully select and partner with reliable hotels to ensure
                  your stay is safe, clean, and comfortable — wherever you go.
                </p>
              </div>

              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-black">
                  24/7 Customer support
                </h3>
                <p className="font-poppins text-2x1 text-black">
                  Need help on the go? Our dedicated support team is available
                  24/7 to assist you before, during, or after your trip.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto p-4 mt-5">
          <section className="text-center ">
            <h2 className="text-2xl font-bold">
              Keep reading and start your journey
            </h2>
            <p className="text-lg mt-2">
              Adventure begins with the first step.
            </p>
          </section>
        </div>

        {/* Destination Cards Section */}
        <section className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden group">
            <img
              src="/src/assets/Homepage/Gambar2.jpg"
              alt="Best In Bali"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">Best In Bali</h3>
              <p className="text-gray-600 mt-2">
                Home to the majestic Kölner Dom, a lively carnival festival, and
                the signature Kölsch beer.
              </p>
              <button className="mt-3 bg-blue-900 text-white px-4 py-1 rounded">
                READ MORE
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden group">
            <img
              src="/src/assets/Homepage/Gambar3.jpg"
              alt="Best In Nusa Tenggara"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">Best In Nusa Tenggara</h3>
              <p className="text-gray-600 mt-2">
                A futuristic city in the UAE known for skyscrapers, luxury, and
                innovation.
              </p>
              <button className="mt-3 bg-blue-900 text-white px-4 py-1 rounded">
                READ MORE
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden group">
            <img
              src="/src/assets/Homepage/Gambar4.jpg"
              alt="Best In Lombok"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">Best In Lombok</h3>
              <p className="text-gray-600 mt-2">
                A modern city that combines technology, culture, and natural
                beauty in one destination.
              </p>
              <button className="mt-3 bg-blue-900 text-white px-4 py-1 rounded">
                READ MORE
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden group">
            <img
              src="/src/assets/Homepage/Gambar5.jpg"
              alt="Best In Jakarta"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">Best In Jakarta</h3>
              <p className="text-gray-600 mt-2">
                A spectacular natural destination with high cliffs and boundless
                desert views.
              </p>
              <button className="mt-3 bg-blue-900 text-white px-4 py-1 rounded">
                READ MORE
              </button>
            </div>
          </div>
        </section>

        <div className="text-center p-6">
          <button className="bg-blue-900 text-white px-6 py-2 rounded">
            Show More
          </button>
        </div>

        <section className="p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">
            What Customer Say About Us
          </h2>
          <div className="flex justify-center space-x-4">
            <div className="bg-white rounded-lg shadow-md p-4 relative">
              <span className="absolute top-2 right-2 text-yellow-500 ">
                ★★★★★
              </span>
              <p className="text-gray-600 mt-5">
                {" "}
                Booking tickets and hotels is super easy! The interface is
                user-friendly, the process is fast, and there are no hidden
                fees. Highly recommended{" "}
              </p>
              <div className="mt-2">
                <p className="font-bold">Lily Angelie</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 relative">
              <span className="absolute top-2 right-2 text-yellow-500">
                ★★★★★
              </span>
              <p className="text-gray-600 mt-5">
                Booking tickets and hotels is super easy! The interface is
                user-friendly, the process is fast, and there are no hidden
                fees. Highly recommended
              </p>
              <div className="mt-2">
                <p className="font-bold">William Robert</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 relative">
              <span className="absolute top-2 right-2 text-yellow-500">
                ★★★★★
              </span>
              <p className="text-gray-600 mt-5">
                Booking tickets and hotels is super easy! The interface is
                user-friendly, the process is fast, and there are no hidden
                fees. Highly recommended
              </p>
              <div className="mt-2">
                <p className="font-bold">Jessica</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Homepage;
