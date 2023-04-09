import React from 'react'
import ProductCard from './ProductCard'

function Content() {
  return (
    <div className='flex flex-col'>
      <div className='text-center font-semibold py-5 sm:py-10 text-[28px] md:text-[34px]'>Explore Cookbook</div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-[1280px] px-5 md:px-10 pt-0 pb-8 sm:pb-5 mx-auto'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      
      <div className='text-center font-semibold py-5 sm:py-10 text-[28px] md:text-[34px]'>Explore Cuisines</div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-[1280px] px-5 md:px-10 pt-0 pb-8 sm:pb-5 mx-auto'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

      <div className='text-center font-semibold py-5 sm:py-10 text-[28px] md:text-[34px]'>Explore Cuisines</div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-[1280px] px-5 md:px-10 pt-0 pb-8 sm:pb-5 mx-auto'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
    
  )
}

export default Content