import React from "react";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import GlowButton from "./GlowButton";

const Miniminds = () => {
  const title = "Miniminds";
  const description =
    "A decentralized application built on Base and Ethereum Layer 2. It is an e-learning platform that equalizes education between the rich and the poor. Users earn through token-based systems. It helps with personalized learning and includes a crowdfunding aspect to help schools in developing countries buy gadgets and fund education. This is a work in progress. MAKE SURE YOU HAVE TOKENS WHILE TRYING OUT THE APP, EVEN IF THEY ARE TEST TOKENS.";
  const technologies = ["React", "Solidity", "Firebase", "JavaScript"];
  const imageUrl = "./assets/images/Miniminds.png";
  const githubUrl = "https://github.com/masterchiefff/miniminds-dapp";
  const liveUrl = "https://miniminds-dapp.vercel.app/";

  return (
    <div className="relative grid md:grid-cols-12 gap-8 items-center pt-40">
      {/* Image Section */}
      <div className="md:col-span-6 relative group">
        <div className="relative rounded-lg overflow-hidden">
          {/* Image with greenish-blue tint */}
          <img
            src={imageUrl}
            alt={title}
            className="w-400 h-400 object-cover brightness-75 transition-all duration-500 group-hover:brightness-100"
          />
          <div className="absolute inset-0 bg-teal-700 bg-opacity-50 transition-all duration-500 group-hover:bg-opacity-0"></div>

          {/* Hover Overlay with Icons */}
          <div className="absolute inset-0 bg-navy-light bg-opacity-70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
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
        <h3 className="text-2xl font-bold text-slate-light mb-4 hover:text-emerald-400 transition-colors">
          {title}
        </h3>
        <div className="bg-navy p-6 rounded-lg shadow-xl mb-4 -mx-8">
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

export default Miniminds;
