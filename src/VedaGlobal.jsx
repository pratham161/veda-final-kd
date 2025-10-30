import React, { useEffect, useState } from "react";
import "./VedaGlobal.css";
import SocialFloat from "./Components/FloatingIcons";
import Slider from "./Components/Slider";
import Cube from "./Components/Cube/Cube";
import PhotoGallery from "./Components/PhotoGallery";
import { Link } from "react-router-dom";
import Certificates from "./Components/Certificates";
import OurTeam from "./Components/OurTeam";
import BlogSection from "./Components/BLogs";
import LogoMarquee from "./Components/LogoSlider";

const VedaGlobal = () => {

  const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    setMenuOpen(false); // Close menu if open
    section.scrollIntoView({ behavior: "smooth" });
  }
};

  const [menuOpen, setMenuOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form, e.target.value)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://api.vedaglobalgroup.com/contact/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw { response: { data: errorData } };
      }
      const res = { data: await response.json() };

      setForm({ name: '', email: '', subject: '', message: '' });
      alert(res.data.message || 'message sent successfully!');
    } catch (e) {
      console.log(e)
      const errorMessage = e.response?.data?.error || 'Something went wrong. Please try again.';
      alert(errorMessage);
    }
  };

  const [quoteForm, setQuoteForm] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    company: '',
    quantity: '',
    message: ''
  });

  const handleQuoteChange = (e) => {
    setQuoteForm({ ...quoteForm, [e.target.name]: e.target.value });
  };

  const handleQuoteSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://api.vedaglobalgroup.com/quote/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(quoteForm),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw { response: { data: errorData } };
      }
      const res = { data: await response.json() };
      alert(res.data.message || 'Quote request submitted successfully!');
      setQuoteForm({
        name: '',
        email: '',
        phone: '',
        country: '',
        company: '',
        quantity: '',
        message: ''
      });
      alert('request sent successfully!');
      setQuoteOpen(false); // Close modal after success
    } catch (error) {
      console.error(error);
      const errMsg = error.response?.data?.error || 'Failed to submit quote. Try again.';
      alert(errMsg);
    }
  };



  useEffect(() => {
    const gsapScript = document.createElement("script");
    gsapScript.src =
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js";
    gsapScript.async = true;
    document.body.appendChild(gsapScript);

    const scrollTriggerScript = document.createElement("script");
    scrollTriggerScript.src =
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/ScrollTrigger.min.js";
    scrollTriggerScript.async = true;
    document.body.appendChild(scrollTriggerScript);

    gsapScript.onload = () => {
      if (window.gsap) {
        const gsap = window.gsap;
        const { ScrollTrigger } = window;
        gsap.registerPlugin(ScrollTrigger);

        // Capsule loader animation
        const tl = gsap.timeline();
        tl.to(".loading", { width: "100%", duration: 0.7, delay: 0.3 })
          .to(".capsuleLogo", { scale: 2, duration: 0.5, opacity: 0 }, "a")
          .to(".capsul", { clipPath: "inset(0% 0% 0% 0%)" }, "a");

        // Background zoom
        gsap.timeline({
          scrollTrigger: {
            trigger: ".page1",
            start: "90% 80%",
            end: "155% 80%",
            scrub: true,
          },
        }).to("#bgImage", { scale: 1.05 });

        // Page4 slideshow with text
        const slides = gsap.utils.toArray(".slide");
        let slideTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".page4",
            start: "top top",
            end: "+=2000",
            scrub: true,
            pin: true,
          },
        });

        slides.forEach((slide, i) => {
          const img = slide.querySelector(".slide-img");
          const text = slide.querySelector(".slide-text");

          if (i === 0) {
            gsap.set([img, text], { opacity: 1 });
          }
          slideTl.to([img, text], { opacity: 1, duration: 1 }, i * 2);
          slideTl.to({}, { duration: 1 });
          slideTl.to([img, text], { opacity: 0, duration: 1 }, i * 2 + 1.5);
        });


      }
    };
  }, []);








  return (
    <div id="smooth-wrapper">
      <div id="smooth-content" className="font-sans text-gray-900">
        {/* Page 1 */}
        <div className="page1 relative h-screen flex flex-col justify-between overflow-hidden">
          {/* Capsule Loader */}
          <div className="capsuleBox">
            <div className="capsuleLogo">
              <h1>Veda Global</h1>
              <div className="loading"></div>
            </div>
          </div>

          {/* Background */}
          <div className="capsul bg-transparent relative flex flex-col h-full">
            <img
              id="bgImage"
              src="./images/vedabg.jpg"
              alt="Ship"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute inset-0 bg-black/50 z-10"></div>

            
            <div className="relative z-20 flex flex-col md:flex-row items-center justify-between p-4 md:p-6 gap-4 md:gap-0">
              <div className="flex items-center gap-3 md:gap-4 text-center md:text-left">
                <img
                  src="./images/logobg.png"
                  alt="Veda Global Logo"
                  className="w-20 h-20 md:w-24 md:h-24 object-contain"
                />
                <div>
                  <h1 className="text-white text-5xl md:text-6xl font-extrabold leading-snug">
                    Veda Global
                  </h1>
                  <p className="text-white text-lg md:text-xl opacity-80">
                    Exporting dreams of India
                  </p>
                </div>
              </div>

              {/* Right side: Button */}
              <button
                onClick={() => setQuoteOpen(true)}
                className="bg-white hover:bg-gray-200 text-black px-5 py-2 rounded-lg flex items-center gap-2 text-lg md:text-xl"
              >
                Get Quote <i className="ri-arrow-right-up-line"></i>
              </button>
            </div>



            {/* Bottom Section */}
            <div className="relative z-20 flex flex-col items-center text-center gap-4 p-6 mt-auto">
              <h3 className="text-white text-3xl font-semibold z-20 self-end text-center w-full">
                Premium Indian Spices, Honey,<br /> Fruits & Vegetables delivered Globally
              </h3>
              <button
                onClick={() => setMenuOpen(true)}
                className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg flex items-center gap-2 z-20 relative"
              >
                Menu <i className="ri-menu-fill"></i>
              </button>
            
            </div>

          </div>
        </div>


        {/* Page 2 */}
        {/* <div className="page2 bg-white py-20 px-6 text-center">
          <h4 className="text-xl md:text-2xl font-medium text-gray-700 max-w-4xl mx-auto">
            Welcome to the vibrant world of Veda Global, where the richness of
            Indian spices, cardamom, and honey is thoughtfully harvested and
            carefully delivered to your doorstep.
          </h4>
        </div> */}

        {/* Page 3 */}
        <Cube />
      

        {/* Page 4 Slideshow */}
         <Slider /> 


          <div id="products" className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {[
              {
                title: "Chilli",
                image: "./images/redchilli.jpg",
                desc: "Add a fiery kick to your meals with our premium red chillies."
              },
          
              {
                title: "Cardamom",
                image: "./images/cardamom.jpg",
                desc: "Aromatic cardamom to elevate your recipes and beverages."
              },
              {
                title: "Cumin",
                image: "./CUMIN.jpg",
                desc: "Earthy cumin seeds for authentic flavor in every dish."
              },
              {
                title: "Turmeric",
                image: "./TURMERIC_page_1.jpg",
                desc: "Vibrant turmeric powder for health and color."
              },
              {
                title: "Black Pepper",
                image: "./blackpepper/Panniyur.png",
                desc: "Pungent black pepper to spice up your culinary creations."
              },
              {
                title: "Clove",
                image: "./CLOVE_page-0001.jpg",
                desc: "Warm, aromatic cloves for a touch of spice."
              },
              {
                title: "Coriander Seeds",
                image: "./images/coriander.jpg",
                desc: "Fragrant coriander seeds for a burst of flavor."
              },
              {
                title: "Green Chilli",
                image: "./GREEN CHILLI_page_2.jpg",
                desc: "Spice up your dishes with our fresh green chillies."
              },
              {
                title: "Onion",
                image: "./onion/ONION_page_2.png",
                desc: "Fresh Garva Onions — crisp & flavorful for every dish.",
              },
              {
                title: "Coconut",
                image: "./SEMI HUSK COCUNUT_page_1.jpg",
                desc: "Versatile coconuts for health and taste."
              },
              {
                title: "Pomegranate",
                image: "./POMEGRANATE_page_1.jpg",
                desc: "Juicy pomegranates bursting with flavor."
              },
              {
                title: "Honey",
                image: "/images/honey.jpg",
                desc: "Pure, natural honey for sweetness and wellness."
              },
              {
                title: "Banana",
                image: "/banana/banana.png",
                desc: "Pure,Banana for sweetness and wellness."
              },
            ].map((product, index) => {
              const slug = product.title.toLowerCase().replace(/\s+/g, '');

              return (
                <Link to={`/product/${slug}`} key={index} className="block">
                  <div className="bg-white p-6 rounded-xl w-72 shadow-md hover:-translate-y-1 transition-transform duration-300">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full rounded-md mb-4 object-cover h-48"
                      />
                      <h2 className="text-xl font-semibold mb-2 text-[#341F07] font-inter">
                        {product.title}
                      </h2>
                      <p className="text-base mb-4 text-[#341F07] font-noto">
                        {product.desc}
                      </p>
                      <button className="bg-[#F6821E] text-white px-4 py-2 rounded-md font-medium hover:bg-[#219150] transition-colors">
                        Read More
                      </button>
                  </div>
                </Link>
              )
            })}
            
          </div>
        <div id="our-team">
         <OurTeam/>      
        </div>
        <div id="certificates">
  <Certificates />
</div>

       <div id="gallery">
  <PhotoGallery />
</div>

       <div id="blogs">
  <BlogSection />
</div>

        <LogoMarquee/>

        {/* Contact Form */}
        <div id="contact" className="contact py-20 px-6 bg-white text-center">
          <h2 className="text-3xl font-bold mb-6"> Contact Us</h2>
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6 text-left">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="border rounded-lg px-3 py-2 w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="border rounded-lg px-3 py-2 w-full"
            />
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="border rounded-lg px-3 py-2 w-full md:col-span-2"
            />
            <textarea
              placeholder="Your Message"
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              className="border rounded-lg px-3 py-2 w-full md:col-span-2"
            ></textarea>
            <button type="submit" className="bg-blue-400 hover:bg-blue-500 text-black font-semibold py-2 rounded-lg md:col-span-2">
              Send Message
            </button>
          </form>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-10 px-6" id="footer">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 footer-container">

            {/* About */}
            <div className="footer-about">
              <h2 className="text-2xl font-bold mb-4">Veda Global</h2>
              <p className="text-gray-400">
                Premium Indian Spices, Honey,<br /> Fruits & Vegetables delivered Globally
              </p>
            </div>

            {/* Quick Links */}
            {/* Quick Links */}
            <div className="footer-links">
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
  
  <li>
    <a
      href="#home"
      onClick={(e) => {
        e.preventDefault();
        scrollToSection("smooth-wrapper");
      }}
      className="hover:text-blue-400"
    >
      🏠 Home
    </a>
  </li>

  <li>
    <a
      href="#products"
      onClick={(e) => {
        e.preventDefault();
        scrollToSection("products");
      }}
      className="hover:text-blue-400"
    >
      🛍 Products
    </a>
  </li>

  <li>
    <a
      href="#blogs"
      onClick={(e) => {
        e.preventDefault();
        scrollToSection("blogs");
      }}
      className="hover:text-blue-400"
    >
      📰 Blogs
    </a>
  </li>

  <li>
    <a
      href="#our-team"
      onClick={(e) => {
        e.preventDefault();
        scrollToSection("our-team");
      }}
      className="hover:text-blue-400"
    >
      🧑‍🤝‍🧑 Our Team
    </a>
  </li>

  <li>
    <a
      href="#gallery"
      onClick={(e) => {
        e.preventDefault();
        scrollToSection("gallery");
      }}
      className="hover:text-blue-400"
    >
      🖼️ Our Gallery
    </a>
  </li>

  <li>
    <a
      href="#certificates"
      onClick={(e) => {
        e.preventDefault();
        scrollToSection("certificates");
      }}
      className="hover:text-blue-400"
    >
      🎖️ Certificates
    </a>
  </li>

  <li>
    <a
      href="#contact"
      onClick={(e) => {
        e.preventDefault();
        scrollToSection("contact");
      }}
      className="hover:text-blue-400"
    >
      📩 Contact
    </a>
  </li>

  <li>
    <button
      onClick={() => setQuoteOpen(true)}
      className="hover:text-blue-400"
    >
      💬 Get a Quote
    </button>
  </li>
  
</ul>
            </div>



            {/* Contact */}
            <div className="footer-contact">
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-400 flex items-center gap-2">
                <i className="ri-mail-line"></i> vedaglobalexports@gmail.com
              </p>
              <p className="text-gray-400 flex items-center gap-2">
                <i className="ri-phone-line"></i> +918010679660
              </p>
              <p className="text-gray-400 flex items-center gap-2">
                <i className="ri-map-pin-line"></i> ‘Sumit’, First Floor, Laxmi Karanja,
                Ahmednagar ­ 414001 (Maharashtra), India
              </p>

              {/* Social Icons */}
              <div className="flex gap-4 mt-4 text-2xl social-icons">
  <a href="https://www.facebook.com/profile.php/?id=61565832308295" className="hover:text-blue-400">
    <i className="ri-facebook-fill"></i>
  </a>
  <a href="https://www.instagram.com/vedaglobal1" className="hover:text-pink-400">
    <i className="ri-instagram-line"></i>
  </a>
  <a href="https://in.linkedin.com/company/veda-global" className="hover:text-blue-600">
    <i className="ri-linkedin-box-fill"></i>
  </a>
  <a href="https://x.com/vedaglobalexp" className="hover:text-sky-400">
    <i className="ri-twitter-x-line"></i>
  </a>
  {/* WhatsApp */}
  <a
    href="https://wa.me/919876543210" // Replace with your WhatsApp number (use country code, no + or spaces)
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-green-500"
  >
    <i className="ri-whatsapp-line"></i>
  </a>
</div>

            </div>
          </div>

          {/* Bottom */}
          <div className="footer-bottom mt-10 border-t border-gray-700 pt-6 text-center">
            <p className="text-gray-400">© 2025 Veda Global. All Rights Reserved.</p>
          </div>
        </footer>

      </div>

      {/* Quote Modal */}
      {quoteOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-4xl shadow-lg w-full max-w-lg p-8 relative">
            <button
              onClick={() => setQuoteOpen(false)}
              className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-center mb-2">
              🚢 Get Your Free Quote!
            </h2>
            <p className="text-center text-gray-600 mb-6">
              Fill in your details and our team will reach out soon.
            </p>
            <form onSubmit={handleQuoteSubmit} className="space-y-4">
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={quoteForm.name}
                  onChange={handleQuoteChange}
                  className="w-1/2 border rounded-lg px-3 py-2"
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={quoteForm.email}
                  onChange={handleQuoteChange}
                  className="w-1/2 border rounded-lg px-3 py-2"
                />
              </div>
              <div className="flex gap-3">
                <input
                  type="number"
                  placeholder="Phone"
                  name="phone"
                  value={quoteForm.phone}
                  onChange={handleQuoteChange}
                  className="w-1/2 border rounded-lg px-3 py-2"
                />
                <select
                  name="country"
                  value={quoteForm.country}
                  onChange={handleQuoteChange}
                  className="w-1/2 border rounded-lg px-3 py-2">
                  <option>Country</option>
                  <option>India</option>
                  <option>USA</option>
                  <option>UK</option>
                </select>
              </div>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Company"
                  name="company"
                  value={quoteForm.company}
                  onChange={handleQuoteChange}
                  className="w-1/2 border rounded-lg px-3 py-2"
                />
                <input
                  type="text"
                  placeholder="Quantity"
                  name="quantity"
                  value={quoteForm.quantity}
                  onChange={handleQuoteChange}
                  className="w-1/2 border rounded-lg px-3 py-2"
                />
              </div>
              <textarea
                placeholder="Message"
                rows="3"
                name="message"
                value={quoteForm.message}
                onChange={handleQuoteChange}
                className="w-full border rounded-lg px-3 py-2"
              ></textarea>
              <button type="submit" className="w-full bg-blue-400 hover:bg-blue-500 text-black font-bold py-2 rounded-lg">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-lg p-8 relative w-80">
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-gray-800"
            >
              &times;
            </button>
            <ul className="space-y-4 text-lg font-medium">
  
  <li>
    <a
      href="#home"
      onClick={(e) => {
        e.preventDefault();
        scrollToSection("smooth-wrapper");
      }}
      className="hover:text-blue-400"
    >
      🏠 Home
    </a>
  </li>

  <li>
    <a
      href="#products"
      onClick={(e) => {
        e.preventDefault();
        scrollToSection("products");
      }}
      className="hover:text-blue-400"
    >
      🛍 Products
    </a>
  </li>

  <li>
    <a
      href="#blogs"
      onClick={(e) => {
        e.preventDefault();
        scrollToSection("blogs");
      }}
      className="hover:text-blue-400"
    >
      📰 Blogs
    </a>
  </li>

  <li>
    <a
      href="#our-team"
      onClick={(e) => {
        e.preventDefault();
        scrollToSection("our-team");
      }}
      className="hover:text-blue-400"
    >
      🧑‍🤝‍🧑 Our Team
    </a>
  </li>

  <li>
    <a
      href="#gallery"
      onClick={(e) => {
        e.preventDefault();
        scrollToSection("gallery");
      }}
      className="hover:text-blue-400"
    >
      🖼️ Our Gallery
    </a>
  </li>

  <li>
    <a
      href="#certificates"
      onClick={(e) => {
        e.preventDefault();
        scrollToSection("certificates");
      }}
      className="hover:text-blue-400"
    >
      🎖️ Certificates
    </a>
  </li>

  <li>
    <a
      href="#contact"
      onClick={(e) => {
        e.preventDefault();
        scrollToSection("contact");
      }}
      className="hover:text-blue-400"
    >
      📩 Contact
    </a>
  </li>

  <li>
    <button
      onClick={() => setQuoteOpen(true)}
      className="hover:text-blue-400"
    >
      💬 Get a Quote
    </button>
  </li>

</ul>

          </div>
        </div>
      )}
      <SocialFloat />
    </div>
  );
};

export default VedaGlobal;
