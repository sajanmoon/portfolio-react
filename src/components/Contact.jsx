import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full text-gray-400 bg-black">
      <form
        action=""
        className=" max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full"
      >
        <div className=" pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-pink-600 text-gray-400">
            Contact
          </p>
        </div>
        <input
          className=" bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className=" my-4  bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Email"
          name="email"
        />
        <textarea
          className=" bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Message"
          name="message"
          row="10"
        ></textarea>
        <button className=" text-white border-2 hover:bg-pink-600 px-4 py-3 my-8 mx-auto flex items-center">Let's Connect</button>
      </form>
    </div>
  );
};

export default Contact;
