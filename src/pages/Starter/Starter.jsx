import React, { useEffect, useRef } from "react"

// TYPE IT
import TypeIt from "typeit-react";

// STYLES
import "./Starter.css"

// FRAMER
import { easeIn, easeOut, motion } from 'framer-motion'

// ASSETS
import bgImg from "../../assets/starter_img.jpg"

// COMPONENTS
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import About from "../../components/About Us/About"
import Services from "../../components/Services/Services"
import Features from "../../components/Features/Features"
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";


const Starter = () => {

    const smallheadingRef = useRef();


    return (
        <>
            {/* NAVBAR */}
            <Navbar />


            <div className="starter_sec">
                <div className='starter_bgImg -z-10'>
                    <motion.img
                        src={bgImg}
                        className='relative h-screen w-screen'
                        initial={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: easeOut }}
                        animate={{ opacity: 1 }}
                    />
                </div>

                <motion.div
                    className='starter_main h-screen text-white flex flex-col items-center justify-center absolute top-0 left-0'
                    exit={{ x: window.innerWidth, transition: { duration: 0.5 }, opacity: 0 }}
                >

                    {/* STARTER TEXT */}
                    <motion.div
                        className='starter_text'
                    >
                        <motion.h1
                            className='shadow_text text-8xl font-bold text-center text-orange-400'
                            initial={{ y: '100px', opacity: 0 }}
                            transition={{ duration: 2, delay: 1 }}
                            animate={{ y: '0', opacity: 1 }}
                        >
                            Welcome to Estate.io
                        </motion.h1>

                        <motion.p
                            className='my-5 text-3xl text-center'
                            ref={smallheadingRef}
                            initial={{ y: '100px', opacity: 0 }}
                            transition={{ duration: 2, delay: 1.5 }}
                            animate={{ y: '0', opacity: 1 }}
                        >
                            {/* <TypeIt>Recreating Dream homes that last...</TypeIt> */}
                            {/* <TypeIt
                                options={{
                                    speed: 200,
                                }}
                                getBeforeInit={(instance) => {
                                    instance
                                        .type("Recreating Dream")
                                        .pause(750)
                                        .delete(2)
                                        .pause(500)
                                        .type("am homes that")
                                        .pause(750)
                                        .delete(3)
                                        .pause(750)
                                        .type("hat last...")

                                    // Remember to return it!
                                    return instance;
                                }}
                            /> */}
                            Recreating Dream homes that last...
                        </motion.p>

                    </motion.div>

                </motion.div>
            </div>


            <section
                className='bg-pink-900 px-20 pt-20 pb-1 text-white'
            >
                {/* ABOUT SECTION */}
                <About />

                {/* FEATURES SECTION */}
                <Features />

                {/* SERVICES SECTION */}
                <Services />

                {/* PROJECTS SECTION */}
                <Projects />
            </section>


            {/* CONTACT SECTION */}
            <Contact />


            {/* FOOTER */}
            <Footer />
        </>
    )
}

export default Starter;