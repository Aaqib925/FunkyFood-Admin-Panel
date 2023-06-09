import * as React from 'react';

import NextImage from '@/components/NextImage';
import APP_IMAGES from '@/constant/images';

const AdminHeader = () => {

  return (
    <section className='w-full bg-white rounded-[15px] flex justify-end items-center px-8 py-2.5'>

      <div className='relative mr-10'>
        <NextImage
          useSkeleton
          src={APP_IMAGES.bellIcon}
          alt='Bell'
          width={22}
          height={27}
          className='aspect-square'
        />
        <div className='absolute left-0 top-1 z-30 rounded-full bg-[#EC5453] border-2 border-solid border-white w-2.5 h-2.5'></div>
      </div>

      <div className='flex flex-col items-end justify-center mr-6'>
        <h2 className='font-[OpenSans-Bold] text-base text-[#1E1E1E] leading-[22px]'>John Doe</h2>
        <p className='font-[OpenSans-Regular] text-sm text-[#656565] leading-[19px]'>Admin</p>
      </div>

      <div className='w-[61px] h-[61px] rounded-full relative'>
        <NextImage
          useSkeleton
          src={APP_IMAGES.profilePlaceholder}
          alt='Profile'
          width={61}
          height={61}
          className='aspect-square rounded-full'
        />
        <div className='absolute right-0 top-11 z-30 rounded-full bg-[#28C66F] border-2 border-solid border-white w-4 h-4'></div>
      </div>

    </section>
  )

}

export default AdminHeader;