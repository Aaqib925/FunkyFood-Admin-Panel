import { useCallback } from 'react';

interface InputProps {
  label: string;
  labelId: string;
  placeholder: string;
  type?: string;
  value: string;
  onChangeValue?: (text: string) => void;
  errorMessage?: string;
  labelClassName?: string;
  inputClassName?: string;
  isTextArea?: boolean;
}

const Input = ({
  label = '',
  labelId = '',
  placeholder = 'Enter placeholder',
  type = 'text',
  value = '',
  onChangeValue,
  errorMessage = '',
  labelClassName = '',
  inputClassName = '',
  isTextArea = false,
}: InputProps) => {


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
      <>
        {
          !isTextArea
            ? <input
              type={type}
              id={labelId}
              placeholder={placeholder}
              defaultValue={value}
              onChange={(event) => onChangeText(event.target.value)}
              className={inputClassName}
            />
            : <textarea
              id={labelId}
              placeholder={placeholder}
              className={inputClassName}
            ></textarea>
        }
      </>
      {
        errorMessage ?
          <p className={'text-[#FF000081] font-[KumbhSans-Medium] text-sm leading-[17px] mt-1'}>{errorMessage}</p>
          : <></>
      }
    </div>
  );
}

export default Input