import "./page.scss";
import {projects} from "@/data";
import {ProjectCard} from "@/components/Project";

export default function Home() {
  return (
    <>

      <section id="hello-section">
        <h1>Hi, I am <div>JupiterPi</div></h1>
        <p>
          I&apos;m a student, software developer, designer and musician from Mannheim, Germany.
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
        </div>
      </section>

      <section>
        <h2>Projects</h2>
        <div className="layout-column-20">
          {projects.slice(0, 2).map(project => <ProjectCard key={project.name} project={project}/>)}
          <div className="center-horizontally">
            <a href="/projects" className="chip">Show more</a>
          </div>
        </div>
      </section>

      <section id="music-section">
        <h2>Music</h2>
        Added here soon...
      </section>

    </>
  );
}
