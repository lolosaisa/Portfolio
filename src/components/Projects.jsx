import ProjectCard from "./ProjectsCard";
import projects from "../data/Otherprojects";

const Projects = () => {
   
    
    return (
        <section id="projects" className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-slate-light mb-12 numbered-heading before:content-['03.'] before:mr-2 before:text-emerald-400 before:font-mono">
          Other Noteworthy Projects
        </h2>
        <div className="space-y-32">
          {projects.map((project, index) => (
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