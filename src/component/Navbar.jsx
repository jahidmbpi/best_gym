"use client"; // যদি আপনি Next.js app router ব্যবহার করেন

import React, { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 ">
      <div className="mx-auto max-w-6xl flex items-center justify-between h-[100px] p-4">
        {/* Logo */}
        <div>
          <Link href="/">
            <img className="w-[80px]" src="/bannerlogo.png" alt="logo" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-evenly rounded-lg bg-[rgb(13,13,13)] w-[613px] p-3 h-[60px]">
          <NavLinks />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="text-white text-2xl"
            aria-label="Open menu"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Sidebar Drawer */}
      {isSidebarOpen && (
        <Sidebar closeSidebar={() => setIsSidebarOpen(false)} />
      )}
    </nav>
  );
}

function NavLinks() {
  return (
    <>
      <Link href="/" className="text-[rgb(164,163,163)] font-bold text-[20px]">
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
        href="/Contact"
        className="text-[rgb(164,163,163)] font-bold text-[20px]"
      >
        Contact
      </Link>
    </>
  );
}
