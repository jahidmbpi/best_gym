import React from "react";

export default function BlogBanner() {
  return (
    <div
      className="bg-cover bg-[center_top_33%] h-[450px] w-[1380px]  relative "
      style={{
        backgroundImage: `url('/blogb.jpg')`,
      }}
    >
      <div className="bg-gradient-to-r from-black/80 to-transparent absolute inset-0"></div>
      <div className="absolute top-[60%] left-[120px]">
        <h2 className="text-5xl">Blogs</h2>
        <p className="text-xl">Home / Blogs</p>
      </div>
    </div>
  );
}
