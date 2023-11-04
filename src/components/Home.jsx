import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div className=" bg-black text-white w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className=" text-pink-500">Hi,my name is</p>
        <h1 className=" text-4xl sm:text-7xl font-bold ">Sajan Moon</h1>
        <h2 className=" text-4xl sm:text-7xl font-bold text-gray-400">
          I'm a frontend developer
        </h2>
        <p className="text-gray-500 py-5 max-w-[700px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          quam laudantium eligendi sint? Fuga dolorem obcaecati nostrum eaque
          quam, nulla pariatur nihil maiores quas adipisci rem, ducimus
          excepturi quibusdam vel!
        </p>
        <div>
          <button className=" text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-400 hover:border-pink-400">
            View Work
            <span className=" group-hover:rotate-90 duration-200">
              <HiArrowNarrowRight className=" ml-2" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
