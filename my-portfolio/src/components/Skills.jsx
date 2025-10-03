import React from 'react';
import PageWrapper from './Page_wrapper';
const skills = ["React", "TailwindCSS", "Python", "Machine Learning", "SQL", "Node.js", "Docker", "AWS"];

const Skills = () => (

  <PageWrapper><section id="skills" className="p-12 bg-gray-50">
    <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Skills</h2>
   <div className="flex flex-wrap justify-center gap-4">
  {skills.map((skill, index) => (
    <span key={index} className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-full font-medium shadow-md hover:scale-105 transform transition">
      {skill}
    </span>
  ))}
</div>

  </section></PageWrapper>
);

export default Skills;
