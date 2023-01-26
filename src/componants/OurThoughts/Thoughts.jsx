import React from 'react'
import "./thoughts.css"
import image from "../../assets/image02.jpg"
import { motion } from 'framer-motion'

/**
* @author
* @function Thoughts
**/

export const Thoughts = (props) => {
    return (
        <div className='thoughts-container' id='thoughts'>
            <div className='believe'>
                <h1 className='fg-text'><span className="theme">O</span>ur <span className="theme">B</span>elieve</h1>
            </div>
            <div className="believe-content-container">
                <div className="believe-image">
                    <motion.div
                        initial={{ marginRight: '-1.5rem' }}
                        whileInView={{ marginRight: "1.5rem" }}
                        transition={{ type: 'tween', duration: 1 }}
                        className="b-square"></motion.div>
                    <motion.div
                        initial={{ marginLeft: '-1.5rem' }}
                        whileInView={{ marginLeft: "1.5rem" }}
                        transition={{ type: 'tween', duration: 1 }}
                        className="b-square1"></motion.div>
                    <img src={image} alt="image" />
                </div>
                <div className='thought-p-content'>
                    <p>"At Foodie Visit, we believe that food is not just about sustenance, but an experience that brings people together. We are dedicated to uncovering hidden gems and introducing our followers to new and unique flavors.</p>
                    <p>Our team of foodies are always on the lookout for the latest trends and hottest spots in the culinary world. We take pride in our ability to find the best of the best and share it with our followers.</p>
                    <p>In addition to restaurant and food outlet reviews, we also share recipes, cooking tips, and other food-related content. We want to be a one-stop-shop for all things food and make it easy for our followers to elevate their own cooking game.</p>
                </div>
            </div>
        </div>
    )
}
