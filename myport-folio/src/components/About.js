import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <section id="about">
        <h2>About</h2>
        <p>
          Results-driven Software Engineer Developer with 7+ years of experience in Kotlin
          and Java. Proficient in mobile & Android TV development, Jetpack
          components, ExoPlayer, monetization and native integrations.
        </p>

        <div className="about-grid">
          <div className="card">
            <h4>Primary Skills</h4>
            <ul>
              <li>Kotlin, Java, Coroutines</li>
              <li>Jetpack Compose, ViewModel, Room</li>
              <li>ExoPlayer, Brightcove, IMA</li>
            </ul>
          </div>
          <div className="card">
            <h4>Tools & Infra</h4>
            <ul>
              <li>Retrofit, Ktor, gRPC</li>
              <li>Firebase, Jenkins, Gradle</li>
              <li>Charles, Postman</li>
            </ul>
          </div>
          <div className="card">
            <h4>Education</h4>
            <p>B.E. Computer Science — VTU, Belgaum</p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
