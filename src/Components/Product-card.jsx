

const ProductCard = ({ title, image, description, link }) => {
  return (
    <div className="bg-white p-6 rounded-xl w-72 shadow-md hover:-translate-y-1 transition-transform duration-300">
     <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 text-center mb-8 md:mb-12">
          Our Products
        </h2>
      <a href={link}>
        <img
          src={image}
          alt={title}
          className="w-full rounded-md mb-4 object-cover"
        />
        <h2 className="text-xl font-semibold mb-2 text-[#341F07] font-inter">
          {title}
        </h2>
        <p className="text-base mb-4 text-[#341F07] font-noto">
          {description}
        </p>
        <button className="bg-[#55b957] text-white px-4 py-2 rounded-md font-medium hover:bg-[#219150] transition-colors">
          Read More
        </button>
      </a>
    </div>
  );
};

export default ProductCard;
