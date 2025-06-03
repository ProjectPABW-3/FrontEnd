import { useEffect, useState } from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaRegCalendarAlt,
    FaTelegramPlane,
    FaWhatsapp,
} from "react-icons/fa";
import Gambar15 from "../assets/Homepage/Gambar15.jpg";

const Artikel = () => {
const [currentUrl, setCurrentUrl] = useState("");

useEffect(() => {
    setCurrentUrl(window.location.href);
}, []);

    return (
    <div className="bg-gray-100">
        {/* Header */}
        <div className="relative">
            <div
                className="relative bg-cover bg-center h-90"
                style={{ backgroundImage: `url(${Gambar15})` }}
            >
            <div className="absolute inset-0 bg-opacity-10 flex flex-col items-center justify-center text-center text-white" />
        </div>
    </div>

    {/* Isi Konten */}
    <div className="max-w-6xl mx-auto p-6 mt-4">
        <h1 className="text-3xl font-bold mb-2">Top Beaches to Enjoy in Australia, Let's Visit!</h1>
            <div className="flex items-center text-gray-600 mb-4">
            <FaRegCalendarAlt className="mr-2 text-sm" />
        <span>Published on February 10, 2025</span>
    </div>

    <p className="text-gray-700 mb-4 text-justify">
        Beaches are a favourite Australian pastime. Whether it’s a game of
        cricket, an early-morning surf or a lie in the sunshine, beach
        culture truly encapsulates the 'no worries' attitude that defines so
        much of Australia. The beach is a place that exudes calm and
        relaxation, and with so much coastline to go around, it’s not hard to
        find a quiet space of sand all to yourself.
    </p>

    {/* Bagian Share */}
    <div className="mt-6">
        <h2 className="font-bold text-lg">SHARE POST</h2>
    <div className="flex space-x-4 mt-2 mb-5 text-blue-700 text-xl">
        <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                currentUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Share on Facebook"
        >
            <FaFacebookF />
        </a>

        <a
            href={`https://www.instagram.com/?url=${encodeURIComponent(
                currentUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Share on Instagram"
        >
            <FaInstagram />
        </a>

        <a
            href={`https://t.me/share/url?url=${encodeURIComponent(
                currentUrl
            )}&text=Check%20this%20out!`}
            target="_blank"
            rel="noopener noreferrer"
            title="Share on Telegram"
        >
            <FaTelegramPlane />
        </a>

        <a
            href={`https://wa.me/?text=Check%20this%20out!%20${encodeURIComponent(
                currentUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Share on WhatsApp"
        >
            <FaWhatsapp />
        </a>

            </div>
        </div>
    </div>
</div>
);
};

export default Artikel;