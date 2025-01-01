import ProjectCard from "./ProjectsCard";

const Projects = () => {
    const mainprojects = [
        {
            title: "MizpaSafetyHouse",
            description: "A web application for an NGO that provides a safe space for vicrims of gender based violence",
            technologies: ["React", "TailwindCSS", "Firebase"],
            imageUrl: "./assets/images/mizpasafetyHouse.png",
            githubUrl: "#https://github.com/lolosaisa/MizpaSH",
            liveUrl: "#https://www.mizpasafetyhouse.org/",

        },
        {
            title: "Miniminds",
            description: " A decentraliced application built on base and ethereum layer 2 , It is an e-learning platform that equalizes education between the rich and the poor. they earn through token based systems. Helps with personalized learning and a crowdfunding aspect  to help schools in developing countries buy gadgets and fund education. It is a work in progress. MAKE SURE YOU HAVE TOKENS WHILE TRYING OUT THE APP. EVEN IF IT'S TESTTOKENS",
            technologies: ["React", "Solidity", " Firebase" , "Javascript"],
            imageUrl: "./assets/images/miniminds.png",
            githubUrl: "#https://github.com/masterchiefff/miniminds-dapp",
            liveUrl: "#https://miniminds-dapp.vercel.app/",
        }
        
    ]
    return (
        <section id="projects" className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-slate-light mb-12 numbered-heading before:content-['03.'] before:mr-2 before:text-emerald-400 before:font-mono">
          Some Things I've Built
        </h2>
        <div className="space-y-32">
          {mainprojects.map((project, index) => (
            <div
              key={project.title}
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </section>
    )

}
export default Projects;