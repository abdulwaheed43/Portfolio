// import { assets, workData } from '@/public/assets/assets';
// import React from 'react';

// const Work = () => {
//   return (
//     <div id='work' className='w-full px-6 sm:px-10 lg:px-[12%] py-10 scroll-mt-20'>
//         <h4 className='text-center  mb-7 text-lg font-Ovo'>
//         My Portfolio
//       </h4>

//       <h2 className='text-center text-4xl sm:text-5xl font-Ovo'>
//         My latest work
//       </h2>
//       <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
//         A full-stack retail application built with the MERN stack. This project demonstrates my ability to build scalable web applications featuring user authentication, a persistent shopping cart, and a complete administrative backend. It highlights my expertise in handling both frontend interactivity and backend data management.
//       </p>

//       <div>
//         {workData.map((project,index) =>(
//           <div key={index} style={{backgroundImage: `url(${project.bgImage})`}}> <div/>
//           <div>
//             <h2>{project.title}</h2>
//             <p>{project.description}</p>
//           </div>
//           <div>
//             <Image src={assets.send_icon} alt='send icon' className='w-5' />
//           </div>
//         ))}
//       </div>
//     </div>
//     </div>
//   );
// }

// export default Work;

"use client"
import { assets, workData } from '@/public/assets/assets';
import Image from 'next/image';
import React from 'react';
import { useTheme } from 'next-themes';


const Work = () => {
  console.log(workData);
  const {theme} = useTheme();
  return (
    <div id='work' className='w-full px-6 sm:px-10 lg:px-[12%] py-16 scroll-mt-20'>

      {/* Heading */}
      {/* <h4 className='text-center mb-3 text-lg font-Ovo'>
        My Portfolio
      </h4> */} 

      <h2 className='text-center text-4xl sm:text-5xl font-Ovo'>
        My Latest Work
      </h2>

      <p className={`text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-sm sm:text-base ${theme === "dark"?"text-gray-300":""}`}>
        Welcome to my web development portfolio! Explore a collection of projects 
        showcasing my expertise in front-end development.
      </p>

      {/* Projects Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>

        {workData.map((project, index) => (
          
          <div 
            key={index} 
            className='group relative h-64 sm:h-72 lg:h-80 rounded-xl overflow-hidden cursor-pointer 
           
            transition duration-300'
          >

            {/* Background Image */}
            {/* <div
              className='h-64 sm:h-72 lg:h-80 bg-cover bg-center group-hover:scale-110 transition duration-500'
              style={{ backgroundImage: `url(${project?.bgImage})` }}
            ></div> */}
            <Image
            src={project?.bgImage}
            alt='background'
            fill
            className='object-cover group-hover:scale-110 transition duration-500'
            />

            {/* Overlay Card */}
            <div className='absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] 
          rounded-md p-4 flex items-center justify-between 
            group-hover:bottom-6 transition-all duration-300'>

              <div>
                <h3 className='font-semibold text-sm sm:text-base'>
                  {project.title}
                </h3>
                <p className='text-xs sm:text-sm text-gray-600'>
                  {project.description}
                </p>
              </div>

              {/* Icon Button */}
              <div className='border  rounded-full w-9 h-9 flex items-center justify-center 
           
               group-hover:text-white transition'>

                <Image 
                  src={assets.send_icon} 
                  alt='send icon' 
                  width={20} 
                  height={20} 
                  
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