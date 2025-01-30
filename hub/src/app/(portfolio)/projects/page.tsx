import {projects} from "@/data";
import {ProjectCard} from "@/components/Project";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Projects | JupiterPi"
};

export default function ProjectsPage() {
  return (
    <>
      <section>
        <h2>Projects</h2>
        <div className="layout-column-20">
          {projects.map(project => <ProjectCard key={project.name} project={project}/>)}
          <div className="center-horizontally">
            <a href="https://github.com/JupiterPi?tab=repositories" className="chip">More on GitHub</a>
          </div>
        </div>
      </section>
    </>
  );
}