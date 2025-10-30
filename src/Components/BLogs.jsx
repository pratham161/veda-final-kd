import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const BlogSection = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ define currently available routes (update this as you add real pages)
  const existingRoutes = ["/redchilli", "/cardamom", "/honey"];

  useEffect(() => {
    try {
      const data = [
        {
          id: 1,
          img: "/images/redchilli.jpg",
          category: "Spices",
          title: "🌶 Red Chilli — The Fiery Flavor of India",
          desc: "Indian Red Chilli is known for its vibrant color and fiery heat. Grown in Andhra Pradesh and Karnataka, these chilies are rich in flavor and antioxidants.",
          to: "/redchilli",
          views: "1.2K",
          comments: "6",
        },
        {
          id: 2,
          img: "/images/cardamom.jpg",
          category: "Spices",
          title: "🌿 Cardamom — The Queen of Spices",
          desc: "Cardamom adds a sweet, floral, and citrusy flavor to foods. Kerala and Tamil Nadu are famous for their lush cardamom plantations.",
          to: "/cardamom",
          views: "980",
          comments: "5",
        },
        {
          id: 3,
          img: "/images/honey.jpg",
          category: "Natural Products",
          title: "🍯 Natural Honey — Nature’s Golden Sweetener",
          desc: "Pure, unprocessed honey from India captures natural sweetness and health with enzymes and minerals from pristine sources.",
          to: "/honey",
          views: "1.4K",
          comments: "9",
        },
        {
          id: 4,
          img: "/images/turmeric.jpg",
          category: "Spices",
          title: "✨ Turmeric — India’s Golden Spice",
          desc: "Renowned for its healing properties, Indian turmeric adds color and health to every dish with its rich curcumin content.",
          to: "/turmeric",
          views: "1.1K",
          comments: "8",
        },
        {
          id: 5,
          img: "/images/bp.jpg",
          category: "Spices",
          title: "⚫ Black Pepper — The King of Spices",
          desc: "Cultivated in Kerala, black pepper enhances flavor and offers numerous health benefits due to its natural piperine compound.",
          to: "/blackpepper",
          views: "1.3K",
          comments: "7",
        },
        {
          id: 6,
          img: "/images/coconut.jpg",
          category: "Natural Products",
          title: "🥥 Coconut — The Tree of Life",
          desc: "From Kerala to Tamil Nadu, coconuts provide versatile uses — oil, water, and coir — making them a vital part of India’s coastal heritage.",
          to: "/coconut",
          views: "890",
          comments: "4",
        },
      ];

      setPosts(data);
    } catch (err) {
      console.error("Error loading blogs:", err);
      setError("Failed to load blog posts. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading)
    return (
      <div className="w-full text-center py-16 text-gray-500 text-lg">
        Loading blogs...
      </div>
    );

  if (error)
    return (
      <div className="w-full text-center py-16 text-red-600 font-semibold">
        {error}
      </div>
    );

  return (
    <section className="w-full overflow-hidden bg-gray-50 py-12">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-orange-600 text-center mb-8 md:mb-12">
        Our Blogs
      </h1>

      <div className="relative w-full overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1.2}
          breakpoints={{
            480: { slidesPerView: 1.5 },
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.3 },
            1280: { slidesPerView: 4.2 },
          }}
          loop={true}
          speed={7000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          freeMode={true}
          allowTouchMove={true}
          grabCursor={true}
          className="!overflow-visible"
          onError={(swiper, err) => {
            console.error("Swiper error:", err);
            setError("There was an issue displaying the blogs.");
          }}
        >
          {posts.map((post) => {
            const routeExists = existingRoutes.includes(post.to);

            return (
              <SwiperSlide
                key={post.id}
                className="flex justify-center px-1 sm:px-2 md:px-3"
              >
                <div className="h-[440px] w-full sm:w-[85%] md:w-[300px] lg:w-[320px] xl:w-[340px] flex flex-col border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition duration-300 bg-white">
                  <img
                    className="h-48 w-full object-cover object-center"
                    src={post.img}
                    alt={post.title}
                    onError={(e) => (e.target.src = "./images/fallback.jpg")}
                  />
                  <div className="flex flex-col flex-grow p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      {post.category}
                    </h2>
                    <h1 className="title-font text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      {post.title}
                    </h1>
                    <p className="leading-relaxed text-sm text-gray-700 mb-4 line-clamp-3">
                      {post.desc}
                    </p>

                    <div className="mt-auto flex items-center justify-between">
                      {routeExists ? (
                        <Link
                          to={post.to}
                          className="text-indigo-500 inline-flex items-center hover:text-indigo-700 transition text-sm"
                        >
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14" />
                            <path d="M12 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ) : (
                        <button
                          onClick={() =>
                            alert(
                              "This article will be available soon. Please check back later."
                            )
                          }
                          className="text-gray-400 inline-flex items-center cursor-not-allowed text-sm"
                        >
                          Coming Soon
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14" />
                            <path d="M12 5l7 7-7 7" />
                          </svg>
                        </button>
                      )}

                      <div className="flex items-center text-gray-400 text-sm space-x-3">
                        <span className="inline-flex items-center">
                          👁 {post.views}
                        </span>
                        <span className="inline-flex items-center">
                          💬 {post.comments}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default BlogSection;
