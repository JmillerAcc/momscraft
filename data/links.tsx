import React from "react";
import { IconBrandTabler, IconUserBolt, IconSettings, IconArrowLeft } from "@tabler/icons-react";

interface Link {
  name: string;
  link: string;

}

export const links: Link[] = [
  {
    name: "Projects",
    link: "#projects",

  },
  {
    name: "Clients",
    link: "#clients",

  },
  {
    name: "About Us",
    link: "#about",

  },
  {
    name: "Blog",
    link: "#blog",

  },
  {
    name: "Contact",
    link: "#contact",

  },
];