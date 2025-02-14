import "./page.scss";
import {projects} from "@/data";
import {ProjectCard} from "@/components/Project";
import Link from "next/link";

export default function Home() {
  return (
    <>

      <section id="hello-section">
        <h1>Hi, I am <div>JupiterPi</div></h1>
        <p>
          I'm a software-developing and music-making student from Mannheim, Germany.
        </p>
        <div className="chips">
          <a href="https://www.youtube.com/@jupiterpi" target="_blank" id="youtube" className="chip">
            <img src="/icons/youtube_icon.png" style={{height: 15}}/>
            @JupiterPi
          </a>
          <a href="https://github.com/JupiterPi" target="_blank" className="chip">
            <img src="/icons/github_icon.png" style={{height: 18}}/>
            @JupiterPi
          </a>
          <a href="mailto:hello@jupiterpi.de" className="chip">
            <img src="/icons/mail_icon.png" style={{height: 14}}/>
            hello@jupiterpi.de
          </a>
        </div>
        <div className="card" id="filen">
          <img src="/icons/filen_icon.png"/>
          <div>
            I'm a developer at Filen:
            <br/>
            Zero-knowledge end-to-end encrypted cloud storage
          </div>
          <div>
            <a href="https://filen.io/" target="_blank" className="chip">Try for free</a>
          </div>
        </div>
      </section>

      <section>
        <h2>Projects</h2>
        <div className="layout-column-20">
          {projects.slice(0, 3).map(project => <ProjectCard key={project.name} project={project}/>)}
          <div className="center-horizontally">
            <Link href="/projects" className="chip">Show more</Link>
          </div>
        </div>
      </section>

      <section>
        <h2>Music</h2>
        Added here soon...
      </section>

    </>
  );
}
