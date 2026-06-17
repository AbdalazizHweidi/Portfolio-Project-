function Technologies() {
  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git",
    "GitHub",
    "Bootstrap / Tailwind CSS",
    "VS Code",
  ];

  return (
    <section className="technologies" id="technologies">
      <h2>Technologies & Tools</h2>

      <div className="badge-container">
        {technologies.map((tech) => (
          <span className="badge" key={tech}>
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Technologies;