import React from "react";

const Skills = () => {
  return (
    <div name="skills" className=" w-full bg-black text-gray-400  md:pb-20">
      {/* Container  */}
      <div className=" max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className=" mt-16">
          <p className=" text-4xl font-bold inline border-b-4 border-pink-600">
            SKILLS
          </p>
          <p className=" py-4"> This are the technologies i have work with</p>
        </div>
      </div>
      <div className=" w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8 md:px-48">
        <div className=" hover:scale-110 duration-300">
          <img className=" w-20 mx-auto" src="images/react.png" alt="" />
          <p className=" my-4">REACT</p>
        </div>
        <div className=" hover:scale-110 duration-300">
          <img className=" w-20 mx-auto" src="images/javascript.png" alt="" />
          <p className=" my-4">JAVASCRIPT</p>
        </div>
        <div className=" hover:scale-110 duration-300">
          <img className=" w-20 mx-auto" src="images/redux.png" alt="" />
          <p className=" my-4">REDUX</p>
        </div>
        <div className=" hover:scale-110 duration-300">
          <img className=" w-20 mx-auto" src="images/tailwind.png" alt="" />
          <p className=" my-4">TAILWIND</p>
        </div>
        <div className=" hover:scale-110 duration-300 mt-4">
          <img className=" w-20 mx-auto" src="images/bootstrap.png" alt="" />
          <p className=" my-4">BOOTSTRAP</p>
        </div>

        <div className=" hover:scale-110 duration-300">
          <img className=" w-20 mx-auto" src="images/firebase.png" alt="" />
          <p className=" my-4">FIREBASE</p>
        </div>
        <div className=" hover:scale-110 duration-300">
          <img className=" w-20 mx-auto" src="images/github.png" alt="" />
          <p className=" my-4">GITHUB</p>
        </div>
        <div className=" hover:scale-110 duration-300">
          <img className=" w-20 mx-auto" src="images/git.png" alt="" />
          <p className=" my-4">GIT</p>
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
