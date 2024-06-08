import React from 'react'
import { useState } from 'react'
import SingleBlog from '../components/SingleBlog';
import BackBtn from "../components/BackBtn/BackBtn";


const BlogPage = () => {
  const [activeTab, setActiveTab] = useState("latest")
  const [blogs, setblogs] = useState([
    {
      id: 1,
      title: "Empowering Nurses: Unlocking Opportunities",
      content: "We offer growth opportunities, training programs,to help nurses reach their full potential.",
      author: "Nacto Care Team",
      publication_date: "2024-06-10",
      tag:"latest"
    },
    {
      id:2,
      title: " Home Nursing Services",
      content: "Personalized Care at Your Doorsstep Elderly AssistanceCompassionate care for seniors, ensuring their well-being and dignity.",
      author: "Nacto Care Team",
      publication_date: "2024-06-10",
      tag:"latest"
    },

    {
      id:3,
      title: "Inspiring Future Nurses",
      content: "A Rewarding Career Choice Let’s make nursing a sought-after profession, one that brings fulfillment and purpose.",
      author: "Nacto Care Team",
      publication_date: "2024-05-03",
      tag:"latest"
    },
    {
      id: 4,
      title: " Patient-Centric Approach",
      content:"Trusting Nacto Care to provide personalized care plans and flexible scheduling options for patients.Timely care when you need it",
      author: "Nacto Care Team",
      publication_date: "2024-05-03",
      tag:"latest"
    },
    {
      id: 5,
      title: " Home Nursing Services",
      content: "Personalized Care at Your Doorstep.Recover comfortably at home with our skilled nurses by your side.",
      author: "Nacto Care Team",
      publication_date: "2024-05-03",
      tag:"trending"
    },
    {
      id: 6,
      title: " Inspiring Future Nurses",
      content: "Outreach Programs: We visit schools and colleges to share the rewards of a nursing career.",
      author: "Nacto Care Team",
      publication_date: "2024-05-03",
      tag:"trending"
    },
    {
      id: 7,
      title: " Patient-Centric Approach",
      content: "Immediate Access: Timely care when you need it, right in the comfort of your home.",
      author: "Nacto Care Team",
      publication_date: "2024-05-03",
      tag:"trending"
    },
    {
      id: 8,
      title: "The Role of Telehealth in Modern Nursing",
      content: "Virtual Consultations: How nurses provide remote care and support through telehealth platforms.Maintaining a personal connection in a digital world.",
      author: "Nacto Care Team",
      publication_date: "2024-05-03",
      tag:"top"
    },
    {
      id: 9,
      title: " Mental Health Support for Nurses",
      content: "Burnout Prevention: Strategies for managing stress and preventing burnout.Building a strong support system within the nursing community.",
      author: "Nacto Care Team",
      publication_date: "2024-05-03",
      tag:"top"
    },
    {
      id:10,
      title: " The Impact of Cultural Competence in Nursing",
      content: "Respecting Traditions: Honoring cultural practices while providing evidence-based care.",
      author: "Nacto Care Team",
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
           <div className="py-2 mb-1 flex w-[50vw] justify-start ml-auto mr-auto mt-5">
              <div>
                  <BackBtn Page={"Blogs"} />
              </div>
           </div>
        {/* Tabs Container */}
          <div className="grid grid-cols-3 lg:w-1/2 xl:w-1/4 md:w-2/3 text-base sm:text-xl lg:text-2xl w-5/6 mx-auto align-items-center  justify-items-center">
            {/* Top blgs tab */}
            <div id="topTabContainer" className="border-b-2 w-full text-center transition-border duration-300">
                <button id="topTab" className="relative p-0 m-0 border-0 bg-transparent w-full h-full text-gray-600" onClick={(e)=>handleTabClick(e)}>
                  <h1 className="sticky top-0 left-0 z-[-1]  font-bold mb-4 mt-10 text-center transition-color duration-300">Top</h1>
                </button>
            </div>
            {/* Trending blogs tab */}
            <div id="trendingTabContainer" className="border-b-2 w-full text-center transition-border duration-300">
                <button id="trendingTab" className="relative p-0 m-0 border-0 bg-transparent w-full h-full relative z-1 text-gray-600" onClick={(e)=>handleTabClick(e)}>
                  <h1 className="sticky top-0 left-0 z-[-1]  font-bold mb-4 mt-10 text-center transition-color duration-300">Trending</h1>
                </button>
            </div>
            {/* Latest blogs tab */}
            <div id="latestTabContainer" className="border-b-2 w-full border-black text-center transition-border duration-300">
                <button id="latestTab" className="relative p-0 m-0 border-0 bg-transparent w-full h-full" onClick={(e)=>handleTabClick(e)}>
                  <h1 className="sticky top-0 left-0 w-full z-[-1]  font-bold mb-4 mt-10 text-center transition-color duration-300">Latest</h1>
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
