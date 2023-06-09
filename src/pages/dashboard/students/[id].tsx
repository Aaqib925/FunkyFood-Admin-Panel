import React from 'react';
import Layout from '@/components/layout/Layout';
import AdminHeader from '@/components/header/AdminHeader';
import APP_IMAGES from '@/constant/images';
import StudentCard from '@/components/students/StudentCard';
import GuardianCard from '@/components/students/GuardianCard';
import FormSubmissions from '@/components/students/FormSubmissions';
import Notes from '@/components/students/Notes';
import FurtherDetails from '@/components/students/FurtherDetails';


export default function StudentProfile() {

  return (
    <Layout>

      <main className='h-screen bg-[#FAFAFA] px-5 pt-8 py-5 flex flex-col items-stretch gap-y-14'>

        <AdminHeader />

        <section className='flex flex-col items-stretch flex-1'>
          <section className='flex items-stretch gap-x-5'>

            <section className='w-4/12 flex items-stretch'>
              <StudentCard
                studentImgSrc={APP_IMAGES.studentMockImage}
                studentName='Courtney Cooper'
                studentGender='Female'
                studentDOB='Jun 13, 2010'
                studentAge='14'
                studentMail={'cooper@example.com'}
                studentAddress={'1901 Thornridge Cir. Shiloh, Hawaii 81063'}
                studentUniversity={'UCLA'}
                studentScholar={'Summer Discovery'}
                studentCalendar={'Fall 23'}
              />
            </section>

            <section className='w-2/12 flex items-stretch'>
              <GuardianCard
                guardianName='Jane Cooper'
                guardianRelation='Mother'
                guardianMail='cooper@example.com'
                guardianPhone='(200) 586-2264'
                guardianMaritalStatus='Married'
              />
            </section>

            <section className='w-2/12 flex items-stretch'>
              <GuardianCard
                guardianName='David Cooper'
                guardianRelation='Father'
                guardianMail='cooper@example.com'
                guardianPhone='(200) 586-2264'
                guardianMaritalStatus='Married'
              />
            </section>

            <section className='w-4/12 flex items-stretch'>
              <FormSubmissions />
            </section>
          </section>

          <section className='flex-1 box-border w-full grid grid-cols-2 gap-[18px]'>
            <Notes />
            <FurtherDetails />
          </section>
        </section>

      </main >
    </Layout>
  );
}