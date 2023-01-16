import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import SingleBlog from "../component/SingleBlog";
import SanityClient from "../client";
import { Link } from "react-router-dom";

function Blogs() {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    SanityClient.fetch(
      `*[-type == "post"]{
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
    <main className="bg-gray-600 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center">Blog Post Page</h1>
        <h2 className="text-xl mb-12 flex justify-center">
          Welcome to my page of blog posts
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postData &&
            postData.map((post) => (
              <article>
                <Link to={"/post/" + post.slu.current} key={post.slug.current}>
                  <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400">
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="w-full h-full rounded-r object-cover absolute"
                    />
                    <span className="relative h-full flex justify-end items-end pr-4">
                      <h3 className="text-gray-800 px-3 placeholder-opacity-40 bg-red-700 bg-opacity-75">
                        {post.title}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}

export default Blogs;
