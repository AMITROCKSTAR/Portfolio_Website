import React from "react";
import PageWrapper from './Page_wrapper';

const Blog = () => {
  const posts = [
    {
      title: "Getting Started with AI & Machine Learning",
      date: "October 2025",
      description: "A beginner-friendly introduction to AI, ML, and how to build your first model.",
      link: "#",
    },
    {
      title: "My Journey into Federated Learning",
      date: "September 2025",
      description: "Sharing insights and challenges I faced while working with federated learning projects.",
      link: "#",
    },
    {
      title: "How I Built My Portfolio Website",
      date: "October 2025",
      description: "A step-by-step guide on how I created this portfolio using React, Tailwind, and Netlify.",
      link: "#",
    },
  ];

  return (
    <PageWrapper>
      <section
        id="blog"
        className="relative flex flex-col justify-center items-center h-screen p-4 bg-cover bg-center bg-fixed overflow-hidden"
        style={{ backgroundImage: "url('/man-writing-text-document-essay-260nw-2376208001.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl text-center flex flex-col justify-center h-full">
          <h2 className="text-4xl font-extrabold text-white mb-12 drop-shadow-lg">
            My Blog
          </h2>

          {/* Grid of cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col justify-between"
              >
                <div>
                  {/* Attractive Heading */}
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200">
                    {post.title}
                  </h3>

                  <p className="text-sm text-gray-500 mb-3">{post.date}</p>
                  <p className="text-gray-700">{post.description}</p>
                </div>
                <a
                  href={post.link}
                  className="text-blue-600 hover:text-purple-600 font-semibold mt-4 inline-block transition"
                >
                  Read More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Blog;
