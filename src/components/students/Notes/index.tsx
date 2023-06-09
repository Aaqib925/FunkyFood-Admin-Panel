import React, { useCallback } from 'react';
import TabComponent from '@/components/students/Notes/TabComponent';
import { Modal } from '@/components/students/Notes/Modal';

export default function Notes() {
  const [openModal, setOpenModal] = React.useState(false);

  const handleModalDisplay = useCallback(() => {
    setOpenModal(!openModal);
  }, [setOpenModal, openModal]);
  return (
    <>
      <section className='flex flex-col items-stretch flex-1'>
        <div className='w-full flex justify-between items-center py-5 pl-10 pr-6'>
          <h2 className='font-[Roboto-Bold] text-lg text-[#1E1E1E] leading-[21px]'>Notes</h2>
          <span className='font-[OpenSans-Regular] text-xs text-[#00B3FF] cursor-pointer' onClick={handleModalDisplay} >
            Create a new note
          </span>
        </div>
        <TabComponent />
      </section>
      {
        openModal
          ?
          <Modal
            onClose={handleModalDisplay}
          />
          : <></>
      }
    </>
  );
}