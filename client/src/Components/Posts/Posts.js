import React, { useState } from 'react'
import Post from './Post'
import './Posts.css'
import Form from '../Form/Form';
import { useEffect } from 'react'

import axios from 'axios';

const Posts = () => {
  const [postData, setPostData] = useState([]);
  useEffect(() => {

    fetchPosts();

  }, []);

  // calling API to fetch POSTS from DB
  const fetchPosts = async () => {
    const postData = await axios.get('http://localhost:5000/posts', {
      method: 'GET',
    })
    // postData.data.posts;
    setPostData(postData.data.posts);
  }


  console.log(postData);

  return (
    <div className='container w-full h-auto mt-8 flex'>
      <div className='w-9/12 h-auto flex flex-wrap justify-start'>
        {

          postData.map((post, index) => {
            return (
              <Post {...post} key={index} />
            )
          })
        }
      </div>
      <Form />
    </div>
  )
}

export default Posts
