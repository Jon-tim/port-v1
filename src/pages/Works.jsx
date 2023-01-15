import { motion } from "framer-motion";
import React from "react";
import Navbar from "../component/Navbar";
import SingleWork from "../component/SingleWork";

function Works() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section className="h-screen w-screen flex items-center">
      <section className="h-full w-1/3 bg-gray-100 p-8 relative flex flex-col gap-4 items-center justify-center">
        <h1 className="text-center text-5xl font-bold  uppercase">Works</h1>
        <p className="w-[350px] mx-auto text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam minima
          maxime quod ea praesentium hic aliquam earum eveniet nobis. Voluptas
          ratione quidem necessitatibus harum fugit provident omnis nisi saepe
          voluptates rem adipisci maxime perspiciatis porro nam, repellat
          laudantium temporibus rerum!
        </p>
        <Navbar />
      </section>
      <section className="w-2/3 h-screen bg-white p-10 grid grid-cols-4 place-items-center">
        {arr.map((single) => (
          <SingleWork figure={single} key={single} />
        ))}
      </section>
    </section>
  );
}

export default Works;
