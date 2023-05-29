import React from 'react'

// STYLES
import "./Projects.css"

// ASSETS
import prop1 from "./assets/prop1.jpg"
import prop2 from "./assets/prop2.jpg"
import prop3 from "./assets/prop3.jpg"
import prop4 from "./assets/prop4.jpg"
import prop5 from "./assets/prop5.jpg"
import prop6 from "./assets/prop6.jpg"
import prop7 from "./assets/prop7.jpg"


const Projects = () => {

    return (
        <div className='projects my-32 text-center'>
            <h1 className='text-6xl'>Recent Projects</h1>

            <div className='projects_collection mt-20 mx-auto grid grid-cols-4 gap-10'>
                <img
                    src={prop1}
                    alt='property images'
                    className='col-span-2'
                />

                <img
                    src={prop2}
                    alt='property images'
                    className='col-span-2'
                />

                <img
                    src={prop3}
                    alt='property images'
                    className=''
                />

                <img
                    src={prop4}
                    alt='property images'
                    className='col-span-1'
                />

                <img
                    src={prop5}
                    alt='property images'
                    className=''
                />

                <img
                    src={prop7}
                    alt='property images'
                    className=''
                />

                <img
                    src={prop6}
                    alt='property images'
                    className='col-span-2'
                />

            </div>
        </div>
    )
}

export default Projects