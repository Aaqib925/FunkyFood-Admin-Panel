import NextImage from '@/components/NextImage';
import UnstyledLink from '@/components/links/UnstyledLink';
import APP_IMAGES from '@/constant/images';
import React from 'react';

const medicalInfoData = [
  {
    id: 1,
    title: 'Allergies',
    value: 'Treenuts, Peanuts, Shellfish'
  }, {
    id: 2,
    title: 'Allergies',
    value: 'NO'
  }, {
    id: 3,
    title: 'Immunizations',
    value: 'COVID, Covid Booster'
  }, {
    id: 4,
    title: 'Last Log/Treatment',
    value: 'July 6th, 2023 at 4:23 PM'
  }
]

const emergencyContactsData = [
  {
    id: 1,
    name: 'Jane Cooper',
    relation: 'mother',
    contact: '(200) 586-2264',
    email: 'cooper@example.com'
  },
  {
    id: 2,
    name: 'David Cooper',
    relation: 'father',
    contact: '(200) 586-2264',
    email: 'cooper@example.com'
  }
]

export default function MedicalInfo() {
  return (
    <>
      <h3 className='font-[Roboto-Bold] text-[#1E1E1E] text-base leading-[19px] mb-2.5'>Medical Info</h3>
      {medicalInfoData.map(({ id, title, value }) => {
        return (
          <div key={id} className='flex items-center mb-2.5'>
            <p className='font-[OpenSans-SemiBold] text-xs text-black w-32 '>{title}</p>
            <div className='w-px bg-[#656565] self-stretch my-0.5 mx-2.5'></div>
            <p className='font-[OpenSans-Regular] text-xs text-[#656565] '>{value}</p>
          </div>
        )
      })}
      <p className='font-[OpenSans-SemiBold] text-xs text-[#000]'>Updated on 02/27/2023 5:55 PM (John Doe)</p>
      <h3 className='font-[Roboto-Bold] text-base text-[#1E1E1E] leading-[19px] mt-5 mb-2.5'>Emergency Contacts</h3>
      {
        emergencyContactsData.map(({ id, name, relation, contact, email }) => {
          return (
            <section key={id} className='mb-3.5'>
              <h5 className='font-[OpenSans-Bold] text-xs text-black mb-[13px] '>
                {name}
                <span className='font-[OpenSans-Regular]'> ({relation})</span>
              </h5>
              <section className='flex items-center gap-x-4 px-1'>
                <div className='flex items-center gap-x-1.5'>
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
                  <p className='font-[OpenSans-Regular] text-xs text-[#656565] '>{contact}</p>
                </div>
                <div className='flex items-center gap-x-1.5'>
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
                  <p className='font-[OpenSans-Regular] text-xs text-[#00B3FF] '>{email}</p>
                </div>
              </section>
            </section>
          )
        })
      }
      <section className='absolute top-6 right-10'>
        <UnstyledLink href='/' className='text-[#00B3FF] font-[OpenSans-Regular] text-xs'>View Medical Report</UnstyledLink>
      </section>
    </>
  )
}

