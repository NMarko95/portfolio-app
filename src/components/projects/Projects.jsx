import { projects } from "./data";
import "./projects.css";
import Project from "../project/Project";

const Projects = () => {
  return (
    <div className="projects">
      {projects.map((project) => {
        const { id } = project;
        return <Project key={id} project={project} />;
      })}
    </div>
  );
};

export default Projects;
