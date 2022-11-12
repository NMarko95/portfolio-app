import "./project.css";

const Project = ({ project }) => {
  const { id, title, description, link } = project;
  return (
    <div className={`project ${id % 2 === 1 ? "right" : "left"}`}>
      <div className="project-info">
        <h2 className="project-title">{title}</h2>
        <p className="project-desc">{description}</p>
        <a href={link} className="project-link">
          See More
        </a>
      </div>
      <div className="project-demo">
        <img src={`/images/img${id + 1}.jpg`} alt="img" />
      </div>
    </div>
  );
};

export default Project;
