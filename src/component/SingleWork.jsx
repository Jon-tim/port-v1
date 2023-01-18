import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiEye } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
function SingleWork({ title, desc, link, githublink }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="flex flex-col items-center justify-center w-full h-40 bg-slate-900 p-5 rounded-lg group relative overflow-hidden"
    >
      <h1 className="text-white">{title}</h1>

      <div className="absolute bottom-4 lg:bottom-0 lg:translate-y-full group-hover:translate-y-0 group-hover:bottom-4 transition-all duration-700 text-white flex items-center justify-between w-full px-4">
        <a
          href={githublink}
          target="_blank"
          className=" cursor-pointer flex items-center gap-1 opacity-50 
        bg-transparent p-2
        hover:opacity-100 hover:bg-slate-700 transition-bg duration-300 ease-linear rounded-md text-xs"
        >
          github <BsGithub />
        </a>
        <a
          href={link}
          target={"_blank"}
          className="text-xs p-2 bg-transparent flex items-center gap-1 transition-bg duration-300 ease-linear rounded-md opacity-50 hover:opacity-100 hover:bg-slate-700"
        >
          live
          <HiEye />
        </a>
      </div>
    </motion.div>
  );
}

export default SingleWork;
