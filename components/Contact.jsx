import { assets } from '@/public/assets/assets';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react';

const Contact = () => {
  const [result, setResult] = React.useState("");
  const {theme,setTheme} = useTheme();

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f06ce806-3496-499f-b2ab-82196c5109e0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      id="contact"
      className="w-full px-6 sm:px-10 lg:px-[12%] py-16 scroll-mt-20"
    >
      {/* Heading */}
      <h2 className="text-center text-4xl sm:text-5xl font-Ovo font-semibold">
        Get in Touch
      </h2>

      {/* Description */}
      <p className={`text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo ${theme === "dark"?"text-gray-300":""}`}>
        I offer high-quality web development services using modern technologies
        like React, Next.js, and Node.js.
      </p>

      {/* Form */}
      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        {/* Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-black"
          name='name' />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-black"
         name='email' />
        </div>

        {/* Message */}
        <textarea
          rows="6"
          placeholder="Your Message"
          required
          className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-black mb-6"
       name='message' ></textarea>

        {/* Button */}
        {/* <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition duration-300 w-full sm:w-auto"
        >
          Submit Now
          <Image
            src={assets.right_arrow_white}
            alt="arrow"
            width={16}
            height={16}
          />
        </button> */}

        <button
  type="submit"
  className={`flex items-center justify-center gap-2 
  px-8 py-3 rounded-full w-full sm:w-auto
  font-medium
  shadow-md hover:shadow-xl
  transition-all duration-300
  cursor-pointer
  hover:scale-105 hover:brightness-110 ${theme === "dark"?"bg-white text-black":"bg-black text-white"}`}
>
  Submit Now

  <Image
    src={assets.right_arrow_white}
    alt="arrow"
    width={16}
    height={16}
    className={`${theme === "dark"?"invert":""}`}
  />
</button>

        <p>{result}</p>
      </form>
    </div>
  );
};

export default Contact;


// import { assets } from '@/public/assets/assets';
// import Image from 'next/image';

// import React from 'react';

// const Contact = () => {
//   return (
//     <div
//       id='contact'
//       className='w-full px-6 sm:px-10 lg:px-[12%] py-16 scroll-mt-20'
//     >
//       {/* Heading */}
//       {/* <h4 className='text-center mb-4 text-lg font-Ovo text-gray-600'>
//         Connect with me
//       </h4> */}

//       <h2 className='text-center text-4xl sm:text-5xl font-Ovo font-semibold'>
//         Get in Touch
//       </h2>

//       {/* Description */}
//       <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-500'>
//         I offer high-quality web development services using modern technologies like React, Next.js, and Node.js.
      
//       </p>

//       {/* Form */}
//       <form className='max-w-2xl mx-auto'>
//         {/* Name & Email */}
//         <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6'>
//           <input
//             type='text'
//             placeholder='Your Name'
//             required
//             className='w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-black'
//           />
//           <input
//             type='email'
//             placeholder='Your Email'
//             required
//             className='w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-black'
//           />
//         </div>

//         {/* Message */}
//         <textarea
//           rows='6'
//           placeholder='Your Message'
//           required
//           className='w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-black mb-6'
//         ></textarea>

//         {/* Button */}
//         <button
//           type='submit'
//           className='bg-black text-white px-10 py-3 rounded-full hover:bg-gray-800 transition duration-300 w-full sm:w-auto'
//         >
//           Submit Now <Image src={assets.right_arrow_white} alt='' className='w-4'/>
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Contact;