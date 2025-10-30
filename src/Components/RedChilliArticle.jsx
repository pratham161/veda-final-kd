import React from "react";

const RedChilliArticle = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <img
        src="./images/redchilli.jpg"
        alt="Red Chilli"
        className="w-full h-80 object-cover rounded-2xl shadow-lg mb-8"
      />
      <p className="text-sm uppercase text-red-500 font-semibold">Spices</p>
      <h1 className="text-4xl font-extrabold text-gray-900 mt-2 mb-6">
        🌶 Red Chilli — The Fiery Flavor of India
      </h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Indian Red Chilli is known worldwide for its vibrant color, rich flavor,
        and fiery heat. Grown in the warm regions of Andhra Pradesh, Karnataka,
        and Maharashtra, these chilies not only enhance the taste of food but
        also offer remarkable health benefits.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Red Chilli is rich in Vitamin C and capsaicin — compounds that boost
        metabolism, improve digestion, and strengthen the immune system. In
        Indian cuisine, it’s an indispensable ingredient in curries, chutneys,
        and spice blends.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        Whether used whole, powdered, or dried, Indian Red Chilli brings warmth,
        depth, and boldness to every dish. Its fiery nature symbolizes India’s
        passion for flavor and authenticity.
      </p>
    </div>
  );
};

export default RedChilliArticle;
