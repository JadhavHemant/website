import React from 'react'
import img1 from './Images/img1.jpg'
export const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
    <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl p-6 shadow-lg rounded-2xl">
      {/* Left Side Image */}
      <div className="group w-64 h-64">
        <img
          src={img1} // Replace with your image URL
          alt="Profile"
          className="w-full h-full object-cover rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110"
        />
        {/* <div className="absolute inset-[1000px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div> */}
      </div>

      {/* Right Side Content */}
      <div className="text-center md:text-left border-amber-950">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
        𝓱𝓮𝓶𝓪𝓷𝓽 𝓳𝓪𝓭𝓱𝓪𝓿
        </h1>
        <p className="text-lg text-gray-600 mb-4">
      I have expertise in various technologies. Currently, <br/>
      I am working at STW LLP, <br/>
      where I contribute to innovative solutions and enhance my skills.</p>
        </div>
    </div>
  </div>
);
}
