import React from "react";

const ArticlePreview = ({ title, image, category, content }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10 px-4">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Article Image */}
        <div className="relative w-full h-64 sm:h-80 md:h-[400px] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute bottom-4 left-4 bg-blue-600 text-white text-sm px-3 py-1 rounded-full shadow">
            {category}
          </div>
        </div>

        {/* Article Content */}
        <div className="p-6 sm:p-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-4">
            {title}
          </h1>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            {content}
          </p>

          {/* Divider */}
          <div className="mt-8 border-t border-gray-200 pt-4 text-gray-500 text-sm">
            <p>
              Published by <span className="font-semibold text-blue-800">Veda Global Exports</span>
            </p>
            <p>Delivering the true essence of Indian spices worldwide 🌍</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePreview;
