// import { assets, infoList } from '@/public/assets/assets';
// import Image from 'next/image';
// import React from 'react';

// const about = () => {
//   return (
//     <div id='about' className='w-full px=[12%] py-10 scroll-mt-20'>
//       <h4 className='text-center mt-10 mb-2 text-lg font-Ovo'>Introduction</h4>
//       <h2 className='text-center text-5xl font-Ovo'>About Me</h2>

//       <div className='flex w-full flex-col lg:flex-row items-center'>
//         <div className='w-64 sm:w-80  rounded-3xl max-w-none ml-32 mt-14 mb-8'>
//           <Image src={assets.user_image} alt="user" className='w-full rounded-3xl' />
//         </div>
//         <div className='flex-1'>
//         <p className='ml-14 mb-10 max-w-2xl font-Ovo'>Hello! I'm Waheed Dahri, 
//             a dedicated Web Developer skilled in React.js and Next.js, with a basic understanding of MySQL. 
//             I'm currently a BSCS student at Iqra University , passionate about creating modern, efficient, 
//             and responsive web applications.</p>

//          <ul className='grid grid-cols-1 ml-14 sm:grid-cols-3 gap-6 max-w-2xl'>
//   {infoList.map(({ icon, iconDark, title, description }, index) => (
//     <li
//       key={index}
//       className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer 
//       shadow-[4px_4px_0_#fff] 
//       hover:shadow-[6px_6px_0_#000] 
//       hover:-translate-x-1 hover:-translate-y-1 
//       hover:bg-[#fcf4ff] duration-300'
//     >
//       <Image src={icon} alt={title} width={28} height={28} className='mt-3' />
//       <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
//       <p className='text-gray-600 text-sm'>{description}</p>
//     </li>
//   ))}
// </ul>
     
//         </div>
//       </div>
//     </div>
//   );
// }

// export default about;


// import { assets, infoList, toolsData } from '@/public/assets/assets';
// import Image from 'next/image';
// import React from 'react';

// const About = () => {
//   return (
//     <div id='about' className='w-full  px-6 sm:px-10 lg:px-[12%] py-10 scroll-mt-20'>

//       {/* <h4 className='text-center  mb-7 text-lg font-Ovo'>
//         Introduction
//       </h4> */}

//       <h2 className='text-center text-4xl sm:text-5xl font-Ovo'>
//         About Me
//       </h2>

      // <div className='flex flex-col lg:flex-row items-center lg:items-start gap-10 mt-10'>

      //   {/* Image */}
      //   <div className='w-56 sm:w-72 lg:w-80 flex justify-center lg:justify-start'>
      //     <Image
      //       src={assets.user_image}
      //       alt="user"
      //       width={320}
      //       height={320}
      //       className='rounded-3xl object-cover'
      //     />
      //   </div>

//         {/* Content */}
//         <div className='flex-1 text-center lg:text-left'>

//           <p className='mb-10 max-w-2xl mx-auto lg:mx-0 font-Ovo text-sm sm:text-base leading-6'>
//    My name is Abdul Waheed, and I am an undergraduate Computer Science student at Iqra University, currently in my second-to-last semester. With a strong academic record and extensive hands-on experience in software development, I am deeply passionate about building innovative solutions in Web Development, AI, and Software Engineering. 
// Beyond the classroom, I am an active member of the IEEE Society. My involvement in various social and technical responsibilities has allowed me to sharpen my leadership and time-management skills.
// My academic journey began in Moro, where I completed my Matriculation at Vision Public School (2020) and my Intermediate at Government Mehran College (2022), achieving A-grades in both. Although I was initially offered a seat in Electrical Engineering at FAST University, I chose to pivot toward my true interest in Computer Science at Iqra University to master the world of AI and modern web technologies.
//           </p>

//           {/* Info Cards */}
//           <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-2xl mx-auto lg:mx-0'>

//             {infoList.map(({ icon, title, description }, index) => (
//               <li
//                 key={index}
//                 className='border border-gray-400 rounded-xl p-5 cursor-pointer 
           
              
//                 hover:-translate-x-1 hover:-translate-y-1 
//                 hover:bg-white duration-300'
//               >
//                 <Image src={icon} alt={title} width={28} height={28} />
//                 <h3 className='my-3 font-semibold text-gray-700 text-sm sm:text-base'>
//                   {title}
//                 </h3>
//                 <p className='text-gray-600 text-xs sm:text-sm'>
//                   {description}
//                 </p>
//               </li>
//             ))}

//           </ul>

//           <h4 className='my-6 text-gray-700 font-Ovo'>Tools i use</h4>
//           <ul className='flex items-center gap-3 sm:gap-5 ml-7'>
//            {toolsData.map((tool, index)=>(
//             <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:translate-y-1 duration-500' key={index}>
//                 <Image src={tool} alt='Tool' className='w-5 sm:w-7'  />
//             </li>
//            ))}
//           </ul>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;

import { assets, infoList, toolsData } from '@/public/assets/assets';
import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div
      id='about'
      className='w-full px-6 sm:px-10 lg:px-[12%] py-20 scroll-mt-20'
    >

      {/* Heading */}
      <h2 className='text-center text-4xl sm:text-5xl font-bold font-Ovo '>
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
            className='relative rounded-3xl object-cover -mt-72 border-4 border-white dark:border-gray-800 shadow-xl'
          />
        </div>

        {/* Content */}
        <div className='flex-1 text-center lg:text-left'>

          <p className='mb-10 max-w-2xl mx-auto lg:mx-0 dark:text-gray-300 text-sm sm:text-base leading-7'>
            My name is Abdul Waheed, and I am an undergraduate Computer Science student at Iqra University, currently in my second-to-last semester. With a strong academic record and extensive hands-on experience in software development, I am deeply passionate about building innovative solutions in Web Development, AI, and Software Engineering. Beyond the classroom, I am an active member of the IEEE Society. My involvement in various social and technical responsibilities has allowed me to sharpen my leadership and time-management skills. My academic journey began in Moro, where I completed my Matriculation at Vision Public School (2020) and my Intermediate at Government Mehran College (2022), achieving A-grades in both. Although I was initially offered a seat in Electrical Engineering at FAST University, I chose to pivot toward my true interest in Computer Science at Iqra University to master the world of AI and modern web technologies.
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
