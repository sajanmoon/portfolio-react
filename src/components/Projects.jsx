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
        <div className="bg-gray-300 p-2 rounded-md shadow-md ">
          <img
            src="images/project1.png"
            alt="Project Thumbnail"
            className="w-full h-48 object-cover mb-4 rounded-md"
          />
          <h3 className="text-black text-xl font-semibold mb-2">
            GADGETHUB - E-COMMERCE PLATFORM
          </h3>
          <p className="text-gray-600 mb-4">
            Gadgethub is an e-commerce platform designed specifically for gadget
            enthusiasts.
          </p>
          <div className="flex justify-between items-center">
            <button className=" border-4 px-6 py-3 my-2 hover:bg-white">
              <a
                href="https://github.com/sajanmoon/ECommerce-WebApp"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                GitHub
              </a>
            </button>
            <button className=" border-4 px-6 py-3 my-2 hover:bg-white">
              <a
                href="https://ecommercewebappsm.netlify.app/"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                Live
              </a>
            </button>
          </div>
        </div>
        <div className="bg-gray-300 p-2 rounded-md shadow-md ">
          <img
            src="images/project2.png"
            alt="Project Thumbnail"
            className="w-full h-48 object-cover mb-4 rounded-md"
          />
          <h3 className=" text-black text-xl font-semibold mb-2">
            MOVIE SEARCHING APP
          </h3>
          <p className="text-gray-600 mb-4">
            MoviePremi is a dynamic and user-friendly movie searching App.
          </p>
          <div className="flex justify-between items-center">
            <button className=" border-4 px-6 py-3 my-2 hover:bg-white">
              <a
                href="https://github.com/sajanmoon/MovieSearchingApp"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                GitHub
              </a>
            </button>
            <button className=" border-4 px-6 py-3 my-2 hover:bg-white">
              <a
                href="https://moviepremi.netlify.app/"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                Live
              </a>
            </button>
          </div>
        </div>
        <div className="bg-gray-300 p-2 rounded-md shadow-md ">
          <img
            src="images/project3.png"
            alt="Project Thumbnail"
            className="w-full h-48 object-cover mb-4 rounded-md"
          />
          <h3 className="text-black text-xl font-semibold mb-2">WEATHER APP</h3>
          <p className="text-gray-600 mb-4">
            Weather app that allows usersto search for weather conditions
            worldwide.
          </p>
          <div className="flex justify-between items-center">
            <button className=" border-4 px-6 py-3 my-2 hover:bg-white">
              <a
                href="https://github.com/sajanmoon/WeatherApp"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                Github
              </a>
            </button>
            <button className=" border-4 px-6 py-3 my-2 hover:bg-white">
              <a
                href="https://weatherappsajan.netlify.app/"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                Live
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectGrid;
