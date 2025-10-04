import React from 'react';
import PageWrapper from './Page_wrapper';
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';

const Hero = () => (
  <PageWrapper>
    <section
      className="relative flex flex-col justify-center items-center h-screen p-4 bg-cover bg-center bg-fixed overflow-hidden"
      style={{ backgroundImage: "url('/Untitled-1_5FlcgQV.webp')" }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full gap-6 sm:gap-8 max-w-3xl mx-auto text-center px-4">
        
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white animate-fadeInUp">
          Hi, I’m <span className="text-blue-400">Amit Kumar</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 animate-fadeInUp delay-200">
          AI & Web Developer | Tech Enthusiast
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp delay-400">
          <a
            href="/Amit_K_AI_resume.pdf"
            download
            className="px-6 py-3 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-2xl"
          >
            Download Resume
          </a>
          <a
            href="/contact"
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg transform transition hover:scale-105 hover:bg-gray-100"
          >
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 mt-6 animate-fadeInUp delay-600">
          <a href="https://github.com/AMITROCKSTAR" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-blue-400 transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/amit-kumar-ak9889" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-blue-400 transition">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 text-white animate-bounce z-10">
        <FaArrowDown className="text-2xl" />
      </div>
    </section>
  </PageWrapper>
);

export default Hero;
