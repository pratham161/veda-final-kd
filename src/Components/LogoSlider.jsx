import React from "react";

const logos = [
  { src: "/images/1.png", alt: "Logo 1" },
  
  { src: "/images/3.png", alt: "Logo 3" },
  { src: "/images/4.png", alt: "Logo 4" },
  { src: "/images/5.png", alt: "Logo 5" },
];

const LogoMarquee = () => {
  if (!logos || logos.length === 0) {
    return <p className="text-gray-500 text-center">No logos to display</p>;
  }
  return (
    <div className="w-full overflow-hidden bg-white py-6">
      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {logos.concat(logos).map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-6 flex-shrink-0"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 w-auto md:h-20 object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default LogoMarquee;
// ...existing code...