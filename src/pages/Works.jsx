import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import SingleWork from "../component/SingleWork";
import sanityClient from "../client";

function Works() {

  const [projectData, setProjectData] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'project']{
      title, description, link
    }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

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
        {projectData?.map((project) => (
          <SingleWork
            title={project?.title}
            desc={project?.description}
            link={project?.link}
            key={project?.title}
          />
        ))}
      </section>
    </section>
  );
}

export default Works;
