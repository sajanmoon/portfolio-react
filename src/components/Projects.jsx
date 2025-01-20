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
            src="images/project01.png"
            alt="Project Thumbnail"
            className="w-full h-48 object-cover mb-4 rounded-md"
          />
          <h3 className="text-black text-xl font-semibold mb-2">
            DEV SOCIAL
            <p className=" text-gray-500">REACT,EXPRESS,NODEJS,MONGODB,REDUX</p>
          </h3>
          <p className="text-gray-600 mb-4">
            Dev Social is a professional networking platform designed to connect
            developers within the tech community.
          </p>
          <div className="flex justify-between items-center">
            <a
              href="https://github.com/sajanmoon/DevSocial_MERN_Frontend"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              <button className=" border-4 font-bold px-6 py-3 my-2 hover:bg-white">
                GitHub
              </button>
            </a>
            <a
              href="https://devtinder-xi.vercel.app/"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              <button className=" border-4 font-bold px-6 py-3 my-2 hover:bg-white">
                Live
              </button>
            </a>
          </div>
        </div>
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
              href="https://github.com/sajanmoon/ECommWebApp"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              <button className=" border-4 font-bold px-6 py-3 my-2 hover:bg-white">
                GitHub
              </button>
            </a>
            <a
              href="https://gadgethubstore.netlify.app/"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              <button className=" border-4 font-bold px-6 py-3 my-2 hover:bg-white">
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
            FOOD EXPRESS - FOOD DELIVERY APP
            <p className=" text-gray-500">REACT, REDUX, TAILWIND</p>
          </h3>
          <p className="text-gray-600 mb-4">
            Food express app, allow usersto browse through various restuarant
            menu acrossthe city
          </p>
          <div className="flex justify-between items-center">
            <a
              href="https://github.com/sajanmoon/Episode-1---Inception"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              <button className=" border-4 font-bold px-6 py-3 my-2 hover:bg-white">
                GitHub
              </button>
            </a>
            <a
              href="https://foodexpresssm.netlify.app/"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              <button className=" border-4 font-bold px-6 py-3 my-2 hover:bg-white">
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
              <button className=" border-4 font-bold px-6 py-3 my-2 hover:bg-white">
                GitHub
              </button>
            </a>
            <a
              href="https://moviepremi.netlify.app/"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              <button className=" border-4 font-bold px-6 py-3 my-2 hover:bg-white">
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
