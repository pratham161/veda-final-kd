import React from "react";

const OurTeam = () => {
  return (
    <section id="our-team" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE - Team Section */}
        <div className="flex flex-col items-center">
          {/* Centered Heading */}
          <h2 className="text-6xl font-extrabold text-blue-900 mb-12 relative text-center">
            Our Team
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-24 h-1 bg-blue-500 rounded"></span>
          </h2>

          {/* TEAM CARDS - STACKED VERTICALLY */}
          <div className="flex flex-col items-center w-full max-w-2xl gap-10">
            {/* Managing Director */}
            <div className="bg-white shadow-lg rounded-2xl p-10 flex flex-col items-center hover:shadow-2xl transition duration-300 w-full">
              <img
                src="./images/SHAILENDRAPATANKAR.png"
                alt="Dr. Shailendra Patankar"
                className="w-52 h-52 object-cover rounded-full border-4 border-blue-100"
              />
              <h3 className="text-3xl font-bold mt-6 text-blue-900 text-center">
                DR. SHAILENDRA PATANKAR
              </h3>
              <p className="text-gray-500 text-xl mt-2">Managing Director</p>
            </div>

            {/* Vice President 1 */}
            <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center hover:shadow-2xl transition duration-300 w-full">
              <img
                src="./images/PRASHANTSURYAVANSHI.png"
                alt="Dr. Prashant Suryavanshi"
                className="w-40 h-40 object-contain rounded-full border-4 border-blue-100"
              />
              <h3 className="text-2xl font-bold mt-4 text-blue-900 text-center">
                DR. PRASHANT SURYAVANSHI
              </h3>
              <p className="text-gray-500 text-lg">Vice President</p>
            </div>

            {/* Vice President 2 */}
            <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center hover:shadow-2xl transition duration-300 w-full">
              <img
                src="./images/SHRIKANTPATHAK.png"
                alt="Dr. Shrikant Pathak"
                className="w-40 h-40 object-cover rounded-full border-4 border-blue-100"
              />
              <h3 className="text-2xl font-bold mt-4 text-blue-900 text-center">
                DR. SHRIKANT PATHAK
              </h3>
              <p className="text-gray-500 text-lg">Vice President</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Text Section (Font Size Increased) */}
        <div className="flex flex-col justify-center text-left">
          <h3 className="font-bold text-black text-2xl mb-4">
            Greetings from Veda Global!
          </h3>

          <p className="text-gray-700 text-xl leading-relaxed mb-6 whitespace-pre-line">
            🌿 At Veda Global, We Take Pride In Delivering:
            {"\n"}✨ Finest Indian Spices
            {"\n\n"}🌶️ Red Chilli
            {"\n"}🌿 Cardamom
            {"\n"}🌾 Cumin
            {"\n"}🌼 Turmeric
            {"\n"}⚫ Black Pepper
            {"\n"}🌸 Clove
            {"\n"}🌻 Coriander Seeds
            {"\n\n"}🍯 Natural Products
            {"\n"}🍯 Pure & Natural Honey
            {"\n"}🍎 Farm-Fresh Fruits & Vegetables
            {"\n"}🌶️ Green Chilli
            {"\n"}🍎 Pomegranate
            {"\n"}🥥 Coconut
            {"\n"}🧅 Onion
            {"\n\n"}With Integrity, Care & Commitment to Excellence.
            Veda Global brings nature’s authentic taste from Indian farms to your table
            — sustainably sourced, hygienically packed, and globally delivered.
          </p>

          <p className="text-gray-700 text-xl leading-relaxed mb-6">
            We believe business is built on trust, relationships, and shared
            prosperity. Guided by the timeless philosophy “Vasudhaiva
            Kutumbakam” – the world is one family – we treat every client as a
            valued member of our global family.
          </p>

          <p className="text-gray-700 text-xl leading-relaxed mb-8">
            With premium quality, fair pricing, reliable service, transparency,
            and honesty, we ensure every product reflects the true essence of
            India. From sourcing to shipment, our team is dedicated to
            sustainability, responsibility, and customer delight.
          </p>

          <h1 className="text-3xl font-semibold text-blue-900 italic text-center md:text-left">
            “Empowering Teams, Enriching the World — Veda Global.”
          </h1>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
