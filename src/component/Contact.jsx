import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { BiDownload } from "react-icons/bi";
function Contact() {
  return (
    <div className="self-end md:h-64 flex max-w-[500px] mx-auto justify-between md:justify-center items-center gap-8 py-4 md:my-0 absolute md:static bottom-0 left-5 right-5 ">
      <div className="flex items-center gap-5">
        <a href="https://github.com/Jon-tim" target={"_blank"}>
          <BsGithub className="cursor-pointer text-gray-900 opacity-50 hover:opacity-100 text-xl transition-opacity duration-300 ease-linear" />
        </a>
        <a href="https://twitter.com/Undefined_io" target={"_blank"}>
          <BsTwitter className="cursor-pointer text-gray-900 text-xl opacity-50 hover:opacity-100 transition-opacity duration-300 ease-linear" />
        </a>
        <a
          href="https://www.linkedin.com/in/oluwatimilehin-awoniyi/"
          target={"_blank"}
        >
          <BsLinkedin className="cursor-pointer text-gray-900 text-xl opacity-50 hover:opacity-100 transition-opacity duration-300 ease-linear" />
        </a>
      </div>
      <div className="p-2 rounded-lg flex items-center justify-center gap-3 transition-opacity duration-300 ease-linear cursor-pointer bg-gray-900  opacity-50 hover:opacity-100 active:opacity-100 text-white">
        <p>Download CV</p>
        <BiDownload className="text-xl" />
      </div>
    </div>
  );
}

export default Contact;
