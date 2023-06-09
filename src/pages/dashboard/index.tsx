import * as React from 'react';

import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import APP_IMAGES from '@/constant/images';
import UnstyledLink from '@/components/links/UnstyledLink';
import AdminHeader from '@/components/header/AdminHeader';
import SplineChart from '@/components/charts/SplineChart';

const dashboardHeaders = [
  {
    id: 1,
    title: 'Form Submissions Pending',
    value: '1.225',
    link: '/',
    iconSrc: APP_IMAGES.programAddedIcon
  }, {
    id: 2,
    title: 'Students Enrolled',
    value: '12.700',
    link: '/',
    iconSrc: APP_IMAGES.studentsEnrolledIcon
  }, {
    id: 3,
    title: 'Parents Enrolled',
    value: '9.700',
    link: '/',
    iconSrc: APP_IMAGES.studentsEnrolledIcon
  }, {
    id: 4,
    title: 'Programs Added',
    value: '25',
    link: '/',
    iconSrc: APP_IMAGES.programAddedIcon
  }
]

const medicalStaffs = [
  {
    id: 1,
    name: 'Courtney Henry',
    email: 'david.name@gmail.com'
  }, {
    id: 2,
    name: 'Henry Courtney',
    email: 'david.name@gmail.com'
  }, {
    id: 3,
    name: 'Courtney Henry',
    email: 'david.name@gmail.com'
  }, {
    id: 4,
    name: 'Courtney Henry',
    email: 'david.name@gmail.com'
  }, {
    id: 5,
    name: 'Courtney Henry',
    email: 'david.name@gmail.com'
  }, {
    id: 6,
    name: 'Courtney Henry',
    email: 'david.name@gmail.com'
  }
]

export default function Dashboard() {
  return (
    <Layout>
      <main className='bg-[#FAFAFA] px-5 py-8 flex flex-col items-stretch gap-y-5'>

        <AdminHeader />

        <section className='w-full grid grid-cols-4 gap-x-5'>
          {
            dashboardHeaders.map(({ id, title, value, link, iconSrc }) => {
              return (
                <section key={id} className='flex items-center justify-between pl-5 pr-2.5 py-8 bg-white rounded-[15px]'>
                  <div>
                    <h4 className='font-[OpenSans-Regular] text-sm text-[#656565] leading-[19px] mb-2.5'>{title}</h4>
                    <h2 className='font-[Roboto-Bold] text-2xl text-[#1E1E1E] leading-7'>{value}</h2>
                    <UnstyledLink href={link}><p className='font-[OpenSans-Regular] text-xs text-[#00B3FF]'>See details</p></UnstyledLink>
                  </div>
                  <div>
                    <NextImage
                      useSkeleton
                      src={iconSrc}
                      alt={title}
                      width={94}
                      height={94}
                      className='aspect-square'
                    />
                  </div>
                </section>
              )
            })
          }
        </section>

        <section className='flex gap-x-5 items-stretch'>
          <section className='w-1/3 bg-white rounded-[15px]'>
            <h2 className='font-[OpenSans-SemiBold] text-2xl text-[#1E1E1E] leading-[33px] py-6 px-5'>Medical Staff</h2>
            <section>
              {
                medicalStaffs.map(({ id, name, email }) => {
                  return (
                    <div key={id} className='w-full grid grid-cols-2 px-10 font-[OpenSans-Regular] text-base text-black py-2.5'>
                      <p>{name}</p>
                      <p>{email}</p>
                    </div>
                  )
                })
              }
              <div className='w-full flex justify-center items-center font-[OpenSans-Regular] text-[#00B3FF] text-xs mt-3 mb-5'>See more</div>
            </section>
          </section>
          <section className='w-2/3 bg-white rounded-[15px] px-8 py-[26px]'>
            <SplineChart />
          </section>
        </section>
      </main>
    </Layout>
  );
}
