
// "use client"
// import { assets, workData } from '@/public/assets/assets';
// import Image from 'next/image';
// import React from 'react';
// import { useTheme } from 'next-themes';


// const Work = () => {
//   console.log(workData);
//   const {theme} = useTheme();
//   return (
//     <div id='work' className='w-full px-6 sm:px-10 lg:px-[12%] py-16 scroll-mt-20'>


//       <h2 className='text-center text-4xl sm:text-5xl font-Ovo'>
//         My Latest Work
//       </h2>

//       <p className={`text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-sm sm:text-base ${theme === "dark"?"text-gray-300":""}`}>
//         Welcome to my web development portfolio! Explore a collection of projects 
//         showcasing my expertise in front-end development.
//       </p>

//       {/* Projects Grid */}
//       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>

//         {workData.map((project, index) => (
          
//           <div 
//             key={index} 
//             className='group relative h-64 sm:h-72 lg:h-80 rounded-xl overflow-hidden cursor-pointer 
           
//             transition duration-300'
//           >

       
//             <Image
//             src={project?.bgImage}
//             alt='background'
//             fill
//             className='object-cover group-hover:scale-110 transition duration-500'
//             />

//             {/* Overlay Card */}
//             <div className='absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] 
//           rounded-md p-4 flex items-center justify-between 
//             group-hover:bottom-6 transition-all duration-300'>

//               <div>
//                 <h3 className='font-semibold text-sm sm:text-base'>
//                   {project.title}
//                 </h3>
//                 <p className='text-xs sm:text-sm text-gray-600'>
//                   {project.description}
//                 </p>
//               </div>

//               {/* Icon Button */}
//               <div className='border  rounded-full w-9 h-9 flex items-center justify-center 
           
//                group-hover:text-white transition'>

//                 <Image 
//                   src={assets.send_icon} 
//                   alt='send icon' 
//                   width={20} 
//                   height={20} 
                  
//                 />
//               </div>

//             </div>

//           </div>

//         ))}

//       </div>
//     </div>
//   );
// }

// export default Work;


"use client";

import { assets, workData } from '@/public/assets/assets';
import Image from 'next/image';
import React from 'react';
import { useTheme } from 'next-themes';

const Work = () => {
  const { theme } = useTheme();

  return (
    <div
      id='work'
      className='w-full px-5 sm:px-8 md:px-10 lg:px-[12%] py-16 md:py-24 scroll-mt-24'
    >

      {/* Heading */}
      <h2 className='text-center text-3xl sm:text-4xl md:text-5xl font-Ovo'>
        My Latest Work
      </h2>

      {/* Description */}
      <p className={`text-center max-w-2xl mx-auto mt-5 mb-12 text-sm sm:text-base px-2 ${
        theme === "dark" ? "text-gray-300" : "text-gray-600"
      }`}>
        Welcome to my portfolio showcasing modern and responsive web applications built with React & Next.js.
      </p>

      {/* Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>

        {workData.map((project, index) => (
          
          <div 
            key={index}
            className='group relative h-60 sm:h-72 md:h-80 rounded-xl overflow-hidden cursor-pointer'
          >

            {/* Image */}
            <Image
              src={project?.bgImage}
              alt='project'
              fill
              className='object-cover group-hover:scale-105 transition duration-500'
            />

            {/* Overlay */}
            <div className='absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] 
            bg-white/90 dark:bg-black/70 backdrop-blur-md 
            rounded-lg p-3 sm:p-4 flex items-center justify-between 
            group-hover:bottom-6 transition-all duration-300'>

              {/* Text */}
              <div>
                <h3 className='font-semibold text-sm sm:text-base'>
                  {project.title}
                </h3>
                <p className='text-xs sm:text-sm text-gray-700 dark:text-gray-300'>
                  {project.description}
                </p>
              </div>

              {/* Icon */}
              <div className='w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full border border-gray-400'>
                <Image 
                  src={assets.send_icon} 
                  alt='send' 
                  width={18} 
                  height={18} 
                />
              </div>

            </div>

          </div>

        ))}

      </div>
    </div>
  );
}

export default Work;