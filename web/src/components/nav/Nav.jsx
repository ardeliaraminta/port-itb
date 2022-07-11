import React from 'react'
import './nav.css'
import {AiFillHome, AiFillContacts} from 'react-icons/ai'
import {FcAbout} from 'react-icons/fc'
import {MdOutlineScreenSearchDesktop} from 'react-icons/md'
import { useState } from 'react'




const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' className = {activeNav === '#'}></a>
      <a href='#about'><FcAbout/></a>
      <a href='#visimisi'><AiFillHome/></a>
      <a href='#services'><MdOutlineScreenSearchDesktop/></a>
      <a href='#contact'><AiFillContacts/></a>
    </nav>
  )
}

export default Nav