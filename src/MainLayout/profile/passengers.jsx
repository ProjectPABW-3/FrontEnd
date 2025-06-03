import { useState } from 'react';
import Footer from '../../components/footer/footer';
import Navbarprofile from '../../components/navbar/navbarprofile';
import Sidebarprofile from '../../components/sidebarprofile/sidebarprofile';

const passengers = [
  { id: 1, name: 'Ms. Ni Wayan Rini Kurniati' },
  { id: 2, name: 'Ms. Nasya Deani Amanda' },
  { id: 3, name: 'Ms. Azzatul Nabila Kahar' },
  { id: 4, name: 'Ms. Dewi Purnamasari' },
];

const Passengers = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddPassengerClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navbar */}
      <Navbarprofile />

      {/* Main section with Sidebar + Content */}
      <div className="flex flex-1 px-8 py-10 gap-8">
        {/* Sidebar with fixed width */}
        <div className="w-64">
          <Sidebarprofile />
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="max-w-3xl bg-[#f0f8ff] border border-[#60b5ee] rounded shadow-md p-6">
            <h2 className="text-lg font-bold mb-1">List of Passengers</h2>
            <p className="text-sm text-gray-500 mb-6">You can add up to 40 passengers</p>

            <ul className="space-y-4 mb-6">
              {passengers.map((passenger, index) => (
                <li key={passenger.id} className="flex justify-between items-center border p-3 rounded shadow-sm">
                  <div className="flex items-center gap-2 font-medium">
                    <span>{index + 1}.</span>
                    <span>{passenger.name}</span>
                  </div>
                  <div className="flex gap-4 text-sm text-[#0398fc] font-medium">
                    <button className="hover:underline">Remove</button>
                  </div>
                </li>
              ))}
            </ul>

            <button
              onClick={handleAddPassengerClick}
              className="w-full bg-[#60b5ee] hover:bg-blue-600 text-white font-semibold py-2 rounded shadow"
            >
              Add Passengers
            </button>
          </div>
        </div>
      </div>

      <Footer />

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-none bg-white/40 z-50">
          <div className="bg-white px-8 py-6 w-[600px] max-h-[90vh] overflow-y-auto rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">Add Passengers</h2>
            <form>
              {/* Title */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Title</label>
                <select className="block w-full border border-gray-300 rounded-md p-2">
                  <option value="">Select Title</option>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                </select>
              </div>

              {/* First Name */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">First Name</label>
                <input type="text" className="block w-full border border-gray-300 rounded-md p-2" />
              </div>

              {/* Last Name */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Last Name</label>
                <input type="text" className="block w-full border border-gray-300 rounded-md p-2" />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Email</label>
                <input type="email" className="block w-full border border-gray-300 rounded-md p-2" />
              </div>

              {/* Phone */}
              <div className="mb-4 flex items-center">
                <label className="block text-sm font-medium mb-2 mr-2">Phone</label>
                <input
                  type="text"
                  className="block border border-gray-300 rounded-l-md p-2 w-full"
                  placeholder="Phone Number"
                />
                <select className="border border-gray-300 rounded-r-md p-2">
                  <option value="+62">+62</option>
                </select>
              </div>

              {/* Nationality */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Nationality</label>
                <select className="block w-full border border-gray-300 rounded-md p-2">
                  <option value="">Select Nationality</option>
                  <option value="ID">Indonesian</option>
                  <option value="US">American</option>
                </select>
              </div>

              {/* Date of Birth */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Date of Birth</label>
                <div className="grid grid-cols-3 gap-2">
                  <select className="block border border-gray-300 rounded-md p-2">
                    <option value="">Day</option>
                    {[...Array(31)].map((_, i) => (
                      <option key={i} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                  <select className="block border border-gray-300 rounded-md p-2">
                    <option value="">Month</option>
                    {[...Array(12)].map((_, i) => (
                      <option key={i} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                  <select className="block border border-gray-300 rounded-md p-2">
                    <option value="">Year</option>
                    {[...Array(100)].map((_, i) => (
                      <option key={i} value={2023 - i}>{2023 - i}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-between mt-6">
                <button type="submit" className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">
                  Submit
                </button>
                <button type="button" onClick={handleCloseModal} className="bg-gray-300 px-4 py-2 rounded">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Passengers;
