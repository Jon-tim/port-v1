import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  BiChevronLeft,
  BiChevronRight,
  BiMenuAltRight,
  BiX,
} from "react-icons/bi";
import { BsArrow90DegUp } from "react-icons/bs";
import pix from "../assets/pexels.jpg";
import Contact from "../component/Contact";
function Home() {
  const [toggleNav, setToggle] = useState(false);
  const [seemore, setMore] = useState(false);
  return (
    <section className="w-screen h-full md:h-screen flex items-center flex-col lg:flex-row max-w-7xl mx-auto">
      <section className="w-full lg:w-1/2 h-screen lg:h-full flex flex-col p-5 lg:p-8 relative lg:overflow-hidden">
        <div className="flex items-center justify-between relative">
          <h1 className="text-4xl">Logo</h1>
          <div
            // className="border-4 border-black"
            onClick={() => setToggle((prev) => !prev)}
          >
            {!toggleNav ? (
              <BiMenuAltRight className="text-4xl cursor-pointer" />
            ) : (
              <BiX className="text-4xl cursor-pointer" />
            )}
          </div>
          <div
            className={`navbar absolute right-0 top-[100%] flex flex-col mt-2 bg-black transition-translate duration-500 ease-linear ${
              toggleNav ? "translate-x-0" : "translate-x-[200%]"
            }`}
          >
            <NavLink
              to="/works"
              className="text-gray-100 text-center uppercase border-b-2 p-3"
            >
              works
            </NavLink>
            <NavLink
              to="/blogs"
              className="text-gray-100 uppercase text-center  p-3"
            >
              blog
            </NavLink>
          </div>
        </div>
        <section>
          <h1 className="capitalize mt-24 text-3xl md:mt-24 md:text-6xl font-bold text-center text-gray-300">
            oluwatimilehin
          </h1>
          <h1 className="uppercase text-5xl md:text-8xl font-bold text-center text-gray-300">
            awoniyi
          </h1>
          <p className="text-justify max-w-[500px] lg:w-[500px] mt-10 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laborum
            assumenda magnam facere nemo esse eum, quas dolor consequuntur
            libero, ratione recusandae dicta possimus tempore delectus eos
            tempora dolores et quam sequi dignissimos ipsa. Aut veritatis animi
            possimus ducimus nesciunt quidem cupiditate illum atque? Qui maiores
            sequi voluptas doloribus consequuntur!
          </p>
          <div className="hidden lg:flex justify-center items-center gap-1 w-44 mx-auto mt-10">
            <span className="rounded-full border-4 border-gray-900 opacity-50 hover:opacity-100 mr-4">
              <BiChevronLeft className="cursor-pointer text-2xl text-gray-900" />
            </span>
            <p className="text-gray-600">01</p>
            <div className="h-[2px] w-[80px] bg-gray-400"></div>
            <p className="text-gray-600">02</p>
            <span className="rounded-full border-4 border-gray-900 hover:opacity-100 opacity-50 ml-4">
              <BiChevronRight className="cursor-pointer text-2xl text-gray-900" />
            </span>
          </div>
        </section>
        <div className="lg:hidden">
          <Contact />
        </div>
      </section>
      <section className="w-1/2 h-full hidden lg:flex flex-col relative">
        <div className="h-[75%]">
          <img src={pix} alt="nature" className="w-full h-full" />
        </div>
        <div className="bg-gray-200 w-full h-[25%] flex flex-col items-center pr-10">
          <Contact />
        </div>
        <div
          className={` bg-black absolute bottom-0 -left-8 z-50 w-[330px] transition-height duration-500 linear ${
            seemore ? "h-[550px]" : "h-[300px]"
          } p-4 `}
        >
          <div
            className="flex gap-2 absolute bottom-4 cursor-pointer"
            onClick={() => setMore((prev) => !prev)}
          >
            <BsArrow90DegUp
              className={`text-white text-xs transition-rotate duration-200 ${
                seemore ? "-rotate-180" : "rotate-0"
              } `}
            />
            <p className="text-white text-xs hover:underline">
              see {seemore ? "less" : "more"}
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Home;
