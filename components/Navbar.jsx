//old version responsiveness

// "use client";

// import Image from "next/image";
// import { assets } from "@/public/assets/assets";
// import React, { useState } from "react";
// import { useTheme } from "next-themes";


// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const { theme, setTheme } = useTheme();
  

//   return (
//     <>
//       {/* Background Image */}
//       <div className="fixed top-0 right-0 w-full sm:w-11/12 -z-10 pointer-events-none ">
      
//       </div>

//       {/* Navbar */}
//       <nav className="w-full fixed top-0 left-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center gap-10 z-20  dark:bg-black/70 backdrop-blur-md text-black lg:dark:text-white">
        
//         {/* Logo */}
//         <a href="#top">
//           <Image 
//           src={assets.logo}
//            alt="logo" 
//            width={192} 
//            height={45} 
//            className={`${theme === "dark"?"invert":""}`}
//            />
//         </a>

//         {/* Desktop Menu */}
//         <ul className={`hidden md:flex items-center gap-8 rounded-full px-10 py-3  -blur shadow-sm  ${theme === "dark"?"bg-white/50 text-white":"dark:bg-gray-800/50 backdrop text-black "}`}>
//           <li><a href="#top">Home</a></li>
//           <li><a href="#about">About me</a></li>
//           <li><a href="#services">Services</a></li>
//           <li><a href="#work">My work</a></li>
//           <li><a href="#contact">Contact Me</a></li>
//         </ul>

//         {/* Right Side */}
//         <div className="flex items-center gap-4 ml-auto">

//           {/* Dark Mode Toggle */}
//           <button
//             onClick={() =>
//               setTheme(theme === "dark" ? "light" : "dark")
//             }
//             className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
//           >
//             <Image
//               src={
//                 theme === "dark"
//                   ? assets.sun_icon
//                   : assets.moon_icon
//               }
//               alt="theme icon"
//               width={24}
//               height={24}
//             />
//           </button>

      


//  <a
//   href="#contact"
//   className={`hidden lg:flex items-center gap-3 px-6 py-2 
//             border border-gray-500 
//              hover:scale-105 transition rounded-full ${theme === "dark"?"bg-white text-black":"bg-black text-white"}`}
// >
//   Contact
//   <Image
//     src={assets.arrow_icon_dark}
//     alt="arrow"
//     width={12}
//     height={12}
//     className={`${theme === "dark" ? "invert" : ""}`}
//   />
// </a> 





//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setMenuOpen(true)}
//             className={`block md:hidden p-2 rounded-md`}
//           >
//             <Image
//               src={assets.menu_black}
//               alt="menu"
//               width={24}
//               height={24}
//               className={`${theme === "dark"?"invert":""}`}
//             />
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
 

//    <div
//   className={`fixed top-0 right-0 h-full w-2/3 shadow-lg z-50 transform transition-transform duration-300  ${
//     menuOpen ? "translate-x-0" : "translate-x-full"
//   }
//   ${theme === "dark"?"!bg-black/90 !text-white":"bg-white text-gray-900"}
//   `}
// >
//   {/* Background overlay */}
//   <div className="absolute inset-0 -z-10">
//     <div className="absolute inset-0"></div>
//   </div>

//   {/* Content */}
//   <div className="relative h-full flex flex-col bg-transparent text-inherit">
    
//     {/* Header */}
//     <div className="flex items-center justify-between px-6 pt-8 pb-4">
//       <button
//         onClick={() => setMenuOpen(false)}
//         className="text-2xl"
//       >
//         ✖
//       </button>
//       <div className="w-6"></div>
//     </div>

//     {/* Menu Links */}
//     <div className="flex flex-col gap-5 p-6">
//       <a href="#top" onClick={() => setMenuOpen(false)}>Home</a>
//       <a href="#about" onClick={() => setMenuOpen(false)}>About me</a>
//       <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
//       <a href="#work" onClick={() => setMenuOpen(false)}>My work</a>
//       <a href="#contact" onClick={() => setMenuOpen(false)}>Contact Me</a>
//     </div>

//   </div>
// </div>
//     </>
//   );
// };

// export default Navbar;


//new version responsiveness

"use client";

import Image from "next/image";
import { assets } from "@/public/assets/assets";
import React, { useState } from "react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <>
      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Navbar */}
      <nav className="w-full fixed top-0 left-0 px-5 sm:px-8 md:px-10 lg:px-[8%] py-4 flex items-center gap-4 md:gap-8 z-50 
      bg-white/80 dark:bg-black/70 backdrop-blur-md text-black dark:text-white">

        {/* Logo */}
        <a href="#top">
          <Image
            src={assets.logo}
            alt="logo"
            width={150}
            height={40}
            className="dark:invert"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-6 py-2 shadow-sm 
        bg-white/70 dark:bg-gray-800/70 backdrop-blur-md">
          <li><a href="#top">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Right */}
        <div className="flex items-center gap-3 ml-auto">

          {/* Theme */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <Image
              src={theme === "dark" ? assets.sun_icon : assets.moon_icon}
              alt="theme"
              width={20}
              height={20}
            />
          </button>

          {/* Contact */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-2 px-5 py-2 border border-gray-500 rounded-full 
            bg-black text-white dark:bg-white dark:text-black hover:scale-105 transition"
          >
            Contact
            <Image
              src={assets.arrow_icon_dark}
              alt="arrow"
              width={12}
              height={12}
              className="dark:invert"
            />
          </a>

          {/* Mobile Menu */}
          <button
            onClick={() => setMenuOpen(true)}
            className="block md:hidden p-2"
          >
            <Image
              src={assets.menu_black}
              alt="menu"
              width={24}
              height={24}
              className="dark:invert"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-[300px] z-50 shadow-lg transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } bg-white dark:bg-black text-black dark:text-white`}
      >
        <div className="flex items-center justify-between px-6 pt-8 pb-4">
          <button onClick={() => setMenuOpen(false)} className="text-2xl">✖</button>
        </div>

        <div className="flex flex-col gap-6 p-6 text-lg">
          <a href="#top" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;