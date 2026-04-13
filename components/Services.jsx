
// import { serviceData } from '@/public/assets/assets';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import React from 'react';
// import { useTheme } from 'next-themes';
// import Image from 'next/image';

// const Services = () => {
//   const {theme} = useTheme();
//   return (
//     <div
//       id='services'
//       className='w-full px-6 sm:px-10 lg:px-[12%] py-16 scroll-mt-20'
//     >
//       {/* Heading */}
//       <h4 className={`text-center mb-3 text-lg font-Ovo  ${theme === "dark"?"text-gray-300":"text-gray-500"}`}>
//         What I Offer
//       </h4>

//       <h2 className='text-center text-4xl sm:text-5xl font-bold font-Ovo'>
//         My Services
//       </h2>

//       <p className={`text-center max-w-2xl mx-auto mt-6 mb-14 ${theme === "dark"?"text-gray-300":""}`}>
//         I offer high-quality web development services focused on creating modern,
//         responsive, and user-friendly websites. With hands-on experience in React.js
//         and Next.js, I build fast and dynamic web applications tailored to your needs.
//       </p>

//       {/* Services Grid */}
//       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>

//         {serviceData.map(({ icon, title, description, link }, index) => (

//           <div
//             key={index}
//             className='relative group p-6 rounded-2xl 
           
//             border border-gray-200 dark:border-gray-700 
//             shadow-md hover:shadow-2xl 
//             transition-all duration-300 
//             hover:-translate-y-3'
//           >

//             {/* Gradient Hover Effect */}
//             <div className='absolute cursor-pointer rounded-2xl inset-0 bg-gradient-to-r from-gray-400 to-white-500 opacity-0 group-hover:opacity-15 transition duration-300 '></div>

//             {/* Icon */}
//             <Image
//             src={icon}
//             alt='icon'
//             width={50}
//               height={50}
//             className='object-cover object-center'
//             />

//             {/* Title */}
//             <h3 className='text-lg font-semibold  mb-2 pt-3'>
//               {title}
//             </h3>

//             {/* Description */}
//             <p className='text-sm mb-5'>
//               {description}
//             </p>

//             {/* Button */}
//             <a
//               href={link}
//               className='inline-flex items-center text-sm font-medium 
             
//               group-hover:underline'
//             >
//               Read More →
//             </a>

//           </div>

//         ))}

//       </div>
//     </div>
//   );
// };

// export default Services;

"use client";

import { serviceData } from '@/public/assets/assets';
import Image from 'next/image';
import React from 'react';
import { useTheme } from 'next-themes';

const Services = () => {
  const { theme } = useTheme();

  return (
    <div
      id="services"
      className="w-full px-5 sm:px-8 md:px-10 lg:px-[12%] py-16 md:py-24 scroll-mt-24"
    >
      {/* Heading */}
      <h4 className={`text-center mb-2 text-base sm:text-lg font-Ovo ${
        theme === "dark" ? "text-gray-300" : "text-gray-500"
      }`}>
        What I Offer
      </h4>

      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold font-Ovo">
        My Services
      </h2>

      <p className={`text-center max-w-2xl mx-auto mt-5 mb-12 text-sm sm:text-base px-2 ${
        theme === "dark" ? "text-gray-300" : "text-gray-600"
      }`}>
        I offer high-quality web development services focused on creating modern,
        responsive, and user-friendly websites using React.js and Next.js.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="relative group p-5 sm:p-6 rounded-2xl border 
            border-gray-200 dark:border-gray-700 
            shadow-md hover:shadow-2xl 
            transition-all duration-300 
            hover:-translate-y-2 overflow-hidden"
          >

            {/* Hover Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-white-500 opacity-0 group-hover:opacity-10 transition duration-300"></div>

            {/* Icon */}
            <div className="relative z-10 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12">
              <Image
                src={icon}
                alt="icon"
                width={40}
                height={40}
                className="w-8 sm:w-10 h-auto"
              />
            </div>

            {/* Title */}
            <h3 className="relative z-10 text-base sm:text-lg font-semibold mt-4 mb-2">
              {title}
            </h3>

            {/* Description */}
            <p className="relative z-10 text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-4">
              {description}
            </p>

            {/* Link */}
            <a
              href={link}
              className="relative z-10 text-sm font-medium text-gray-400 hover:underline"
            >
              Read More →
            </a>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Services;