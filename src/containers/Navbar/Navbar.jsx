import React from 'react'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import { motion } from 'framer-motion'
import "./navbar.css"
/**
* @author
* @function Navbar
**/

export const Navbar = (props) => {
    const [navMenu, setnavMenu] = useState(false);


    return (
        <div className='navbar-body'>
            <div className='fg-container'>
                <h1 className='fg-text'><span className="theme">F</span>oodie<span className="theme">G</span>irl</h1>
            </div>
            <nav className="navbar">
                <ul className="links-body">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#thoughts">Our Thoughts</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#contacts">Contacts</a></li>
                </ul>
            </nav>
            <nav className='for-mobiles-nav'>
                <GiHamburgerMenu className='navmenubtn'
                    color="#fff" fontSize={28} onClick={() => setnavMenu(true)} />
                {navMenu && (
                    <motion.div
                        initial={{ height: "10vh" }}
                        whileInView={{ height: "100vh" }}
                        transition={{ type: "keyframes", duration: 0.1 }}
                        className='mobile-navbar'>
                        <MdOutlineRestaurantMenu fontSize={28}
                            className="close-menu"
                            onClick={() => setnavMenu(false)} />
                        <ul className='mobile-ul-tag'>
                            <li onClick={() => setnavMenu(false)}><a href="#home">Home</a></li>
                            <li onClick={() => setnavMenu(false)}><a href="#thoughts">Our Thoughts</a></li>
                            <li onClick={() => setnavMenu(false)}><a href="#gallery">Gallery</a></li>
                            <li onClick={() => setnavMenu(false)}><a href="#about">About Us</a></li>
                            <li onClick={() => setnavMenu(false)}><a href="#contacts">Contacts</a></li>
                        </ul>
                    </motion.div>
                )}
            </nav>
        </div>
    )
}
