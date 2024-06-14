import React from 'react'

const footer = () => {
  return (
    <div className='bg-cyan-50  w-full'>
      <div className='flex justify-center p-8 '>
        <div className='mx-5'>
          <p className='font-bold'>PROGRAMS</p>
          <p>Idea to Exit Masterclass</p>
          <p>Foundation</p>
          <p>Raising Funds for Business</p>
          <p>Starter</p>
        </div>
        <div className='mx-5'>
          <p className='font-bold'>RESOURCES</p>
          <p>Conversations</p>
          <p>Free Conversations</p>
          <p>Foundation</p>
        </div>
        <div className='mx-5'>
          <p className='font-bold'>QUESTIONS</p>
          <p>Contact Us</p>
        </div>
      </div>
      <hr className="my-4 mx-10 border-1 border-gray-500" />
      <div>
        <img src='/images/logo.png' alt="Entrepreneur" className="w-[250px] h-[80px] inline-block my-8 ml-8" />
      </div>
    </div>
    
  )
}

export default footer;