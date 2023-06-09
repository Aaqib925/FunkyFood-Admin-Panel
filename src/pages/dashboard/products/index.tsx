import React, { useMemo, useState } from 'react';
import {
  MantineReactTable,
  MRT_ColumnDef,
  MRT_ColumnFiltersState,
  MRT_PaginationState,
  MRT_SortingState,
} from 'mantine-react-table';
import { ActionIcon, Tooltip } from '@mantine/core';
import { IconRefresh } from '@tabler/icons-react';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import Layout from '@/components/layout/Layout';
import AdminHeader from '@/components/header/AdminHeader';
import Button from '@/components/buttons/Button';
import { HiPlus, HiUpload } from 'react-icons/hi';

type UserApiResponse = {
  data: Array<User>;
  meta: {
    totalRowCount: number;
  };
};

type User = {
  firstName: string;
  lastName: string;
  address: string;
  state: string;
  phoneNumber: string;
};

const ProductsPage = () => {
  const [columnFilters, setColumnFilters] = useState<MRT_ColumnFiltersState>(
    [],
  );
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState<MRT_SortingState>([]);
  const [pagination, setPagination] = useState<MRT_PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isError, isFetching, isLoading, refetch } =
    useQuery<UserApiResponse>({
      queryKey: [
        'table-data',
        columnFilters, //refetch when columnFilters changes
        globalFilter, //refetch when globalFilter changes
        pagination.pageIndex, //refetch when pagination.pageIndex changes
        pagination.pageSize, //refetch when pagination.pageSize changes
        sorting, //refetch when sorting changes
      ],
      queryFn: async () => {
        // const fetchURL = new URL(
        //   '/api/data',
        //   process.env.NODE_ENV === 'production'
        //     ? 'https://www.mantine-react-table.com'
        //     : 'http://localhost:3001',
        // );
        // fetchURL.searchParams.set(
        //   'start',
        //   `${pagination.pageIndex * pagination.pageSize}`,
        // );
        // fetchURL.searchParams.set('size', `${pagination.pageSize}`);
        // fetchURL.searchParams.set(
        //   'filters',
        //   JSON.stringify(columnFilters ?? []),
        // );
        // fetchURL.searchParams.set('globalFilter', globalFilter ?? '');
        // fetchURL.searchParams.set('sorting', JSON.stringify(sorting ?? []));

        // const response = await fetch(fetchURL.href);
        // const json = (await response.json()) as UserApiResponse;
        // return json;
      },
      keepPreviousData: true,
    });

  const columns = useMemo<MRT_ColumnDef<User>[]>(
    () => [
      {
        accessorKey: 'firstName',
        header: 'First Name',
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
      },
      {
        accessorKey: 'address',
        header: 'Address',
      },
      {
        accessorKey: 'state',
        header: 'State',
      },
      {
        accessorKey: 'phoneNumber',
        header: 'Phone Number',
      },
    ],
    [],
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
              data={data?.data ?? []} //data is undefined on first render
              initialState={{ showColumnFilters: true }}
              manualFiltering
              manualPagination
              manualSorting
              mantineToolbarAlertBannerProps={
                isError
                  ? {
                    color: 'red',
                    children: 'Error loading data',
                  }
                  : undefined
              }
              onColumnFiltersChange={setColumnFilters}
              onGlobalFilterChange={setGlobalFilter}
              onPaginationChange={setPagination}
              onSortingChange={setSorting}
              renderTopToolbarCustomActions={() => (
                <Tooltip withArrow label="Refresh Data">
                  <ActionIcon onClick={() => refetch()}>
                    <IconRefresh />
                  </ActionIcon>
                </Tooltip>
              )}
              rowCount={data?.meta?.totalRowCount ?? 0}
              state={{
                columnFilters,
                globalFilter,
                isLoading,
                pagination,
                showAlertBanner: isError,
                showProgressBars: isFetching,
                sorting,
              }}
            />
          </div>
        </section>
      </main >
    </Layout>
  );
};



export default ProductsPage