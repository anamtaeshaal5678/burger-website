
import React from 'react';

export default function Progresser() {
  return (
    <div>
      <div className="flex items-start max-w-screen-lg w-full mx-auto mt-10">


        <div className='flex-items-center w-full'>
          <div className='w-full'>
            <div className=' w-8 h-8 shrink-0 mx-[-1px] bg-amber-400 p-1.5 flex items-center justify-center rounded-full '>
              <span className='text-base text-black font-bold'>1</span>
            </div>

            <div className='w-14/2 h-1 mx-4 rounded-lg bg-cyan-500'></div>
          </div>

          <div className='mt-2 mr-4'>
            <h6 className='text-base font-bold text-amber-400'>Step:1 Choos Your Meal</h6>
            <p className='text-xs text-amber-400'>Explore Our Delicious Menu & Select your Favorit Meal</p>
          </div>
        </div>

        <div className='flex-items-center w-full'>
          <div className='w-full'>
            <div className=' w-8 h-8 shrink-0 mx-[-1px] bg-amber-400 p-1.5 flex items-center justify-center rounded-full '>
              <span className='text-base text-black font-bold'>2</span>
            </div>

            <div className='w-14/2 h-1 mx-4 rounded-lg bg-cyan-500'></div>
          </div>

          <div className='mt-2 mr-4'>
            <h6 className='text-base font-bold text-amber-400'>Step:2 Customize Your Order {" "}</h6>
            <p className='text-xs text-amber-400'>Tailer Your Meal TO Your Test!</p>
          </div>
        </div>

        <div className='flex-items-center w-full'>
          <div className='w-full'>
            <div className=' w-8 h-8 shrink-0 mx-[-1px] bg-amber-400 p-1.5 flex items-center justify-center rounded-full '>
              <span className='text-base text-black last:font-bold'>3</span>
            </div>

            <div className='w-14/2 h-1 mx-4 rounded-lg bg-cyan-500'></div>
          </div>

          <div className='mt-2 mr-4'>
            <h6 className='text-base font-bold text-amber-400'>Step:3 Placed Your Order {" "}</h6>
            <p className='text-xs text-amber-400'>Ready to eat?Proceed to Checkout and Complete Your Order!</p>
          </div>
        </div>



      </div>
    </div>


  );
}
