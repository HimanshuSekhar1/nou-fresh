import CartItem from '@/components/CartItem'
import Wrapper from '@/components/Wrapper'
import React from 'react'

function Cart() {
  return (
    <div className='flex flex-col'>
        <div className='text-center font-semibold py-5 sm:py-10 text-[28px] md:text-[34px]'>Your Cart</div>
        <div className='flex-flex-col w-full max-w-[1280px] px-5 md:px-10 mx-auto py-5'>
            
            <div className='flex flex-col lg:flex-row gap-12 py-10'>
                {/* Left Container */}
                <div className='flex-[2]'>
                    <div className='text-lg font-bold'>Cart items</div>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>

                {/* Right Container */}
                <div className='flex-[1]'>
                    <div className='text-lg font-bold'>Summary</div>
                    <div className='p-5 my-5 bg-[#AEF359]/[0.3] rounded-xl'>
                        <div className='flex justify-between'>
                            <div className='uppercase text-md md:text-lg font-medium text-black'>SubTotal</div>
                            <div className='text-md md:text-lg font-medium text-black'>₹69</div>
                        </div>
                        <div className='text-sm md:text-md py-5 mt-5 border-t border-black/[0.2]'>
                            Summary message will go in here.
                        </div>
                    </div>
                </div>
            </div>
            <p>gjc,vhgj,hvhj</p>
            <p>gjc,vhgj,hvhj</p>
            <p>gjc,vhgj,hvhj</p>
            <p>gjc,vhgj,hvhj</p>
        </div>
    </div>
  )
}

export default Cart