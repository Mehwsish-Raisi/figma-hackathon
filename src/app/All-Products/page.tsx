import React from 'react'
import { GoMultiSelect } from "react-icons/go";
import Link from 'next/link';

import { IoIosArrowUp } from "react-icons/io";
import ProductList from '@/components/ProductList';

const AllProductsPage = () => {
  return (
    <div>
      {/* Banner start*/}
        <div className='px-8'>
      <div className=' flex justify-between mt-20'>
        <p className='font-medium text-2xl '>New (500)</p>
        <div className='flex gap-8'>
            <div className='flex gap-2'>
            <p>Hide Filters</p>
            <GoMultiSelect className='w-[24px] h-[24px] '  />
            </div>
            <div>
            <select name="" className='outline-none'>
            <option value="">Sort By</option>
            <option value="">Sort By</option>
            <option value="">Sort By</option>
            </select>
            </div>
        </div>
      </div>
      </div>
      {/* Banner end*/}

      <div className='px-8 flex justify-between mt-10'>
      {/* Slider start */}
      <div className='w-[260px] h-[849px] '>
        <div className='overflow-scroll h-[400px]'>
      <ul className="my-4">
          <li className="mb-2">
            <Link href="#">Shoes</Link>
          </li>
          <li className="mb-2">
            <Link href="#">Sports Bras</Link>
          </li>
          <li className="mb-2">
            <Link href="#">Tops & T-Shirts</Link>
          </li>
          <li className="mb-2">
            <Link href="#">Hoodies & Sweatshirts</Link>
          </li>
          <li className="mb-2">
            <Link href="#">Jackets</Link>
          </li>
          <li className="mb-2">
            <Link href="#">Trousers & Tights</Link>
          </li>
          <li className="mb-2">
            <Link href="#">Shorts</Link>
          </li>
          <li className="mb-2">
            <Link href="#">Tracksuits</Link>
          </li>
          <li className="mb-2">
            <Link href="#">Jumpsuits & Rompers</Link>
          </li>
          <li className="mb-2">
            <Link href="#">Skirts & Dresses</Link>
          </li>
          <li className="mb-2">
            <Link href="#">Socks</Link>
          </li>
          <li className="mb-2">
            <Link href="#">Accessories & Equipment</Link>
          </li>
         
        </ul>
        </div>
        
        <div className='flex justify-between border-t-2 pt-2'>
        <p className='font-medium'>Gender</p>
        <IoIosArrowUp size={14} />
            </div>
            <div className='mt-2'>
            <input type="checkbox" id="men" />
            <label className="pl-2 cursor-pointer" htmlFor="men">
              Men
            </label>
          </div>
          <div>
            <input type="checkbox" id="women" />
            <label className="pl-2 cursor-pointer" htmlFor="women">
              Women
            </label>
          </div>
          <div>
            <input type="checkbox" id="unisex" />
            <label className="pl-2 cursor-pointer" htmlFor="unisex">
              Unisex
            </label>
          </div>
          <div className='mt-4'>
          <div className='flex justify-between border-t-2 pt-2'>
        <p className='font-medium'>Kids</p>
        <IoIosArrowUp size={14} />
            </div>
            <div className='mt-2'>
            <input type="checkbox" id="boys" />
            <label className="pl-2 cursor-pointer" htmlFor="boys">
              Boys
            </label>
          </div>
          <div>
            <input type="checkbox" id="girls" />
            <label className="pl-2 cursor-pointer" htmlFor="girls">
              Girls
            </label>
          </div>
          </div>
          <div className='mt-4'>
          <div className="flex justify-between  border-t-2 pt-2">
            <p>Shop By Price</p>
            <IoIosArrowUp size={14} />
          </div>
          <div>
            <input type="checkbox" id="under-2500" />
            <label className="pl-2 cursor-pointer" htmlFor="under-2500">
              Under ₹ 2,500.00
            </label>
          </div>
          <div>
            <input type="checkbox" id="2500-7500" />
            <label className="pl-2 cursor-pointer" htmlFor="2500-7500">
              ₹ 2,501.00 - ₹ 7,500.00
            </label>
          </div>
         </div>
        </div>

        {/* Slider end */}

         {/* All products section start */}
         <div className='w-full sm:w-3/4'>
         <ProductList />
         </div>
         {/* All products section end */}

        </div>
    </div>
  )
}

export default AllProductsPage
