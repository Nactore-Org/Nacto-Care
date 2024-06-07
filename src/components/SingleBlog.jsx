import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from "framer-motion";

const SingleBlog = ({blog}) => {

    return <Link  className='blog-card' to={`/blog/${blog.id}/`} state={{blogProp:blog}}>
        <motion.div   class="bg-white shadow-md rounded-lg overflow-hidden">
            <img className="w-full h-52 object-cover" src="https://imgs.search.brave.com/q3MJLK_ILOJjNNpDQfAoodURIpLLbhskPAuceu6vI6c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM0/OTE4MzAxMy9waG90/by9hZnJpY2FuLW1h/bGUtam91cm5hbGlz/dC1wcmVwYXJpbmct/cXVlc3Rpb25zLWZv/ci1wcmVzcy1jb25m/ZXJlbmNlLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1xaWRi/U3pfNmhwa2tyNmpS/QjUtMWhTTUsxSjZL/RUM2YXZJVkJsYXht/WmdvPQ" alt="Blog Image" />
            <div class="p-4 flex flex-col gap-1 blog-text">
                <h2 class="font-bold text-xl mb-2">{blog.title}</h2>
                <p class="text-gray-700">{blog.content}</p>
                <div class="mt-4 flex items-center">
                    <img className="w-10 h-10 rounded-full mr-4" src="https://imgs.search.brave.com/g2CJldyVpLs0sy-8TKaPqzJiC1DwIWh0fglnNnFqmSA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2NlL2Y4/L2I1L2NlZjhiNWNl/ZDAwMjM0MzE3MmZk/MDRkNTljYjJlMTcy/LmpwZw" alt="Author Image" />
                    <div>
                        <p class="text-gray-900 font-semibold">{blog.author}</p>
                        <p class="text-gray-600">{blog.publication_date}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    </Link>
}

export default SingleBlog