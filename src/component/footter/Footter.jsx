import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footter() {
  return (
    <div
      className="bg-cover bg-[center_top_33%] h-auto w-full relative "
      style={{
        backgroundImage: `url('/foter.jpg')`,
      }}
    >
      {/* Overlay */}
      <div className="bg-black/60 absolute inset-0 z-0"></div>

      {/* Footer Content */}
      <div className="relative z-10 px-2 sm:px-6 md:px-8 py-12 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 max-w-full min-w-0">
          {/* Company Info */}
          <div className="w-full max-w-full break-words">
            <h2 className="text-xl sm:text-2xl font-bold mb-3">Gymcoholic</h2>
            <p className="text-xs sm:text-sm leading-relaxed text-white/80">
              We offer comfortable spaces, cozy cafe, high <br />
              -speed internet, spacious parking area and many <br /> more for
              your best workspaces and meetings.
            </p>
          </div>

          {/* Links */}
          <div className="min-w-0">
            <h2 className="text-lg font-semibold text-white/60 mb-3">Links</h2>
            <ul className="space-y-1 text-sm text-white/80">
              <li>About Us</li>
              <li>Pricing</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="min-w-0">
            <h2 className="text-lg font-semibold text-white/60 mb-3">
              Contact Us
            </h2>
            <ul className="space-y-2 text-sm text-white/80">
              <li>E. Hello@frispes.com</li>
              <li>
                A. Jalan Jayakatwang <br /> No.301 Ngasem, Kediri
              </li>
              <li>P. (+62) 82334670000</li>
            </ul>
          </div>

          {/* Subscription */}
          {/* Subscription */}
          <div className="min-w-0">
            <h2 className="text-lg font-semibold mb-3">Subscribe</h2>
            <input
              className="w-[80%] md:max-w-full h-8 md:h-12 px-3 mb-3 bg-white/70 text-black rounded outline-none"
              type="text"
              placeholder="Enter your name"
            />
            <input
              className="w-[80%] md:max-w-full h-8 md:h-12 px-3 mb-3 bg-white/70 text-black rounded outline-none"
              type="email"
              placeholder="Enter your email"
            />
            <button className="bg-[#4F41B6] w-[80%] h-8 md:w-full md:h-12 rounded text-white hover:bg-[#3e32a0] transition">
              Send
            </button>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-white/30 pt-6 text-center text-sm text-white/60"></div>
        <div className="flex items-center justify-center space-x-4 mt-4">
          <FaFacebook className="text-3xl text-white hover:text-blue-500 transition" />
          <FaTwitter className="text-3xl text-white hover:text-blue-400 transition" />
          <FaInstagram className="text-3xl text-white hover:text-pink-500 transition" />
        </div>
      </div>
    </div>
  );
}
