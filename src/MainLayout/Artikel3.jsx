import { useEffect, useState } from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaRegCalendarAlt,
    FaTelegramPlane,
    FaWhatsapp,
} from "react-icons/fa";
import Gambar18 from "../assets/Homepage/Gambar18.jpg";

const Artikel3 = () => {
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
                    style={{ backgroundImage: `url(${Gambar18})` }}
                >
                    <div className="absolute inset-0 bg-opacity-10 flex flex-col items-center justify-center text-center text-white" />
                </div>
            </div>

            {/* Isi Konten */}
            <div className="max-w-6xl mx-auto p-6 mt-4">
                <h1 className="text-3xl font-bold mb-2">
                    Newest Update for Bali Tourist Tax 2024: Here’s What You Need to Know!
                </h1>
                <div className="flex items-center text-gray-600 mb-4">
                    <FaRegCalendarAlt className="mr-2 text-sm" />
                    <span>Published on February 28, 2025</span>
                </div>

                <p className="text-gray-700 mb-4 text-justify">
                    Bali has updated its tourist tax regulations for 2024. Before traveling to Bali,
                    here’s what you need to know about the latest regulation updates!
                    Welcome to Bali, the ultimate paradise awaits you with open arms! There are many wonders
                    that this island has to offer, which makes Bali never lack visitors.
                    For tourists planning a holiday to Bali, there is a new policy for international tourists,
                    the Bali Tourist Tax 2024. Officials have confirmed that from 14 February 2024, a new initiative
                    called Bali Levy or New Bali Tourist Tax will be implemented to support the sustainability of Bali tourism.
                    What will the implementation of the new policy look like? This article will provide more information about
                    Bali Tourist Tax 2024. Check out the further explanation below!
                </p>

                {/* Tambahan Cara Bayar Bali Tourism Levy */}
                <div className="mb-6 text-gray-700 text-justify">
                    <h2 className="font-semibold text-xl mb-2">How to Pay Bali Tourism Levy</h2>
                    <p className="mb-2">
                        Every foreign tourist is obliged to pay tourist tax before they arrive in Bali. Paying tourist tax in Bali is very practical; it can be done online through the Love Bali website or application.
                    </p>
                    <p className="mb-2">
                        Through Love Bali, tourists can fill in personal data information and then get a QR code after payment. The QR code will be scanned by the officer upon arrival at the Bali airport. Here is a step by step how to pay your tourism Levy that you can follow:
                    </p>
                    <ol className="list-decimal list-inside mb-2">
                        <li>Go to lovebali.baliprov.go.id or download the Love Bali App from Google Play Store or Apple App Store.</li>
                        <li>Next, enter your personal and payment information, such as passport number, name, email address, and arrival date.</li>
                        <li>Then, select the payment method, there are various payment methods available to make it easier for tourists to pay the levy.</li>
                        <li>Complete the payment of Bali Tourism Tax, which is IDR 150,000 per person, according to the payment method that has been selected.</li>
                        <li>After successful payment, tourists will get a levy voucher, in the form of a QR code. The levy voucher will also be sent to your email, make sure the email entered in the personal information filling is valid and active.</li>
                        <li>Done. The officer will scan the QR code at the arrival airport in Bali.</li>
                    </ol>
                    <p>
                        For more information, you can visit the Love Bali website.
                    </p>
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

export default Artikel3;
