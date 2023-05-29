import React from 'react'

// STYLES
import "./About.css"

// ASSETS
// import workerImg from "../../assets/worker1.jpg"
import homeImg from "../../assets/services_img.jpg"



const About = () => {
    return (
        <div className='about_us px-3 py-5 flex flex-row items-center justify-stretch border rounded-md'>
            <div className='about_us_left'>
                <img
                    src={homeImg}
                    className='w-5/6 grayscale rounded-lg drop-shadow-2xl'
                />
            </div>

            <div className='about_us_right'>
                <h1 className='text-6xl'>About Us</h1>

                <p className='text-3xl font-bold my-7 text-amber-600'>Newel Residential Remodeling</p>
                <p className='text-xl'>Our team of experienced real estate professionals is dedicated to providing you with personalized assistance and valuable insights into the local market. From residential homes and apartments to commercial spaces and land, we have a diverse portfolio to cater to your specific requirements.</p>
            </div>
        </div>
    )
}

export default About