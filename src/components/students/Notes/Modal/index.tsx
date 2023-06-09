import Input from '@/components/inputs/Input';
import Button from '@/components/buttons/Button';
import React from 'react';
import { HiOutlineCheck, HiX } from 'react-icons/hi';
import Select from '@/components/inputs/Select';
import FileInput from '@/components/inputs/FileInput';
import RelatedPersons from '@/components/students/Notes/Modal/RelatedPersons';

interface ModalProps {
  onClose: () => void;
}

const selectOptions = [
  'General',
  'Performance',
]

export const Modal: React.FC<ModalProps> = ({ onClose }) => {

  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="h-screen flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-70" />
        </div>
        <div
          className="mx-auto align-bottom bg-white rounded-[15px] overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-[708px] sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white">
            <h3
              className="w-full bg-[#1C355E] px-8 pt-[18px] pb-[13px] text-white font-[OpenSans-SemiBold] text-2xl rounded-t-[15px] "
              id="modal-headline"
            >
              Create a New Note
            </h3>
            <div className="px-8 pt-5 pb-[30px] flex flex-col items-stretch gap-y-10">

              <section className='flex flex-col items-stretch gap-y-5'>
                <Input
                  label={'Title'}
                  placeholder={'Title'}
                  type={'text'}
                  labelId={'title'}
                  value={''}
                  labelClassName={'w-full text-left font-[OpenSans-Regular] text-base text-[#656565] leading-[22px] pb-[10px]'}
                  inputClassName={'form-input border border-solid border-[#C5C5C5] active:border-[#656565] focus:border-[#656565] rounded-[15px] font-[OpenSans-Regular] text-sm leading-[19px] text-[#C5C5C5] placeholder:text-[#C5C5C5] pt-[9px] pb-[10px] px-[23px]'}
                />

                <Select
                  label={'Topic'}
                  labelId={'Topic'}
                  value={''}
                  labelClassName={'w-full text-left font-[OpenSans-Regular] text-base text-[#656565] leading-[22px] pb-[10px]'}
                  selectClassName={'w-1/2 form-select border border-solid border-[#C5C5C5] active:border-[#656565] focus:border-[#656565] outline-none rounded-[15px] font-[OpenSans-Regular] text-sm leading-[19px] text-[#C5C5C5] placeholder:text-[#C5C5C5] pt-[9px] pb-[10px] px-[23px]'}
                  options={selectOptions}
                />

                <Input
                  label={'Note'}
                  placeholder={'Note'}
                  labelId={'description'}
                  value={''}
                  labelClassName={'w-full text-left font-[OpenSans-Regular] text-base text-[#656565] leading-[22px] pb-[10px]'}
                  inputClassName={'form-textarea h-[130px] border border-solid border-[#C5C5C5] active:border-[#656565] focus:border-[#656565] outline-none rounded-[15px] font-[OpenSans-Regular] text-sm leading-[19px] text-[#C5C5C5] placeholder:text-[#C5C5C5] pt-[9px] pb-[10px] px-[23px]'}
                  isTextArea={true}
                />

                <FileInput
                  label={'Attachment'}
                  labelId={'Attachment'}
                  labelClassName={'w-full text-left font-[OpenSans-Regular] text-base text-[#656565] leading-[22px] pb-[10px]'}
                />

                <RelatedPersons />

              </section>

              <section className='flex justify-between items-center'>
                <Button
                  leftIcon={HiX}
                  className='pl-2 pr-5 py-2.5 font-[OpenSans-Regular] text-black hover:text-black text-sm leading-[19px] flex  gap-x-2 border-none outline-none bg-white shadow-none hover:bg-white focus:bg-white active:bg-white'
                  onClick={onClose}
                >
                  <span className='font-[OpenSans-Regular] text-sm leading-[19px]'>
                    Cancel
                  </span>
                </Button>
                <Button
                  leftIcon={HiOutlineCheck}
                  className='px-9 py-2.5 font-[OpenSans-Regular] text-white hover:text-white text-sm leading-[19px] flex  gap-x-2 border-none outline-none bg-[#1C355E] shadow-none hover:bg-[#1C355E] focus:bg-[#1C355E] active:bg-[#1C355E] rounded-[15px]'
                >
                  <span className='font-[OpenSans-Regular] text-sm leading-[19px]'>
                    Create
                  </span>
                </Button>
              </section>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

