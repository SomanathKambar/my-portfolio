import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <h2>Contact</h2>
        <p>
          Phone: <a href="tel:+918861930437">8861930437</a> • Email:{" "}
          <a href="mailto:somu23.sk@gmail.com">somu23.sk@gmail.com</a>
        </p>
        <div className="contact-links">
          <a href="https://github.com/SomanathKambar">GitHub</a>
          <a href="https://www.linkedin.com/in/somanath-kambar-b90537126">LinkedIn</a>
          <a href="https://medium.com/@kambarsomanath">Medium</a>
        </div>
      </section>
    );
  }
}

export default Contact;
