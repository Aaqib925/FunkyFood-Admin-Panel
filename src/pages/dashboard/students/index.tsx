import React, { useMemo, useRef, useState, useEffect, useCallback } from 'react';
import { MRT_ShowHideColumnsButton, MRT_ToggleDensePaddingButton, MRT_ToggleFullScreenButton, MantineReactTable } from 'mantine-react-table';
import Layout from '@/components/layout/Layout';
import AdminHeader from '@/components/header/AdminHeader';
import Button from '@/components/buttons/Button';
import { HiPlus, HiUpload } from 'react-icons/hi';
import { Menu } from '@mantine/core';
import { useRouter } from 'next/router';

const data = [
  {
    name: 'John',
    account: 30,
    studentStage: 'Enrolled',
    studentCell: '(500)-545-4555',
    studentHome: '(500)-876-8755',
    email: 'john.name@gmail.com',
    otherEmail: 'otherEmail.name@gmail.com',
    contantRecordType: 'Student',
    createdDate: '12/12/2021 7:50 pm'
  },
  {
    name: 'Sara',
    account: 25,
    studentStage: 'Enrolled',
    studentCell: '(500)-545-4545',
    studentHome: '(550)-768-8755',
    email: 'sara.name@gmail.com',
    otherEmail: 'hereEmail.name@gmail.com',
    contantRecordType: 'Parent',
    createdDate: '12/12/2021 5:50 am'
  },
  {
    name: 'Michael',
    account: 32,
    studentStage: 'Prospect',
    studentCell: '(500)-555-5555',
    studentHome: '(500)-555-5555',
    email: 'michael.name@gmail.com',
    otherEmail: 'otherEmail.name@gmail.com',
    contantRecordType: 'Student',
    createdDate: '12/13/2021 8:30 am'
  },
  {
    name: 'Emily',
    account: 28,
    studentStage: 'Enrolled',
    studentCell: '(500)-565-5655',
    studentHome: '(500)-565-5655',
    email: 'emily.name@gmail.com',
    otherEmail: 'otherEmail.name@gmail.com',
    contantRecordType: 'Student',
    createdDate: '12/13/2021 1:15 pm'
  },
  {
    name: 'David',
    account: 27,
    studentStage: 'Enrolled',
    studentCell: '(500)-575-5755',
    studentHome: '(500)-575-5755',
    email: 'david.name@gmail.com',
    otherEmail: 'otherEmail.name@gmail.com',
    contantRecordType: 'Student',
    createdDate: '12/14/2021 11:30 am'
  },
  {
    name: 'Jessica',
    account: 31,
    studentStage: 'Enrolled',
    studentCell: '(500)-585-5855',
    studentHome: '(500)-585-5855',
    email: 'jessica.name@gmail.com',
    otherEmail: 'otherEmail.name@gmail.com',
    contantRecordType: 'Parent',
    createdDate: '12/14/2021 3:45 pm'
  },
  {
    name: 'Alex',
    account: 29,
    studentStage: 'Prospect',
    studentCell: '(500)-595-5955',
    studentHome: '(500)-595-5955',
    email: 'alex.name@gmail.com',
    otherEmail: 'otherEmail.name@gmail.com',
    contantRecordType: 'Student',
    createdDate: '12/15/2021 9:20 am'
  },
  {
    name: 'Sophia',
    account: 35,
    studentStage: 'Enrolled',
    studentCell: '(500)-605-6055',
    studentHome: '(500)-605-6055',
    email: 'sophia.name@gmail.com',
    otherEmail: 'otherEmail.name@gmail.com',
    contantRecordType: 'Parent',
    createdDate: '12/15/2021 2:35 pm'
  },
  {
    name: 'Daniel',
    account: 26,
    studentStage: 'Enrolled',
    studentCell: '(500)-615-6155',
    studentHome: '(500)-615-6155',
    email: 'daniel.name@gmail.com',
    otherEmail: 'otherEmail.name@gmail.com',
    contantRecordType: 'Student',
    createdDate: '12/16/2021 10:05 am'
  },
  {
    name: 'Olivia',
    account: 33,
    studentStage: 'Enrolled',
    studentCell: '(500)-625-6255',
    studentHome: '(500)-625-6255',
    email: 'olivia.name@gmail.com',
    otherEmail: 'otherEmail.name@gmail.com',
    contantRecordType: 'Student',
    createdDate: '12/16/2021 4:45 pm'
  },
  {
    name: 'Ethan',
    account: 24,
    studentStage: 'Prospect',
    studentCell: '(500)-635-6355',
    studentHome: '(500)-635-6355',
    email: 'ethan.name@gmail.com',
    otherEmail: 'otherEmail.name@gmail.com',
    contantRecordType: 'Student',
    createdDate: '12/17/2021 11:15 am'
  },
  {
    name: 'Jessica',
    account: 31,
    studentStage: 'Enrolled',
    studentCell: '(500)-585-5855',
    studentHome: '(500)-585-5855',
    email: 'jessica.name@gmail.com',
    otherEmail: 'otherEmail.name@gmail.com',
    contantRecordType: 'Parent',
    createdDate: '12/14/2021 3:45 pm'
  },
  {
    name: 'Alex',
    account: 29,
    studentStage: 'Prospect',
    studentCell: '(500)-595-5955',
    studentHome: '(500)-595-5955',
    email: 'alex.name@gmail.com',
    otherEmail: 'otherEmail.name@gmail.com',
    contantRecordType: 'Student',
    createdDate: '12/15/2021 9:20 am'
  },
  {
    name: 'Sophia',
    account: 35,
    studentStage: 'Enrolled',
    studentCell: '(500)-605-6055',
    studentHome: '(500)-605-6055',
    email: 'sophia.name@gmail.com',
    otherEmail: 'otherEmail.name@gmail.com',
    contantRecordType: 'Parent',
    createdDate: '12/15/2021 2:35 pm'
  },
  {
    name: 'Daniel',
    account: 26,
    studentStage: 'Enrolled',
    studentCell: '(500)-615-6155',
    studentHome: '(500)-615-6155',
    email: 'daniel.name@gmail.com',
    otherEmail: 'otherEmail.name@gmail.com',
    contantRecordType: 'Student',
    createdDate: '12/16/2021 10:05 am'
  },
  {
    name: 'Olivia',
    account: 33,
    studentStage: 'Enrolled',
    studentCell: '(500)-625-6255',
    studentHome: '(500)-625-6255',
    email: 'olivia.name@gmail.com',
    otherEmail: 'otherEmail.name@gmail.com',
    contantRecordType: 'Student',
    createdDate: '12/16/2021 4:45 pm'
  },
  {
    name: 'Ethan',
    account: 24,
    studentStage: 'Prospect',
    studentCell: '(500)-635-6355',
    studentHome: '(500)-635-6355',
    email: 'ethan.name@gmail.com',
    otherEmail: 'otherEmail.name@gmail.com',
    contantRecordType: 'Student',
    createdDate: '12/17/2021 11:15 am'
  }
];


export default function App() {

  const [tableData, setTableData] = useState(data);

  const router = useRouter();

  const columns = useMemo(
    () => [
      {
        accessorKey: 'name', //simple recommended way to define a column
        header: 'Name',
        Header: ({ column }) => (
          <span className='font-[OpenSans-SemiBold] text-sm text-black leading-[19px]'>{column.columnDef.header}</span>
        ),
        mantineTableHeadCellProps: { sx: { color: 'green' } }, //optional custom props
        Cell: ({ cell }) => <span className='font-[OpenSans-Regular] text-[#00B3FF] text-xs'>{cell.getValue()}</span>, //optional custom cell render
      },
      {
        accessorKey: 'account', //simple recommended way to define a column
        mantineTableHeadCellProps: { sx: { color: 'green' } }, //optional custom props
        header: 'Account Name',
        Header: ({ column }) => (
          <span className='font-[OpenSans-SemiBold] text-sm text-black leading-[19px]'>{column.columnDef.header}</span>
        ),
        Cell: ({ cell }) => <span className='font-[OpenSans-Regular] text-[#00B3FF] text-xs'>{cell.getValue()}</span>, //optional custom cell render
      },
      {
        accessorKey: 'studentStage', //simple recommended way to define a column
        mantineTableHeadCellProps: { sx: { color: 'green' } }, //optional custom props
        header: 'Student Stage',
        Header: ({ column }) => (
          <span className='font-[OpenSans-SemiBold] text-sm text-black leading-[19px]'>{column.columnDef.header}</span>
        ),
        Cell: ({ cell }) => <span className='font-[OpenSans-Regular] text-[#1E1E1E] text-xs'>{cell.getValue()}</span>, //optional custom cell render
      },
      {
        accessorKey: 'studentCell', //simple recommended way to define a column
        mantineTableHeadCellProps: { sx: { color: 'green' } }, //optional custom props
        header: 'Student Cell',
        Header: ({ column }) => (
          <span className='font-[OpenSans-SemiBold] text-sm text-black leading-[19px]'>{column.columnDef.header}</span>
        ),
        Cell: ({ cell }) => <span className='font-[OpenSans-Regular] text-[#656565] text-xs'>{cell.getValue()}</span>, //optional custom cell render
      },
      {
        accessorKey: 'studentHome', //simple recommended way to define a column
        mantineTableHeadCellProps: { sx: { color: 'green' } }, //optional custom props
        header: 'Student Home',
        Header: ({ column }) => (
          <span className='font-[OpenSans-SemiBold] text-sm text-black leading-[19px]'>{column.columnDef.header}</span>
        ),
        Cell: ({ cell }) => <span className='font-[OpenSans-Regular] text-[#656565] text-xs'>{cell.getValue()}</span>, //optional custom cell render
      },
      {
        accessorKey: 'email', //simple recommended way to define a column
        mantineTableHeadCellProps: { sx: { color: 'green' } }, //optional custom props
        header: 'Email',
        Header: ({ column }) => (
          <span className='font-[OpenSans-SemiBold] text-sm text-black leading-[19px]'>{column.columnDef.header}</span>
        ),
        Cell: ({ cell }) => <span className='font-[OpenSans-Regular] text-[#00B3FF] text-xs'>{cell.getValue()}</span>, //optional custom cell render
      },
      {
        accessorKey: 'otherEmail', //simple recommended way to define a column
        mantineTableHeadCellProps: { sx: { color: 'green' } }, //optional custom props
        header: 'Other Email',
        Header: ({ column }) => (
          <span className='font-[OpenSans-SemiBold] text-sm text-black leading-[19px]'>{column.columnDef.header}</span>
        ),
        Cell: ({ cell }) => <span className='font-[OpenSans-Regular] text-[#00B3FF] text-xs'>{cell.getValue()}</span>, //optional custom cell render
      },
      {
        accessorKey: 'contantRecordType', //simple recommended way to define a column
        mantineTableHeadCellProps: { sx: { color: 'green' } }, //optional custom props
        header: 'Content Record Type',
        Header: ({ column }) => (
          <span className='font-[OpenSans-SemiBold] text-sm text-black leading-[19px]'>{column.columnDef.header}</span>
        ),
        Cell: ({ cell }) => <span className='font-[OpenSans-Regular] text-[#656565] text-xs'>{cell.getValue()}</span>, //optional custom cell render
      },
      {
        accessorKey: 'createdDate', //simple recommended way to define a column
        mantineTableHeadCellProps: { sx: { color: 'green' } }, //optional custom props
        header: 'Created Date',
        Header: ({ column }) => (
          <span className='font-[OpenSans-SemiBold] text-sm text-black leading-[19px]'>{column.columnDef.header}</span>
        ),
        Cell: ({ cell }) => <span className='font-[OpenSans-Regular] text-[#656565] text-xs'>{cell.getValue()}</span>, //optional custom ces render
      },
    ],
    [],
  );

  //optionally, you can manage any/all of the table state yourself
  const [rowSelection, setRowSelection] = useState({});

  useEffect(() => {
    //do something when the row selection changes
  }, [rowSelection]);

  //Or, optionally, you can get a reference to the underlying table instance
  const tableInstanceRef = useRef(null);

  const someEventHandler = () => {
    //read the table state during an event from the table instance ref
    console.log(tableInstanceRef.current.getState().sorting);
  }

  const handleViewProfile = useCallback(
    (row: any) => {
      router.push(`/students/${row.getValue('account')}`);
    }, []);

  const handleDeleteRow = useCallback(
    (row: any) => {
      if (
        !confirm(`Are you sure you want to delete ${row.getValue('name')}'s profile?`)
      ) {
        return;
      }
      //send api delete request here, then refetch or update local table data for re-render
      tableData.splice(row.index, 1);
      setTableData([...tableData]);
    },
    [tableData],
  );

  return (
    <Layout>

      <main className='bg-[#FAFAFA]  min-h-screen max-h-screen px-5 py-8 flex flex-col items-stretch gap-y-[34px]'>

        <AdminHeader />

        <section>

          <h1 className='font-[OpenSans-Bold] text-[28px] leading-[38px] text-[#1E1E1E] mb-8'>Enrolled Students</h1>

          <section className='flex items-center gap-x-[30px] mb-7'>
            <Button leftIcon={HiPlus} leftIconClassName='p-0 mr-2' className='rounded-xl px-6 py-2.5 bg-[#1C355E] hover:bg-[#1C355E] focus:bg-[#1C355E] active:bg-[#1C355E] border-none'>
              <span className='font-[OpenSans-Regular] text-sm text-white leading-[19px]'>
                Add Student
              </span>
            </Button>
            <Button leftIcon={HiUpload} leftIconClassName='p-0 mr-2' className='rounded-xl px-6 py-2.5 bg-[#ECB928] hover:bg-[#ECB928] focus:bg-[#ECB928] active:bg-[#ECB928] border-none'>
              <span className='font-[OpenSans-Regular] text-sm text-white leading-[19px]'>
                Export
              </span>
            </Button>
          </section>
          <div className='w-full'>
            <MantineReactTable
              columns={columns}
              data={tableData}
              enableRowVirtualization //enable some features
              mantineTableContainerProps={{ sx: { maxHeight: '560px', minHeight: '350px' } }} //optional custom props
              enableColumnOrdering={false}
              enableRowSelection={false}
              enablePagination={false}
              enableGlobalFilter={true}
              // renderTopToolbarCustomActions={({ table }) => (
              //   <>
              //     <div className='w-full flex justify-center'>
              //       <MRT_GlobalFilterTextInput table={table} />
              //     </div>
              //   </>
              // )}
              renderToolbarInternalActions={({ table }) => (
                <>
                  <MRT_ShowHideColumnsButton table={table} />
                  <MRT_ToggleDensePaddingButton table={table} />
                  <MRT_ToggleFullScreenButton table={table} />
                </>
              )}
              enableRowActions
              positionActionsColumn='last'
              renderRowActionMenuItems={({ row }) => [
                <div className='w-28 flex flex-col justify-center items-stretch'>
                  <Menu.Item onClick={() => handleViewProfile(row)}>View Profile</Menu.Item>
                  <Menu.Item onClick={() => handleDeleteRow(row)}>Delete Profile</Menu.Item>
                </div>
              ]}
              displayColumnDefOptions={{
                'mrt-row-actions': {
                  header: '', //change header text
                  size: 20, //make actions column wider                  
                  mantineTableBodyCellProps: { //optional custom props
                    sx: {
                      justifyContent: 'center',
                    }
                  }
                },
              }}
              onRowSelectionChange={setRowSelection} //hoist internal state to your own state (optional)
              state={{ rowSelection }} //manage your own state, pass it back to the table (optional)
              tableInstanceRef={tableInstanceRef} //get a reference to the underlying table instance (optional)
              positionGlobalFilter='right'
              initialState={{
                showColumnFilters: false,
                showGlobalFilter: true,
              }}
              mantineSearchTextInputProps={{
                radius: 'lg',
                placeholder: 'Search Contact',
                sx: {
                  minWidth: '450px',
                },
                variant: 'filled',
              }}
              defaultColumn={{
                size: 30,
              }}
              enableColumnResizing
            />
          </div>
        </section>
      </main >
    </Layout>
  );
}