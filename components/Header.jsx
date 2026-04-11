

"use client";

import Image from "next/image";
import { assets } from "@/public/assets/assets";
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const Header = () => {
  const {theme,setTheme} = useTheme();
  return (
    <div className="text-center px-5 sm:px-10 lg:px-20 mt-32">

      {/* Profile Image */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src={assets.profile_img}
          alt="profile"
          width={128}
          height={128}
          className="rounded-full"
        />
      </motion.div>

      {/* Intro Text */}
      <motion.h3
        className="flex items-center justify-center gap-2 text-xl md:text-2xl mt-4 font-Ovo"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        I am Abdul Waheed 
        <Image src={assets.hand_icon} alt="hand" width={24} height={24} />
      </motion.h3>

      {/* Heading */}
      <motion.h1
        className="text-3xl sm:text-5xl lg:text-[66px] font-Ovo mt-4 leading-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        MERN Stack Developer & Problem Solver
      </motion.h1>

      {/* Description */}
      <motion.p
        className="max-w-2xl mx-auto mt-4 font-Ovo "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        A MERN stack developer is a software engineer specializing in building full-stack web applications using MongoDB, Express.js, React, and Node.js.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center mb-14 gap-4 mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >

        {/* <a
          href="#contact"
          className="px-8 py-3 border border-black rounded-full bg-black text-white flex items-center gap-2 hover:scale-105 transition"
        >
          Contact Me
          <Image
            src={assets.right_arrow_white}
            alt="arrow"
            width={16}
            height={16}
          />
        </a> */}

        {/* <a 
  href="#contact"
  className="px-8 py-3 border rounded-full 
        dark:bg-white
           
             flex items-center gap-2 
             hover:scale-105 transition"
>
  Contact Me
  <Image
    src={assets.right_arrow_white}
    alt="arrow"
    width={16}
    height={16}
   
  />
</a> */}

<a 
  href="#contact"
  className={`px-8 py-3 rounded-full 
  flex items-center gap-2 
  font-medium
 
  shadow-md hover:shadow-xl
  transition-all duration-300 
  hover:scale-105 hover:brightness-110 ${theme === "dark"?"bg-white text-black":"bg-black text-white"}`}
>
  Contact Me

  <Image
    src={assets.arrow_icon}
    alt="arrow"
    width={12}
    height={12}
    className={`${theme === "dark"?"invert":"invert brightness-0"}`}
  />
</a>




        <a
          href="/sample-resume.pdf"
          download
          className="px-8 py-3 border border-gray-500 rounded-full flex items-center gap-2 hover:scale-105 transition"
        >
          My Resume
          <Image
            src={assets.download_icon}
            alt="download"
            width={16}
            height={16}
            className={`${theme === "dark"?"invert brightness-0":""}`}
          />
        </a>

      </motion.div>

    </div>
  );
};

export default Header;
