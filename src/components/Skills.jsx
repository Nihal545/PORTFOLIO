function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Node.js",
    "Express.js", "MongoDB", "Next.js", "SQL", "MySQL", "Authentication", "Autherization", "Bootstrap","web designing", "next.js", "Postgray","MVC","GUI","API Integration","Version Control (Git)","Postman","Debugging","GitHub","Rest","AWS"
  ];

  return (
    <section id="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;