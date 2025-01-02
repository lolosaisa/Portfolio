import React, { useState } from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const [selectedTab, setSelectedTab] = useState("AutoFix");
  const jobs = [
    {
      company: "AutoFix",
      title: "Project Manager & Software Engineer",
      date: "2023",
      points: [
        "Leads the development of automotive repair management platform using React and Node.js and  Flutter",
        "Managed team of 5 developers, implementing agile methodologies and sprint planning",
        "Working on increasing customer satisfaction by 40% through implementation of real-time repair tracking",
        "project manager in charge of the development of a mobile app for the platform and the webapp",
        "Software Engineer in charge of the development of the webapp with other team members",
      ],
    },
    {
      company: "General Kago Primary School",
      title: "IT Support Intern",
      date: "2022",
      points: [
        "Provided technical support for 50+ staff members and 500+ students",
        "Maintained and troubleshot network infrastructure and computer systems",
        "Implemented an e-learning platform reducing response time by 60%",
        "Conducted training sessions for staff on new educational software",
      ],
    },
    {
      company: "ALX Africa",
      title: "Projects Reviewer",
      date: "2023",
      points: [
        "Reviewed and evaluated 30+ student projects in software engineering program",
        "Provided detailed feedback and guidance to improve code quality",
        "Mentored students in best practices for software development",
        "Contributed to curriculum improvement through feedback sessions",
      ],
    },
    {
      company: "Community",
      title: "Tech Community Leader",
      date: "2022 - Present",
      points: [
        "Organized and led tech meetups and workshops for 50+ members",
        "Facilitated knowledge sharing sessions on emerging technologies",
        "Built partnerships with local tech companies for community initiatives",
        "Mentored aspiring developers through community programs",
      ],
    },
  ];

  return (
    <section id="experience" className="max-w-6xl mx-auto px-4 flex  flex-col py-24">
        
      <h2 className="text-2xl  text-justify font-bold text-slate-light mb-12 numbered-heading before:content-['02.'] before:mr-2 before:text-emerald-400 before:font-mono">
        Where I've Worked
      </h2>
      
      <div className="flex flex-col bg-navy-light  md:flex-row items-center gap-20">
        {/* Tab list */}
        <div className="flex md:flex-col overflow-x-auto md:w-32 mb-8 md:mb-0 border-b md:border-b-0 md:border-l border-blue-800 ">
          {jobs.map((job) => (
            <button
              key={job.company}
              onClick={() => setSelectedTab(job.company)}
              className={`px-4 py-3 text-sm font-mono whitespace-nowrap transition-all duration-200 hover:bg-navy hover:text-emerald-400 ${
                selectedTab === job.company
                  ? "text-emerald-400 bg-navy-light md:border-l-2 md:border-emerald-400"
                  : "text-slate"
              }`}
            >
              {job.company}
            </button>
          ))}
        </div>
        {/* Tab panels */}
        <div className="md:ml-8">
          {jobs.map((job) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 20 }}
              animate={selectedTab === job.company ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className={`${selectedTab === job.company ? "block" : "hidden"}`}
            >
              <h3 className="text-xl text-left text-slate-light mb-1">
                {job.title}{" "}
                <span className="text-emerald-400">@ {job.company}</span>
              </h3>
              <p className="text-sm text-slate mb-4 font-mono">{job.date}</p>
              <ul className="space-y-4">
                {job.points.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start text-slate"
                  >
                    <span className="text-emerald-400 mr-2 mt-1">▹</span>
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default Experience;
