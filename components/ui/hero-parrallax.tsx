"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  // New motion value for the message opacity
  const messageOpacity = useSpring(
    useTransform(scrollYProgress, [0.1, 0.3], [0, 1]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[260vh] py-28 overflow-hidden antialiased relative flex flex-col self-auto [perspective:600px] [transform-style:preserve-3d]"
    >
      <Header />

      {/* New message */}
      <motion.div
        style={{ opacity: messageOpacity }}
          className="text-4xl font-bold border bg-purple opacity-40 h-[200px] w-full rounded-xl text-center flex items-center justify-center text-black my-10 absolute top-[38%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
      <div className="md:w-2/3 flex-wrap">
          <h1 className="mb-4 text-white">&quot;Joy will come in the morning&quot;</h1>
        <p className="text-black text-sm md:text-lg">
          Crafting brings <span className="text-white">joy</span> and <span className="text-white">peace</span> even in the toughest moments. Our recent projects reflect this mission, and we would love for you to join us in this journey. Take a look at our latest creations and find <span className="text-white">joy</span> in every imperfection.
        </p>
      </div>
      </motion.div>

      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 mb-10 ">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
   <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
  <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
    Welcome to Crafting <span className="text-purple flex-wrap">Joy</span> <br /> A <span className="text-purple">Christian</span> Community for finding <span className="text-purple">joy </span>in the midst of <span className="text-purple">pain</span>.
  </h1>
  <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
    Crafting has the power to bring <span className="text-purple font-bold">joy</span> and <span className="text-purple font-bold">peace</span> even in the toughest moments. Through the act of creating, we find solace and a sense of accomplishment that helps us navigate through life&apos;s challenges. Our community is dedicated to supporting each other in this journey, finding <span className="text-purple font-bold">joy</span> in every creation while spreading the <span className="text-purple font-bold">Gospel</span>.
  </p>
</div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};