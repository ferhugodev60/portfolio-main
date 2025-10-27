import { Trophy } from "lucide-react";

export type SideProjectProps = {
  id: string;
  Logo: typeof Trophy;
  title: string;
  description: string;
  url: string;
  new?: boolean;
};

const SIDE_PROJECTS: SideProjectProps[] = [
  {
    id: "this-portfolio",
    Logo: Trophy,
    title: "This portfolio",
    description: "React, TypeScript, TailwindCSS, Next.js",
    url: "/portfolio.pdf",
    new: true,
  },
  {
    id: "fc-barcelona-project",
    Logo: Trophy,
    title: "FC Barcelona project",
    description: "PHP, HTML, CSS",
    new: false,
    url: "/fcb.pdf",
  },
  {
    id: "travis-scott-website-redesign",
    Logo: Trophy,
    title: "Travis Scott website redesign",
    description: "PHP, HTML, CSS",
    new: false,
    url: "/travis.pdf",
  },
  {
    id: "my-first-portfolio",
    Logo: Trophy,
    title: "My first portfolio",
    description: "JS, HTML, CSS",
    url: "https://hugo-ferreira.000webhostapp.com/",
    new: false,
  },
  {
    id: "my-first-portfolio",
    Logo: Trophy,
    title: "In progress...",
    description: "React, Next.js, TailwindCSS, Node, Express",
    url: "",
    new: false,
  },
];

export default SIDE_PROJECTS;
