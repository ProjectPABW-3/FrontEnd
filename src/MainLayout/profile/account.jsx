import { useState } from 'react';
import Footer from '../../components/footer/footer';
import Navbarprofile from '../../components/navbar/navbarprofile';
import Sidebarprofile from '../../components/sidebarprofile/sidebarprofile';

const Account = () => {
  const [fullName, setFullName] = useState("Ni Wayan Rini Kurniati");
  const [gender, setGender] = useState("Female");
  const [birthDate, setBirthDate] = useState("2");
  const [birthMonth, setBirthMonth] = useState("Feb");
  const [birthYear, setBirthYear] = useState("2005");
  const [city, setCity] = useState("Balikpapan Regency");

  // Modal & Phone Number state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPhoneNumber, setNewPhoneNumber] = useState("");

  const handleSavePhoneNumber = () => {
    // Simpan nomor baru di sini (bisa pakai API atau setState tambahan)
    console.log("Phone number saved:", newPhoneNumber);
    setIsModalOpen(false);
    setNewPhoneNumber("");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbarprofile />

      <div className="flex flex-1 px-8 py-10 gap-8">
        <div className="w-64">
          <Sidebarprofile />
        </div>

        <div className="flex-1">
          <div className="max-w-3xl bg-[#f0f8ff] border border-[#60b5ee] rounded shadow-md p-6">
            <h2 className="text-xl font-bold mb-1 text-[#0A61AA]">Settings</h2>
            <p className="text-sm text-gray-600 mb-6">Account Information</p>
            <div className="space-y-4">
              <div>
                <label className="font-medium block">Full Name</label>
                <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className="border rounded px-3 py-2 w-full mt-1" />
                <p className="text-sm text-gray-500 mt-1">You full name will also appear as your profile name</p>
              </div>

              <div className="grid grid-cols-4 gap-4">
                <div>
                  <label className="font-medium block">Gender</label>
                  <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} className="border rounded px-3 py-2 w-full mt-1" />
                </div>
                <div>
                  <label className="font-medium block">Birthdate</label>
                  <input type="text" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} className="border rounded px-3 py-2 w-full mt-1" />
                </div>
                <div className="pt-6">
                  <input type="text" value={birthMonth} onChange={(e) => setBirthMonth(e.target.value)} className="border rounded px-3 py-2 w-full" />
                </div>
                <div className="pt-6">
                  <input type="text" value={birthYear} onChange={(e) => setBirthYear(e.target.value)} className="border rounded px-3 py-2 w-full" />
                </div>
              </div>

              <div>
                <label className="font-medium block">City of Residence</label>
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} className="border rounded px-3 py-2 w-full mt-1" />
              </div>

              <div className="mt-6">
                <label className="font-medium block">Email</label>
                <p className="text-sm text-gray-500 mb-2">You may use 3 email(s)</p>
                <div className="border rounded p-3">
                  <p className="text-sm mb-1">1. niwayanriniik@gmail.com <span className="text-green-600 font-semibold">Recipient for notifications</span></p>
                </div>
              </div>

              <div className="mt-6">
                <label className="font-medium block">Mobile Number</label>
                <p className="text-sm text-gray-500 mb-2">You may use up to 3 mobile number(s)</p>
                <button 
                  className="text-black hover:underline text-sm font-bold mb-5"
                  onClick={() => setIsModalOpen(true)}
                >
                  + Add Mobile Number
                </button>
                <button className="w-full bg-[#60b5ee] hover:bg-blue-600 text-white font-semibold py-2 rounded shadow">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Modal Add Phone */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-none bg-white/60">
          <div className="bg-white rounded shadow-lg p-6 w-1/3">
            <h2 className="text-lg font-bold mb-4">ADD PHONE NUMBER</h2>
            <p className="text-sm text-gray-600 mb-2">Add your active phone number for login and receive notifications</p>
            <label className="font-medium block mb-1">Phone</label>
            <input
              type="text"
              value={newPhoneNumber}
              onChange={(e) => setNewPhoneNumber(e.target.value)}
              className="border rounded px-3 py-2 w-full mb-4"
              placeholder="Example: 812345678"
            />
            <div className="flex justify-between">
              <button onClick={handleSavePhoneNumber} className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
              <button onClick={handleCloseModal} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
