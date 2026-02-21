import { useEffect, useState } from "react";

function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
  fetch("https://api.github.com/users/Nihal545/repos?per_page=100")
    .then((res) => res.json())
    .then((data) => {
      const sorted = data.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
      setRepos(sorted);
    })
    .catch((err) => console.log(err));
}, []);

  return (
    <section id="projects">
      <h2>My GitHub Projects</h2>

      <div className="projects-container">
        {repos.map((repo) => (
          <div key={repo.id} className="project-card">
            <h3>{repo.name}</h3>
            <p>{repo.description || "No description available."}</p>
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              View Code
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;