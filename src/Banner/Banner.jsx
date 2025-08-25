import React from 'react';
import Typewriter from 'typewriter-effect';
import peopleImage from '../assets/walking man.png';
import womanImage from '../assets/walking female.png';
import bgImage from '../assets/mybannerimage.jpg'; // ✅ Make sure this matches your image file

const Banner = () => {
  return (
    <div
      className="relative w-full bg-cover bg-center py-32 px-4 overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Light transparent overlay for modern glass look */}
      <div className="absolute inset-0 bg-white bg-opacity-60 backdrop-blur-sm z-0"></div>

      {/* Main content area */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Heading with typewriter animation */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 75,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(`Find Your <span class='text-blue-600'>Dream Job</span>`)
                .pauseFor(2000)
                .deleteAll()
                .start();
            }}
          />
        </h1>

        {/* Subtitle */}
        <p className="text-gray-700 mb-10 text-lg">
          Search from thousands of job listings and land your next opportunity
        </p>

        {/* Search bar section */}
        <div className="max-w-4xl mx-auto bg-white bg-opacity-80 p-4 rounded-lg shadow-md flex flex-col md:flex-row gap-4 items-center backdrop-blur">
          <input
            type="text"
            placeholder="Job title or keyword"
            className="w-full md:w-[60%] border border-gray-300 px-3 py-2 rounded-md focus:outline-blue-500"
          />
          <input
            type="text"
            placeholder="Location"
            className="w-full md:w-[30%] border border-gray-300 px-5 py-2 rounded-md focus:outline-blue-500"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
            Search
          </button>
        </div>
      </div>

      {/* Decorative walking images */}
      <div className="hidden md:block absolute bottom-0 right-0 -mr-10 z-10">
        <img
          src={peopleImage}
          alt="Person walking"
          className="w-[250px] md:w-[400px] object-contain"
        />
      </div>

      <div className="hidden md:block absolute bottom-0 left-0 -ml-10 z-10">
        <img
          src={womanImage}
          alt="Woman walking"
          className="w-[250px] md:w-[400px] object-contain"
        />
      </div>
    </div>
  );
};

export default Banner;
