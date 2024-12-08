import React from 'react'
import Image from 'next/image'

const Main = () => {
  return (
    <div>
         <div className="w-full h-[355px] bg-white mt-32">
        <h3 className="w-[366px] h-[34px] font-sans text-2xl text-[#2A254B] bg-white mt-4 mb-10 ml-[36rem] mr-[36rem]">What makes our brand different</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center justify-center gap-7 pl-20 pr-20">
          <div className="w-[270Hug] h-[124Hug] items-start gap-y-4 ">
            <span className='h-[40Hug] w-[270Hug] '><Image src="/icons/Delivery.png" alt="Delivery" width={24} height={24} className="w-auto h-full text-[#2A254B] bg-white"/></span>
            <span><h4 className='w-[199Hug] h-[28Hug] pt-3'>Next day as standard</h4></span>
            <span className='pt-3 '>
                <p className='text-base font-normal'>Order before 3pm and get your order the next day as standard</p>
            </span>
          </div>
          <div className="w-[270Hug] h-[124Hug] items-start gap-y-4 ">
          <span className='h-[40Hug] w-[270Hug] '><Image src="/icons/Checkmark--outline.png" alt="Delivery" width={24} height={24} className="w-auto h-full text-[#2A254B] bg-white"/></span>
          <span><h4 className='w-[199Hug] h-[28Hug] pt-3'>Made by true artisans</h4></span>
          <span className='pt-3'>
            <p className='text-base font-normal'>Handmade crafted goods made with real passion and craftmanship</p>
            </span>
          </div>
          <div className="w-[270Hug] h-[124Hug] items-start gap-y-4 ">
          <span className='h-[40Hug] w-[270Hug] '><Image src="/icons/Purchase.png" alt="Delivery" width={24} height={24} className="w-auto h-full text-[#2A254B] bg-white"/></span>
          <span><h4 className='w-[199Hug] h-[28Hug] pt-3'>Unbeatable prices</h4></span>
          <span className='pt-3'>
            <p className='text-base font-normal'>For our materials and quality you won&apos;t find better prices anywhere</p>
            </span>
          </div>
          <div className="w-[270Hug] h-[124Hug] items-start gap-y-4 ">
          <span className='h-[40Hug] w-[270Hug] '><Image src="/icons/Sprout.png" alt="Delivery" width={24} height={24} className="w-auto h-full text-[#2A254B] bg-white"/></span>
          <span><h4 className='w-[199Hug] h-[28Hug] pt-3'>Recycled packaging</h4></span>
          <span className='pt-3 '>
            <p className='text-base font-normal'>We use 100% recycled packaging to ensure our footprint is manageable</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
