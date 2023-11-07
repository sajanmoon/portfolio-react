import React, { useState } from "react";
import { FaBars, FaTimes, FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className=" fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-white">
      <div>
        <h1>SM</h1>
      </div>

      {/* MENU  */}
      <div>
        <ul className=" hidden md:flex">
          <li>Home</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contacts</li>
        </ul>
      </div>

      {/* HAMBURGER  */}
      <div onClick={handleClick} className=" md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* MOBILE MENU  */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-4 text-4xl">Home</li>
        <li className="py-4 text-4xl">Skills</li>
        <li className="py-4 text-4xl">Projects</li>
        <li className="py-4 text-4xl">Contacts</li>
      </ul>

      {/* SOCIAL ICON  */}
      <div className=" flex fixed flex-col top-[35%] left-0">
        <ul className="">
          <li className=" w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
            <a
              href="https://www.linkedin.com/in/sajan-moon/"
              target="_blank"
              className=" flex justify-between items-center w-full "
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className=" w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-400">
            <a
              href="mailto:sajanmoon5@gmail.com"
              className=" flex justify-between items-center w-full "
            >
              Mail <AiOutlineMail size={30} />
            </a>
          </li>

          <li className=" w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 text-black bg-white">
            <a
              href="https://github.com/sajanmoon"
              target="_blank"
              className=" flex justify-between items-center w-full "
            >
              Github <BsGithub size={30} />
            </a>
          </li>
          <li className=" w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500">
            <a
              href="https://twitter.com/SajanMoon2"
              target="_blank"
              className=" flex justify-between items-center w-full "
            >
              Twitter <RiTwitterXFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
