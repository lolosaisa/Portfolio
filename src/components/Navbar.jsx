
import React from "react";

const Navbar = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/path/to/your-resume.pdf"; // Replace with your resume file's path
    link.download = "Your_Resume.pdf"; // Customize the download file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="bg-navy-light p-4 fixed w-full top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-emerald-400">MyPortfolio</div>
        <ul className="flex space-x-8 text-slate text-sm font-medium">
          <li>
            <a href="#about" className="hover:text-emerald-400 transition-colors">
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="hover:text-emerald-400 transition-colors"
            >
              Experience
            </a>
          </li>
          <li>
            <a href="#work" className="hover:text-emerald-400 transition-colors">
              Work
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-emerald-400 transition-colors"
            >
              Contact
            </a>
          </li>
          <li>
            <button
              onClick={downloadResume}
              className="bg-gradient-to-r from-emerald-400 to-teal-500 text-white py-2 px-4 rounded-lg shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
            >
              Resume
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
