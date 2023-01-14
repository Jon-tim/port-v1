import React from "react";
import Navbar from "../component/Navbar";
function Works() {
  return (
    <section className="h-screen w-screen">
      <section className="h-full w-1/3 bg-gray-100 p-8 relative">
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
    </section>
  );
}

export default Works;
