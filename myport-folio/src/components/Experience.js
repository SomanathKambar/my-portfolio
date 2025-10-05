import React, { Component } from "react";

class Experience extends Component {
  render() {
    const roles = [
      {
        company: "Ovyo Tech Services (Freelance) — 2025",
        title: "Android Developer",
        desc: "Ad integration (Google IMA + Brightcove), WorkManager downloads, STB/TV apps."
      },
      {
        company: "OneHubPOS — Apr 2024 - Jan 2025",
        title: "Android Developer",
        desc: "POS systems, gRPC, Ktor, payments integration."
      },
      {
        company: "Totality Corp — Jan 2023 - Apr 2024",
        title: "Software Dev",
        desc: "AI tool suite, Jetpack Compose, TensorFlow Lite."
      },
      {
        company: "Jio Platforms — Oct 2018 - Nov 2021",
        title: "Software Engineer",
        desc: "Android TV browser components, multi-language support, search suggestions."
      }
    ];

    return (
      <section id="experience">
        <h2>Experience</h2>
        {roles.map((r, i) => (
          <div key={i} className="experience-item">
            <div className="company">{r.company}</div>
            <div className="role">{r.title}</div>
            <p>{r.desc}</p>
          </div>
        ))}
      </section>
    );
  }
}

export default Experience;
