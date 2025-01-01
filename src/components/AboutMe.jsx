//
//<a href="https://react.dev" target="_blank">
//<img src={reactLogo} className="logo react" alt="React logo" />
//</a>
//</div>
import React from "react";


const About = () => {
  const technologies = [
    { name: "JavaScript (ES6+)", id: 1 },
    { name: "TypeScript", id: 2 },
    { name: "React", id: 3 },
    { name: "Solidity", id: 4 },
    { name: "Node.js", id: 5 },
    { name: "WordPress", id: 6 },
    { name: "Next.js", id: 7 },
  ];

  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center ">
        <div className="space-y-10 space-x-5">
        <div className="flex items-center mb-8 pr-8">
          <h2 className="text-2xl font-bold text-slate-light numbered-heading before:content-['01.'] before:mr-1 before:text-emerald-400 before:font-mono">
            About Me
            </h2>
            <div className="w-60 h-px bg-gray-500 ml-4"></div>
        </div>

          

          <p className="text-slate text-lg flex justify-left">
            
            Hello! My name is Loisa and I enjoy creating things that live on the web.
             My journey into the world of software development began back in university when I pursued a BSc in IT.
             The course laid a foundation but left me wanting more.
              The real spark came when I had the freedom to choose the technology for a school project. 
              I used Flutter and Dart to build an e-learning platform during my internship.
            
          </p>
          <p className="text-slate text-lg">
            Fast-forward to today,
            I enrolled to differentcourses eg. {" "}  <a href="#https://www.alxafrica.com/programmes/" className="text-emerald-400 hover:underline">Software Engineering at ALX</a>,
            and I've had the privilege of working on different amazing projects {" "}
           
            <a href="#" className="text-emerald-400 hover:underline">a start-up</a>,{" "}
            <a href="#https://www.mizpasafetyhouse.org/" className="text-emerald-400 hover:underline">an NGO</a>, and{" "}
            <a href="#https://github.com/lolosaisa" className="text-emerald-400 hover:underline">many more</a>. 
            My main focus these days is building accessible, inclusive products and digital experiences.
          
          </p>
          <p className="text-slate text-lg">
            Most recently I was introduced to the world of Web3, and I haven’t looked back since. 
            From blockchain to smart contracts, it's been an exhilarating journey,
             and I’m always on the lookout for new challenges and opportunities to grow.
          </p>
          <div className="mt-8">
            <p className="text-slate text-lg mb-4">
              Here are a few technologies I've been working with recently:
            </p>
            <ul className="grid grid-cols-2 gap-2 text-slate">
              {technologies.map((tech) => (
                <li 
                  key={tech.id} 
                  className="flex items-center space-x-2 text-sm"
                >
                  <span className="text-emerald-400">▹</span>
                  <span>{tech.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative  group mx-auto my-0">
          <div className="relative w-[400px] h-[500px]">
            <div className="absolute inset-0 bg-emerald-400/20 rounded-lg transform translate-x-5 translate-y-5"></div>
            <img
              src="./assets/images/loisa.jpeg"
              alt="loisa"
              className="relative z-10 rounded-lg w-full h-full object-cover border-2 border-emerald-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
