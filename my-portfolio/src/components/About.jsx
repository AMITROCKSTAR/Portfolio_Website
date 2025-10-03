import React from 'react';
import PageWrapper from './Page_wrapper';
const About = () => (
<PageWrapper>
  <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto gap-6">
  <img src="/profile.jpg" alt="Amit Kumar" className="w-40 h-40 md:w-48 md:h-48 rounded-full shadow-lg"/>
  <div>
    <p className="text-gray-700 leading-relaxed text-center md:text-left">
      I am a passionate AI and Web Developer with experience in React, Python, and Machine Learning...
    </p>
    <a href="/resume.pdf" download className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition">
      Download Resume
    </a>
  </div>
</div>


  </PageWrapper>
);

export default About;
