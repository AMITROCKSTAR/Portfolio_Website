import React from 'react';
import PageWrapper from './Page_wrapper';
const Hero = () => (
  <PageWrapper><section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-400 to-purple-500 text-white pt-20 px-4 md:px-0">
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 animate-bounce text-center">
    Hi, I’m Amit Kumar
  </h1>
  <p className="text-lg sm:text-xl md:text-2xl mb-6 text-center">
    AI & Web Developer | Tech Enthusiast
  </p>
  <div className="flex flex-col sm:flex-row gap-4">
    <a href="/Amit_K_AI_resume.pdf" download className="px-6 py-3 bg-white text-blue-600 font-semibold rounded shadow-lg hover:bg-gray-100 transition">
      Download Resume
    </a>
    <a href="/contact" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded shadow-lg hover:bg-blue-700 transition">
      Contact Me
    </a>
  </div>
</section>

</PageWrapper>
);

export default Hero;
