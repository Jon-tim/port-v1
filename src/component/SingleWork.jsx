import React from "react";
import { motion, AnimatePresence } from "framer-motion";
function SingleWork({ title, desc, link }) {
  return (
    <motion.a
      target={"_blank"}
      href={link}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="flex flex-col items-center justify-center w-44  h-44 bg-slate-900 p-5 rounded-lg group relative overflow-hidden"
    >
      <h1 className="text-white">{title}</h1>
      <p className="text-white absolute bottom-0 translate-y-full group-hover:translate-y-0 group-hover:bottom-4 transition-all duration-500">{desc}</p>
    </motion.a>
  );
}

export default SingleWork;
