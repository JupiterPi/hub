export type ProjectStatus = "completed" | "paused" | "in progress";

export interface Project {
  name: string;
  status: ProjectStatus;
  description: string;
  githubRepo?: string;
  links?: {url: string, title: string}[];
}

export const projects: Project[] = [
  {
    name: "Filen CLI",
    status: "in progress",
    description: "The Filen CLI is a text-based way of interacting with your Filen cloud storage.",
    links: [{url: "https://github.com/FilenCloudDienste/filen-cli", title: "FilenCloudDienste/filen-cli"}]
  },
  {
    name: "Cranberri",
    status: "in progress",
    description: "Cranberri is a Minecraft microcontrollers mod that can be used in schools.",
    githubRepo: "cranberri",
    links: [{url: "https://cranberri.jupiterpi.de", title: "cranberri.jupiterpi.de"}]
  },
  {
    name: "Vocabulum",
    status: "paused",
    description: "Vocabulum is a Latin vocabulary trainer app.",
    githubRepo: "vocabulum-webapp",
    links: [{url: "https://vocabulum.de", title: "vocabulum.de"}]
  },
  {
    name: "Majesty Online",
    status: "completed",
    description: "Majesty Online is a realtime online multiplayer adaptation of the popular board game Majesty.",
    githubRepo: "majesty",
    links: [{url: "https://majesty.jupiterpi.de", title: "majesty.jupiterpi.de"}]
  },
  {
    name: "RedstoneLink",
    status: "completed",
    description: "RedstoneLink is a Minecraft mod that connects Redstone to physical electronics in real time.",
    githubRepo: "RedstoneLink"
  },
  {
    name: "verse",
    status: "paused",
    description: "verse is an experimental metaverse prototype.",
    githubRepo: "verse"
  },
  {
    name: "pilang",
    status: "paused",
    description: "pilang is a custom scripting language that can be embedded in JVM applications.",
    githubRepo: "pilang"
  },
  {
    name: "Filen Desktop Client Fork",
    status: "completed",
    description: "This fork of the Filen desktop client includes additional features such as physical .filenignore files.",
    githubRepo: "filen-desktop"
  }
]
