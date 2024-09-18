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
    link: "https://algochurn.com",
    thumbnail:
      "/lightpumpkin.jpg",
  },
  {
    title: "Dark Pumpkin",
    link: "https://ui.aceternity.com",
    thumbnail:
      "/darkpumpkin.jpg",
  },
  {
    title: "Faith & Fears",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "/faithFears.jpg",
  },
  {
    title: "Welcome Sign",
    link: "https://smartbridgetech.com",
    thumbnail:
      "/welcome.jpg",
  },
  {
    title: "Reefs",
    link: "https://renderwork.studio",
    thumbnail:
      "/Reefs.jpg",
  },

  {
    title: "Jack o Lanterns",
    link: "https://cremedigital.com",
    thumbnail:
      "/jacko.jpg",
  },
  {
    title: "Out Door Decor",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "/outdoors.jpg",
  },
  {
    title: "Scare Crows",
    link: "https://invoker.lol",
    thumbnail:
      "/scarecrow.jpg",
  },
  {
    title: "More Outdoor Decor",
    link: "https://efreeinvoice.com",
    thumbnail:
      "/outdoors.jpg",
  },
   {
    title: "Reefs",
    link: "https://renderwork.studio",
    thumbnail:
      "/Reefs.jpg",
  },
];
