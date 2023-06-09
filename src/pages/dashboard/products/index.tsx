import React, { useCallback, useMemo, useState } from 'react';
import {
  MantineReactTable,
  MantineReactTableProps,
  MRT_ColumnDef,
  MRT_ColumnFiltersState,
  MRT_PaginationState,
  MRT_Row,
  MRT_SortingState,
} from 'mantine-react-table';
import { ActionIcon, Dialog, Flex, Menu, NativeSelect, Stack, TextInput, Title, Tooltip } from '@mantine/core';
import { IconRefresh } from '@tabler/icons-react';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import Layout from '@/components/layout/Layout';
import AdminHeader from '@/components/header/AdminHeader';
import Button from '@/components/buttons/Button';
import { HiPlus, HiUpload } from 'react-icons/hi';
import { Get } from '@/utils/apiService';
import { useAddProduct, useUpdateProduct } from '@/hooks/product/mutation';
import { Button as MantineButton } from '@mantine/core';

type ProductApiResponse = {
  products: Array<Product>;
  count: number;
};

export type Product = {
  id: string;
  name: string;
  image: string;
  price: string;
  status: string;
  quantity: string;
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

  const { mutateAsync: updateProductAction } = useUpdateProduct();
  const { mutateAsync: addNewProductAction, isLoading: isLoadingAddNewProduct } = useAddProduct();

  const [newProduct, setNewProduct] = useState<Partial<Product>>({
    name: '',
    image: '',
    price: '',
    quantity: '',
  });

  const [createModalOpen, setCreateModalOpen] = useState(false);

  const { data, isError, isFetching, isLoading, refetch } =
    useQuery<ProductApiResponse>({
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
        const response = await Get({
          url: '/getAllProducts',
          params: {
            offset: pagination.pageIndex + 1,
            limit: pagination.pageSize,
          }
        });
        return response;
      },
      keepPreviousData: true,
    });

  const columns = useMemo<MRT_ColumnDef<Product>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'Id',
        enableEditing: false,
        isAddable: false,

      },
      {
        accessorKey: 'name',
        header: 'Name',
      },
      {
        accessorKey: 'price',
        header: 'Price',
      },
      {
        accessorKey: 'quantity',
        header: 'Quantity',
      },
      {
        accessorKey: 'status',
        header: 'Status',
        isAddable: false,
      },
      {
        accessorKey: 'image',
        header: 'Image',
        Cell: (props) => {
          return (
            <img
              src={props?.renderedCellValue as any}
              className='w-10 h-10 rounded-full'
            />
          );
        }
      }
    ],
    [],
  );

  const handleSaveRow: MantineReactTableProps<Product>['onEditingRowSave'] =
    async ({ exitEditingMode, row, values, table }) => {
      try {
        await updateProductAction({
          id: values.id,
          name: values.name,
          price: values.price,
          quantity: values.quantity,
          status: values.status,
          image: values.image
        });
        refetch()
      }
      catch (err) {
        console.log(err);
      }


      exitEditingMode(); //required to exit editing mode
    };


  const addNewProduct = async () => {
    try {
      if (newProduct?.name && newProduct?.price && newProduct?.quantity && newProduct?.image) {
        const res = await addNewProductAction({
          name: newProduct.name,
          price: newProduct.price,
          quantity: newProduct.quantity,
          status: 'ACTIVE',
          image: newProduct.image
        });

        if (res) {
          setCreateModalOpen(false);
          setNewProduct({
            name: '',
            image: '',
            price: '',
            quantity: '',
          });
          refetch();
        }
      }

    }
    catch (err) {
      console.log(err);
    }
  };

  return (
    <Layout>

      <Dialog opened={createModalOpen}>
        <Title ta="center">Create New Account</Title>
        <form onSubmit={(e) => e.preventDefault()}>
          <Stack
            sx={{
              width: '100%',
              gap: '24px',
            }}
          >
            {columns.map(({ accessorKey, header, isAddable = true }: any) => (
              <React.Fragment key={accessorKey}>
                {
                  isAddable && (
                    <TextInput
                      key={accessorKey}
                      label={header}
                      name={accessorKey}
                      onChange={(e) => {
                        setNewProduct({ ...newProduct, [e.target.name]: e.target.value })
                      }}
                    />
                  )
                }
              </React.Fragment>

            ))}
          </Stack>
        </form>
        <Flex
          sx={{
            padding: '20px',
            width: '100%',
            justifyContent: 'flex-end',
            gap: '16px',
          }}
        >
          <Button onClick={() => setCreateModalOpen(false)} >
            Cancel
          </Button>
          <Button onClick={addNewProduct} leftIcon={HiPlus} leftIconClassName='p-0 mr-2' className='rounded-xl px-6 py-2.5 bg-[#1C355E] hover:bg-[#1C355E] focus:bg-[#1C355E] active:bg-[#1C355E] border-none'>
            <span className='font-[OpenSans-Regular] text-sm text-white leading-[19px]'>
              Submit
            </span>
          </Button>
        </Flex>
      </Dialog>

      <main className='bg-[#FAFAFA]  min-h-screen max-h-screen px-5 py-8 flex flex-col items-stretch gap-y-[34px]'>

        {/* <AdminHeader /> */}

        <section>

          <h1 className='font-[OpenSans-Bold] text-[28px] leading-[38px] text-[#1E1E1E] mb-8'>Your Products</h1>

          <section className='flex items-center gap-x-[30px] mb-7'>

            {/* <Button leftIcon={HiUpload} leftIconClassName='p-0 mr-2' className='rounded-xl px-6 py-2.5 bg-[#ECB928] hover:bg-[#ECB928] focus:bg-[#ECB928] active:bg-[#ECB928] border-none'>
              <span className='font-[OpenSans-Regular] text-sm text-white leading-[19px]'>
                Export
              </span>
            </Button> */}
          </section>
          <div className='w-full'>
            <MantineReactTable
              columns={columns}
              data={data?.products ?? []} //data is undefined on first render
              initialState={{ showColumnFilters: false }}
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
              onEditingRowSave={handleSaveRow}

              enableEditing={true}
              enableGlobalFilter={false}
              positionActionsColumn='last'
              enableSorting={false}
              enableFilters={false}
              onColumnFiltersChange={setColumnFilters}
              onGlobalFilterChange={setGlobalFilter}
              onPaginationChange={setPagination}
              onSortingChange={setSorting}
              renderTopToolbarCustomActions={() => (
                <div className='flex items-center gap-x-5'>
                  <Tooltip withArrow label="Refresh Data">
                    <ActionIcon onClick={() => refetch()}>
                      <IconRefresh />
                    </ActionIcon>
                  </Tooltip>

                  <Button onClick={() => setCreateModalOpen(true)} leftIcon={HiPlus} leftIconClassName='p-0 mr-2' className='rounded-xl px-6 py-2.5 bg-[#1C355E] hover:bg-[#1C355E] focus:bg-[#1C355E] active:bg-[#1C355E] border-none'>
                    <span className='font-[OpenSans-Regular] text-sm text-white leading-[19px]'>
                      Add Product
                    </span>
                  </Button>
                </div>
              )}
              rowCount={data?.count ?? 0}
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