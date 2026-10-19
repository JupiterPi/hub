export type ProjectStatus = "completed" | "paused" | "in progress" | "current";

export interface Project {
  name: string;
  status: ProjectStatus;
  description: string;
  githubRepo?: string;
  links?: { url: string; title: string }[];
}

export const projects: Project[] = [
  {
    name: "Filen CLI",
    status: "current",
    description:
      "The Filen CLI is a text-based way of interacting with your Filen cloud storage.",
    githubRepo: "FilenCloudDienste/filen-rs",
    links: [
      {
        url: "https://github.com/FilenCloudDienste/filen-cli",
        title: "FilenCloudDienste/filen-cli (old)",
      },
    ],
  },
  {
    name: "Filen Relay",
    status: "current",
    description:
      "The Filen Relay provides a convenient way to serve your Filen Drive via HTTP/WebDAV/S3.",
    githubRepo: "FilenCloudDienste/filen-relay",
  },
  {
    name: "Thyme",
    status: "completed",
    description:
      "Thyme is a stopwatch in your taskbar with history, notes and a Kimai integration.",
    githubRepo: "JupiterPi/thyme",
  },
  {
    name: "Flies",
    status: "in progress",
    description:
      "Is that a typo? Apiring self-hosted notes app to replace Obsidian and Google Keep for me.",
    githubRepo: "JupiterPi/flies",
  },
  {
    name: "Cranberri (2023)",
    status: "completed",
    description:
      "Cranberri is a Minecraft microcontrollers mod that can be used in schools.",
    githubRepo: "JupiterPi/cranberri",
    links: [
      {
        url: "https://cranberri.jupiterpi.de",
        title: "cranberri.jupiterpi.de",
      },
    ],
  },
  {
    name: "Majesty Online (2024)",
    status: "completed",
    description:
      "Majesty Online is a realtime online multiplayer adaptation of the popular board game Majesty.",
    githubRepo: "JupiterPi/majesty",
    links: [
      { url: "https://majesty.jupiterpi.de", title: "majesty.jupiterpi.de" },
    ],
  },
  {
    name: "RedstoneLink (2021)",
    status: "completed",
    description:
      "RedstoneLink is a Minecraft mod that connects Redstone to physical electronics in real time.",
    githubRepo: "JupiterPi/RedstoneLink",
  },
];
