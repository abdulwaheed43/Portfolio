// import { assets } from '@/public/assets/assets';
// import Image from 'next/image';
// import { useTheme } from 'next-themes';

// import React from 'react';


// const Footer = () => {
//   const {theme} = useTheme();
//   return (
//     <div className='mt-20'>
//         <div className='text-center'>
//         <Image src={assets.logo} alt='' className={`w-52 mx-auto mb-2 ${theme === "dark"?"invert":""}`} />
//         </div>
//         <div className='w-max flex items-center gap-2 mx-auto mb-5'>
//           <Image src={assets.mail_icon} className='w-6' /> 
//           dahriwaheed43@gmail.com
//         </div>
//     </div>
//   );
// }

// export default Footer;


"use client";

import { assets } from '@/public/assets/assets';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import React from 'react';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="mt-20 px-5 sm:px-8 md:px-10 lg:px-[12%] py-10">

      {/* Logo */}
      <div className="text-center mb-6">
        <Image 
          src={assets.logo} 
          alt="logo" 
          className={`w-40 sm:w-48 mx-auto ${theme === "dark" ? "invert" : ""}`} 
        />
      </div>

      {/* Email */}
      <div className="flex items-center justify-center gap-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">

        <Image 
          src={assets.mail_icon} 
          alt="mail icon" 
          className="w-5 sm:w-6" 
        />

        <a 
          href="mailto:dahriwaheed43@gmail.com"
          className="hover:underline"
        >
          dahriwaheed43@gmail.com
        </a>

      </div>

      {/* Bottom Line */}
      <p className="text-center mt-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Abdul Waheed. All rights reserved.
      </p>

    </footer>
  );
}

export default Footer;