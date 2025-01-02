import React from 'react';
import  GlowButton from './GlowButton';

const GetInTouch = () => {
  return (
    <div className="bg-navy-light text-gray-300 min-h-screen flex flex-col items-center justify-center p-8">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center bg-gray-800">
        <div className="text-teal-400 font-bold text-xl">B</div>
        <ul className="flex space-x-6 text-gray-300">
          <li className="hover:text-teal-400 transition">01. About</li>
          <li className="hover:text-teal-400 transition">02. Experience</li>
          <li className="hover:text-teal-400 transition">03. Work</li>
          <li className="hover:text-teal-400 transition">04. Contact</li>
        </ul>
        <a href="mailto:loise.mburu" className="text-teal-400 hover:text-white transition">
        <button className="px-4 py-2 border border-teal-400 text-teal-400 rounded hover:bg-teal-400 hover:text-white transition">
          Resume
        </button>
        </a>
        
      </nav>

      {/* Get In Touch Section */}
      <section className="text-center max-w-2xl mt-20">
        <h2 className="text-teal-400 text-lg">04. What's Next?</h2>
        <h1 className="text-4xl font-bold text-white mt-4">Get In Touch</h1>
        <p className="text-lg mt-4">
          I'm currently looking for new opportunities and collaborations! Whether you have a project in mind, a role you
          think I'd be a great fit for, or just want to connect, feel free to reach out. I'll do my best to get back to
          you promptly!
        </p>
        <div className="mt-8">
            <a href="mailto:loise.mburu,career@gmail.com">
            <GlowButton onClick={() => alert('Thank you for reaching out!')}>Say Hello</GlowButton>
            </a>
          
        </div>
        <div className="mt-8">
          <a
            href="https://docs.google.com/document/d/19WQfoaq9NP95xsOO9c0KlhG-bmKXDnuFKK3sFfiYzGY/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-gray-300 hover:text-teal-400 transition-all duration-300"
          >
            <span>Check out the whole resume</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 3.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 9H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* Social Icons */}
      <div className="absolute left-4 bottom-4 flex flex-col space-y-4 text-teal-400">
        <a href="#" className="hover:text-white transition">
          <i className="fab fa-github text-2xl"></i>
        </a>
        <a href="#" className="hover:text-white transition">
          <i className="fab fa-instagram text-2xl"></i>
        </a>
        <a href="#" className="hover:text-white transition">
          <i className="fab fa-twitter text-2xl"></i>
        </a>
        <a href="#" className="hover:text-white transition">
          <i className="fab fa-linkedin text-2xl"></i>
        </a>
        <a href="#" className="hover:text-white transition">
          <i className="fas fa-code text-2xl"></i>
        </a>
      </div>

      {/* Email */}
      
    </div>
  );
};

export default GetInTouch;
