import React from 'react';

export default function Purchase() {
  return (
    <>
      <div className='flex items-center mb-[5px]'>
        <h3 className='font-[Roboto-Bold] text-[#1E1E1E] text-base leading-[19px]'>Python 101: Where Programming Meets Creativity</h3>
        <div className='self-stretch border border-solid border-r-[#656565] my-1 mx-2.5'></div>
        <p className='font-[OpenSans-Regular] text-[#656565] text-xs'>July 9 to July 28</p>
      </div>

      <div className='flex items-center mb-5'>
        <h5 className='font-[OpenSans-SemiBold] text-xs text-[#000]'>SIG'S SUMMER PROGRAMS AT YALE UNIVERSITY</h5>
      </div>

      <div className='flex items-center'>
        <p className='font-[OpenSans-Regular] text-xs text-[#656565]'>MIDDLE & HIGH SCHOOL PROGRAMS FOR GRADES 6-11</p>
        <div className='self-stretch border border-solid border-r-[#656565] ml-4 mr-2.5 my-0.5'></div>
        <p className='font-[OpenSans-Regular] text-xs text-[#656565]'>3 WEEKS</p>
      </div>
    </>
  )
}

