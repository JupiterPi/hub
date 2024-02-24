import React from 'react';
import './App.scss';
import {projects} from "./data";
import {ProjectCard} from "./Project";
import {icons} from "./icons";
import {Navbar} from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="centered">

        <section id="hello-section">
          <h1>Hi, I am <div>JupiterPi</div></h1>
          <p>
            I'm a student, software developer, designer and musician from Mannheim, Germany.
          </p>
          <div className="chips">
            <a href="https://www.youtube.com/@jupiterpi" target="_blank" id="youtube" className="chip">
              <img src={icons.youtube} style={{height: 15}} />
              @JupiterPi
            </a>
            <a href="https://github.com/JupiterPi" target="_blank" className="chip">
              <img src={icons.github} style={{height: 18}} />
              @JupiterPi
            </a>
          </div>
        </section>

        <section id="projects-section">
          <h2>Projects</h2>
          <div>
            {projects.slice(0, 2).map(project => <ProjectCard project={project}/>)}
            <div style={{display: "flex", justifyContent: "center"}}>
              <a href="/projects" className="chip">Show more</a>
            </div>
          </div>
        </section>

        <section id="music-section">
          <h2>Music</h2>
          Added here soon...
        </section>

      </div>
    </>
  );
}

export default App;
