import React from "react";

const Skills = () => {
  return (
    <div name="skills" className=" w-full bg-[#0a192f] text-gray-400">
      {/* Container  */}
      <div className=" max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className=" text-4xl font-bold inline border-b-4 border-pink-600">
            SKILLS
          </p>
          <p className=" py-4"> Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className=" w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8 md:px-48">
        <div className=" hover:scale-110 duration-300">
          <img className=" w-20 mx-auto" src="images/react.png" alt="" />
          <p className=" my-4">REACT</p>
        </div>
        <div className=" hover:scale-110 duration-300">
          <img className=" w-20 mx-auto" src="images/javascript.png" alt="" />
          <p className=" my-4">JAVASCRIPT</p>
        </div>
        <div className=" hover:scale-110 duration-300">
          <img className=" w-20 mx-auto" src="images/tailwind.png" alt="" />
          <p className=" my-4">TAILWIND</p>
        </div>
        <div className=" hover:scale-110 duration-300">
          <img className=" w-20 mx-auto" src="images/github.png" alt="" />
          <p className=" my-4">GITHUB</p>
        </div>
        <div className=" hover:scale-110 duration-300">
          <img className=" w-20 mx-auto" src="images/html.png" alt="" />
          <p className=" my-4">HTML</p>
        </div>
        <div className=" hover:scale-110 duration-300">
          <img className=" w-20 mx-auto" src="images/css.png" alt="" />
          <p className=" my-4">CSS</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
