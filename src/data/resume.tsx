import { Icons } from "@/components/icons";

export const DATA = {
  name: "Danilo Mello",
  initials: "DM",
  url: "https://daniilo.dev",
  location: "Uberlândia MG, Brazil",
  description: "Front-end Engineer. I love building things and helping people...",
  summary: "Let me tell you my story...",
  avatarUrl: "/me.png",
  skills: [
    "React & Next.js",
    "Typescript",
    "Node.js",
    "WordPress",
    "Docker",
  ],
  contact: {
    email: "oi@daniilo.dev",
    tel: "+55 34 98442-4459",
    social: {
      GitHub: {
        url: "https://github.com/daniilomello",
        icon: Icons.github,
      },
      LinkedIn: {
        url: "https://www.linkedin.com/in/daniilomello/",
        icon: Icons.linkedin,
      },
    },
  },
} as const;
