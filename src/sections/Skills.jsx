function Skills() {
  const skills = [
    "Frontend Development",
    "Responsive Design",
    "Component-Based Architecture",
    "UI/UX Basics",
    "Problem Solving",
    "Team Collaboration",
    "Clean Code",
  ];

  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>

      <div className="grid">
        {skills.map((skill) => (
          <div className="card" key={skill}>
            <h3>{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;