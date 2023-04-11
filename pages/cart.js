import CartItem from '@/components/CartItem'
import Wrapper from '@/components/Wrapper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


function Cart() {
  return (
    <div className='flex flex-col'>
        <div className='text-center font-semibold py-5 sm:py-10 text-[28px] md:text-[34px]'>Your Cart</div>
        <div className='flex-flex-col w-full max-w-[1280px] px-5 md:px-10 mx-auto py-5'>
            
            <div className='flex flex-col lg:flex-row gap-12 py-5'>
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

                    {/* Checkout button */}
                    <button className='w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75'>
                        Checkout
                    </button>
                </div>
            </div>
            {/* Empty Cart page */}
            {/* <div className='flex-[2] flex flex-col items-center pb-[50px] md:mt-14'>
                <Image 
                    src="/emptyCart.jpg" 
                    width={100} 
                    height={100}
                    className='w-[150px] md:w-[200px]'
                />
                <span className='text-3xl font-bold text-black/[0.6]'>Your cart is empty</span>
                <span className='text-center mt-4 text-black/[0.4]'>
                    Looks like you don't have anything in your cart<br />
                    Please add something
                </span>
                <Link 
                    href='/'
                    className='py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8'
                >
                    Continue Shopping
                </ Link>
            </div> */}
            <p>gjc,vhgj,hvhj</p>
            <p>gjc,vhgj,hvhj</p>
        </div>
    </div>
  )
}

export default Cart