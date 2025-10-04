import React from "react";
import PageWrapper from './Page_wrapper';
import { FaEnvelope, FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa';

const Contact = () => {
  const email = "iamitkumar2007@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    alert("Email copied to clipboard!");
  };

  return (
    <PageWrapper>
      <section
        id="contact"
        className="relative min-h-screen flex flex-col justify-center items-center p-8 bg-cover bg-center"
        style={{ backgroundImage: "url('/hand-painted-watercolor-background-with-sky-clouds-shape.jpg')" }}
      >
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 w-full max-w-3xl text-center">
          {/* <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white drop-shadow-lg">Contact Me</h2> */}

          <div className="space-y-6">
            {/* Email Card */}
            <div className="flex items-center justify-between bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-600 text-2xl" />
                <a href={`mailto:${email}`} className="text-gray-800 font-medium hover:text-blue-600 transition">
                  {email}
                </a>
              </div>
              <button
  onClick={copyEmail}
  className="px-3 py-1 bg-black text-white rounded hover:bg-gray-800 transition"
>
  Copy
</button>
            </div>

            {/* LinkedIn Card */}
            <div className="flex items-center justify-between bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="flex items-center gap-3">
                <FaLinkedin className="text-blue-700 text-2xl" />
                <a
                  href="https://www.linkedin.com/in/amit-kumar-ak9889"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 font-medium hover:text-blue-700 transition"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="flex items-center justify-between bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="flex items-center gap-3">
                <FaGithub className="text-gray-800 text-2xl" />
                <a
                  href="https://github.com/AMITROCKSTAR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 font-medium hover:text-gray-900 transition"
                >
                  GitHub Repositories
                </a>
              </div>
            </div>

            {/* Resume Card */}
            <a
  href="/Amit_K_AI_resume.pdf"
  download
  className="flex items-center justify-center gap-3 bg-black text-white p-4 rounded-xl shadow-lg 
             hover:bg-transparent hover:text-black border border-black 
             hover:shadow-xl transition font-medium"
>
  <FaFileDownload className="text-2xl" />
  Download Resume
</a>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Contact;
