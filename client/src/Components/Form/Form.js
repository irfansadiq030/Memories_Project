import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <div className='bg-white rounded-md form_custm_style w-4/12 my-4 overflow-hidden px-5 pt-5'>
      <h2 className='text-center mb-5 font-medium uppercase'>Creating a Memory</h2>
      <form action="">
        <div class="mb-6">
          <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Creator" required />
        </div>
        <div class="mb-6">
          <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title" required />
        </div>
        <div class="mb-6">
          <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Message"></textarea>
        </div>
        <div class="mb-6">
          <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tags (comma separated)" required />
        </div>
        <div class="mb-6">
          <input type="file" class="" placeholder="Tags (comma separated)" required />
        </div>
        <button type="button" class="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-lg hover:bg-gradient-to-br  font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 uppercase">Submit</button>
        <button type="button" class="w-full text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 rounded-lg hover:bg-gradient-to-br font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800 uppercase">Clear</button>
      </form>
    </div>
  )
}

export default Form
