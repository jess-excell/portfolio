import ProjectCard from "../cards/ProjectCard";
import projects from "../../constants/projects";


const Projects = () => <section id="projects">
    <h2>Projects</h2>
    <div className="card-container">
        {projects.map(project => <ProjectCard key={project.title} entry={project}/>)}
    </div>
</section>

export default Projects;