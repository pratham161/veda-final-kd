import React from "react";
import "./Cube.css"; // Import styles below

export default function Page3() {
  return (
    <div className="page3 py-20 px-6 bg-gray-50">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* 3D Cube Section */}
        <div className="flex justify-center">
          <div className="cube-container">
            <div className="cube">
              <div className="face front">
                <img src="./images/redchilli.jpg" alt="Red Chilli" />
              </div>
              <div className="face back">
                <img src="./images/onion.jpg" alt="Onion" />
              </div>
              <div className="face right">
                <img src="./images/honey.jpg" alt="Honey" />
              </div>
              <div className="face left">
                <img src="./images/pomegranate.jpg" alt="Pomegranate" />
              </div>
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div>
          <h4 className="text-xl md:text-4xl font-medium text-gray-700">
         Veda Global — The Taste of India, Delivered Worldwide
        We bring together the richness of Indian spices, the sweetness of natural honey, 
        and the freshness of handpicked fruits and vegetables
         — all carefully sourced and delivered to you with love and integrity.
          </h4>
          <p className="text-lg text-gray-700 leading-relaxed mt-6">
            Experience the authentic flavors and natural goodness sourced
            directly from fertile lands and crafted with unwavering honesty and
            trust.
          </p>
        </div>
      </div>
    </div>
  );
}
