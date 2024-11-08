
import Image from 'next/image';
import React from 'react'
import { FaHamburger } from "react-icons/fa";
import { FaSearchLocation } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div>
      <div className="grid xl:grid-cols-1">
        <div className="p-5">
          <div className="py-3 px-3 rounded-xl border w-full bg-gradient-to-r from-black to-grey-900">
            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                {/* Logo burger */}
                <FaHamburger className='w-6 h-6 text-yellow-400 hover:text-cyan-300' />

                {/* Search bar and icon */}
                <div style={{ position: 'relative' }}>
                  <input 
                    type='text'
                    className='rounded-3xl py-3 px-3 outline-none text-xs w-[350px] pr-10 hidden lg:block md:block' 
                    placeholder='Search for your favourite burger' 
                  />
                  <FaSearchLocation 
                    className='w-6 h-6 text-lime-300 absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block' 
                  />
                </div>
              </div>

              <div className='flex justify-center items-center gap-2'>
                <FaBolt className='w-6 h-6 text-amber-400 hidden lg:block md:block' />
                <p className='text-black hidden lg:block md:block'>
                  Order now and get it in
                  <span className='text-amber-400'> 30 minutes</span>
                </p>

                {/* Cart icon */}
                <FaCartArrowDown className='w-9 h-9 text-sky-400 rounded-full ring-2 p-1 relative hover:ring-amber-400' />

                {/* User avatar */}
                <Image src='/self.jpeg' alt='self' width={50} height={50} className='inline-block w-9 h-9 rounded-full ring-2 ring-sky-400 hover:ring-amber-300' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
