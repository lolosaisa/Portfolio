import React from "react";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import GlowButton from "./GlowButton";

const Afida = () => {
  const title = "Afida";
  const description =
    "Crowdfunding made easy, A decentralized application for Effortless fundraising for your projects, whether it’s illness, NGO campaigns, or personal projects. We provide seamless solutions.";

  const technologies = ["React", "Next.js", "Solidity", "Node.js", "TailwindCSS"];
  const imageUrl = "./assets/images/afida.jpeg";
  const githubUrl = "https://github.com/ramo-dev/afida";
  const liveUrl = "https://afidacf.vercel.app/";

  return (
    <div className="space-y-8">
      {/* Heading Section */}
     

      {/* Project Content Section */}
      <div className="relative grid md:grid-cols-12 gap-4 items-center p-32">
        {/* Details Section */}
        <div className="md:col-span-5 md:pl-6">
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

        {/* Image Section */}
        <div className="md:col-span-7 p-5 relative group">
          <div className="relative rounded-lg overflow-hidden group">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover transition-all duration-300 filter group-hover:filter-none hue-rotate-0 brightness-75"
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

export default Afida;
