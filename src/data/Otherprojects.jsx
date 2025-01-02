import React from "react";
import { Folder, Github, ExternalLink } from "lucide-react";
//import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Airbnb Clone",
    description: "A clone of the Airbnb website with a focus on the user interface and user experience.",
    technologies: ["React", "python", "Django","SQL"],
  },
  
  {
    title: "Afri Pay",
    description: " This is a bot that helps SMEs in Africa to manage their finances keep track of their expenses, run their businesses. It connects Payd an Mpessa. It was part of a hackathon where we won second position",
    technologies: ["Python", "Django", "React"],
    githubUrl: "#",
    liveUrl: "https://afri-pay.com",

  },
  {
    title: "Smarrt Life",
    description: "This is an intellgent ride-booking and vehicle tracking system. web application that makess public transport easierr to use, people can book tickets, track buses, and get notifications on their phones. It was build with next.js , react.js, tailwindcss, and firebase",
    technologies: ["Next.js", "typescript", "React", "Tailwind CSS", "Firebase"],
    githubUrl: "https://github.com/ahmednule/smart-life",
    liveUrl: "",
  },
  {
    title: "Simple Shell",
    description: " This was a fun and challenging project involves creating a simple Unix shell in C, modeled after the original Thompson shell. It explores Unix concepts such as process creation, system calls, and environment manipulation, using technologies like GCC for compilation",
    technologies: ["C", "GCC", "Unix"],
    githubUrl: "#https://github.com/RayoMwas/simple_shell",
    liveUrl: "#",

  },
  {
    title: "Time to Have More Fun",
    description:
      "A single-page web app for helping me choose where to travel with Next.js, Firebase, and Tailwind CSS.",
    technologies: ["Next.js", "Tailwind CSS", "Firebase"],
    githubUrl: "https://github.com/yourusername/travel-app",
    liveUrl: "https://travel-fun-app.com",
  },

  {
    title: "Integrating Algolia Search with WordPress Multisite",
    description:
      "Building a custom multisite compatible WordPress plugin to build global search with Algolia.",
    technologies: ["Algolia", "WordPress", "PHP"],
    githubUrl: "https://github.com/yourusername/algolia-wordpress",
    liveUrl: "https://demo-algolia-wordpress.com",
  },

  // Add more projects here
];

const ProjectCard = ({ title, description, technologies, githubUrl, liveUrl }) => {
  return (
    <div className="bg-navy rounded-lg p-10 hover:translate-y-[-10px] transition-all duration-300">
      <div className="flex justify-between items-start mb-8">
        <Folder className="text-emerald-400 w-10 h-10" />
        <div className="flex gap-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-emerald-400 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-emerald-400 transition-colors"
            >
              <ExternalLink className="w-6 h-6" />
            </a>
          )}
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-slate-light mb-2 hover:text-emerald-400 transition-colors">
        <a href={liveUrl} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h3>
      
      <p className="text-slate mb-4">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-3 text-xs font-mono text-slate">
        {technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </div>
  );
};

const ProjectList = () => (
  <section className="max-w-7xl mx-auto p-20 pt-50">
    <h2 className="text-3xl font-bold text-gray-100 mb-10 text-center">
      Other Noteworthy Projects
    </h2>
    <div className="grid gap-10 sm:grid-cols-3 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </section>
);

export default ProjectList;
