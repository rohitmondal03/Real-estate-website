// STYLES
import "./styles/Starter.css"

// FRAMER
import { motion } from 'framer-motion'

// ASSETS
import bgImg from "../assets/starter_img.jpg"

// COMPONENTS
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'


const Starter = () => {
    return (
        <>
            {/* NAVBAR */}
            <Navbar />


            <div>
                <div className='starter_bgImg -z-10'>
                    <motion.img
                        src={bgImg}
                        className='relative h-screen w-screen'
                    />
                </div>

                <motion.div
                    className='starter_main h-screen text-white flex flex-col items-center justify-center absolute top-0 left-0 w-screen'
                    exit={{ x: window.innerWidth, transition: { duration: 0.5 }, opacity: 0 }}
                >

                    {/* STARTER TEXT */}
                    <motion.div
                        className='starter_text'
                        initial={{ y: '150px', opacity: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                        animate={{ y: '0', opacity: 1 }}
                    >
                        <motion.h1
                            className='shadow_text text-8xl font-bold text-center text-yellow-400'
                        >
                            Welcome to Estate.io
                        </motion.h1>

                        <p
                            className='my-10 text-3xl text-center'
                        >
                            Recreating Dream homes that last...
                        </p>

                    </motion.div>

                </motion.div>
            </div>


            {/* FOOTER */}
            <Footer />
        </>
    )
}

export default Starter;