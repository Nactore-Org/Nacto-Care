import React from 'react'
import { useState } from 'react'
import SingleBlog from '../components/SingleBlog';

const BlogPage = () => {
  const [activeTab, setActiveTab] = useState("latest")
  const [blogs, setblogs] = useState([
    {
      id: 1,
      title: "Lorem Ipsum Blog latest-blog",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "John Doe",
      publication_date: "2024-05-03",
      tag:"latest"
    },
    {
      id: 2,
      title: "Lorem Ipsum Blog latest blog",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "John Doe",
      publication_date: "2024-05-03",
      tag:"latest"
    },
    {
      id: 3,
      title: "Lorem Ipsum Blog latest blog",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "John Doe",
      publication_date: "2024-05-03",
      tag:"latest"
    },
    {
      id: 4,
      title: "Lorem Ipsum Blog latest blog",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "John Doe",
      publication_date: "2024-05-03",
      tag:"latest"
    },
    {
      id: 5,
      title: "Lorem Ipsum Blog trending blog",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "John Doe",
      publication_date: "2024-05-03",
      tag:"trending"
    },
    {
      id: 6,
      title: "Lorem Ipsum Blog trending blog",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "John Doe",
      publication_date: "2024-05-03",
      tag:"trending"
    },
    {
      id: 7,
      title: "Lorem Ipsum Blog trending blog",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "John Doe",
      publication_date: "2024-05-03",
      tag:"trending"
    },
    {
      id: 8,
      title: "Lorem Ipsum Blog top blog",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "John Doe",
      publication_date: "2024-05-03",
      tag:"top"
    },
    {
      id: 9,
      title: "Lorem Ipsum Blog top blog",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "John Doe",
      publication_date: "2024-05-03",
      tag:"top"
    },
    {
      id: 10,
      title: "Lorem Ipsum Blog top blog",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "John Doe",
      publication_date: "2024-05-03",
      tag:"top"
    },
    // Add more blog objects as needed
  ]);

  /* Grouping blogs by tags and handling tab clicks. */
    const blogsGroupedByTags = Object.groupBy(blogs, ({tag})=> tag)
    const handleTabClick = (e)=>{
        const previousActiveButton= document.querySelector(`#${activeTab + "Tab"}`)
        const previousActiveContainer = document.querySelector(`#${activeTab + "TabContainer"}`)
        const activeContainer = document.querySelector(`#${e.target.id + "Container"}`)

        const buttonValue = e.target.textContent.toLowerCase();
        if(activeTab!==buttonValue){
            previousActiveButton.classList.add("text-gray-600")
            previousActiveContainer.classList.remove("border-black")

            activeContainer.classList.add("border-black")
            e.target.classList.remove("text-gray-600")
            setActiveTab(buttonValue) 
        }

    }
    return (
        <>
        {/* Tabs Container */}
          <div className="grid grid-cols-3 lg:w-1/2 xl:w-1/4 md:w-2/3  w-5/6 mx-auto align-items-center  justify-items-center">
            {/* Top blgs tab */}
            <div id="topTabContainer" className="border-b-2 w-full text-center transition-border duration-300">
                <button id="topTab" className="relative p-0 m-0 border-0 bg-transparent w-full h-full text-gray-600" onClick={(e)=>handleTabClick(e)}>
                  <h1 className="sticky top-0 left-0 z-[-1] text-2xl font-bold mb-4 mt-10 text-center transition-color duration-300">Top</h1>
                </button>
            </div>
            {/* Trending blogs tab */}
            <div id="trendingTabContainer" className="border-b-2 w-full text-center transition-border duration-300">
                <button id="trendingTab" className="relative p-0 m-0 border-0 bg-transparent w-full h-full relative z-1 text-gray-600" onClick={(e)=>handleTabClick(e)}>
                  <h1 className="sticky top-0 left-0 z-[-1] text-2xl font-bold mb-4 mt-10 text-center transition-color duration-300">Trending</h1>
                </button>
            </div>
            {/* Latest blogs tab */}
            <div id="latestTabContainer" className="border-b-2 w-full border-black text-center transition-border duration-300">
                <button id="latestTab" className="relative p-0 m-0 border-0 bg-transparent w-full h-full" onClick={(e)=>handleTabClick(e)}>
                  <h1 className="sticky top-0 left-0 w-full z-[-1] text-2xl font-bold mb-4 mt-10 text-center transition-color duration-300">Latest</h1>
                </button>
            </div>
          </div> 
          <div class="container mx-auto px-4 py-8 w-full">
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-[80%] mx-auto">
                  {blogsGroupedByTags[activeTab].map((blog)=> <SingleBlog blog={blog}/>)}
              </div>
          </div>
        </>
    )
}

export default BlogPage
