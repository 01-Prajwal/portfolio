import React from 'react'
import './footer.css'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
import { SiGmail } from 'react-icons/si'
import { AiFillGithub } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="name">

                <AiOutlineCopyrightCircle size={27} className='copyright small-i' />
                <h3>CLT ALT ELITE  </h3>
            </div>
            <div className="icon">
                <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new" target='_blank'>
                    <SiGmail size={27} className="small-i"/>
                    <p>Email Me!</p>
                </a>
            </div>
            <div className="icon">
                <a href="https://github.com/01-Prajwal" target='_blank' >
                    <AiFillGithub size={27} className="small-i"/>
                    <p>Check Out My Repos</p>
                </a>
            </div>

        </div>
    )
}

export default Footer