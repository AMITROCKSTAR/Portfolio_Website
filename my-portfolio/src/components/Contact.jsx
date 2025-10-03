import React from 'react';
import PageWrapper from './Page_wrapper';
const Contact = () => (
  <PageWrapper><div className="max-w-xl mx-auto text-center space-y-4 text-gray-700">
  <p>Email: <a href="mailto:amit@example.com" className="text-blue-600 hover:underline">amit@example.com</a></p>
  <p>LinkedIn: <a href="https://linkedin.com/in/amit" className="text-blue-600 hover:underline">Profile</a></p>
  <p>GitHub: <a href="https://github.com/amit" className="text-blue-600 hover:underline">Repositories</a></p>
  <a href="/resume.pdf" download className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition">
    Download Resume
  </a>
</div>
</PageWrapper>
  
);

export default Contact;
