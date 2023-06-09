import UnstyledLink from '@/components/links/UnstyledLink';
import React from 'react';

const formSubmissionList = [
  {
    id: 1,
    title: 'Physician’s Form For Download',
    detail: 'Oct 8. 2022 by John Doe',
    status: 'Status',
  }, {
    id: 2,
    title: 'Physician’s Form For Download',
    detail: 'Oct 8. 2022 by John Doe',
    status: 'Status',
  }, {
    id: 3,
    title: 'Physician’s Form For Download',
    detail: 'Oct 8. 2022 by John Doe',
    status: 'Status',
  }, {
    id: 4,
    title: 'Physician’s Form For Download',
    detail: 'Oct 8. 2022 by John Doe',
    status: 'Status',
  }, {
    id: 5,
    title: 'Physician’s Form For Download',
    detail: 'Oct 8. 2022 by John Doe',
    status: 'Status',
  }
]

export default function FormSubmissions() {
  return (
    <section className='w-full bg-[#fff] rounded-[15px]'>
      <section className='pt-[17px] pb-[11px] pl-5 pr-[17px] flex justify-between'>
        <h3 className='font-[OpenSans-SemiBold] text-base leading-[22px] text-[#1E1E1E]'>Form Submissions</h3>
        <div>
          <UnstyledLink href='/'>
            <p className='font-[OpenSans-Regular] text-xs text-[#00B3FF]'>Bulk Download</p>
          </UnstyledLink>
        </div>
      </section>

      <section className='max-h-[152px] overflow-y-auto'>
        {
          formSubmissionList.map(({ id, title, detail: detail, status }) => {
            return (
              <section key={id} className={`px-5 pt-1 pb-1.5 flex justify-between items-center ${(id === formSubmissionList.length) ? ' ' : 'border-b border-solid border-b-[#E8E8E8]'} `}>
                <div className='flex flex-col gap-y-2'>
                  <h4 className='font-[OpenSans-SemiBold] text-xs text-[#1E1E1E]'>{title}</h4>
                  <p className='font-[OpenSans-Regular] text-xs text-[#656565]'>{detail}</p>
                </div>
                <div>
                  <span className='border border-solid border-[#E5DFDF] rounded-[10px] px-4 py-1 font-[OpenSans-Regular] text-[9px] leading-3 text-[#EC5453]'>{status}</span>
                </div>
                <div>
                  <UnstyledLink href='/'>
                    <p className='font-[OpenSans-Regular] text-xs text-[#00B3FF]'>Download</p>
                  </UnstyledLink>
                </div>
              </section>
            )
          })
        }
      </section>

    </section>
  );
}