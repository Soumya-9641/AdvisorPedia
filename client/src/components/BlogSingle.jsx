import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import Lottie from 'lottie-react'
import blog from "./Blog.json"
import loading from "./Loading.json"
import BarLoader from "react-spinners/BarLoader";
import Loadingbar from './Loadingbar';
import { useAuth } from '../context/authContext';
const BlogSingle = () => {
  const {username}= useAuth();
  
  let token
  console.log(username)
  if(username){
    token= username.token;
  }else{
    token=null;
  }
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true); // State to track if there are more items to load
  const [page, setPage] = useState(1);
  useEffect(() => {
    // Use a try-catch block to handle errors

    fetchData();
  }, [page]);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:9000/poster/getallpagewise?page=${page}`,{
        headers: {
          Authorization: `${token}`,
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      if (data.length === 0) {
        setHasMore(false);
      }
      setImages([...images, ...data]); // Append new data to existing images
      setLoading(false);
      setPage(page + 1);
     // Set loading to false
    } catch (error) {
      setError(error.message);
      setLoading(false); // Set loading to false
    }
  };
  // if (loading) {
  //   return <h1 className='font-Poppins flex justify-center items-center text-red-600 mr-2 text-4xl'>Loading...</h1>;
  // }

  // if (error) {
  //   return <p>Error: {error}</p>;
  // }

  return (
    <>

      <div className='container px-5 py-24 mx-auto'>

      <InfiniteScroll
        dataLength={images.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<div className='flex justify-center items-center mt-6'>
        <Loadingbar />
        </div>}
        endMessage={<div className='flex justify-center'>
          <p className='inline-block  bg-lime-300 mt-10 rounded-md items-center justify-center text-red-800'>No more items to load</p></div>}
      >
        <div className='container flex flex-wrap -m-4'>


          {/* <div className="p-4 md:w-1/3 shadow-2xl shadow-red-950	 mb-6  rounded-md ">


            <div className="h-full shadow-yellow-950 bg-gradient-to-r from-slate-800 to-gray-500 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340" alt="blog" />
              <div className="p-6 ">

                <h1 className="title-font text-lg font-medium text-indigo-300 mb-3">dhghgdshg</h1>
                <p className="leading-relaxed mb-3 text-gray-200">dbasbfnnnnnnn jhefhjfbhefebjhwebhjefbjhwbhjwehbjewhbj</p>
                <div className="flex items-center flex-wrap ">
                  {username?<button onClick={() => handleTakeTest(image._id)} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
             <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
               <path d="M5 12h14"></path>
               <path d="M12 5l7 7-7 7"></path>
             </svg>
           </button>:<a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" href='/login'>Learn More
             <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
               <path d="M5 12h14"></path>
               <path d="M12 5l7 7-7 7"></path>
             </svg>
           </a>}

                </div>
              </div>
            </div>
          </div> */}
          {images.map((image) => (
            <div key={image._id} className="p-4 md:w-1/3 shadow-2xl shadow-red-950	 mb-6  rounded-md ">


              <div className="h-full shadow-yellow-950 bg-gradient-to-r from-slate-800 to-gray-500 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={image.imageUrl} alt="blog" />
                <div className="p-6 ">

                  <h1 className="title-font text-lg font-medium text-indigo-300 mb-3">{image.title}</h1>
                  <p className="leading-relaxed mb-3 text-gray-200">{image.description}</p>
                  <div className="flex items-center flex-wrap ">
                    {/* {username?<button onClick={() => handleTakeTest(image._id)} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </button>:<a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" href='/login'>Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>} */}

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </InfiniteScroll>
        {loading?<div className='flex justify-center items-center mt-6'>
       <Loadingbar />
       </div>:""}
        
      </div>
            

       


    </>
  )
}

export default BlogSingle