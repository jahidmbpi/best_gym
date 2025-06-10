"use client";

import React from "react";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";

export default function Sidebar({ closeSidebar }) {
  return (
    <div className="fixed top-0 left-0 w-[250px] h-full bg-[rgb(20,20,20)] z-50 shadow-lg p-5 flex flex-col gap-5 animate-slideIn">
      {/* Close Button */}
      <button
        onClick={closeSidebar}
        className="text-white text-xl self-end"
        aria-label="Close menu"
      >
        <FaTimes />
      </button>

      {/* Sidebar Links */}
      <SidebarLink href="/" text="Home" closeSidebar={closeSidebar} />
      <SidebarLink
        href="/Trainers"
        text="Trainers"
        closeSidebar={closeSidebar}
      />
      <SidebarLink href="/About" text="About" closeSidebar={closeSidebar} />
      <SidebarLink href="/Blogs" text="Blogs" closeSidebar={closeSidebar} />
      <SidebarLink href="/Contact" text="Contact" closeSidebar={closeSidebar} />
    </div>
  );
}

function SidebarLink({ href, text, closeSidebar }) {
  return (
    <Link
      href={href}
      onClick={closeSidebar}
      className="text-gray-300 font-bold text-lg hover:text-white"
    >
      {text}
    </Link>
  );
}
