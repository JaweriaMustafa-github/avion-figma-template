import React from 'react'

const contact = () => {
  return (
    <div className='bg-[#2A254B] w-full h-auto container flex flex-col flex-wrap items-center justify-center'>
        <h1 className='text-white font-extrabold'>Contact us For more details</h1>
        <span>
        <input type="text" placeholder='Enter your email:' className='mt-4 mb-4'/>
        </span>
        <br />
        <span>
        <input name="message" placeholder='Enter your message here:'/>
        </span>
        <br />
        <span>
        <button className='bg-white text-[#2A254B]'>Submit</button>
        </span>
        <br />
    </div>

  )
}

export default contact