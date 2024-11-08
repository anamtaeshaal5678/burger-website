import React from 'react';
import Image from 'next/image'


const Productlist = () => {
  return (
    <div>
      <div className=' bg-amber-500 card flex items-center justify-items-start'>
        <img 
        src='card1.jpg'
        alt='image'
height={400}
width={350}
/>
<h3 className='flex font-extrabold text-2xl text-black item'>
STAKE BURGER </h3> <br/>
</div>
<div>
<p className='font-extrabold bg-amber-500 text-2xl  text-black'>550/PKR</p>
</div>
 <div className=' bg-cyan-300 card  flex items-center justify-center '>
<img 
src='card2.jpg'
alt='image'
width={400}
height={350}
/>
<h3 className='flex font-extrabold text-2xl text-black'>BEEF BURGER</h3>
</div>
<div>
<p className='font-extrabold bg-cyan-300 text-2xl  text-black'>600/PKR</p>
</div>
<div className=' bg-lime-500 card flex items-center justify-items-end '>
<img
src='card3.jpg'
alt=''
width={400}
height={350}
/>
<h3 className='flex font-extrabold text-2xl text-black item-'>
    CHEES BURGER
    </h3>
    </div>
    <div>
<p className='font-extrabold bg-lime-500 text-2xl  text-black'>350/PKR</p>
</div>




    </div>
  )
}

export default Productlist


