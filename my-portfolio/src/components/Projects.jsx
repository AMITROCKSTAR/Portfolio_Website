import React from 'react';
import PageWrapper from './Page_wrapper';
const projects = [
  { name: "Portfolio Website", desc: "A responsive portfolio website built with React and TailwindCSS.", link: "#" },
  { name: "AI Chatbot", desc: "A personalized AI chatbot using NLP and React frontend.", link: "#" },
  { name: "Data Analysis", desc: "Analyzing healthcare datasets using Python and Pandas.", link: "#" },
];

const Projects = () => (
 <PageWrapper> <section id="projects" className="p-12 bg-white">
    <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
  {projects.map((project, index) => (
    <div key={index} className="p-6 bg-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 hover:scale-105"  data-aos="fade-up"
      data-aos-delay={index * 100}>
      <h3 className="text-xl md:text-2xl font-semibold mb-2 text-blue-600">{project.name}</h3>
      <p className="text-gray-700 mb-4">{project.desc}</p>
      <a href={project.link} className="text-blue-600 font-semibold hover:underline">View Project</a>
    </div>
  ))}
</div>

  </section></PageWrapper>
);

export default Projects;
