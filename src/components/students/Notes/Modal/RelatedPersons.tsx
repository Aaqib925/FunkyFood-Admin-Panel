import RelatedPersonCard from '@/components/students/Notes/Modal/RelatedPersonCard';
import APP_IMAGES from '@/constant/images';
import React from 'react';

const persons = [
  {
    id: 1,
    name: 'Courtney Cooper',
    image: APP_IMAGES.studentMockImage,
  }
]

const RelatedPersons: React.FC = () => {
  return (
    <section className='flex flex-col items-stretch gap-y-2.5'>
      <p className='text-left font-[OpenSans-Regular] text-base text-[#656565] leading-[22px]'>
        Related To
      </p>
      <section className='flex items-center gap-x-2.5'>
        <div className='flex items-center gap-x-1.5 cursor-pointer'>
          <div className='w-[38px] h-[38px] rounded-full bg-white border border-dashed border-[#00B3FF] text-xl flex justify-center items-center text-[#00B3FF] leading-snug'>+</div>
          <p className='font-[OpenSans-Regular] text-sm text-[#00B3FF]'>Add New</p>
        </div>
      </section>
    </section>
  )
}

export default RelatedPersons;
