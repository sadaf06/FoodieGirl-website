import React from 'react'
import "./hero.css"
import Image01 from "../../assets/image01.webp"
import { motion } from 'framer-motion'
/**
* @author
* @function Hero
**/

export const Hero = (props) => {
    return (
        <>
            <div className='hero-section' id='home'>
                <div className='hero-content'>
                    <div className='hero-head'>
                        <h1 className='fg-text'>
                            <motion.span
                                initial={{ color: 'var(--color-golden)' }}
                                whileInView={{ color: 'var(--color-theme)' }}
                                transition={{ type: 'spring', duration: 1 }}
                            >F</motion.span>oodie
                            <motion.span
                                initial={{ color: 'var(--color-golden)' }}
                                whileInView={{ color: 'var(--color-theme)' }}
                                transition={{ type: 'spring', duration: 1, delay: 0.5 }}
                                className="theme">G</motion.span>irl
                        </h1>
                    </div>
                    <div className='p-container'>
                        <p>"Welcome to Foodie Visit! We are a team of food enthusiasts who are passionate about discovering new and delicious dining experiences. We specialize in visiting restaurants and food outlets, sampling their dishes, and sharing our honest opinions with our followers."</p>
                        <p>Our goal is to help promote local and independent food businesses, and to give our followers a taste of the best food that their city has to offer. We also collaborate with restaurants and food outlets to provide our followers with exclusive deals and discounts.</p>
                    </div>
                </div>
                <div className='image-container'>
                    <motion.div
                        initial={{ marginRight: "-2.5rem" }}
                        whileInView={{ marginRight: "2.5rem" }}
                        transition={{ type: "tween", duration: 1 }}
                        className="blank-square"></motion.div>
                    <motion.div
                        initial={{ marginLeft: "-2.5rem" }}
                        whileInView={{ marginLeft: "2.5rem" }}
                        transition={{ type: "tween", duration: 1 }}
                        className="blank-square1"></motion.div>
                    <img src={Image01} alt="frst image" />
                </div>
            </div>

        </>
    )
}
