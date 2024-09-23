import React from "react";
import { navItems } from "@/data";
import { Hero } from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { About } from "@/components/About";
import CommunityAction from "@/components/CommunityAction";
import ContactUs from "@/components/ContactUs";




export default function Home(){
  return (
    <div className="flex h-screen px-10 max-w-7xl max-h-lvh">
     <FloatingNav navItems={navItems}/>
      <div className="flex-col md:flex-row max-w-7xl justify-center items-center">
        <div className="w-[90vw] md:ml-[40px] -ml-[20px] realtive mb-40">
          <Hero />
          <About />
          <CommunityAction />
          <ContactUs  />
        </div>
      </div>
    </div>
  );
};

