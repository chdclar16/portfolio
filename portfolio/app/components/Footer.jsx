import React from 'react';
import Image from 'next/image';
import { AiOutlineCopyrightCircle } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
          <Image 
              src="./images/Logo.png"
              width={0}
              height={0}
              alt="Logo"
              sizes='25vw'
              style={{ width: '10%', height: 'auto' }} 
          />
          
          <p className="text-slate-600">
            <AiOutlineCopyrightCircle 
              style={{ display: 'inline-block', verticalAlign: 'middle' }} 
            /> 
            {""}
            All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;