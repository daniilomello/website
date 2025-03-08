import { Icons } from "@/components/icons";

export const DATA = {
  name: "Danilo Mello - Full Stack Developer",
  initials: "DM",
  url: "https://daniilo.dev",
  location: "Uberlândia MG, Brazil",
  description: "I'm a full-stack developer based in Uberlândia, Brazil. I have a passion for creating innovative solutions that make a difference. I can help create web and mobile apps using the latest technologies.",
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
