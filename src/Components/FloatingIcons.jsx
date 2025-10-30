import React from "react";

const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/vedaglobal1",
    icon: "./images/insta.png",
  },
  {
    name: "LinkedIn",
    url: "https://in.linkedin.com/company/veda-global",
    icon: "./images/linkedin.webp",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php/?id=61565832308295",
    icon: "./images/Facebook.webp",
  },
  {
    name: "x",
    url: "https://x.com/vedaglobalexp",
    icon: "./images/x.jpg",
  },
  {
    name: "WhatsApp",
    // url: "https://wa.me/7977235811",
    icon: "./images/whatsapp (3).png",
  },
];

const SocialFloat = () => {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-[1000] md:bottom-6 md:right-6">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className="transition-transform transform hover:scale-110"
        >
          <img
            src={social.icon}
            alt={social.name}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full shadow-md hover:shadow-xl transition-shadow"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialFloat;
