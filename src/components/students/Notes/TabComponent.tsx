import React, { useState, useCallback } from 'react';
import APP_IMAGES from '@/constant/images';
import { HiCheck } from 'react-icons/hi';
import { Modal } from '@/components/students/Notes/Modal';


interface Tab {
  id: number;
  name: string;
  items: Item[];
}

interface Item {
  id: number;
  tabId: number;
  fields: { name: string, value: string }[];
}

const TabComponent: React.FC = () => {
  const [selectedTabs, setSelectedTabs] = useState<number[]>([1]);
  const [editedItem, setEditedItem] = useState<Item | null>(null);
  const [tabs, setTabs] = useState<Tab[]>([
    {
      id: 1,
      name: 'General',
      items: [
        { id: 1, tabId: 1, fields: [{ name: 'title', value: 'Title Lorem Ipsum lorem ipsum' }, { name: 'description', value: 'Lorem Ipsum lorem ipsum' }, { name: 'category', value: 'PERFORMANCE' }] },
        { id: 2, tabId: 1, fields: [{ name: 'title', value: 'Title Lorem Ipsum lorem ipsum' }, { name: 'description', value: 'Lorem Ipsum lorem ipsum' }, { name: 'category', value: 'GENERAL' }] },
        { id: 3, tabId: 1, fields: [{ name: 'title', value: 'Title Lorem Ipsum lorem ipsum' }, { name: 'description', value: 'Lorem Ipsum lorem ipsum' }, { name: 'category', value: 'GENERAL' }] },
      ],
    },
    {
      id: 2,
      name: 'Academics',
      items: [
        { id: 4, tabId: 2, fields: [{ name: 'title', value: 'Title Lorem Ipsum lorem ipsum' }, { name: 'description', value: 'Lorem Ipsum lorem ipsum' }, { name: 'category', value: 'GENERAL' }] },
        { id: 5, tabId: 2, fields: [{ name: 'title', value: 'Title Lorem Ipsum lorem ipsum' }, { name: 'description', value: 'Lorem Ipsum lorem ipsum' }, { name: 'category', value: 'GENERAL' }] },
      ],
    },
    {
      id: 3,
      name: 'Medical',
      items: [
        { id: 6, tabId: 3, fields: [{ name: 'title', value: 'Title Lorem Ipsum lorem ipsum' }, { name: 'description', value: 'Lorem Ipsum lorem ipsum' }, { name: 'category', value: 'GENERAL' }] },
        { id: 7, tabId: 3, fields: [{ name: 'title', value: 'Title Lorem Ipsum lorem ipsum' }, { name: 'description', value: 'Lorem Ipsum lorem ipsum' }, { name: 'category', value: 'GENERAL' }] },
        { id: 8, tabId: 3, fields: [{ name: 'title', value: 'Title Lorem Ipsum lorem ipsum' }, { name: 'description', value: 'Lorem Ipsum lorem ipsum' }, { name: 'category', value: 'GENERAL' }] },
      ],
    },
    {
      id: 4,
      name: 'Parent Conversations',
      items: [
        { id: 9, tabId: 4, fields: [{ name: 'title', value: 'Title Lorem Ipsum lorem ipsum' }, { name: 'description', value: 'Lorem Ipsum lorem ipsum' }, { name: 'category', value: 'GENERAL' }] },
        { id: 10, tabId: 4, fields: [{ name: 'title', value: 'Title Lorem Ipsum lorem ipsum' }, { name: 'description', value: 'Lorem Ipsum lorem ipsum' }, { name: 'category', value: 'GENERAL' }] },
      ],
    },
  ]);

  const handleTabClick = useCallback((tabId: number) => {
    setSelectedTabs((prevSelectedTabs) => {
      if (prevSelectedTabs.includes(tabId)) {
        return prevSelectedTabs.filter((id) => id !== tabId);
      } else {
        return [...prevSelectedTabs, tabId];
      }
    });
  }, []);

  const handleEditField = useCallback((item: Item | null) => {
    if (item) {
      const editedFields = item.fields.map((field) => ({ ...field }));
      setEditedItem({ ...item, fields: editedFields });
    } else {
      setEditedItem(item);
    }
  }, []);

  const handleSaveFieldEdit = useCallback((item: Item, updatedFields: { name: string, value: string }[]) => {
    setTabs((prevTabs) =>
      prevTabs.map((tab) =>
        tab.id === item.tabId
          ? { ...tab, items: tab.items.map((i) => i.id === item.id ? { ...i, fields: updatedFields } : i) }
          : tab
      )
    );
    setEditedItem(null);
  }, []);

  const handleDeleteItem = useCallback((item: Item) => {
    setTabs((prevTabs) =>
      prevTabs.map((tab) =>
        tab.id === item.tabId ? { ...tab, items: tab.items.filter((i) => i.id !== item.id) } : tab
      )
    );
    setEditedItem(null);
  }, []);

  return (
    <div className="bg-white rounded-[15px] pb-4">
      <div className="flex items-center pt-[23px] pb-5 px-4 gap-x-2.5">
        <p className='font-[OpenSans-SemiBold] text-xs text-black'>Show:</p>
        <div className='flex items-center gap-x-1.5'>
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`py-[3px] pl-3 pr-5 rounded-[15px] border border-solid border-[#C5C5C5] cursor-pointer transition-colors flex items-center gap-x-2.5 bg-white text-[#1E1E1E]`}
              onClick={() => handleTabClick(tab.id)}
            >
              <div className={`rounded-full w-5 h-5 flex items-center justify-center ${selectedTabs.includes(tab.id) ? 'bg-[#6FBF50] ' : 'bg-[#C5C5C5]'}`}>
                {selectedTabs.includes(tab.id) ?
                  <HiCheck color='white' />
                  :
                  <></>
                }
              </div>
              <span className='font-[OpenSans-SemiBold] text-[#1E1E1E] text-xs'>
                {tab.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center max-h-[460px] overflow-y-scroll">
        {tabs
          .filter((tab) => selectedTabs.includes(tab.id))
          .flatMap((tab) => tab.items)
          .map((item) => (
            <section key={item.id} className={`w-full px-7 pb-[9px] flex items-start gap-x-2 border-b border-solid border-b-[#E8E8E8]`}>
              <div className='w-5 h-5 rounded-full font-[Roboto-Bold] text-xs leading-[14px] flex justify-center items-center bg-[#D9D9D9] text-[#656565] mt-2'>SR</div>
              <div className='pt-2.5 flex flex-col items-stretch flex-1'>
                <p className='font-[OpenSans-Regular] text-xs text-[#656565] mb-3'><span className='text-[#00B3FF]'>Scott Rosenbluth</span> created a note on May 6, 2023</p>
                {
                  editedItem?.id === item.id
                    ?
                    <section className='flex flex-col items-stretch gap-y-[5px]'>
                      {editedItem.fields.map((field, fieldIndex) => (
                        <input
                          key={fieldIndex}
                          type="text"
                          value={field.value}
                          onChange={(e) => {
                            const updatedFields = [...editedItem.fields];
                            updatedFields[fieldIndex].value = e.target.value;
                            setEditedItem({ ...editedItem, fields: updatedFields });
                          }}
                          className="border border-[#C5C5C5] px-2.5 py-[7px] w-full font-[OpenSans-SemiBold] text-xs text-[#656565]"
                        />
                      ))}
                    </section>
                    :
                    <>
                      <h5 className='font-[OpenSans-SemiBold] text-xs text-black mb-[15px]'>{item.fields[0].value}</h5>
                      <p className='font-[OpenSans-Regular] text-xs text-[#656565] mb-5'>{item.fields[1].value}</p>
                      <h6 className='font-[OpenSans-SemiBold] text-xs text-[#656565] uppercase'>{item.fields[2].value}</h6>
                    </>
                }
              </div>
              <section className='self-stretch flex'>
                {
                  editedItem?.id === item.id
                    ?
                    <section className='self-stretch flex items-end gap-x-5 pl-11'>
                      <span className='font-[OpenSans-SemiBold] text-xs text-[#EC5453] cursor-pointer' onClick={() => handleDeleteItem(editedItem)}>Delete</span>
                      <span className='font-[OpenSans-SemiBold] text-xs text-[#000000] cursor-pointer' onClick={() => handleEditField(null)}>Cancel</span>
                      <span className='font-[OpenSans-SemiBold] text-xs text-[#00B3FF] cursor-pointer' onClick={() => handleSaveFieldEdit(editedItem, editedItem.fields)}>Save</span>
                    </section>
                    :
                    <div
                      className='pt-5 pr-5'
                      onClick={() => handleEditField(item)}
                    >
                      <img src={APP_IMAGES.editIcon} alt="edit-pen-icon" width={12} height={12} />
                    </div>
                }
              </section>
            </section>
          ))}
      </div>
      {/* {editedItem && (
        <Modal
          item={editedItem}
          onClose={handleModalClose}
          onSave={handleSaveFieldEdit}
          onDelete={handleDeleteItem}
        />
      )} */}
    </div>
  );
};

export default TabComponent;