import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";  // Importing icons

const SocialLinks = () => {
  const links = [
    { icon: FaGithub, href: "https://https://github.com/lolosaisa", label: "Github" },
    { icon: FaTwitter, href: "https://x.com/LoloSaisa", label: "Twitter" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/loisemburu/", label: "LinkedIn" },
    { icon: FaInstagram, href: "https://www.instagram.com/iamyours._00", label: "Instagram" },
    
  ];

  return (
    <div className="fixed left-10 bottom-0 hidden md:block">
      <div className="flex flex-col space-y-6">
        {links.map((link, index) => (
          <a
            key={link.label}
            href={link.href}  // Link to social media URL
            target="_blank"    // Open the link in a new tab
            rel="noopener noreferrer"  // For security reasons when using target="_blank"
            className="text-slate hover:text-accent transform hover:-translate-y-1 transition-all duration-300"
            aria-label={link.label}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <link.icon className="w-6 h-6" />
          </a>
        ))}
        <div className="w-px h-12 bg-slate-50 mt-4"></div>
      </div>
    </div>
  );
};

export default SocialLinks;
