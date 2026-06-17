function ProjectCard({ name, description, technologies, github, demo }) {
  return (
    <div className="project-card">
      <h3>{name}</h3>

      <p>{description}</p>

      <div className="project-tech">
        {technologies.map((tech) => (
          <span className="badge" key={tech}>
            {tech}
          </span>
        ))}
      </div>

      <div className="project-links">
        <a href={github} target="_blank" rel="noreferrer">
          GitHub
        </a>

        {demo && (
          <a href={demo} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;