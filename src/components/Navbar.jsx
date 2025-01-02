
import React from "react";
import Glowbutton from "./GlowButton";

const Navbar = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "./assets/loisemburu.pdf"; // Replace with your resume file's path
    link.download = "LoiseMburu.pdf"; // Customize the download file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="bg-navy-light p-4 fixed w-full top-0 left-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-teal-400">MyPortfolio</div>
        <ul className="flex space-x-8 text-slate pt-3 text-sm font-medium">
          <li>
            <a href="#about" className="hover:text-teal-400 transition-colors">
              01. About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="hover:text-teal-400 transition-colors"
            >
              02. Experience
            </a>
          </li>
          <li>
            <a href="#work" className="hover:text-teal-400  transition-colors">
              03. Work
            </a>
          </li>
          <li>
            <a
              href="#GetinTouch"
              className="hover:text-teal-400 transition-colors"
            >
              04. Contact
            </a>
          </li>
          <li>
            <Glowbutton
              onClick={downloadResume}
              className="  text-white items-end rounded shadow-lg hover:shadow-teal-500/50 transition-all duration-300 focus:outline-none focus:ring-2"
            >
              Resume
            </Glowbutton>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
