import * as React from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

import { PreloadProvider } from '@/context/PreloadContext';
import SideMenu from '@/components/layout/SideMenu';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <>
      <PreloadProvider>
        {/* <Header /> */}
        <section className='flex relative'>
          <SideMenu />
          <section className='ml-[250px] flex-1'>
            {children}
          </section>
        </section>
        {/* <Footer /> */}
      </PreloadProvider>
    </>
  );
}
