import React from "react";

const EmailLinks = () => {
    
 

  return (
    <div className="fixed right-10 bottom-0 hidden md:block">
      <div className="flex flex-col space-y-10">
        <a
        href="mailto:loise.mburu.career@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate hover:text-accent transform hover:-translate-y-1 transition-all duration-300 text-sm tracking-wider"
        aria-label="Email"
        style={{ 
            writingMode: "vertical-lr", 
            textOrientation: "sideways",
            textShadow: "1px 1px 2px rgba(0,0,0,0.2)",

        }}
        >
            loise.mburu.career@gmail.com
            </a>
            
          <div className="w-px h-20 bg-slate-50 mt-6"></div>
      </div>
    </div>
  );
};

export default EmailLinks;