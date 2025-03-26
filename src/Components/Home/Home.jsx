import React from 'react'
import img1 from './Images/BALL VALVESEATBACKSIDE.jpeg'
import ImageSlideshow from './ImageSlideshow/ImageSlideshow';
export const Home = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={img1}
            alt="Placeholder"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Fluorothermech Polymer
          </h2>
          <p className="text-gray-600  mb-4 font-[20px]">
            Fluorothermech Polymer is a leading manufacturer of high-performance plastic and composite polymer components, specializing in PTFE, melt-processible fluoropolymers, and other engineered plastics. With over five years of expertise in polymer product development, we leverage advanced compression moulding technology to create rods, tubes, sheets, plates, near-net shapes, and complex finished parts that meet the highest industry standards.
            Based in Pune, India, our state-of-the-art manufacturing facility is equipped with all the necessary resources to deliver superior quality products to a wide range of industries, including Aerospace & Defence, Chemical Processing, Electronics, Medical, Oil & Gas, and Water Treatment. As an ISO 9001:2015 certified company, we are committed to precision, innovation, and customer satisfaction through timely delivery, competitive pricing, and premium-quality products.
            At Fluorothermech Polymer, our young and dynamic team of experts continuously pushes the boundaries of polymer engineering to develop customized solutions tailored to our clients' needs. Whether it’s high-performance plastic materials or specialized machined components, we ensure our products consistently meet or exceed industry specification
          </p>
        </div>
      </div>
      <>
    <ImageSlideshow/>
      </>
    </>
  );
}
