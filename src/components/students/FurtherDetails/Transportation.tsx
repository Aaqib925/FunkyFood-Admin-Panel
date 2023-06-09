import React from 'react';

const transportations = [
  {
    id: 1,
    title: 'Arrival to Campus',
    name: 'JETBLUE FLIGHT 449',
    from: 'LGA',
    to: 'LAX',
    confirmation: 'XGMNLI'
  }, {
    id: 2,
    title: 'Departure from Campus',
    name: 'DELTA FLIGHT 1666',
    from: 'LAX',
    to: 'JFK',
    confirmation: 'XGMNLI'
  }
]

export default function Transportation() {
  return (
    <>
      {
        transportations.map(({ id, title, name, from, to, confirmation }) => {
          return (
            <div key={id} className='mb-5'>
              <h3 className='font-[Roboto-Bold] text-[#1E1E1E] text-base leading-[19px] mb-2.5'>{title}</h3>
              <div className='flex items-center'>
                <p className='font-[OpenSans-Regular] text-xs text-[#656565]'>{name}</p>
                <div className='self-stretch my-0.5 mx-2.5 border border-solid border-r-[#656565]'></div>
                <p className='font-[OpenSans-Regular] text-xs text-[#656565]'>{from} {'>'} {to}</p>
                <div className='self-stretch my-0.5 mx-2.5 border border-solid border-r-[#656565]'></div>
                <p className='font-[OpenSans-Regular] text-xs text-[#656565]'>CONFIRMATION # {confirmation}</p>
              </div>
            </div>
          )
        })
      }
    </>
  )
}

