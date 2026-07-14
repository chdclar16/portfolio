import React from 'react'
import { scrollToSection } from '../utils/scrollTo';

const NavLink = ({ href, title }) => {
  return (
    <button
      onClick={() => scrollToSection(href, -180)}
      className='block py-2-pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white cursor-pointer'
    >
      {title}
    </button>
  )
}

export default NavLink
