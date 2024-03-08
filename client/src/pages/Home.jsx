import React from 'react'
import Slideshow from '../components/Slide'
import { useAuth } from '../context/authContext'
import "./bg.css"
const Home = () => {
    const {username} = useAuth();
    console.log(username)
    return (
        <>

            <div className='shadow-lg shadow-cyan-500/50'>

                <div className='home-bg'>

                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="  text-green-400 tracking-widest font-bold mb-1">EazyBlog</h1>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-lime-300">Where Every Blog gives you information</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-lime-100">Welcome to our blog! Dive into a world of inspiration, knowledge, and discovery. Explore our collection of articles and stories crafted to inform, entertain, and engage. Join us as we share insights, spark conversations, and celebrate the joys of learning</p>
                    </div>
                </div>
            </div>
            <div>

                <Slideshow />
            </div>
        </>

    )
}

export default Home