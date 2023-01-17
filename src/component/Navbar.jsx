import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { BiBriefcase, BiHome, BiNews } from "react-icons/bi";
import { motion } from "framer-motion";
function Navbar() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  return (
    <motion.section
      // drag="x"
      //   dragSnapToOrigin={true}
      dragConstraints={{ left: 0, right: 500 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
      // initial={y: 100}
      className="h-16 w-[320px] p-[5px] bg-gray-600/30 mx-auto rounded-2xl absolute right-0 left-0 bottom-8"
    >
      <div className="flex items-center bg-gray-900  w-full h-full rounded-xl justify-around">
        <NavLink
          to="/"
          className={`flex items-center gap-1 text-white/60 hover:text-white capitalize ${
            splitLocation[1] === "" ? "text-red-500" : ""
          }`}
        >
          <BiHome />
          home
        </NavLink>
        <NavLink
          to="/works"
          className={`flex items-center gap-1 text-white/60 hover:text-white capitalize ${
            splitLocation[1] === "works" ? "text-red-500" : ""
          }`}
        >
          <BiBriefcase />
          projects
        </NavLink>
        <NavLink
          to="/blogs"
          className={`flex items-center gap-1 text-white/60 hover:text-white capitalize ${
            splitLocation[1] === "blogs" ? "text-red-500" : ""
          }`}
        >
          <BiNews />
          blog
        </NavLink>
      </div>
    </motion.section>
  );
}

export default Navbar;
