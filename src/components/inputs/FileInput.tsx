import React from 'react';

interface FileInputProps {
  label: string;
  labelId: string;
  labelClassName?: string;
  errorMessage?: string;
}

const FileInput = ({
  label = '',
  labelId = '',
  labelClassName = '',
  errorMessage = '',
}: FileInputProps) => {

  return (
    <div className='flex flex-col items-stretch'>
      <label htmlFor={labelId} className={labelClassName}>
        {label}
      </label>

      <input
        type="file"
        className="block w-full text-sm text-[#C5C5C5]
          file:w-1/2 file:font-[OpenSans-Regular]
          file:text-left file:text-sm file:text-[#C5C5C5]
          file:mr-4 file:py-2 file:px-[23px]
          file:border file:border-solid file:border-[#C5C5C5] file:rounded-[15px] 
        file:bg-white 
        hover:file:bg-[#1C355E20]"
      />

      {/* <button style="display:block;width:120px; height:30px;" onclick="document.getElementById('getFile').click()">Your text here</button>
      <input type='file' id="getFile" style="display:none"></input> */}

      {
        errorMessage ?
          <p className={'text-[#FF000081] font-[KumbhSans-Medium] text-sm leading-[17px] mt-1'}>{errorMessage}</p>
          : <></>
      }
    </div>
  );
}

export default FileInput