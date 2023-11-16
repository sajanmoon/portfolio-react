import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full text-black bg-black">
      <form
        action="https://formspree.io/f/xqkvoleo"
        method="POST"
        className=" max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full"
      >
        <div className=" pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-pink-600 text-gray-400">
            CONTACT
          </p>
        </div>
        <input
          className=" bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="username"
          required
          autoComplete="off"
        />
        <input
          className=" my-4  bg-[#ccd6f6] p-2"
          type="email"
          placeholder="Email"
          name="email"
          required
          autoComplete="off"
        />
        <textarea
          className=" bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Message"
          name="message"
          row="10"
          required
        ></textarea>
        <button className=" text-white border-2 hover:bg-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Connect
        </button>
      </form>
    </div>
  );
};

export default Contact;
