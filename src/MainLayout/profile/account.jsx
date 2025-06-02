import React from 'react';
import Sidebarprofile from '../../components/sidebarprofile/sidebarprofile';
import Navbarprofile from '../../components/navbar/navbarprofile';
import Footer from '../../components/footer/footer';

const Account = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      <Navbarprofile />

      <div className="flex flex-1 px-8 py-10 gap-8"> 
        <div className="w-64">
          <Sidebarprofile />
        </div>

      <div className="flex-1">
        <div className="max-w-3xl bg-white border rounded shadow-md p-6">
          <h2 className="text-xl font-semibold mb-1">Settings</h2>
          <p className="text-sm text-gray-600 mb-6">Account Information</p>
          <div className="space-y-4">
            <div>
              <label className="font-medium block">Full Name</label>
              <input type="text" value="Ni Wayan Rini Kurniati" readOnly className="border rounded px-3 py-2 w-full mt-1" />
              <p className="text-sm text-gray-500 mt-1">You full name will also appear as your profile name</p>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div>
                <label className="font-medium block">Gender</label>
                <input type="text" value="Female" readOnly className="border rounded px-3 py-2 w-full mt-1" />
              </div>
              <div>
                <label className="font-medium block">Birthdate</label>
                <input type="text" value="2" readOnly className="border rounded px-3 py-2 w-full mt-1" />
              </div>
              <div className="pt-6">
                <input type="text" value="Feb" readOnly className="border rounded px-3 py-2 w-full" />
              </div>
              <div className="pt-6">
                <input type="text" value="2005" readOnly className="border rounded px-3 py-2 w-full" />
              </div>
            </div>

            <div>
              <label className="font-medium block">City of Residence</label>
              <input type="text" value="Balikpapan Regency" readOnly className="border rounded px-3 py-2 w-full mt-1" />
            </div>

            <div className="mt-6">
              <label className="font-medium block">Email</label>
              <p className="text-sm text-gray-500 mb-2">You may use 3 email(s)</p>
              <div className="border rounded p-3">
                <p className="text-sm mb-1">1. niwayanriniik@gmail.com <span className="text-green-600 font-semibold">Recipient for notifications</span></p>
                <button className="text-black hover:underline text-sm mt-2 font-bold">+ Add Emails</button>
              </div>
            </div>

            <div className="mt-6">
              <label className="font-medium block">Mobile Number</label>
              <p className="text-sm text-gray-500 mb-2">You may use up to 3 mobile number(s)</p>
              <button className="text-black hover:underline text-sm font-bold">+ Add Mobile Number</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Account;
