import { useEffect, useState } from "react";
import GlowButton from "./GlowButton";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center px-6 md:px-24 bg-navy text-slate">
      <div className="max-w-4xl">
        <p
          className={`text-accent mb-5 tracking-wider ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "100ms" }}
        >
          Hi, my name is
        </p>
        <h1
          className={`text-4xl md:text-7xl font-bold text-slate-light mb-4 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "200ms" }}
        >
          Loisa Mburu.
        </h1>
        <h2
          className={`text-4xl md:text-7xl font-bold text-slate mb-6 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "300ms" }}
        >
          I build things for the web.
        </h2>
        <p
          className={`text-slate max-w-xl text-lg mb-12 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "400ms" }}
        >
          I'm a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences for both web2 and web3 . Currently, I'm focused on
          building accessible, human-centered products.
        </p>
        <div
          className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "500ms" }}
        >
          <GlowButton>Check out my Resume!</GlowButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
