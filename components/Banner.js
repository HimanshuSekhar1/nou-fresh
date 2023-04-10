import React from 'react'
import Image from 'next/image';

function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
        <Image src='/bannerImg.png'
          fill
          style={{objectFit: "cover"}}
        />
        <div className='absolute top-1/2 w-full text-center'>
          <p className='text-sm sm:text-lg'>this is my banner center </p>
          <button className='bg-[#AEF359] px-10 py-4 my-4 shadow-md rounded-full text-black text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75'>View our menu</button>
        </div>
    </div>
    
  )
}

export default Banner