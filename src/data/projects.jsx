// ProjectList.jsx
import React from "react";
import PropTypes from "prop-types";

// Projects data array
const projects = [
  {
    title: "Integrating Algolia Search with WordPress Multisite",
    description: "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
    technologies: ["Algolia", "WordPress", "PHP"],
    githubUrl: "https://github.com/yourusername/algolia-wordpress",
    liveUrl: "https://demo-algolia-wordpress.com",
  },
  {
    title: "Time to Have More Fun",
    description: "A single page web app for helping me choose where to travel with Next.js, Firebase, and Tailwind CSS",
    technologies: ["Next.js", "Tailwind CSS", "Firebase"],
    githubUrl: "https://github.com/yourusername/travel-app",
    liveUrl: "https://travel-fun-app.com",
  },
  {
    title: "Building a Headless Mobile App CMS From Scratch",
    description: "Find out how we built a custom headless CMS with Node, Express, and Firebase for a project at Upstatement",
    technologies: ["Node", "Express", "Firebase", "Vue"],
    githubUrl: "https://github.com/yourusername/headless-cms",
    liveUrl: "https://headless-cms-demo.com",
  },
  {
    title: "OctoProfile",
    description: "A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size.",
    technologies: ["Next.js", "Chart.js", "GitHub API"],
    githubUrl: "https://github.com/yourusername/octoprofile",
    liveUrl: "https://octoprofile.com",
  },
  {
    title: "Google Keep Clone",
    description: "A simple Google Keep clone built with Vue and Firebase.",
    technologies: ["Vue", "Firebase"],
    githubUrl: "https://github.com/yourusername/keep-clone",
    liveUrl: "https://keep-clone-demo.com",
  },
  {
    title: "Apple Music Embeddable Web Player Widget",
    description: "Embeddable web player widget for Apple Music that lets users log in and listen to full song playback in the browser leveraging MusicKit.js",
    technologies: ["MusicKit.js", "JS", "SCSS"],
    githubUrl: "https://github.com/yourusername/apple-music-widget",
    liveUrl: "https://apple-music-widget-demo.com",
  },
];

// Component to display individual project cards
const ProjectCard = ({ title, description, technologies, githubUrl, liveUrl }) => (
  <div className="border rounded-lg p-6 shadow-md bg-white">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-700 mb-4">{description}</p>
    <div className="mb-4">
      <h4 className="font-medium">Technologies:</h4>
      <ul className="list-disc list-inside text-gray-600">
        {technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
    <div className="flex space-x-4">
      <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
        GitHub
      </a>
      <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-green-500 underline">
        Live Demo
      </a>
    </div>
  </div>
);

// Prop validation for ProjectCard
ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  githubUrl: PropTypes.string.isRequired,
  liveUrl: PropTypes.string.isRequired,
};

// Main component to render the list of projects
const ProjectList = () => (
  <section className="max-w-4xl mx-auto p-8">
    <h2 className="text-2xl font-bold text-gray-900 mb-6">Projects</h2>
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </section>
);

export default ProjectList;
