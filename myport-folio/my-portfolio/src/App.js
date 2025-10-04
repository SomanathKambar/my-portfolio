import React, { Component } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./css/App.css";

class App extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className="container header-inner">
            <div className="logo">Somanath Kambar</div>
            <nav className="nav">
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </header>

        <main className="container main-content">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>

        <footer className="footer">
          © {new Date().getFullYear()} Somanath Kambar — Built with React
        </footer>
      </div>
    );
  }
}

export default App;


