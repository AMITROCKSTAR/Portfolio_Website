import React from "react";
import PageWrapper from './Page_wrapper';
const Contact = () => {
  const email = "iamitkumar2007@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    alert("Email copied to clipboard!");
  };

  return (
    <PageWrapper>    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center p-8 bg-gray-50"
    >
      <h2 className="text-4xl font-bold mb-8 text-gray-800">Contact Me</h2>

      <div className="space-y-4 text-center">
        {/* Email */}
        <p className="text-lg text-gray-700">
          Email:{" "}
          <a
            href={`mailto:${email}`}
            className="text-blue-600 hover:underline"
          >
            {email}
          </a>{" "}
          <button
            onClick={copyEmail}
            className="ml-2 px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
          >
            Copy
          </button>
        </p>

        {/* LinkedIn */}
        <p className="text-lg text-gray-700">
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/amit-kumar-ak9889"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Profile
          </a>
        </p>

        {/* GitHub */}
        <p className="text-lg text-gray-700">
          GitHub:{" "}
          <a
            href="https://github.com/AMITROCKSTAR"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Repositories
          </a>
        </p>

        {/* Resume download */}
        <a
          href="/Amit_K_AI_resume.pdf"
          download
          className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
        >
          Download Resume
        </a>
      </div>
    </section></PageWrapper>

  );
};

export default Contact;
