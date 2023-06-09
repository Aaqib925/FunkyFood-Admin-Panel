import NextImage from '@/components/NextImage'
import React from 'react'

interface RelatedPersonCardProps {
  keyId: number;
  profileName: string;
  profileImg: string;
}

function RelatedPersonCard({
  keyId,
  profileName,
  profileImg,
}: RelatedPersonCardProps) {
  return (
    <div key={keyId} className='flex items-center gap-x-1.5'>
      <div className='w-9 h-9 rounded-full'>
        <NextImage
          useSkeleton
          src={profileImg}
          width={36}
          height={36}
          alt='student'
          className='rounded-full'
        />
      </div>
      <p className='font-[OpenSans-Regular] text-sm text-black leading-[19px]'>{profileName}</p>
    </div>
  )
}

export default RelatedPersonCard