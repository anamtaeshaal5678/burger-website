import Link from 'next/link';
import image from 'next/image';
import React from 'react';
export default function carouselItems() {
  return (
    <div className='max-w-lg mx-auto mt-8 overflow-hidden rounded-lg shadow-lg'>
<div className='realative w-full flex overflow-x-auto snap-x snap-mandatory'>
  
  <div className='w-7/6 h-7/6 flex-shrink-0 snap-center'>
<img   
src="download.png"
alt='Burger'
className='w-full h-64 object-cover'/>
<h3 className=''>Smash Burger</h3>
</div>

<div className='w-full h-full flex-shrink-0 snap-center'>
     <img
     src='image2.png'
     alt='Burger'
     className='w-full h-64  bg-lime-400 object-cover'
     />
</div>


<div className='w-full h-full flex-shrink-0 snap-center'>
<img 
src='image3.jpg'
alt='Burger'
className='w-full h-64 bg-cyan-300 object-cover'/>
</div>







</div>
    </div>
  )

}