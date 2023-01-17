import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
function Blog({ linkto, imgSrc, imgAlt, title }) {
  return (
    <motion.article
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="w-44  h-44 rounded-lg overflow-hidden"
    >
      <Link to={"/blogs/" + linkto}>
        <span className="block h-full relative shadow leading-snug bg-white border-t-4 border-green-400">
          <img
            src={imgSrc}
            alt={imgAlt}
            className="w-full h-full  object-cover absolute"
          />
          <span className="absolute bottom-0 w-full flex items-center justify-center pr-4 bg-red-700 bg-opacity-75">
            <h3 className="text-gray-800 placeholder-opacity-40 ">{title}</h3>
          </span>
        </span>
      </Link>
    </motion.article>
  );
}

export default Blog;
