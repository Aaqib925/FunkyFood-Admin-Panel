import React, { useCallback } from 'react';

interface SelectProps {
  label: string;
  labelId: string;
  value: string;
  onChangeValue?: (text: string) => void;
  errorMessage?: string;
  labelClassName?: string;
  selectClassName?: string;
  options?: string[];
}

const Select = ({
  label = '',
  labelId = '',
  value = '',
  onChangeValue = (text: string) => { },
  errorMessage = '',
  labelClassName = '',
  selectClassName = '',
  options = []
}: SelectProps) => {


  const onChangeText = useCallback((text: string) => {
    if (onChangeValue) {
      onChangeValue(text)
    }
  }, [onChangeValue])

  return (
    <div className='flex flex-col items-stretch'>
      <label htmlFor={labelId} className={labelClassName}>
        {label}
      </label>

      <select
        id={labelId}
        defaultValue={value}
        onChange={(event) => onChangeText(event.target.value)}
        className={selectClassName}
      >
        {
          options.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))
        }
      </select>

      {
        errorMessage ?
          <p className={'text-[#FF000081] font-[KumbhSans-Medium] text-sm leading-[17px] mt-1'}>{errorMessage}</p>
          : <></>
      }
    </div>
  );
}

export default Select