import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/aakriti-ghimire-b6b8611b4' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/aakritighimire7' target='_blank'><BsGithub/></a>
        <a href='https://www.instagram.com/aako.o_c/' target='_blank'><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials