import { Mail, Github, Linkedin, X, FileDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ProfileInfo {
  name: string;
  title: string;
  about: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
  showText?: boolean;
}

export const PROFILE_INFO: ProfileInfo = {
  name: "Tekraj Awasthi",
  title:
    "Ex - Senior Data & Machine Learning Engineer, Building Generative AI solutions at Scale, and Swimming in the sea of LLM & RL",
  about: `Ex - Senior Data & Machine Learning Engineer, Building Generative AI solutions
        (Language Model, RAG, 
        and Computer Vision).`,
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Email",
    url: "mailto:tekrajawasthi15@gmail.com",
    icon: Mail,
  },
  {
    name: "GitHub",
    url: "https://github.com/Tekraj15",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/Tekraj15",
    icon: Linkedin,
  },
  {
    name: "X",
    url: "https://x.com/trawasthi_ai",
    icon: X,
  },
  {
    name: "CV",
    url: "/cv.pdf",
    icon: FileDown,
    showText: true,
  },
];
