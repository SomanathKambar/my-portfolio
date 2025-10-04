import React, { Component } from "react";
import avatar from "../assets/avatar.jpg"; // optional photo

class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <div className="hero-content">
          <h1>Hi — I’m Somanath. Android Developer (Kotlin & Java)</h1>
          <p>
            I build production-grade Android apps, media players, and POS
            solutions. Experienced with Jetpack Compose, ExoPlayer, gRPC,
            WorkManager, and Clean Architecture.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              See Projects
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1pcxi0Y_Rxw2xLfrqB1KdWyhE1byR8wn_"
              className="btn btn-outline"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div>
          <img src={avatar} alt="Somanath" />
        </div>
      </section>
    );
  }
}

export default Hero;
