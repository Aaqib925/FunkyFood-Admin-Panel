import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import APP_IMAGES from '@/constant/images';

const navbarLinks = [
  {
    id: '1',
    href: '/dashboard',
    label: 'Dashboard',
    iconSrc: APP_IMAGES.dashboardNavIcon,
  }, {
    id: '2',
    href: '/students',
    label: 'Students',
    iconSrc: APP_IMAGES.studentsNavIcon,
    iconWidth: 17,
    iconHeight: 19,
  }, {
    id: '3',
    href: '/parents',
    label: 'Parents',
    iconSrc: APP_IMAGES.parentsNavIcon,
  }, {
    id: '4',
    href: '/reports',
    label: 'Reports',
    iconSrc: APP_IMAGES.reportsNavIcon,
  }, {
    id: '5',
    href: '/taskManagement',
    label: 'Task Management',
    iconSrc: APP_IMAGES.taskManagementNavIcon,
  }
];

export default function SideMenu() {
  return (
    <aside className='fixed top-0 bottom-0 left-0 w-[250px] flex h-screen flex-col justify-between border-e bg-white'>
      <div className="flex flex-col items-stretch gap-14">
        <div className='w-full flex justify-center items-center mt-14 px'>
          <NextImage
            useSkeleton
            src={APP_IMAGES.sideMenuLogo}
            alt='Logo'
            width={200}
            height={38}
            className='aspect-[200/38]'
          />
        </div>

        <nav aria-label="Main Nav" className="flex flex-col gap-y-1.5 items-stretch">
          {
            navbarLinks.map(({ id, href, label, iconSrc, iconWidth = 24, iconHeight = 24 }) => {
              return (
                <UnstyledLink key={id} href={href} className='flex items-center gap-5 py-5 px-8 duration-200  bg-white text-[#1E1E1E] hover:bg-[#1C355E] hover:text-white UnstyledLink'>
                  <span className='w-6 h-6 flex justify-center items-center'>
                    <NextImage
                      useSkeleton
                      src={iconSrc}
                      width={iconWidth}
                      height={iconHeight}
                      alt={label}
                      className='aspect-auto'
                    />
                  </span>
                  <p className='font-[OpenSans-Regular] text-base leading-[22px]'>{label}</p>
                </UnstyledLink>
              )
            })
          }
        </nav>
      </div >
    </aside >
  );
}
