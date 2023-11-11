import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-400 bg-[#22344f]">
        <div className="container px-5 py-8 flex items-center justify-center text-center gap-3">
          <h1>@ 2023 SajanMoon</h1>
          {/* Social Icons  */}
          <div className=" flex items-center justify-center gap-2 text-3xl cursor-pointer md:hidden">
            <a href="https://github.com/sajanmoon" target="_blank">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/sajan-moon/" target="_blank">
              <AiFillLinkedin />
            </a>
            <a href="https://twitter.com/SajanMoon2" target="_blank">
              <FaSquareXTwitter />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
