
import { assets, infoList, toolsData } from '@/public/assets/assets';
import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div
      id='about'
      className='w-full px-6 sm:px-10 lg:px-[12%] md:py-20  scroll-mt-20 flex flex-col'
    >

      {/* Heading */}
      <h2 className='text-center text-4xl sm:text-5xl font-bold font-Ovo'>
        About Me
      </h2>

      <div className='flex flex-col lg:flex-row items-center gap-12 mt-14'>

        {/* Image */}
        <div className='relative group'>
          <div className='absolute -inset-2 bg-gradient-to-r from-purple-500 to-purple-400 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition'></div>

          <Image
            src={assets.user_image}
            alt="user"
            width={320}
            height={320}
            className='relative rounded-3xl object-cover mt-0 lg:-mt-72 border-4 border-white dark:border-gray-800 shadow-xl'
          />
        </div>

        {/* Content */}
        <div className='flex-1 text-center lg:text-left'>

          <p className='mb-10 max-w-2xl mx-auto lg:mx-0 dark:text-gray-300 text-sm sm:text-base leading-7'>
            My name is Abdul Waheed, and I am an undergraduate Computer Science student at Iqra University, 
            currently in my second-to-last semester. With a strong academic record and extensive hands-on 
            experience in software development, I am deeply passionate about building innovative solutions 
            in Web Development, AI, and Software Engineering. Beyond the classroom, I am an active member of 
            the IEEE Society. My involvement in various social and technical responsibilities has allowed me 
            to sharpen my leadership and time-management skills. My academic journey began in Moro, where I 
            completed my Matriculation at Vision Public School (2020) and my Intermediate at Government Mehran College (2022), achieving A-grades in both. Although I was initially offered a seat in Electrical Engineering at FAST University, I chose to pivot toward my true interest in Computer Science at 
            Iqra University to master the world of AI and modern web technologies.
          </p>

          {/* Info Cards */}
          <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto lg:mx-0'>

            {infoList.map(({ icon, title, description }, index) => (
              <li
                key={index}
                className='relative group w-full p-5 rounded-2xl 
                border border-gray-300 dark:border-gray-700 
                shadow-md hover:shadow-xl 
                transition-all duration-300 
                hover:-translate-y-2 overflow-hidden'
              >

                {/* Gradient Hover */}
                <div className='absolute inset-0 bg-gradient-to-r from-gray-400 to-white-500 opacity-0 group-hover:opacity-15 transition duration-300'></div>

                {/* Content */}
                <div className='relative z-10'>

                  <div className='flex items-center gap-3 mb-3'>
                    <Image src={icon} alt={title} width={28} height={28} />
                    <h3 className='font-semibold text-sm sm:text-base'>
                      {title}
                    </h3>
                  </div>

                  <p className='text-xs sm:text-sm'>
                    {description}
                  </p>

                </div>

              </li>
            ))}

          </ul>

          {/* Tools */}
          <h4 className='mt-10 mb-4 text-gray-700 dark:text-gray-300 font-Ovo text-center lg:text-left'>
            Tools I Use
          </h4>

          <ul className='flex flex-wrap justify-center lg:justify-start gap-4'>

            {toolsData.map((tool, index) => (
              <li
                key={index}
                className='group flex items-center justify-center 
                w-12 sm:w-14 aspect-square 
                bg-white dark:bg-gray-900 
                border border-gray-200 dark:border-gray-700 
                rounded-xl shadow-sm 
                hover:shadow-lg 
                transition-all duration-300 
                hover:-translate-y-1'
              >
                <Image
                  src={tool}
                  alt='Tool'
                  className='w-5 sm:w-7 group-hover:scale-110 transition'
                />
              </li>
            ))}

          </ul>

        </div>
      </div>
    </div>
  );
}

export default About;


// "use client";

// import { assets, infoList, toolsData } from '@/public/assets/assets';
// import Image from 'next/image';
// import React from 'react';

// const About = () => {
//   return (
//     <div
//       id='about'
//       className='w-full px-5 sm:px-10 lg:px-[12%] py-16 md:py-24 scroll-mt-24 flex flex-col'
//     >

//       {/* Heading */}
//       <h2 className='text-center text-3xl sm:text-4xl md:text-5xl font-bold font-Ovo'>
//         About Me
//       </h2>

//       <div className='flex flex-col lg:flex-row items-center gap-10 md:gap-14 mt-12'>

//         {/* Image */}
//         <div className='relative group flex-shrink-0'>
          
//           {/* Glow */}
//           <div className='absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-400 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition'></div>

//           <Image
//             src={assets.user_image}
//             alt="user"
//             width={320}
//             height={320}
//             className='relative w-60 sm:w-72 md:w-80 h-auto rounded-3xl object-cover border-4 border-white dark:border-gray-800 shadow-xl'
//           />
//         </div>

//         {/* Content */}
//         <div className='flex-1 text-center lg:text-left'>

//           <p className='mb-10 max-w-2xl mx-auto lg:mx-0 dark:text-gray-300 text-sm sm:text-base leading-7 px-1'>
//             My name is Abdul Waheed, and I am an undergraduate Computer Science student at Iqra University, 
//             currently in my second-to-last semester. With a strong academic record and extensive hands-on 
//             experience in software development, I am deeply passionate about building innovative solutions 
//             in Web Development, AI, and Software Engineering.
//           </p>

//           {/* Info Cards */}
//           <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-3xl mx-auto lg:mx-0'>

//             {infoList.map(({ icon, title, description }, index) => (
//               <li
//                 key={index}
//                 className='relative group p-5 rounded-2xl 
//                 border border-gray-300 dark:border-gray-700 
//                 shadow-md hover:shadow-xl 
//                 transition-all duration-300 
//                 hover:-translate-y-2 overflow-hidden'
//               >

//                 {/* Hover Effect */}
//                 <div className='absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 transition'></div>

//                 <div className='relative z-10'>

//                   <div className='flex items-center gap-3 mb-3'>
//                     <Image src={icon} alt={title} width={26} height={26} />
//                     <h3 className='font-semibold text-sm sm:text-base'>
//                       {title}
//                     </h3>
//                   </div>

//                   <p className='text-xs sm:text-sm text-gray-600 dark:text-gray-300'>
//                     {description}
//                   </p>

//                 </div>
//               </li>
//             ))}

//           </ul>

//           {/* Tools */}
//           <h4 className='mt-10 mb-4 text-gray-700 dark:text-gray-300 font-Ovo text-center lg:text-left'>
//             Tools I Use
//           </h4>

//           <ul className='flex flex-wrap justify-center lg:justify-start gap-4'>

//             {toolsData.map((tool, index) => (
//               <li
//                 key={index}
//                 className='group flex items-center justify-center 
//                 w-12 sm:w-14 h-12 sm:h-14 
//                 bg-white dark:bg-gray-900 
//                 border border-gray-200 dark:border-gray-700 
//                 rounded-xl shadow-sm 
//                 hover:shadow-lg 
//                 transition-all duration-300 
//                 hover:-translate-y-1'
//               >
//                 <Image
//                   src={tool}
//                   alt='tool'
//                   width={24}
//                   height={24}
//                   className='group-hover:scale-110 transition'
//                 />
//               </li>
//             ))}

//           </ul>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;
