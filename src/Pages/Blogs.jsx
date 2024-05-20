import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Blogs = () => {
    const params = useParams();
    const { slug } = params
    const [blogs, setblogs] = useState([
        {
            "id": 1,
            "title": "Lorem Ipsum Blog",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
            "author": "John Doe",
            "publication_date": "2024-05-03"
        },
        {
            "id": 2,
            "title": "Lorem Ipsum Blog",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
            "author": "John Doe",
            "publication_date": "2024-05-03"
        },
        {
            "id": 3,
            "title": "Lorem Ipsum Blog",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
            "author": "John Doe",
            "publication_date": "2024-05-03"
        },
        {
            "id": 4,
            "title": "Lorem Ipsum Blog",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
            "author": "John Doe",
            "publication_date": "2024-05-03"
        },
        {
            "id": 5,
            "title": "Lorem Ipsum Blog",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
            "author": "John Doe",
            "publication_date": "2024-05-03"
        },
        {
            "id": 6,
            "title": "Lorem Ipsum Blog",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
            "author": "John Doe",
            "publication_date": "2024-05-03"
        },
        {
            "id": 7,
            "title": "Lorem Ipsum Blog",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
            "author": "John Doe",
            "publication_date": "2024-05-03"
        },
        {
            "id": 8,
            "title": "Lorem Ipsum Blog",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
            "author": "John Doe",
            "publication_date": "2024-05-03"
        },
        {
            "id": 9,
            "title": "Lorem Ipsum Blog",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
            "author": "John Doe",
            "publication_date": "2024-05-03"
        },
        {
            "id": 10,
            "title": "Lorem Ipsum Blog",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
            "author": "John Doe",
            "publication_date": "2024-05-03"
        },
        // Add more blog objects as needed
    ])

    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const selectedBlog = blogs.find(blog => blog.id === parseInt(slug));
        setBlog(selectedBlog);
    }, [slug]);

    if (!blog) {
        return <div>Loading...</div>;
    }

    return (
          <div className="w-full px-8 pt-10 pb-32 bg-white shadow-lg rounded-lg blog">
            <div className="mb-8">
              <h2 className="text-3xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600 text-sm">{`By ${blog.author} on ${blog.publication_date}`}</p>
            </div>
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: blog.content }} />
          </div>
      );
}

export default Blogs
