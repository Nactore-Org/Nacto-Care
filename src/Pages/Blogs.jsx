import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Blogs = () => {
  const params = useParams();
  const { slug } = params;
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "40 Years Of Healthcare",
      content: `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>40 Years Of Healthcare Trends</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  line-height: 1.6;
                  margin: 0;
                  padding: 20px;
              }
              .article {
                  max-width: 800px;
                  margin: auto;
              }
              h1 {
                  text-align: center;
                  color: #333;
              }
              p {
                  margin-bottom: 20px;
                  color: #666;
              }
              .quote {
                  border-left: 5px solid #007bff;
                  padding-left: 15px;
                  margin-bottom: 20px;
                  color: #555;
              }
              .author {
                  font-style: italic;
                  color: #777;
              }
          </style>
      </head>
      <body>
      <div class="article">
      <h1>40 Years Of Healthcare</h1>
      <p>By Joseph Bednar May 9, 2024</p>
      <p>Hospitals Grapple with Some Significant Trends</p>
      <div class="quote">
          <p>“The time people spend inside the hospital for various procedures has been shortened significantly,” <span class="author">Spiros Hatiras, Holyoke Medical Center</span> said. “When I started in healthcare 30 years ago, someone would come in for a gallbladder surgery and spend four days in the hospital. Now it’s the same day, come in and leave."</p>
      </div>
      <p>Today’s hospital leaders are still talking about it — because the trend has only accelerated.</p>
      <p>"The same with other procedures," Hatiras went on. "People even get knee replacements and leave the same day. For bariatric surgery, they just stay one night. They used to spend more time in the hospital, so that definitely has changed."</p>
      <div class="quote">
          <p>“We have 1,000 hospital beds, but 60% of our revenue comes from the ambulatory side," <span class="author">Dr. Mark Keroack, Baystate Health</span> noted. "And even in my career, things that used to land you in the hospital for a week don’t anymore. Now you’re out in a day."</p>
      </div>
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.SLOQ3bx8IE1E1bxyCTCu2gHaEg%26pid%3DApi&f=1&ipt=c7af831da98b24a3befa37b06dbe6fbf1756e928be568f9a12819d7a47f74380&ipo=images" />
      <p>Dr. Lynnette Watkins from Cooley Dickinson Health Care highlighted the benefits of being part of a larger network, stating, "We have 1,000 hospital beds, but 60% of our revenue comes from the ambulatory side. And even in my career, things that used to land you in the hospital for a week don’t anymore. Now you’re out in a day."</p>
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.z5JXhx04Gni2LnHs-L99MwHaEs%26pid%3DApi&f=1&ipt=9098b32d952dae63b19f0ddf38e39442916ade4f30c8ea3ce55f09e582b71e0c&ipo=images" />
      <p>She emphasized the impact of competitive compensation and the support of a larger network in recruiting and retaining talent.</p>
      <p>Baystate Health's growth story began almost 50 years ago with the merger of three facilities into what is now known as Baystate Medical Center. Over the years, it has expanded significantly, with the addition of Baystate Children’s Hospital and other projects.</p>
      <div class="quote">
          <p>"People don’t have to leave the area to get their care, and to get advanced medical care — level-1 trauma, neonatal ICU, specialty cancer care, specialty pediatric care, all those things that built up over the years," <span class="author">Dr. Mark Keroack</span> explained. "Baystate has grown to the point where we’re doing roughly 65% of the medical care in Western Mass."</p>
      </div>
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.CGDRY9-9D0ZwhDrMPx7jcQHaE8%26pid%3DApi&f=1&ipt=6ba64ae1f0077ae9579089f52103da563c7c4a35fdab3a7afb5796b820d2d665&ipo=images" />
      <p>However, Dr. Keroack also acknowledged the challenges in healthcare workforce shortages. Baystate Health, with almost 1,500 openings currently, is working on innovative approaches to attract and retain talent, including workplace safety measures and partnerships with educational institutions.</p>
      <p>Cooley Dickinson faced similar challenges during the pandemic, with shortages in nursing and technical fields exacerbated by burnout and illness among personnel.</p>
    </div>
      </body>
      </html>
      `,

      author: "Joseph Bednar",
      publication_date: "2024-05-09",
    },

    // Add more blog objects as needed
  ]);

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const selectedBlog = blogs.find((blog) => blog.id === parseInt(slug));
    setBlog(selectedBlog);
  }, [slug]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full px-8 pt-10 pb-32 bg-white shadow-lg rounded-lg">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold mb-2">{blog.title}</h2>
        <p className="text-gray-600 text-sm">{`By ${blog.author} on ${blog.publication_date}`}</p>
      </div>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
};

export default Blogs;
