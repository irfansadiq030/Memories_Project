import React, { useState } from 'react'

const Post = () => {
  const [enableIcons, setEnableIcons] = useState(true);
  return (
    <div className="customStyle bg-white pb-10 h-80 mx-3 my-4 rounded-xl overflow-hidden drop-shadow-md">
      <img className='w-full h-52 object-cover relative' src="https://picsum.photos/800/400?img=6666" alt="blog img" />
      <div className="w-full h-52 custom_imgStyle absolute top-0">
        <i onClick={() => setEnableIcons(!enableIcons)} class="fa-solid fa-ellipsis-vertical text-white cursor-pointer absolute top-5 right-5"></i>
        <div style={enableIcons ? { opacity: '0', transition: '0.5s' } : { transition: '0.4s' }} className="absolute top-5 right-12 w-14 flex justify-between">
          <i class="fa-solid fa-trash hover:text-red-600 cursor-pointer text-sm text-white"></i>
          <i class="fa-solid fa-pen-to-square hover:text-yellow-300 cursor-pointer text-sm text-white"></i>
        </div>

      </div>
      <div class="p-5">
        <p className='text-md text-gray-500 pb-2'>#irfansadiq #fun</p>
        <a href="/">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-lg hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>


      </div>
    </div>
  )
}

export default Post
