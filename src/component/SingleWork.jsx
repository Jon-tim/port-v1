import React from "react";
import { motion, AnimatePresence } from "framer-motion";
function SingleWork({ figure }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="flex items-center justify-center w-32  h-32 bg-slate-900 p-5 rounded-lg"
    >
      {<h1 className="text-white">{figure}</h1>}
    </motion.div>
  );
}

export default SingleWork;
