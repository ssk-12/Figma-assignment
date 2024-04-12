import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className='flex flex-col md:flex-row  justify-between items-center px-8 py-5 border-t-[1px]  text-[#71778e]  bg-white text-sm'>
      <div className='flex justify-between items-center gap-2'>
        <p className='border-r-[1px] pr-2 border-gray-400'>Contact</p>
        <p className='border-r-[1px] pr-2 border-gray-400'>Privacy Policy</p>
        <p>Terms of use</p>
      </div>
      <div className=' text-center md:text-justify'>
        <p>© 2024 UEX Learning Technology Pvt Ltd. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
