import React, { useEffect } from 'react';
import MedicalInfo from '@/components/students/FurtherDetails/MedicalInfo';
import Purchase from '@/components/students/FurtherDetails/Purchase';
import Transportation from '@/components/students/FurtherDetails/Transportation';
import InsuranceInfo from '@/components/students/FurtherDetails/InsuranceInfo';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const tabList = [
  {
    id: 1,
    name: 'Medical',
  }, {
    id: 2,
    name: 'Program',
  }, {
    id: 3,
    name: 'Transportation',
  }, {
    id: 4,
    name: 'Insurance',
  }
]

export default function FurtherDetails() {

  const [selectedTab, setSelectedTab] = React.useState(1);

  const handleSelectingTab = (tabId: any) => {
    setSelectedTab(tabId);
  }

  useEffect(
    () => {
      console.log("selectedTab", selectedTab)
    },
    [selectedTab]
  )

  return (
    <Tabs className='flex flex-col items-stretch' >
      <section className='w-full flex justify-between items-center px-10 pt-[18px] pb-[17px]'>
        <TabList className={'rounded-[15px] flex items-center mx-auto bg-white'}>
          {
            tabList.map((tab) => (
              <Tab
                key={tab.id}
                className={`flex items-stretch outline-none`}
              >
                <span
                  className={`w-full font-[OpenSans-SemiBold] text-base rounded-[15px] px-8 py-0.5 cursor-pointer text-center ${selectedTab === tab.id ? 'text-white bg-[#1C355E]' : 'text-[#1E1E1E] bg-white'}`}
                  onClick={() => handleSelectingTab(tab.id)}
                >
                  {tab.name}
                </span>
              </Tab>
            ))
          }
        </TabList>
      </section>

      <section className='w-full rounded-[15px] bg-white py-6 px-[30px] relative flex-1'>
        <TabPanel>
          <MedicalInfo />
        </TabPanel>
        <TabPanel>
          <Purchase />
        </TabPanel>
        <TabPanel>
          <Transportation />
        </TabPanel>
        <TabPanel>
          <InsuranceInfo />
        </TabPanel>
      </section>
    </Tabs>
  );
}