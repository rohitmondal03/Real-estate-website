import React from "react"

// ASSETS
import githubLogo from "../../assets/github.png"
import linkedInLogo from "../../assets/linkedin.png"
import twitterLogo from "../../assets/twitter.png"

// FRAMER
import { easeIn, easeInOut, easeOut, motion } from "framer-motion"


const Footer = () => {

    const logoImgArr = [

        {
            id: 1,
            src: githubLogo,
            alt: "social logo"

        },

        {
            id: 2,
            src: twitterLogo,
            alt: "social logo"

        },

        {
            id: 3,
            src: linkedInLogo,
            alt: "social logo"

        }
    ]

    return (
        <motion.footer
            className='footer fixed px-3 py-5 z-10 bottom-0 border-white rounded-xl'
            initial={{ opacity: 0, x: '150px', scale: 2 }}
            transition={{ duration: 1.2, delay: 0.75, }}
            animate={{ opacity: 1, x: '0px', scale: 1 }}
        >
            <div className='flex flex-col p-3'>
                {logoImgArr.map((imgs) => (
                    <img
                        src={imgs.src}
                        alt={imgs.alt}
                        key={imgs.id}
                        className='h-7 w-7 my-4 transition duration-300 ease-out hover:scale-125 cursor-pointer'
                    />
                ))}
            </div>
        </motion.footer>
    )
}

export default Footer