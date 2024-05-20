import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "40 Years Of Healthcare",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.UrckvZOQcJtCZHEEyozg3wHaE7%26pid%3DApi&f=1&ipt=d8c924c1bbc77e155608835b48ccf6434560f1d4ea7247fa657513ac53ee197c&ipo=images",
      content:
        "Hospitals have experienced significant changes over the past few decades, with a notable trend towards shorter hospital stays for various procedures",
      author: "Joseph Bednar",
      publication_date: "2024-05-09",
    },

    // Add more blog objects as needed
  ]);

  return (
    <>
      <h1 class="text-3xl font-bold mb-4 mt-10 text-center">Latest Blogs</h1>
      <div class="container mx-auto px-4 py-8 w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-[80%] mx-auto">
          {blogs.map((blog) => {
            return (
              <Link to={`/blog/${blog.id}/`}>
                <div class="bg-white shadow-md rounded-lg overflow-hidden">
                  <img
                    className="w-full h-52 object-cover"
                    src={blog.image}
                    alt="Blog Image"
                  />
                  <div class="p-4 flex flex-col gap-1">
                    <h2 class="font-bold text-xl mb-2">{blog.title}</h2>
                    <p class="text-gray-700">{blog.content}</p>
                    <div class="mt-4 flex items-center">
                      <img
                        className="w-10 h-10 rounded-full mr-4"
                        src="https://imgs.search.brave.com/g2CJldyVpLs0sy-8TKaPqzJiC1DwIWh0fglnNnFqmSA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2NlL2Y4/L2I1L2NlZjhiNWNl/ZDAwMjM0MzE3MmZk/MDRkNTljYjJlMTcy/LmpwZw"
                        alt="Author Image"
                      />
                      <div>
                        <p class="text-gray-900 font-semibold">{blog.author}</p>
                        <p class="text-gray-600">{blog.publication_date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BlogPage;
