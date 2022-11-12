import { projects } from "./data";
import "./projects.css";
import Project from "../project/Project";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h2>My Projects:</h2>
      {projects.map((project) => {
        const { id } = project;
        return <Project key={id} project={project} />;
      })}
    </div>
  );
};

export default Projects;
