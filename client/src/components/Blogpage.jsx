import React from 'react'
import styles from "../style"
import Lottie from 'lottie-react'
import blog from "./Blog.json"
import loading from "./Loading.json"
import Loadingbar from './Loadingbar'
import Blog from '../pages/Blog'
const Blogpage = () => {
  return (
   <>
   <section id='home' className={`flex md:flex-row flex-col first-letter ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-4`}>
              <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
                  <img src="https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340" alt="" className='w-[40px] h-[40px]' />
                  <p className={`${styles.paragraph} ml-12 text-teal-200`}>
                  Experience a blend of informative and entertaining articles.
                  </p>
              
              </div>
              <div className='flex flex-row justify-between items-center w-full'>
                  <h1 className=' bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>THE NEXT <br className='sm:block hidden' /> {" "} <span className='text-gradient'>
                        GENERATION  
                  </span>{" "}</h1>
                  
              </div>
              <h1 className=' bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
              BLOG APP
              </h1>
              <p className={`${styles.paragraph} max-w-[470px] mt-5 text-slate-500`}>
              Dive into a world of informative articles and captivating stories. Discover new perspectives and expand your horizons with our diverse collection of blog posts. 
        </p>
        </div>
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <Lottie animationData={blog} width={100} resizeMode="cover"/>
        {/* <Lottie animationData={loading} width={100} resizeMode="cover"/> */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />

        </div>
        
    </section>
   </>
  )
}

export default Blogpage