import React from "react";

export default function FlexTextImage() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden">
        
        {/* Left Side - Text Content */}
        <div className="w-full md:w-1/2 p-8 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Innovative Design Solutions
          </h2>
          <p className="text-gray-600 text-lg mb-4">
            We create visually stunning and interactive designs with modern web technologies.
            Transform your ideas into digital reality with ease.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>

        {/* Right Side - Image with Details */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-[300px] h-[300px]">
            {/* Main Image */}
            <img
              src="https://via.placeholder.com/300"
              alt="Hexagon Grid"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white p-3 rounded-md text-sm">
              <p>Project: Hexagonal Grid</p>
              <p>Category: UI/UX Design</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
