import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri"

function CartItem() {
  return (
    <div className='flex py-5 gap-3 md:gap-5 border-b'>
        <div className='shrink-0 aspect-square w-[50px] md:w-[120px]'>
            <img src='/Book1.svg'/>
        </div>
        <div className='w-full flex flex-col'>
            <div className='flex flex-col md:flex-row justify-between'>
                {/* Product Name */}
                <div className='text-lg md:text-2xl font-semibold text-black/[0.8]'>
                    Paneer Butter Masala
                </div>

                {/* Product Category */}
                <div className='text-sm md:text-md font-medium text-black/[0.5] block md:hidden'>
                    Category: Veg
                </div>
            </div>
            {/* Product Category */}
            <div className='text-md font-medium text-black/[0.5] hidden md:block'>
                Category: Veg
            </div>

            {/* Selector */}
            <div className='flex items-center justify-between mt-4'>
                <div className='flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md'>
                    <div className='flex items-center gap-1'>
                        <div className='font-semibold'>No. of Servings:</div>
                        <select className='hover:text-black'>
                            <option value="1">2</option>
                            <option value="1">4</option>
                            <option value="1">6</option>
                            <option value="1">8</option>
                        </select>
                    </div>
                </div>
                <RiDeleteBin6Line className='cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]' />
            </div>
        </div>
    </div>
  )
}

export default CartItem