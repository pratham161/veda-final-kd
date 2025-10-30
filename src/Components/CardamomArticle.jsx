import React from "react";

const CardamomArticle = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <img
        src="./images/cardamom.jpg"
        alt="Cardamom"
        className="w-full h-80 object-cover rounded-2xl shadow-lg mb-8"
      />
      <p className="text-sm uppercase text-green-600 font-semibold">Spices</p>
      <h1 className="text-4xl font-extrabold text-gray-900 mt-2 mb-6">
        🌿 Cardamom — The Queen of Spices
      </h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Cardamom, known as the “Queen of Spices,” holds a special place in Indian
        culture and cuisine. Its unique sweet and floral aroma makes it a prized
        ingredient in desserts, curries, and beverages like chai and coffee.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        The spice is primarily cultivated in Kerala, Tamil Nadu, and Sikkim. It
        contains essential oils that aid digestion, freshen breath, and improve
        respiratory health. In Ayurveda, cardamom is valued for balancing the
        doshas and calming the senses.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        Beyond its flavor, cardamom reflects India’s heritage of wellness and
        luxury — making it one of the most sought-after spices in global markets.
      </p>
    </div>
  );
};

export default CardamomArticle;
