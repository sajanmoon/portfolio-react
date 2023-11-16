import React from "react";

const ProjectGrid = () => {
  return (
    <div name="projects" className="w-full text-gray-400 bg-[#0a192f] pb-72">
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
        <div className="bg-gray-300 p-2 rounded-md shadow-md hover:bg-gray-200">
          <img
            src="work/workImg.jpeg"
            alt="Project Thumbnail"
            className="w-full h-48 object-cover mb-4 rounded-md"
          />
          <h3 className="text-xl font-semibold mb-2">Project Title</h3>
          <p className="text-gray-600 mb-4">Project description goes here...</p>
          <div className="flex justify-between items-center">
            <button>
              <a
                href="https://github.com/sajanmoon"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                View Details
              </a>
            </button>
            <button>
              <a
                href="https://github.com/sajanmoon"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                View Details
              </a>
            </button>
          </div>
        </div>
        <div className="bg-gray-300 p-2 rounded-md shadow-md">
          <img
            src="work/workImg.jpeg"
            alt="Project Thumbnail"
            className="w-full h-48 object-cover mb-4 rounded-md"
          />
          <h3 className="text-xl font-semibold mb-2">Project Title</h3>
          <p className="text-gray-600 mb-4">Project description goes here...</p>
          <div className="flex justify-between items-center">
            <button>
              <a
                href="https://github.com/sajanmoon"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                View Details
              </a>
            </button>
            <button>
              <a
                href="https://github.com/sajanmoon"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                View Details
              </a>
            </button>
          </div>
        </div>
        <div className="bg-gray-300 p-2 rounded-md shadow-md">
          <img
            src="work/workImg.jpeg"
            alt="Project Thumbnail"
            className="w-full h-48 object-cover mb-4 rounded-md"
          />
          <h3 className="text-xl font-semibold mb-2">Project Title</h3>
          <p className="text-gray-600 mb-4">Project description goes here...</p>
          <div className="flex justify-between items-center">
            <button>
              <a
                href="https://github.com/sajanmoon"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                View Details
              </a>
            </button>
            <button>
              <a
                href="https://github.com/sajanmoon"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                View Details
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectGrid;
