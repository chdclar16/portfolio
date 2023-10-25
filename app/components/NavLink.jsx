import React from 'react'
import { Link as ScrollLink} from 'react-scroll';

const NavLink = ({ href, title }) => {
const navBarHeight = 180;

  return (
    <ScrollLink 
      to={href} 
      className='block py-2-pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white cursor-pointer'
      activeClass='active'
      spy={true}
      smooth={true}
      offset={-navBarHeight}
      duration={500}
    >
        {title}
    </ScrollLink>
  )
}

export default NavLink