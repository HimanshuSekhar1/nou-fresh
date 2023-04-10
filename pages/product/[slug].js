import Wrapper from '@/components/Wrapper';
import React from 'react'
import ProductDetailsCarousel from '@/components/ProductDetailsCarousel';

import { BiArrowBack } from "react-icons/bi";
import { IoMdHeartEmpty } from "react-icons/io";


function ProductDetails() {
  return (
    <div className='flex-flex-col w-full max-w-[1280px] px-5 md:px-10 mx-auto py-5'>
      {/* Back button section */}
        <div className='flex items-center space-x-5'>
          <a href='/' className='flex items-center space-x-5'>
            <BiArrowBack />
            <p>Back</p>
          </a>
        </div>
      {/* Back button section */}

        <div className='w-full py-3 md:py-5 flex flex-col lg:flex-row md:px-0 gap-[20px] sm:gap-[30px]'>
            <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>
              <ProductDetailsCarousel />
            </div>
            <div className='flex-[1]'>jumps</div>          
        </div>
        <div>cat</div>
        <div>cat</div>
        <div>cat</div>
        <div>cat</div>
    </div>
  )
}

export default ProductDetails