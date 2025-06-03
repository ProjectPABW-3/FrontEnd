import { useEffect, useState } from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaRegCalendarAlt,
    FaTelegramPlane,
    FaWhatsapp,
} from "react-icons/fa";
import Gambar17 from "../assets/Homepage/Gambar17.jpg";

const Artikel2 = () => {
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
                    style={{ backgroundImage: `url(${Gambar17})` }}
                >
                    <div className="absolute inset-0 bg-opacity-10 flex flex-col items-center justify-center text-center text-white" />
                </div>
            </div>

            {/* Isi Konten */}
            <div className="max-w-6xl mx-auto p-6 mt-4">
                <h1 className="text-3xl font-bold mb-2">
                    Updated 2025 Jabodetabek KRL Routes, Check It Out!
                </h1>
                <div className="flex items-center text-gray-600 mb-4">
                    <FaRegCalendarAlt className="mr-2 text-sm" />
                    <span>Published on February 22, 2025</span>
                </div>

                <p className="text-gray-700 mb-4 text-justify">
                    The electric train (KRL) is one of the favorite mass transportation modes in Jakarta
                    and its surrounding areas. Yes, this transportation mode, known as KRL Jabodetabek,
                    has a wide route coverage and affordable rates. No wonder, KRL Jabodetabek has always
                    been a reliable transportation mode for commuters. Well, for those of you who want to
                    try it, it's a good idea to check out the latest KRL Jabodetabek routes. Comprising
                    several tracks, the Jabodetabek KRL Commuterline routes can be your daily travel companion!
                    Jabodetabek KRL Routes 2025 The KRL routes in Jakarta and its surroundings are generally
                    divided into 5 tracks, namely the Bogor KRL route, the Cikarang KRL route, the
                    Rangkasbitung KRL route, the Tangerang KRL route, and the Tanjung Priok KRL route.
                    There is also a local KRL route to Merak. Here is the complete list of the latest
                    Jabodetabek KRL routes 2025:
                </p>

                {/* Point 1 */}
                <div className="mb-6">
                    <p className="text-gray-700 font-semibold mb-2">1. Bogor KRL Route (Red)</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-gray-700 text-sm">
                        <span>Jakarta Kota</span>
                        <span>Jayakarta</span>
                        <span>Mangga Besar</span>
                        <span>Sawah Besar</span>
                        <span>Juanda</span>
                        <span>Gondangdia</span>
                        <span>Cikini</span>
                        <span>Manggarai</span>
                        <span>Tebet</span>
                        <span>Cawang</span>
                        <span>Duren Kalibata</span>
                        <span>Pasar Minggu Baru</span>
                        <span>Pasar Minggu</span>
                        <span>Tanjung Barat</span>
                        <span>Lenteng Agung</span>
                        <span>Universitas Pancasila</span>
                        <span>Universitas Indonesia</span>
                        <span>Pondok Cina</span>
                        <span>Depok Baru</span>
                        <span>Depok</span>
                        <span>Citayam*</span>
                        <span>Pondok Rajeg</span>
                        <span>Cibinong</span>
                        <span>Nambo</span>
                        <span>Bojong Gede</span>
                        <span>Cilebut</span>
                        <span>Bogor</span>
                    </div>
                    <p className="text-gray-600 text-sm mt-2 italic">
                        *From Citayam Station, there are two branch routes: Citayam → Pondok Rajeg (operational again since October 19, 2024) → Cibinong → Nambo and Citayam → Bojong Gede → Cilebut → Bogor.
                    </p>
                </div>

                {/* Point 2 */}
                <div className="mb-6">
                    <p className="text-gray-700 font-semibold mb-2">2. Rangkasbitung KRL Route (Green)</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-gray-700 text-sm">
                        <span>Tanah Abang</span>
                        <span>Palmerah</span>
                        <span>Kebayoran</span>
                        <span>Pondok Ranji</span>
                        <span>Jurangmangu</span>
                        <span>Sudimara</span>
                        <span>Rawa Buntu</span>
                        <span>Serpong</span>
                        <span>Cisauk</span>
                        <span>Cicayur</span>
                        <span>Parung Panjang</span>
                        <span>Cilejit</span>
                        <span>Daru</span>
                        <span>Tenjo</span>
                        <span>Tigaraksa</span>
                        <span>Cikoya</span>
                        <span>Maja</span>
                        <span>Citeras</span>
                        <span>Rangkasbitung</span>
                    </div>
                </div>

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

export default Artikel2;
