import Wrapper from '@/components/Wrapper';
import React from 'react'
import ProductDetailsCarousel from '@/components/ProductDetailsCarousel';

import { BiArrowBack } from "react-icons/bi";
import { IoMdHeartEmpty } from "react-icons/io";


function ProductDetails() {
  return (
    <div className='flex-flex-col w-full max-w-[1280px] px-5 md:px-10 mx-auto py-5'>
        <div className='flex items-center space-x-5'>
            <BiArrowBack />
            <p>Back</p>
        </div>
        <div className='w-full py-3 md:py-10 flex'>
            <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>cat</div>
            <div className='flex-[1]'>cat</div>          
        </div>
        <div>cat</div>
        <div>cat</div>
        <div>cat</div>
        <div>cat</div>
        <div>cat</div>
        <div>cat</div>
        <div>cat</div>
        <div>cat</div>
        <div>cat</div>
        <div>cat</div>
    </div>
  )
}

export default ProductDetails