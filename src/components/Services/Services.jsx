import React from 'react'

// STYLES
import serviceImg from "../../assets/worker1.jpg"


const Services = () => {
    return (
        <div className='services flex flex-reverse items-center justify-stretch px-3 py-5 border-2 shadow-lg'>
            <div className='services_right w-1/2'>
                <img
                    src={serviceImg}
                    className='w-11/12 grayscale rounded-lg drop-shadow-2xl'
                />
            </div>

            <div className='services_left text-zinc-300'>
                <h1 className='text-6xl mb-7'>Our Services</h1>

                <ul className='list-disc text-xl translate-x-8'>
                    <li>Complete Remodeling</li>
                    <li>Kitchen Remodeling</li>
                    <li>Bathroom Remodeling</li>
                    <li>Home Interior</li>
                    <li>Flooring</li>
                </ul>
            </div>
        </div>
    )
}

export default Services