import Link from 'next/link'
import React from 'react'


function ProductCard() {
  return (
    <div className='relative transform overflow-hidden bg-white cursor-pointer hover:scale-105 duration-150'>
      <a href={'/category/$p.slug'}>
        <img src='/Book1.svg' className='rounded-2xl shadow-md'/>
      </a>
      <div className='absolute bottom-10 w-full pl-4'>
      <button className='bg-black text-white px-10 py-4 my-4 shadow-md rounded-full hover:shadow-xl font-bold active:scale-90 transition duration-150'>Explore</button>
      </div>
    </div>

  )
}

export default ProductCard