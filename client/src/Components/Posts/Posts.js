import React from 'react'
import Post from './Post'
import './Posts.css'
import Form from '../Form/Form';

const Posts = () => {
  return (
    <div className='container w-full h-auto mt-8 flex'>
      <div className='w-9/12 h-auto flex flex-wrap justify-start'>

        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <Form/>
    </div>
  )
}

export default Posts
