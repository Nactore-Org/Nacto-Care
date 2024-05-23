import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const BlogPage = () => {
    const [blogs, setblogs] = useState([
        {
            "id":1,
            "title": "Lorem Ipsum Blog",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
            "author": "John Doe",
            "publication_date": "2024-05-03"
        },
        {
            "id":2,
            "title": "Lorem Ipsum Blog",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
            "author": "John Doe",
            "publication_date": "2024-05-03"
        },
        {
            "id":3,
            "title": "Lorem Ipsum Blog",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
            "author": "John Doe",
            "publication_date": "2024-05-03"
        },
        {
            "id":4,
            "title": "Lorem Ipsum Blog",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
            "author": "John Doe",
            "publication_date": "2024-05-03"
        },
        {
            "id":5,
            "title": "Lorem Ipsum Blog",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
            "author": "John Doe",
            "publication_date": "2024-05-03"
        },
        {
            "id":6,
            "title": "Lorem Ipsum Blog",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
            "author": "John Doe",
            "publication_date": "2024-05-03"
        },
        {
            "id":7,
            "title": "Lorem Ipsum Blog",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
            "author": "John Doe",
            "publication_date": "2024-05-03"
        },
        {
            "id":8,
            "title": "Lorem Ipsum Blog",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
            "author": "John Doe",
            "publication_date": "2024-05-03"
        },
        {
            "id":9,
            "title": "Lorem Ipsum Blog",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
            "author": "John Doe",
            "publication_date": "2024-05-03"
        },
        {
            "id":10,
            "title": "Lorem Ipsum Blog",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
            "author": "John Doe",
            "publication_date": "2024-05-03"
        },
        // Add more blog objects as needed
    ])

    return (
        <>
            <h1 class="text-3xl font-bold mb-4 mt-10 text-center">Latest Blogs</h1>
            <div class="container mx-auto px-4 py-8 w-full">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-[80%] mx-auto">
                    {blogs.map((blog) => {
                        return <Link to={`/blog/${blog.id}/`}>
                            <div class="bg-white shadow-md rounded-lg overflow-hidden">
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
                            </div>
                        </Link>
                    })}
                </div>
            </div>
        </>
    )
}

export default BlogPage
