import React, { useState } from 'react'
import './Form.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useFormik } from 'formik'
import { createPostSchema } from './SchemaValidation';


const initialValues = {
  creator: '',
  title: '',
  message: '',
  tags: '',
  // file:'',

}

const Form = () => {

  const notify = (msg, type) => toast(msg, {
    type: type
  });

  const { values, handleChange, handleBlur, errors, touched, handleSubmit } = useFormik({
    initialValues,
    validationSchema: createPostSchema,
    onSubmit: (values) => {
      console.log(values);
    }
  })

  console.log(errors.creator)


  const [creator, setCreator] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMsg] = useState('');
  const [tags, setTags] = useState('');
  const [img, setImg] = useState('');
  const [selectedFile, setCld_url] = useState('');

  // Save img to Cloudinary function
  const uploadImage = async () => {

    const formData = new FormData();

    formData.append('file', img)
    formData.append("upload_preset", "memoriesProject_MERN")
    formData.append("cloud_name", "irfansadiq030")

    // Sending request to Cloudinary API
    try {

      const responseData = await fetch("https://api.cloudinary.com/v1_1/irfansadiq030/image/upload", {
        method: "post",
        body: formData
      })
      const newresponseData = await responseData.json();
      setCld_url(newresponseData.url);

    } catch (error) {
      console.log(error.message)
    }
  }

  // Submit Function

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // Saving Image to Cloudinary
  //   await uploadImage();

  //   const payload = {
  //     creator,
  //     title,
  //     message,
  //     tags,
  //     selectedFile: selectedFile
  //   }


  //   const apiResponse = await axios({
  //     method: 'post',
  //     url: 'http://localhost:5000/posts/create-post',
  //     data: payload, // you are sending body instead
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //   })
  //   const data = await apiResponse.data;
  //   // console.log(data);
  //   notify(data.message, 'success');


  // }

  return (
    <div style={  { height:'660px' }} className='bg-white rounded-md form_custm_style w-4/12 my-4 px-5 pt-5'>
      <h2 className='text-center mb-5 font-medium uppercase'>Creating a Memory</h2>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <div class="mb-6">
          <input
            onChange={handleChange}
            value={values.creator}
            name='creator'
            type="text"
            class="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Creator"

          />
          {errors.creator && touched.creator ? (<p class="mt-2 font-medium capitalize text-sm text-red-600 dark:text-red-500">{errors.creator}</p>) : null}
        </div>
        <div class="mb-6">
          <input
            onChange={handleChange}
            value={values.title}
            name='title'
            type="text"
            class="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Title"

          />
          {errors.title && touched.title ? (<p class="mt-2 font-medium capitalize text-sm text-red-600 dark:text-red-500">{errors.title}</p>) : null}
        </div>
        <div class="mb-6">
          <textarea
            onChange={handleChange}
            value={values.message}
            name="message"
            id="message"
            rows="4"
            class="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Message">

          </textarea>
          {errors.message && touched.message ? (<p class="mt-2 font-medium capitalize text-sm text-red-600 dark:text-red-500">{errors.message}</p>) : null}
        </div>
        <div class="mb-6">
          <input
            onChange={handleChange}
            value={values.tags}
            name="tags"
            type="text"
            class="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Tags (comma separated)"

          />
          {errors.title && touched.tags ? (<p class="mt-2 font-medium capitalize text-sm text-red-600 dark:text-red-500">{errors.tags}</p>) : null}
        </div>
        <div class="mb-6">
          <input
            onChange={e => setImg(e.target.files[0])}
            type="file"
            name="img"
            class=""
          />
        </div>
        <button type="submit" class="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-lg hover:bg-gradient-to-br  font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 uppercase">Submit</button>
        <button type="button" class="w-full text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 rounded-lg hover:bg-gradient-to-br font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800 uppercase">Clear</button>
      </form>
      <ToastContainer />
    </div>
  )
}

export default Form
