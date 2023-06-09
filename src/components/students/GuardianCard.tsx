import React from 'react';
import NextImage from '@/components/NextImage';
import APP_IMAGES from '@/constant/images';

interface GuardianCardProps {
  guardianName: string;
  guardianRelation: string;
  guardianMail: string;
  guardianPhone: string;
  guardianMaritalStatus: string;
}

export default function GuardianCard(
  {
    guardianName,
    guardianRelation,
    guardianMail,
    guardianPhone,
    guardianMaritalStatus
  }: GuardianCardProps
) {
  return (
    <div className='w-full bg-[#fff] rounded-[15px] flex flex-col items-stretch gap-y-8 px-6 pt-[22px]'>
      <div className='flex items-center gap-x-2.5'>
        <h3 className='font-[Roboto-Bold] text-base leading-[19px] text-[#1E1E1E]'>{guardianName}</h3>
        <div className='border border-solid border-r-[#656565] h-2.5'></div>
        <p className='font-[OpenSans-Regular] text-xs text-[#656565]'>{guardianRelation}</p>
      </div>
      <section className='flex flex-col items-stretch gap-y-5'>
        <div className='flex items-center gap-x-4'>
          <div className='w-[15px] flex justify-center items-center'>
            <NextImage
              useSkeleton
              src={APP_IMAGES.mailIcon}
              width={14}
              height={12}
              alt='Mail Icon'
              className='aspect-auto'
            />
          </div>
          <p className='font-[OpenSans-Regular] text-xs text-[#00B3FF] '>{guardianMail}</p>
        </div>
        <div className='flex items-center gap-x-4'>
          <div className='w-[15px] flex justify-center items-center'>
            <NextImage
              useSkeleton
              src={APP_IMAGES.phoneIcon}
              width={14}
              height={14}
              alt='Phone Icon'
              className='aspect-auto'
            />
          </div>
          <p className='font-[OpenSans-Regular] text-xs text-[#656565] '>{guardianPhone}</p>
        </div>
        <div className='flex items-center gap-x-4'>
          <div className='w-[15px] flex justify-center items-center'>
            <NextImage
              useSkeleton
              src={APP_IMAGES.phoneIcon}
              width={14}
              height={14}
              alt='Phone Icon'
              className='aspect-auto'
            />
          </div>
          <p className='font-[OpenSans-Regular] text-xs text-[#656565] '>{guardianMaritalStatus}</p>
        </div>
      </section>
    </div>
  )
}