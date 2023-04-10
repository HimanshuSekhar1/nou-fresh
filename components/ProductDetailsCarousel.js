import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'; 


function ProductDetailsCarousel() {
  return (
    <div className='text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]'>
        <Carousel
            infiniteLoop={true}
            showIndicators={false}
            showStatus={false}
            thumbWidth={60}
            className='productCarousel'
            
        >
            <img src='/bell pepper.jpg' />
            <img src='/tomato.jpg' />
            <img src='/eggs.jpg' />
            <img src='/cinnamon.jpg' />
        </Carousel>
    </div>
  )
}

export default ProductDetailsCarousel