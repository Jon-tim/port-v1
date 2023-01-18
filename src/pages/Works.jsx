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
      title, description, link, githublink
    }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <section className="relative h-screen lg:h-[unset]">
        <section className="hidden h-screen lg:w-1/3 bg-gray-200 p-8 lg:flex flex-col gap-4 items-center justify-center fixed top-0 left-0">
          <h1 className="text-center text-5xl font-bold  uppercase">Works</h1>
          <p className="w-[350px] mx-auto text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
            minima maxime quod ea praesentium hic aliquam earum eveniet nobis.
            Voluptas ratione quidem necessitatibus harum fugit provident omnis
            nisi saepe voluptates rem adipisci maxime perspiciatis porro nam,
            repellat laudantium temporibus rerum!
          </p>
          <Navbar />
        </section>
        <section className="bg-gray-200 p-6 text-gray-900">
          <h1 className="text-center text-3xl font-bold uppercase lg:hidden">
            works
          </h1>
        </section>
        <section className="mb-20 lg:mb-0 w-full lg:w-[calc(100%-33.333%)] absolute right-0 h-full bg-white">
          <div className="mx-auto w-full max-w-[95%] h-full p-5 grid grid-cols-workGrid place-items-center gap-8">
            {projectData?.map((project) => (
              <SingleWork
                title={project?.title}
                desc={project?.description}
                link={project?.link}
                key={project?.title}
                github={project?.githublink}
              />
            ))}
          </div>
        </section>
      </section>
      <Navbar />
    </>
  );
}

export default Works;
