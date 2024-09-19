'use client';
import { cn } from "@/lib/utils";
import { useState } from "react";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
  img: string;
  imgClassName: string;
  titleClassName: string;
  spareImg: string;
}) => {


 const handleEmailDonate = () => {
  window.location.href = 'mailto:lavonne0422@gmail.com?subject=I%20Wish%20to%20Donate&body=Hello%20Lavonne%2C%0A%0AI%20am%20interested%20in%20donating%20to%20Crafting%20Joy.%20Please%20let%20me%20know%20how%20I%20can%20help.%0A%0AThank%20you%2C';
};

  const handleEmailVolenteer = () => {
    window.location.href = 'mailto:lavonne0422@gmail.com?subject=I%20Wish%20to%20Volunteer&body=Hello%20Lavonne%2C%0A%0AI%20am%20interested%20in%20volunteering%20for%20Crafting%20Joy.%20Please%20let%20me%20know%20how%20I%20can%20help.%0A%0AThank%20you%2C';
  };
  return (
    <div
      className={cn(
          "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 bg-gray-600",
        className
      )}
    >
      <div className={`${id === 6 && 'flex justify-center'} h-full'`}>
        <div className="w-full h-full absolute ">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover w-full h-full object-center")}
            />
          )}
      </div>
        
        <div className={`absolute right-0 -bottom-5 ${id ===5 && 'w-full opacity-80'}`}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={"object-cover w-full h-full object-center"}
            />
          )}
        </div>
        {id === 6 && (
          <div className="absolute right-0 -bottom-5">
            <img
              src={spareImg}
              alt={spareImg}
              className={"object-cover w-full h-full object-center"}
            />
          </div>
        )}

          {id === 1 && (
          <div className="absolute right-0 -bottom-5">
            <img
              src={spareImg}
              alt={spareImg}
              className={cn(imgClassName, "object-cover w-1/2 h-1/2 object-center")}
            />
          </div>
        )}
        <div className={cn(
          titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
        )}>

          <div className="font-sans font-bold text-white text-lg lg:text-3xl max-w-96 z-10">
            {title}
         </div> 
          <div className="font-sans text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10 ">
            {description}
          </div>
        {id === 2 && (
            <div className="relative">
              <div className="absolute top-20 right-0 flex">
                <button className="bg-purple rounded-xl p-3" onClick={handleEmailDonate}>
                  Contact us!
                </button>
              </div>
            </div>
          )}
      {id === 3 && (
      <div className="flex gap-1 lg:gap-3 w-fit absolute -right-3 lg:-right-1 lg:top-0 ">
        <div className="flex flex-col gap-3 lg:gap-6 lg:mt-0">
          {['Isaiah 777', 'Christmas Child', 'Trotter',].map((item) => (
            <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50  rounded-lg text-center bg-white ">
              {item}
            </span>
          ))}
          <span className="py-4 px-3 rounded-lg text-center bg-white" />
        </div>
        <div className="flex flex-col gap-3 lg:gap-6">
            <span className="py-4 px-3 rounded-lg text-center bg-white" />
          {['Food', 'Pantry', 'Give',].map((item) => (
            <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50  rounded-lg text-center bg-white">
              {item}
            </span>
          ))}

        </div>
        <div className="absolute top-40 -left-40 flex">
            <button className="bg-purple rounded-xl p-3" onClick={handleEmailVolenteer}>
                  Contact us!
            </button>
          </div>
      </div>
      )}
      {id === 6 && (
        <div className='mt-5 relative'>
            <div className={`absolute -bottom-5 right-0`}>
       
            </div>
            
        </div>
      )} 
      </div>
    </div>
  </div>
  );
};
