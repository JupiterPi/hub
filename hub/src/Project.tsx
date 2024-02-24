import {Project} from "./data";
import className from "classnames";
import {icons} from "./icons";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card">
      <div className="card-title">
        {project.name}
        <div className={className("project-status-chip", {
          "status-in-progress": project.status === "in progress",
          "status-done": project.status === "completed",
          "status-paused": project.status === "paused"
        })}>
          {project.status}
        </div>
      </div>
      {project.description}
      <div style={{display: "flex", gap: "10px"}}>
        {project.githubRepo != null && (
          <a className="chip" href={"https://github.com/JupiterPi/" + project.githubRepo} target="_blank">
            <img src={icons.github} height={18} />
            {project.githubRepo}
          </a>
        )}
        {project.links?.map(link => (
          <a className="chip" href={link.url} target="_blank">
            <img src={icons.link} height={15} />
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
}