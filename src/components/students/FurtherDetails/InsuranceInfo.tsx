import UnstyledLink from '@/components/links/UnstyledLink';
import React from 'react';

const insuranceInfoData = [
  {
    id: 1,
    label: 'Insurance Company',
    value: 'Company Name',
  }, {
    id: 2,
    label: 'Policy #',
    value: '159416549',
  }, {
    id: 3,
    label: 'Insurance Company Phone',
    value: '(200) 586-2264',
  }, {
    id: 4,
    label: 'Subscriber',
    value: 'July 6th, 2023 at 4:22 PM',
  }, {
    id: 5,
    label: 'Relationship to Student',
    value: 'Guardian',
  }
]

export default function InsuranceInfo() {
  return (
    <>
      <h3 className='font-[Roboto-Bold] text-[#1E1E1E] text-base leading-[19px] mb-2.5'>Insurance Info</h3>
      {
        insuranceInfoData.map(({ id, label, value }) => {
          return (
            <div key={id} className='flex items-center mb-2.5'>
              <p className='font-[OpenSans-SemiBold] text-xs text-[#000] w-44'>{label}</p>
              <div className='self-stretch my-0.5 mx-[31px] border border-solid border-r-[#656565]'></div>
              <p className='font-[OpenSans-Regular] text-xs text-[#656565]'>{value}</p>
            </div>
          )
        })
      }
      <div>
        <UnstyledLink href='/' className='font-[OpenSans-SemiBold] text-xs text-[#00B3FF]'>
          View Insurance Card
        </UnstyledLink>
      </div>
    </>
  )
}

