import React from "react";

const ProjectGrid = () => {
  return (
    <div name="projects" className="w-full text-gray-400 bg-black pb-72">
      <div className=" max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full pb-11">
        <div>
          <p className=" text-4xl font-bold inline border-b-4 border-pink-600">
            PROJECTS
          </p>
          <p className=" py-4">Checkout some of my work here</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6  md:mx-16">
        {/* Repeat this block for each project */}
        {/* *************************************************************************************** */}
        {/* PROJECT 1 */}
        <div className="bg-gray-300 p-2 rounded-md shadow-md ">
          <img
            src="images/project1.png"
            alt="Project Thumbnail"
            className="w-full h-48 object-cover mb-4 rounded-md"
          />
          <h3 className="text-black text-xl font-semibold mb-2">
            GADGETHUB E-COMMERCE PLATFORM
            <p className=" text-gray-500">REACT, TAILWIND</p>
          </h3>
          <p className="text-gray-600 mb-4">
            Gadgethub is an e-commerce platform designed specifically for gadget
            enthusiasts.
          </p>
          <div className="flex justify-between items-center">
            <a
              href="https://github.com/sajanmoon/ECommerce-WebApp"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              <button className=" border-4 px-6 py-3 my-2 hover:bg-white">
                GitHub
              </button>
            </a>
            <a
              href="https://ecommercewebappsm.netlify.app/"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              <button className=" border-4 px-6 py-3 my-2 hover:bg-white">
                Live
              </button>
            </a>
          </div>
        </div>
        {/* *************************************************************************************** */}
        {/* PROJECT 2 */}
        <div className="bg-gray-300 p-2 rounded-md shadow-md ">
          <img
            src="images/project4.png"
            alt="Project Thumbnail"
            className="w-full h-48 object-cover mb-4 rounded-md"
          />
          <h3 className="text-black text-xl font-semibold mb-2">
            JOBPORTAL JOB SEARCHING APP
            <p className=" text-gray-500">REACT, TAILWIND, FIREBASE</p>
          </h3>
          <p className="text-gray-600 mb-4">
            Job portal app, enabling usersto effortlessly search for employment
            opportunitiestailored to their preferences.
          </p>
          <div className="flex justify-between items-center">
            <a
              href="https://github.com/sajanmoon/JobPortal"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              <button className=" border-4 px-6 py-3 my-2 hover:bg-white">
                GitHub
              </button>
            </a>
            <a
              href="https://jobportalsm.netlify.app/"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              <button className=" border-4 px-6 py-3 my-2 hover:bg-white">
                Live
              </button>
            </a>
          </div>
        </div>
        {/* *************************************************************************************** */}
        {/* PROJECT 3 */}
        <div className="bg-gray-300 p-2 rounded-md shadow-md ">
          <img
            src="images/project2.png"
            alt="Project Thumbnail"
            className="w-full h-48 object-cover mb-4 rounded-md"
          />
          <h3 className=" text-black text-xl font-semibold mb-2">
            MOVIE SEARCHING APP
            <p className=" text-gray-500">REACT, TAILWIND, TMDB API</p>
          </h3>
          <p className="text-gray-600 mb-4">
            MoviePremi is a dynamic and user-friendly movie searching App.
          </p>
          <div className="flex justify-between items-center">
            <a
              href="https://github.com/sajanmoon/MovieSearchingApp"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              <button className=" border-4 px-6 py-3 my-2 hover:bg-white">
                GitHub
              </button>
            </a>
            <a
              href="https://moviepremi.netlify.app/"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              <button className=" border-4 px-6 py-3 my-2 hover:bg-white">
                Live
              </button>
            </a>
          </div>
        </div>
        {/* *************************************************************************************** */}
        {/* PROJECT 4 */}
        <div className="bg-gray-300 p-2 rounded-md shadow-md ">
          <img
            src="images/project3.png"
            alt="Project Thumbnail"
            className="w-full h-48 object-cover mb-4 rounded-md"
          />
          <h3 className="text-black text-xl font-semibold mb-2">
            WEATHER APP
            <p className=" text-gray-500">REACT, TAILWIND, OPEN WEATHER API</p>
          </h3>
          <p className="text-gray-600 mb-4">
            Weather app that allows usersto search for weather conditions
            worldwide.
          </p>
          <div className="flex justify-between items-center">
            <a
              href="https://github.com/sajanmoon/WeatherApp"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              <button className=" border-4 px-6 py-3 my-2 hover:bg-white">
                Github
              </button>
            </a>
            <a
              href="https://weatherappsajan.netlify.app/"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              <button className=" border-4 px-6 py-3 my-2 hover:bg-white">
                Live
              </button>
            </a>
          </div>
        </div>
        {/* *************************************************************************************** */}
      </div>
    </div>
  );
};

export default ProjectGrid;
