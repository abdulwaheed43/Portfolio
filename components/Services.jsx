
import { serviceData } from '@/public/assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useTheme } from 'next-themes';

const Services = () => {
  const {theme} = useTheme();
  return (
    <div
      id='services'
      className='w-full px-6 sm:px-10 lg:px-[12%] py-16 scroll-mt-20'
    >
      {/* Heading */}
      <h4 className={`text-center mb-3 text-lg font-Ovo  ${theme === "dark"?"text-gray-300":"text-gray-500"}`}>
        What I Offer
      </h4>

      <h2 className='text-center text-4xl sm:text-5xl font-bold font-Ovo'>
        My Services
      </h2>

      <p className={`text-center max-w-2xl mx-auto mt-6 mb-14 ${theme === "dark"?"text-gray-300":""}`}>
        I offer high-quality web development services focused on creating modern,
        responsive, and user-friendly websites. With hands-on experience in React.js
        and Next.js, I build fast and dynamic web applications tailored to your needs.
      </p>

      {/* Services Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>

        {serviceData.map(({ icon, title, description, link }, index) => (

          <div
            key={index}
            className='relative group p-6 rounded-2xl 
           
            border border-gray-200 dark:border-gray-700 
            shadow-md hover:shadow-2xl 
            transition-all duration-300 
            hover:-translate-y-3'
          >

            {/* Gradient Hover Effect */}
            <div className='absolute cursor-pointer rounded-2xl inset-0 bg-gradient-to-r from-gray-400 to-white-500 opacity-0 group-hover:opacity-15 transition duration-300'></div>

            {/* Icon */}
            <div className='w-12 h-12 flex items-center justify-center rounded-full 
            bg-gradient-to-r from-black-500 to-gray-400 text-white text-lg mb-4'>
              <FontAwesomeIcon icon={icon} />
            </div>

            {/* Title */}
            <h3 className='text-lg font-semibold  mb-2'>
              {title}
            </h3>

            {/* Description */}
            <p className='text-sm mb-5'>
              {description}
            </p>

            {/* Button */}
            <a
              href={link}
              className='inline-flex items-center text-sm font-medium 
             
              group-hover:underline'
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


// import { serviceData } from '@/public/assets/assets';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import React from 'react';

// const Services = () => {
//   return (
//     <div
//       id='services'
//       className='w-full px-6 sm:px-10 lg:px-[12%] py-16 scroll-mt-20'
//     >
//       {/* Heading */}
//       <h4 className='text-center mb-3 text-lg font-Ovo text-gray-500 dark:text-gray-400'>
//         What I Offer
//       </h4>

//       <h2 className='text-center text-4xl sm:text-5xl font-bold font-Ovo'>
//         My Services
//       </h2>

//       <p className='text-center max-w-2xl mx-auto mt-6 mb-14 '>
//         I offer high-quality web development services focused on creating modern,
//         responsive, and user-friendly websites.
//       </p>

//       {/* Grid */}
//       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>

//         {serviceData.map(({ icon, title, description, link }, index) => (

//           <div
//             key={index}
//             className='relative group p-6 rounded-2xl 
//             border border-gray-200 dark:border-gray-700 
//            dark:bg-gray-900 
//             shadow-md overflow-hidden'
//           >

//             {/* 🔥 Gradient Layer (IMPORTANT CHANGE) */}
//             <div className='absolute left-0 w-full h-[200%] 
//               bg-gradient-to-t from-purple-500 via-pink-500 to-transparent
//               opacity-20
//               bottom-[-100%]
//               group-hover:bottom-0
//               transition-all duration-700 ease-in-out'
//             ></div>

//             {/* Content */}
//             <div className='relative z-10'>

//               {/* Icon */}
//               <div className='w-12 h-12 flex items-center justify-center rounded-full 
//               bg-gradient-to-r from-black to-gray-700 text-white text-lg mb-4'>
//                 <FontAwesomeIcon icon={icon} />
//               </div>

//               {/* Title */}
//               <h3 className='text-lg font-semibold mb-2 '>
//                 {title}
//               </h3>

//               {/* Description */}
//               <p className='text-sm mb-5 '>
//                 {description}
//               </p>

//               {/* Button */}
//               <a
//                 href={link}
//                 className='inline-flex items-center text-sm font-medium 
               
//                 group-hover:underline transition'
//               >
//                 Read More →
//               </a>

//             </div>

//           </div>

//         ))}

//       </div>
//     </div>
//   );
// };

// export default Services;