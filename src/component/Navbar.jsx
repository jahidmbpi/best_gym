import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-6xl flex items-center justify-between h-[100px] p-4">
        {/* Left - Logo */}
        <div>
          <img
            className="w-[80px] h-[95px] bg-black"
            src="/bannerlogo.png"
            alt="logo"
          />
        </div>

        {/* Right - Navigation Links */}
        <div className="flex items-center justify-evenly rounded-lg bg-[rgb(13,13,13)] w-[613px] p-3 h-[60px]">
          <Link
            href="/"
            className="text-[rgb(164,163,163)] font-bold text-[20px]"
          >
            Home
          </Link>
          <Link
            href="/Trainers"
            className="text-[rgb(164,163,163)] font-bold text-[20px]"
          >
            Trainers
          </Link>
          <Link
            href="/About"
            className="text-[rgb(164,163,163)] font-bold text-[20px]"
          >
            About
          </Link>
          <Link
            href="/Blogs"
            className="text-[rgb(164,163,163)] font-bold text-[20px]"
          >
            Blogs
          </Link>
          <Link
            href="/"
            className="text-[rgb(164,163,163)] font-bold text-[20px]"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
