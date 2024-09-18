import React from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/Sidebar";
import { IconBrandTabler, IconUserBolt, IconSettings, IconArrowLeft } from "@tabler/icons-react";
import { links } from "@/data/links";
import { Hero } from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { About } from "@/components/About";




export default function Home(){
  return (
    <div className="flex h-screen px-10">
      <FloatingNav navItems={links} />
      <div className="flex-col md:flex-row max-w-7xl justify-center items-center">
        <div className="w-[90vw] md:ml-[40px]">
          <Hero />
          <About />
        </div>
      </div>
    </div>
  );
};

