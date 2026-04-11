import { assets } from '@/public/assets/assets';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import React from 'react';


const Footer = () => {
  const {theme} = useTheme();
  return (
    <div className='mt-20'>
        <div className='text-center'>
        <Image src={assets.logo} alt='' className={`w-52 mx-auto mb-2 ${theme === "dark"?"invert":""}`} />
        </div>
        <div className='w-max flex items-center gap-2 mx-auto mb-5'>
          <Image src={assets.mail_icon} className='w-6' /> 
          dahriwaheed43@gmail.com
        </div>
    </div>
  );
}

export default Footer;
