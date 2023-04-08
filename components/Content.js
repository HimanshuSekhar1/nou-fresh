import React from 'react'
import Wrapper from './Wrapper'
import ProductCard from './ProductCard'

function Content() {
  return (
    <div className='flex flex-col'>
      <div className='text-center font-semibold pt-5 sm:pt-10 text-[28px] md:text-[34px]'>Explore Cookbook</div>
      <Wrapper>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Wrapper>
    </div>
    
  )
}

export default Content