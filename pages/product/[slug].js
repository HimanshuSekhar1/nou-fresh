import Wrapper from '@/components/Wrapper';
import React from 'react'
import ProductDetailsCarousel from '@/components/ProductDetailsCarousel';

import { BiArrowBack } from "react-icons/bi";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import RelatedProduct from '@/components/RelatedProduct';


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
          {/* Product Carousel section */}
            <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>
              <div className='font-bubblegum text-4xl pb-3'>Paneer Butter Masala</div>
              <div className='font-urbanist text-xl pb-5'>Creamy, velvety sauce with soft paneer is the perfect bowl for date night</div>
              <ProductDetailsCarousel />
            </div>

          {/* Product Description section */}
            <div className='flex-[1]'>
              <div className='font-bubblegum text-3xl mb-10'>
                Ingredients
              </div>
              <div className='font-urbanist text-xl mb-10'>
                <li>200g paneer, cubed</li>
                <li>2 large onions, finely chopped</li>
                <li>2 large tomatoes, pureed</li>
                <li>1/2 cup cashews, soaked in hot water for 15 minutes</li>
                <li>1/2 cup milk or heavy cream</li>
                <li>1/4 cup butter</li>
                <li>1 tablespoon oil</li>
                <li>1/2 teaspoon cumin seeds</li>
                <li>1 bay leaf</li>
                <li>1 cinnamon stick</li>
                <li>2-3 green cardamom pods</li>
                <li>2-3 cloves</li>
                <li>1/2 teaspoon ginger paste</li>
                <li>1/2 teaspoon garlic paste</li>
                <li>1/2 teaspoon turmeric powder</li>
                <li>1/2 teaspoon red chili powder</li>
                <li>1/2 teaspoon Kashmiri red chili powder (optional, for color)</li>
                <li>1/2 teaspoon garam masala</li>
                <li>1/2 teaspoon sugar</li>
                <li>Salt to taste</li>
                <li>Fresh coriander leaves for garnish</li>
              </div>
              <div className='font-bubblegum text-3xl mb-10'>
                Instructions
              </div>
              <div className='font-urbanist text-xl mb-5 list-disc space-y-5'>
                  <li>Heat the oil and butter in a pan or kadai (wok) over medium heat.</li>

                  <li>Add the cumin seeds, bay leaf, cinnamon stick, cardamom pods, and cloves. Sauté for a minute until fragrant.</li>

                  <li>Add the finely chopped onions and sauté until they turn golden brown.</li>

                  <li>Add the ginger paste and garlic paste. Sauté for a minute until the raw smell goes away.</li>

                  <li>Add the tomato puree and cook for 2-3 minutes until the raw smell of tomatoes disappears.</li>

                  <li>Add the turmeric powder, red chili powder, Kashmiri red chili powder (if using), garam masala, sugar, and salt. Mix well and cook for a minute.</li>

                  <li>Add the soaked cashews along with the water. Cook for 2-3 minutes until the cashews are soft.</li>

                  <li>Remove the bay leaf, cinnamon stick, cardamom pods, and cloves from the mixture.</li>

                  <li>Let the mixture cool down slightly, then transfer it to a blender or food processor. Blend until smooth.</li>
                  <li>Pour the blended mixture back into the pan or kadai. Add the milk or heavy cream and mix well.</li>
                  <li>Add the cubed paneer and simmer for 2-3 minutes until the paneer is cooked through.</li>

                  <li>Garnish with fresh coriander leaves.</li>

                  <li>Serve hot with naan, roti, or rice.</li>
              </div>

              <button className='w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 mb-5 hover:opacity-75'>
                Add to cart
                <BsCart />
              </button>
              <button className='w-full py-4 rounded-full border border-[#AEF359] text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 mb-5 hover:opacity-75'>
                Wishlist
                <IoMdHeartEmpty />
              </button>
            </div>          
        </div>
        <RelatedProduct />
        <div>cat</div>
        <div>cat</div>
        <div>cat</div>
    </div>
  )
}

export default ProductDetails