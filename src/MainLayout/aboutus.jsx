import React from "react";
import aboutus1 from "../assets/aboutus1.jpg";
import aboutus2 from "../assets/aboutus2.jpg";
import aboutus3 from "../assets/aboutus3.jpg";
import aboutus4 from "../assets/aboutus4.jpg";
import aboutus5 from "../assets/aboutus5.jpg";
import aboutus6 from "../assets/aboutus6.jpg";
import aboutus7 from "../assets/aboutus7.jpg";


const Aboutus = () => {
  return (
    <div className="text-gray-800 font-sans">
      <div className="relative">
        <img src={aboutus1} alt="aboutus1" className="w-full h-[300px] object-cover" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h2 className="text-4xl font-bold">About Us</h2>
          <p className="mt-2 text-sm md:text-base text-white font-bold">
            “Skybook Travel is here to provide an easier, more convenient and affordable travel experience. We provide booking services for airline tickets, hotels, tour packages, and various other travel needs in one convenient platform.”
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-6 px-4">
        {[aboutus2, aboutus3, aboutus4, aboutus5].map((img, i) => (
          <img key={i} src={img} alt={`img-${i}`} className="w-[200px] h-[200px] object-cover rounded-md shadow" />
        ))}
      </div>

      <div className="mt-12 px-15 flex flex-col md:flex-row items-center">
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-2">Vision</h3>
          <p className="text-base">
            To be a trusted and innovative travel platform that helps everyone explore the world more easily,
            conveniently and affordably.
          </p>
        </div>
        <img src={aboutus6} alt="aboutus6" className="w-full md:w-[300px] rounded-md shadow" />
      </div>

      {/* Mission Section */}
      <div className="mt-12 px-15 flex flex-col md:flex-row-reverse items-center gap-6">
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-4">Mission</h3>
          <ul className="list-disc list-inside space-y-4 text-base">
            <li>Make travel easier by providing ticket, hotel and tour package booking services in one convenient platform.</li>
            <li>Providing the best prices with various promos and exclusive offers.</li>
            <li>Improving user convenience through responsive 24/7 customer support services.</li>
            <li>Delivering a more personalized travel experience with destination and service recommendations that match customer preferences.</li>
            <li>Prioritizing security and ease of transactions, ensuring a fast, safe, and hassle-free booking process.</li>
          </ul>
        </div>
        <img src={aboutus7} alt="aboutus7" className="w-full md:w-[300px] rounded-md shadow" />
      </div>
    </div>
  );
};

export default Aboutus;
