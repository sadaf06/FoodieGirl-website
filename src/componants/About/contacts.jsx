import React from 'react'
import { motion } from 'framer-motion'
import { BsInstagram } from 'react-icons/bs'

/**
* @author
* @function Contacts
**/

export const Contacts = (props) => {
    return (
        <div className='contact-div'>
            <h1 className='gallery-head contacts-head'>
                <motion.span
                    initial={{ color: 'var(--color-golden)' }}
                    whileInView={{ color: 'var(--color-theme)' }}
                    transition={{ type: 'spring', duration: 1 }}
                >C</motion.span>ontacts
            </h1>
            <p>"Want to collaborate with Foodie Visit? Reach out to us using <a href='https://www.instagram.com/__foodiegirl_/' target={'_blank'} className="insta-profile-link"> Instagram</a> icon"
            </p>
            <a href='https://www.instagram.com/__foodiegirl_/' target={'_blank'}>

                <BsInstagram
                    className='insta-icon-contact' />
            </a>
        </div>
    )
}
