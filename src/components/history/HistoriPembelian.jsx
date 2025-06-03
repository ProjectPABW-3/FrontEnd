import React from 'react';
import { FaPlane } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";

const dummyHistory = [
  {
    id: 1,
    flight: "Jakarta - Bali",
    date: "2025-06-15",
    status: "Completed",
    price: "IDR 1,200,000"
  },
  {
    id: 2,
    flight: "Surabaya - Jakarta",
    date: "2025-07-01",
    status: "Cancelled",
    price: "IDR 850,000"
  },
];

const HistoryPembelian = () => {
  return (
    <div>
      <h3 className="text-lg font-bold mb-2">Purchase History</h3>
      {dummyHistory.length === 0 ? (
        <p>No purchase history found.</p>
      ) : (
        <div className="space-y-4">
          {dummyHistory.map((item) => (
            <div
              key={item.id}
              className="border rounded shadow-sm p-4 flex items-center gap-4 bg-gray-50"
            >
              <FaPlane size={24} className="text-blue-500" />
              <div className="flex-1">
                <p className="font-semibold">{item.flight}</p>
                <p className="flex items-center text-sm text-gray-600">
                  <AiOutlineCalendar className="mr-1" /> {item.date}
                </p>
              </div>
              <div className="text-right">
                <p className="font-semibold">{item.price}</p>
                <p
                  className={`text-sm ${
                    item.status === "Completed"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {item.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HistoryPembelian;
