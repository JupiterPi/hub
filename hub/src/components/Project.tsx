import className from "classnames";
import {Project} from "@/data";
import "./Project.scss";

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
      <div className="chips">
        {project.githubRepo != null && (
          <a className="chip" href={"https://github.com/JupiterPi/" + project.githubRepo} target="_blank">
            <img src="/icons/github_icon.png" height={18} />
            {project.githubRepo}
          </a>
        )}
        {project.links?.map(link => (
          <a key={link.url} className="chip" href={link.url} target="_blank">
            <img src="/icons/link_icon.png" height={15} />
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
}