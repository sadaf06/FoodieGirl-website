import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import "./gallery.css"
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import Image03 from "../../assets/image03.jpg"
import Image04 from "../../assets/image04.jpg"
import Image05 from "../../assets/image05.jpg"
import Image06 from "../../assets/image06.jpg"
import Image07 from "../../assets/image07.jpg"
import Image08 from "../../assets/image08.jpg"

/**
* @author
* @function Gallery
**/

export const Gallery = (props) => {
    const images = [{ photo: Image03, url: "https://www.instagram.com/p/ClQn3mnDY3t/" },
    { photo: Image04, url: "https://www.instagram.com/p/CmlMxvIPUye/" },
    { photo: Image05, url: "https://www.instagram.com/p/Cm0jazdvXTw/" },
    { photo: Image06, url: "https://www.instagram.com/p/CnR5laNPMTy/" },
    { photo: Image07, url: "https://www.instagram.com/p/CneP0ecvfcW/" },
    { photo: Image08, url: "https://www.instagram.com/p/Cng5DtZudcr/" },]

    const ref = useRef(null);

    const scrollImage = (direction) => {

        if (direction === "left") {
            ref.current.scrollLeft -= 330;

        } else {
            ref.current.scrollLeft += 330;
        }
    }
    return (
        <div className='gallery-container' id='gallery'>
            <h1 className='gallery-head'>
                <motion.span
                    initial={{ color: 'var(--color-golden)' }}
                    whileInView={{ color: 'var(--color-theme)' }}
                    transition={{ type: 'spring', duration: 1 }}
                >G</motion.span>allery
            </h1>
            <div className="gallery-images-text">
                <div className='gallery-text-content'>
                    <h4><span className='theme-color'>Insta</span>gram</h4>
                    <h1>Photo Gallery</h1>
                    <p>"Discover the best hidden gems in town with Foodie Visit."<br></br>
                        "Join us on our culinary journey and find your new favorite spot."<br></br>
                        "From farm to table, we'll take you on a delicious adventure."<br></br>
                        "Let Foodie Visit be your guide to the best food in town."
                    </p>
                    <button className='btn-view-photos'><a href='https://www.instagram.com/__foodiegirl_/' target={'_blank'} className="insta-profile">View More</a></button>
                </div>
                <div className='photo-gallery-container '>
                    <div className="images-containers" ref={ref}>
                        {images.map((image, index) => (
                            <div className='photos-card center-card' key={`gallery-${index + 1}`}>
                                <img src={image.photo} alt="photos" />
                                <a href={image.url} target={'_blank'} className="insta-link">

                                    <BsInstagram className='instagram-icon' />
                                </a>
                            </div>
                        )
                        )}
                    </div>
                    <div className="image-scroll-arrows-contain">
                        <BsArrowLeftShort className='arrow-icon' onClick={() => scrollImage("left")} />
                        <BsArrowRightShort className='arrow-icon' onClick={() => scrollImage('right')} />
                    </div>
                </div>
            </div>
        </div>
    )
}
