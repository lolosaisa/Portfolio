import React from "react";
//import { Button } from "./ui/button";
import {  ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import GlowButton from "./GlowButton";

const ProjectCard = ({
  title,
  description,
  technologies,
  imageUrl,
  githubUrl,
  liveUrl,
  featured = false,
}) => {
  return (
    <div className="relative grid md:grid-cols-12 gap-4 items-center">
      {/* Image Section */}
      <div className="md:col-span-7 relative group">
        <div className="relative rounded-lg overflow-hidden  grayscale group-hover:grayscale-0">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-all duration-300 group-hover:filter group-hover:brightness-50"
          />
          <div className="absolute inset-0 bg-navy bg-opacity-70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
            {githubUrl && (
              <GlowButton
                variant="ghost"
                size="icon"
                className="text-slate-light hover:text-emerald-400"
              >
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="h-6 w-6" />
                </a>
              </GlowButton>
            )}
            {liveUrl && (
              <GlowButton
                variant="ghost"
                size="icon"
                className="text-slate-light hover:text-emerald-400"
              >
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-6 w-6" />
                </a>
              </GlowButton>
            )}
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="md:col-span-5 md:pl-6">
        {featured && (
          <p className="text-sm text-emerald-400 mb-2 font-mono">Featured Project</p>
        )}
        <h3 className="text-2xl font-bold text-slate-light mb-4 hover:text-emerald-400 transition-colors">
          {title}
        </h3>
        <div className="bg-navy-light p-6 rounded-lg shadow-xl mb-4">
          <p className="text-slate">{description}</p>
        </div>
        <div className="flex flex-wrap gap-3 text-xs font-mono text-slate">
          {technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;