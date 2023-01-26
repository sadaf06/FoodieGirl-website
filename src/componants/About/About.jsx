import React from 'react'
import "./about.css"
import { motion } from 'framer-motion'


/**
* @author
* @function About
**/

export const About = (props) => {
    return (
        <>
            <div className='about-container' id='about'>
                <div className="about-heading">
                    <h1 className='gallery-head'>
                        <motion.span
                            initial={{ color: 'var(--color-golden)' }}
                            whileInView={{ color: 'var(--color-theme)' }}
                            transition={{ type: 'spring', duration: 1 }}
                        >A</motion.span>bout
                        <motion.span
                            initial={{ color: 'var(--color-golden)' }}
                            whileInView={{ color: 'var(--color-theme)' }}
                            transition={{ type: 'spring', duration: 1 }}
                        > U</motion.span>s
                    </h1>
                </div>
                <div className="about-main-content">
                    <p>We are a team of food enthusiasts who are passionate about discovering new and delicious dining experiences.<br></br> We specialize in visiting restaurants and food outlets, sampling their dishes, and sharing our honest opinions with our followers.</p>
                    <p>If you're a restaurant or food outlet that is interested in working with us, please reach out to us at
                        <a href='https://www.instagram.com/__foodiegirl_/' target={'_blank'} className="insta-profile-link"> Instagram</a>. We would love to hear from you and discuss potential collaboration opportunities.</p>
                </div>
            </div>
            <hr />
        </>
    )
}
