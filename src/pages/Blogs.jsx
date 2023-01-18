import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import sanityClient from "../client.js";

import Blog from "../component/Blog";
function Blogs() {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
      title, slug, mainImage{
        asset->{
          _id, url
        },
        alt
      }
    }`
      )
      .then((data) => setPostData(data))
      .catch(console.error);
  }, []);
  return (
    <main className="relative">
      <section className="h-full w-1/3 bg-gray-100 p-8  flex flex-col gap-4 items-center justify-center fixed top-0 left-0">
        <h1 className="text-5xl flex justify-center">Blog Post Page</h1>
        <p className="w-[350px] mx-auto text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam minima
          maxime quod ea praesentium hic aliquam earum eveniet nobis. Voluptas
          ratione quidem necessitatibus harum fugit provident omnis nisi saepe
          voluptates rem adipisci maxime perspiciatis porro nam, repellat
          laudantium temporibus rerum!
        </p>
        <Navbar />
      </section>
      <section className="w-[calc(100%-33.333%)] absolute right-0 h-full bg-white">
        <section className="mx-auto py-10 w-full h-full max-w-[85%] grid grid-cols-blogGrid place-items-center gap-10">
          {postData === null ? (
            <div className="w-4/5 h-4/5 grid place-items-center">
              <p className="text-xl text-gray-900 text-center">
                Loading... If it lasts more than 3 seconds, kindly refresh!
              </p>
            </div>
          ) : (
            postData.map((post) => (
              <Blog
                key={post?.slug.current}
                linkto={post?.slug.current}
                imgSrc={post?.mainImage.asset.url}
                imgAlt={post?.mainImage.alt}
                title={post?.title}
              />
            ))
          )}
        </section>{" "}
      </section>
    </main>
  );
}

export default Blogs;
