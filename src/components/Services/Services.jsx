import React from 'react'

// STYLES
import serviceImg from "../../assets/worker1.jpg"


// FRAMER-MOTION
import { motion } from 'framer-motion'


// MANTINE UI
import { Button } from '@mantine/core'



const Services = () => {
    return (
        <div className='services flex flex-reverse items-center justify-evenly px-3 py-5 border rounded-md'>
            <div className='services_right w-1/2'>
                <img
                    src={serviceImg}
                    className='w-6/6 rounded-lg drop-shadow-2xl'
                />
            </div>

            <div className='services_left'>
                <h1 className='text-6xl mb-7'>Our Services</h1>

                <ul className='list-disc text-xl translate-x-8'>
                    <li>Complete Remodeling</li>
                    <li>Kitchen Remodeling</li>
                    <li>Bathroom Remodeling</li>
                    <li>Home Interior</li>
                    <li>Flooring</li>
                </ul>

                {/* <button className='text-xl mt-10 translate-x-5 py-4 px-10 border bg-teal-600'>More Info</button> */}

                <Button
                    color="cyan"
                    size="md"
                    className='mt-10 translate-x-5 border bg-sky-600 transition duration-300 hover:scale-105 active:scale-90'
                >
                    More Info
                </Button>
            </div>
        </div>
    )
}

export default Services