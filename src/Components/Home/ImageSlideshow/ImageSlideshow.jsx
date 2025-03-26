import React, { useState, useEffect } from "react";

export default function ImageSlideshow() {
  const slides = [
    {
      image: "https://plus.unsplash.com/premium_photo-1673306778968-5aab577a7365?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fHww",
      title: "Innovative Designs",
      description: "Create visually stunning and interactive designs with modern CSS and JavaScript frameworks."
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1673306773569-4d864b99c96c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wyfHx8ZW58MHx8fHx8",
      title: "Seamless User Experience",
      description: "Ensure a smooth and engaging experience with optimized UI/UX principles."
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1699283830211-0f59211a082c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
      title: "Scalable Solutions",
      description: "Develop applications that scale efficiently with high performance and flexibility."
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1674174348911-52f3c42c7c41?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
      title: "Future-Ready Technology",
      description: "Leverage cutting-edge technologies to build robust and future-proof applications."
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1700061889916-58814d96827c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
      title: "Efficient Development",
      description: "Boost productivity with streamlined development processes and automation tools."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2500); // Change slide every 2.5s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" p-2">
      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row items-center justify-center   duration-500">
        {/* Left Side - Dynamic Text */}
        <div className="w-full md:w-1/2 p-8 text-center md:text-left transition-opacity duration-500">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {slides[currentIndex].title}
          </h2>
          <p className="text-gray-600 text-lg mb-4">
            {slides[currentIndex].description}
          </p>
         
        </div>

        {/* Right Side - Dynamic Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className=" w-[600px] h-[400px]">
            <img
              src={slides[currentIndex].image}
              alt="Slideshow"
              className="w-full h-full object-cover rounded-lg shadow-lg transition-opacity duration-500"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
