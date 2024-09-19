"use client";
import React from "react";
import { HeroParallax } from '@/components/ui/hero-parrallax'

export function Hero() {
  return(
   <div className="flex justify-center items-center relative ">
    <HeroParallax products={products} />
   </div> 
  );
}
export const products = [
  
  {
    title: "Pumpkin White",
    link: "#donate",
    thumbnail:
      "/lightpumpkin.jpg",
  },
  {
    title: "Dark Pumpkin",
    link: "#donate",
    thumbnail:
      "/darkpumpkin.jpg",
  },
  {
    title: "Faith & Fears",
    link: "#donate",
    thumbnail:
      "/faithFears.jpg",
  },
  {
    title: "Welcome Sign",
    link: "#donate",
    thumbnail:
      "/welcome.jpg",
  },
  {
    title: "Reefs",
    link: "#donate",
    thumbnail:
      "/Reefs.jpg",
  },

  {
    title: "Jack o Lanterns",
    link: "#donate",
    thumbnail:
      "/jacko.jpg",
  },
  {
    title: "Out Door Decor",
    link: "#donate",
    thumbnail:
      "/outdoors.jpg",
  },
  {
    title: "Scare Crows",
    link: "#donate",
    thumbnail:
      "/scarecrow.jpg",
  },
  {
    title: "More Outdoor Decor",
    link: "#donate",
    thumbnail:
      "/outdoors.jpg",
  },
   {
    title: "Reefs",
    link: "#donate",
    thumbnail:
      "/Reefs.jpg",
  },
];
