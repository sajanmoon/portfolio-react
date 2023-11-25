import React from "react";

const About = () => {
  return (
    <div name="about" className=" w-full bg-black text-gray-400">
      <div className=" flex flex-col justify-center items-center w-full h-full">
        <div className=" max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className=" sm:text-right pb-8 pl-4 mt-8">
            <p className=" text-4xl font-bold inline border-b-4 border-pink-600">
              ABOUT
            </p>
          </div>
        </div>
        <div className=" max-w-[1000px] w-full grid sm:grid-cols-2 px-4">
          <div className=" sm:text-right text-4xl font-bold">
            {/* <p>Hi,I am Sajan, nice to meet you. Please take a look around</p> */}
            <img
              className="rounded-[10%] h-[65vh] w-[400px] border-4 border-gray-300"
              src="https://portfoliosajanmoon.netlify.app/images/user.JPG"
              alt=""
            />
          </div>
          <div className=" pt-9 font-Playpen text-lg">
            <p>
              I am a skilled web designer with 6 months of experience. My
              passion lies in creating captivating website designs and
              implementing them through frontend development. I take pride in
              staying up-to-date with current design trends and leveraging my
              creativity to produce visually appealing and user-friendly
              websites. Throughout my career, I have developed a deep
              understanding of user experience (UX) and user interface (UI)
              principles. By putting myself in the shoes of the end-users, I
              strive to create intuitive and seamless browsing experiences. I
              believe that a well-designed website should not only look visually
              appealing but also provide a smooth and enjoyable interaction for
              visitors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
