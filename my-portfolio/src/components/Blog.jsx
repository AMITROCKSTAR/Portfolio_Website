import React from "react";

const Blog = () => {
  // Dummy blog posts
  const posts = [
    {
      title: "Getting Started with AI & Machine Learning",
      date: "October 2025",
      description:
        "A beginner-friendly introduction to AI, ML, and how to build your first model.",
      link: "#",
    },
    {
      title: "My Journey into Federated Learning",
      date: "September 2025",
      description:
        "Sharing insights and challenges I faced while working with federated learning projects.",
      link: "#",
    },
    {
      title: "How I Built My Portfolio Website",
      date: "October 2025",
      description:
        "A step-by-step guide on how I created this portfolio using React, Tailwind, and Netlify.",
      link: "#",
    },
  ];

  return (
    <section
      id="blog"
      className="min-h-screen bg-gray-50 p-8 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-8">My Blog</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition transform hover:scale-105"
          >
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">
              {post.title}
            </h3>
            <p className="text-sm text-gray-500 mb-2">{post.date}</p>
            <p className="text-gray-700 mb-4">{post.description}</p>
            <a
              href={post.link}
              className="text-blue-600 hover:underline font-medium"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
