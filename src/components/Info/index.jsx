import "./style.css";

import React from "react";

export default function Info() {
  return (
    <div>
      <img className="perfil-photo" src="../images/DBC_PFP.jpg" />
      <h1 className="person-name">Abdurrahman Qureshi</h1>
      <h3 className="profission">Junior Front-End Developer</h3>
      <h4 className="site">scythethroughtheheart05@gmail.com</h4>
      <div className="websites">
        <a
          href="mailto:scythethroughtheheart05@gmail.com"
          target="_blank"
          className="email"
        >
          <img src="../images/email-logo.png" />
          <p>Email</p>
        </a>
        <a
          href="https://www.linkedin.com/in/abdurrahman-qureshi-a10349282"
          target="_blank"
          className="linkedin"
        >
          <img src="../images/linkedin-logo.png" />
          <p>Linkedin</p>
        </a>
      </div>
    </div>
  );
}
