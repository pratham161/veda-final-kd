import React from "react";

const HoneyArticle = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <img
        src="./images/honey.jpg"
        alt="Natural Honey"
        className="w-full h-80 object-cover rounded-2xl shadow-lg mb-8"
      />
      <p className="text-sm uppercase text-amber-500 font-semibold">Natural Product</p>
      <h1 className="text-4xl font-extrabold text-gray-900 mt-2 mb-6">
        🍯 Natural Honey — Nature’s Golden Sweetener
      </h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Indian honey is a pure reflection of nature’s sweetness — harvested from
        the nectar of wildflowers and forest blooms. Each drop of this golden
        liquid carries the taste of India’s rich biodiversity.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Known for its antibacterial and antioxidant properties, honey is more
        than a sweetener — it’s a natural healer. It supports immunity, soothes
        the throat, and provides sustainable energy.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        From the forests of the Himalayas to the farms of South India, our honey
        reflects purity, quality, and sustainability — connecting you with
        nature’s finest.
      </p>
    </div>
  );
};

export default HoneyArticle;
