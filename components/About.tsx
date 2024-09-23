"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";

export function About() {
  return (
    <div className="md:-mt-[10%] mt-[20%] mb-40" id="about">
        <h1 className="text-center mb-14 text-3xl font-bold tracking-widest">Meet the woman behind Crafting <span className="text-purple font-bold">Joy</span></h1>

       <div className="grid grid-cols-1 lg:grid-cols-3 gap-4  mx-auto w-full ">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Lavonne Griepenstroh
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Mother of 4, grandmother to many, and a lover of all things biblical. Her biggest passion is to see people come to know the Lord and Savior Jesus Christ.
          </p>
        </div>
        <Image
          src="/MomsKids.jpg"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[10%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
         A Nurse, A Caregiver, A Friend, A Wife, A Mother
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Love has always driven Lavonne.  She has devoted her life to helping others and has always been a beacon of light to those around her.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Christian Blogger, Devotional Writer, Author, and Crafter
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
           Lavonne has always had a passion for writing and crafting.  She has had intrest in Christian Blogs for many years and has written many devotionals. She loves to have a nice cup of coffee and write about the Lord.
          </p>
        </div>
        <Image
          src="/HerPic.jpg"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[5%] md:-top-[50%] object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
      <div className="w-full rounded-xl p-5 mt-3 color bg-red-800">
         <div>
            <h1 className="text-white text-center text-4xl font-mono">Our Mission</h1>
              <p className="text-lg text-center text-white">
                At Crafting Joy, our mission is to find joy in the midst of pain and to work together with our community to spread the Gospel. We believe that through faith, creativity, and compassion, we can bring light to the darkest moments and share the love of Jesus Christ with those around us. Join us in our journey to inspire, uplift, and make a positive impact in the world.
              </p>
          </div>
      </div> 
    </div>
    
  );
}
