import React, { Component } from "react";

class Projects extends Component {
  render() {
    const demoProjects = [
      { title: "VideoPlayer", desc: "Multi-format video player using ExoPlayer", link: "#" },
      { title: "ChatDemoUsingGetStream", desc: "Realtime chat demo", link: "#" },
      { title: "KotlinSpringBootSample", desc: "Backend sample with Kotlin Spring Boot", link: "#" }
    ];

    return (
      <section id="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          {demoProjects.map((p, i) => (
            <div key={i} className="project-card">
              <div className="project-title">{p.title}</div>
              <p>{p.desc}</p>
              <a href={p.link}>View repo</a>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Projects;
