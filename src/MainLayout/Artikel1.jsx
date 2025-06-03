import { useEffect, useState } from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaRegCalendarAlt,
    FaTelegramPlane,
    FaWhatsapp,
} from "react-icons/fa";
import Gambar16 from "../assets/Homepage/Gambar16.jpg";

const Artikel1 = () => {
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
                    style={{ backgroundImage: `url(${Gambar16})` }}
                >
                    <div className="absolute inset-0 bg-opacity-10 flex flex-col items-center justify-center text-center text-white" />
                </div>
            </div>

            {/* Isi Konten */}
            <div className="max-w-6xl mx-auto p-6 mt-4">
                <h1 className="text-3xl font-bold mb-2">
                    4 Things to Prepare When Traveling to Thailand, What Are They?
                </h1>
                <div className="flex items-center text-gray-600 mb-4">
                    <FaRegCalendarAlt className="mr-2 text-sm" />
                    <span>Published on February 20, 2025</span>
                </div>

                <p className="text-gray-700 mb-4 text-justify">
                    One of the favorite countries for Indonesian tourists is Thailand. The land of the
                    White Elephant is famous for its natural charm, culinary delights, and a paradise for
                    shopping fans. Thailand is also a favorite destination to enjoy various exciting
                    attractions there, for example concerts by world musicians, and interesting events
                    such as Songkran. So, with the huge excitement that can be enjoyed in Thailand, it is
                    common sense that tourists are expected to bring enough money when traveling. This
                    suggestion was released by the Embassy of the Republic of Indonesia (KBRI) in
                    Thailand via its official Instagram account @indonesianinbangkok. The Indonesian
                    Embassy in Thailand also announced several important things for Indonesian tourists.
                    There are at least 4 things you need to prepare before leaving for Thailand, what are
                    they? Here's the full review for you!
                </p>

                <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-4">
                    <li>
                        <span className="font-semibold">Have an active passport:</span> Every Indonesian
                        tourist traveling to Thailand is required to have a passport with a minimum
                        validity period of 6 months.
                    </li>
                    <li>
                        <span className="font-semibold">Have proof of return ticket:</span> You should be
                        prepared with proof of your return ticket when entering Thailand.
                    </li>
                    <li>
                        <span className="font-semibold">Have proof of accommodation/hotel booking in Thailand:</span> Apart from return tickets, proof of accommodation or hotel reservations is also important to have when visiting Thailand.
                    </li>
                    <li>
                        <span className="font-semibold">Bring enough cash while in Thailand:</span> The Indonesian Embassy in Thailand also advises Indonesian tourists to have sufficient financial proof while in Thailand. One way is to bring Thai Baht cash, a minimum of 15,000–20,000 Thai Baht per person or the equivalent of approximately IDR 6,500,000–IDR 9,000,000.
                    </li>
                </ol>

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

export default Artikel1;
