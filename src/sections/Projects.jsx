import ProjectCard from "../components/ProjectCard";

function Projects() {
  const projects = [
    {
      name: "Personal Portfolio Website",
      description:
        "A responsive portfolio website built with React to present my background, skills, projects, and contact information.",
      technologies: ["React", "JavaScript", "CSS"],
      github: "https://github.com/AbdalazizHweidi/Portfolio-Project-.git",
      demo: "",
    },
    {
      name: "Café Landing Page",
      description:
        "A modern landing page for a café with sections for menu highlights, about, location, and contact.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/AbdalazizHweidi/Caf-67.git",
      demo: "",
    },
    {
      name: "Digital Menu Website",
      description:
        "A simple digital menu interface for restaurants, designed to help customers browse items clearly on mobile and desktop.",
      technologies: ["React", "CSS"],
      github: "https://github.com/AbdalazizHweidi/javascript1.git",
      demo: "",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
            demo={project.demo}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;