import React from 'react';
import PageWrapper from './Page_wrapper';

const About = () => (
  <PageWrapper>
    <section
      className="relative min-h-screen flex items-center justify-center p-8 bg-cover bg-center"
      style={{ backgroundImage: "url('/about_image.avif')" }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content card */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-5xl w-full">
        {/* Profile image */}
        <img
          src="/My_photo.jpg"
          alt="Amit Kumar"
          className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white shadow-lg transform transition hover:scale-105"
        />

        {/* Text content */}
        <div className="text-center md:text-left text-white flex flex-col justify-center gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Hi, I’m Amit Kumar</h2>
          <p className="leading-relaxed text-lg md:text-xl">
            I am a passionate <span className="text-blue-400 font-semibold">AI</span> and <span className="text-purple-400 font-semibold">Web Developer</span> with experience in <span className="font-medium">React, Python, and Machine Learning</span>. I love building interactive applications and solving challenging problems with technology.
          </p>
          <a
            href="/Amit_K_AI_resume.pdf"
            download
            className="mt-2 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 hover:scale-105 transition transform"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  </PageWrapper>
);

export default About;
