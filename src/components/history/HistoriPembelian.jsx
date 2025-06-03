import { useEffect, useState } from "react";
import { FaHotel } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { useNavigate } from "react-router";

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const HistoryPembelian = () => {
  const [dataPemesanan, setDataPemesanan] = useState([]);
  const userId = localStorage.getItem("userId");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPemesanan = async () => {
      try {
        const res = await fetch(
          "http://localhost:3000/api/pemesanan?userId=" + userId
        );
        const data = await res.json();
        if (res.ok) {
          setDataPemesanan(data);
        } else {
          console.error("Gagal mengambil data:", data.message);
        }
      } catch (error) {
        console.error("Error saat fetch:", error);
      }
    };

    fetchPemesanan();
  }, [userId]);

  return (
    <div>
      <h3 className="text-lg font-bold mb-2">Riwayat Pemesanan Hotel</h3>
      {dataPemesanan.length === 0 ? (
        <p>Belum ada riwayat pemesanan.</p>
      ) : (
        <div className="space-y-4">
          {dataPemesanan.map((item) => (
            <div
              onClick={() => {
                if (item.status_pemesanan != "Success") {
                  navigate(`/hotel-payment/${item.pemesanan_id}`);
                }
              }}
              key={item.pemesanan_id}
              className="border rounded shadow-sm p-4 flex items-center gap-4 bg-gray-50 hover:bg-gray-200 hover:cursor-pointer"
            >
              <FaHotel size={24} className="text-purple-500" />
              <div className="flex-1">
                <p className="font-semibold">Marina by Sand</p>
                <p className="text-sm text-gray-700">
                  Kamar : {item.pemesanan_kamarHotel} Room
                </p>
                <p className="flex items-center text-sm text-gray-600">
                  <AiOutlineCalendar className="mr-1" />
                  {formatDate(item.tanggal_pemesanan)}
                </p>
              </div>
              <div className="text-right">
                <p className="font-semibold">
                  IDR {item.harga.toLocaleString("id-ID")}
                </p>
                <p
                  className={`text-sm ${
                    item.status_pemesanan === "Success"
                      ? "text-green-600"
                      : item.status_pemesanan === "Pending"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  {item.status_pemesanan}
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
