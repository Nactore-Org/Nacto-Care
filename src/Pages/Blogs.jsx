import React, { useEffect, useState } from "react";
import { useParams,useLocation } from "react-router-dom";

const Blogs = () => {
  const params = useParams();
  const { slug } = params;
  const location = useLocation();

  const [blog, setBlog] = useState(location.state.blogProp);

  const getAvatarLetter = (author) => {
    return author.charAt(0).toUpperCase();
  };

  return (
    <div className="flex w-full px-8 pt-10 pb-32 bg-white shadow-lg rounded-lg blog justify-evenly">
      <div className="hidden h-full w-1/3 md:flex px-4 justify-center md:py-32">
        <div className="flex">
          <div className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center text-xl">
            {getAvatarLetter(blog.author)}
          </div>
        </div>
        <div className="flex flex-col justify-center pl-4 text-base">
          <p className="flex">{blog.author}</p>
          <p className="flex text-left">Author</p>
        </div>
      </div>
      <div className="flex flex-col text-left w-2/3">
        <div className="mb-8 flex flex-col">
          <h1 className="text-4xl font-semibold mb-6">{blog.title}</h1>
          <p className="text-gray-600 border-l-2 border-l-black dark:border-l-white pl-4 text-sm">{`${blog.publication_date}`}</p>
          <div className="flex h-full md:hidden mt-6">
            <div className="w-10 h-10 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center text-xl">
              {getAvatarLetter(blog.author)}
            </div>
            <div className="flex flex-col justify-center pl-2 text-sm">
              <p className="flex">{blog.author}</p>
              <p className="flex text-left">Author</p>
            </div>
          </div>
        </div>
        <div
          className="prose max-w-none pr-8 text-lg"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </div>
  );
};

export default Blogs;
