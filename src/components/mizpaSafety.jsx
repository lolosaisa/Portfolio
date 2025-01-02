import React from "react";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import GlowButton from "./GlowButton";

const MizpaSafetyHouse = () => {
  const title = "MizpaSafetyHouse";
  const description =
    "A web application for an NGO that provides a safe space for victims of gender-based violence.";
  const technologies = ["React", "TailwindCSS", "Firebase"];
  const imageUrl = "./assets/images/mizpasafetyHouse.png";
  const githubUrl = "https://github.com/lolosaisa/MizpaSH";
  const liveUrl = "https://www.mizpasafetyhouse.org/";

  return (
    <div className="space-y-8">
      {/* Heading Section */}
      <h2 className="text-3xl text-left p-10 font-bold text-slate-light mb-12 numbered-heading before:content-['03.'] before:mr-2 before:text-emerald-400 before:font-mono">
        Some Things I've Built
      </h2>

      {/* Project Content Section */}
      <div className="relative grid md:grid-cols-12 gap-4 items-center">
        {/* Details Section */}
        <div className="md:col-span-5  md:pl-6">
          <h3 className="text-2xl font-bold text-slate-light mb-4 hover:text-emerald-400 transition-colors">
            {title}
          </h3>
          <div className="bg-navy-light  p-6 rounded-lg shadow-2xl mb-4">
            <p className="text-slate">{description}</p>
          </div>
          <div className="flex flex-wrap gap-3 text-xs font-mono text-slate">
            {technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="md:col-span-7 relative group">
          <div className="relative rounded-lg overflow-hidden group">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover transition-all duration-300 filter hover:filter-none hue-rotate-0 brightness-75"
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
      </div>
    </div>
  );
};

export default MizpaSafetyHouse;
