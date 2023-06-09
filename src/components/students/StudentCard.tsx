import React from 'react';
import NextImage from '@/components/NextImage';
import APP_IMAGES from '@/constant/images';

interface StudentCardProps {
  studentImgSrc: string;
  studentName: string;
  studentGender: string;
  studentDOB: string;
  studentAge: string;
  studentMail: string;
  studentAddress: string;
  studentUniversity: string;
  studentScholar: string;
  studentCalendar: string;
}

export default function StudentCard({
  studentImgSrc,
  studentName,
  studentGender,
  studentDOB,
  studentAge,
  studentMail,
  studentAddress,
  studentUniversity,
  studentScholar,
  studentCalendar
}: StudentCardProps) {
  return (
    <div className='w-full bg-[#fff] rounded-[15px] flex items-stretch px-3 relative'>
      <div className='absolute right-[90px] -top-8 bg-[#1C355E] px-5 py-[5px] rounded-[13px]'>
        <p className='font-[OpenSans-SemiBold] text-xs text-white'>Student Record</p>
      </div>
      <div className='w-1/2 relative flex items-end pb-3'>
        <div className='absolute -top-12 left-0 right-0 flex justify-center items-center'>
          <div className='border-4 border-solid border-white rounded-full'>
            <NextImage
              useSkeleton
              src={studentImgSrc}
              width={100}
              height={100}
              alt='Student Image'
              className='aspect-square'
            />
          </div>
        </div>
        <section className='w-full flex flex-col items-stretch'>
          <h3 className='font-[Roboto-Bold] text-lg text-[#1E1E1E] leading-[21px] text-center'>{studentName}</h3>
          <p className='font-[OpenSans-Regular] text-xs text-[#656565] my-[5px] text-center'>{studentGender}</p>
          <div className='flex items-stretch justify-center gap-x-[5px] mb-2.5'>
            <p className='font-[OpenSans-Regular] text-xs text-[#656565]'>{studentDOB}</p>
            <span className='border border-solid border-r-[#656565] my-0.5'></span>
            <p className='font-[OpenSans-Regular] text-xs text-[#656565]'>{studentAge} Years</p>
          </div>
          <div className='flex items-stretch justify-center gap-x-1.5 mb-2.5'>
            <p className='font-[OpenSans-Bold] text-xs text-[#656565]'>DORM NAME</p>
            <span className='border border-solid border-r-[#656565] my-0.5'></span>
            <p className='font-[OpenSans-Bold] text-xs text-[#656565]'>ROOM #</p>
          </div>
          <span className='font-[OpenSans-Regular] text-xs text-[#00B3FF] text-center cursor-pointer'>view more</span>
        </section>
      </div>
      <div className='w-1/2 flex flex-col items-stretch gap-y-4 py-[14px]'>
        <div className='flex items-center gap-x-3'>
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
          <p className='font-[OpenSans-Regular] text-xs text-[#00B3FF] '>{studentMail}</p>
        </div>
        <div className='flex items-center gap-x-3'>
          <div className='w-[15px] flex justify-center items-center'>
            <NextImage
              useSkeleton
              src={APP_IMAGES.locationIcon}
              width={12}
              height={19}
              alt='Location Icon'
              className='aspect-auto'
            />
          </div>
          <p className='font-[OpenSans-Regular] text-xs text-[#656565] '>{studentAddress}</p>
        </div>
        <div className='flex items-center gap-x-3'>
          <div className='w-[15px] flex justify-center items-center'>
            <NextImage
              useSkeleton
              src={APP_IMAGES.universityIcon}
              width={14}
              height={14}
              alt='University Icon'
              className='aspect-auto'
            />
          </div>
          <p className='font-[OpenSans-Regular] text-xs text-[#656565] '>{studentUniversity}</p>
        </div>
        <div className='flex items-center gap-x-3'>
          <div className='w-[15px] flex justify-center items-center'>
            <NextImage
              useSkeleton
              src={APP_IMAGES.scholarIcon}
              width={14}
              height={12}
              alt='Scholar Icon'
              className='aspect-auto'
            />
          </div>
          <p className='font-[OpenSans-Regular] text-xs text-[#656565] '>{studentScholar}</p>
        </div>
        <div className='flex items-center gap-x-3'>
          <div className='w-[15px] flex justify-center items-center'>
            <NextImage
              useSkeleton
              src={APP_IMAGES.calendarIcon}
              width={14}
              height={14}
              alt='Calendar Icon'
              className='aspect-auto'
            />
          </div>
          <p className='font-[OpenSans-Regular] text-xs text-[#656565] '>{studentCalendar}</p>
        </div>
      </div>
    </div>
  )
}