import { Box, Link } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useState } from 'react';
import { Status } from '../../redux/enums/status';
import { ITag } from '../../redux/tags/interfaces';
import StateFailed from '../common/StateFailed';
import StateLoading from '../common/StateLoading';

interface IProps {
  tags?: ITag[];
  status: Status;
  error?: string;
}

const Table = ({ tags, status, error }: IProps) => {
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Tag',
      renderCell: (params) => (
        <Link
          target="_blank"
          rel="noopener"
          color="secondary"
          underline="hover"
          href={`https://stackoverflow.com/questions/tagged/${params.value}`}
        >
          {params.value}
        </Link>
      ),
      width: 200,
    },
    {
      field: 'count',
      headerName: 'Pole count',
      valueFormatter: (row: number) => row.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
      width: 140,
    },
  ];

  return (
    <Box mt={2} mx="auto" maxWidth="420px">
      {status === Status.LOADING && <StateLoading />}
      {status === Status.FAILED && <StateFailed error={error} />}
      {status === Status.SUCCEEDED && tags && (
        <>
          <DataGrid
            rows={tags}
            columns={columns}
            getRowId={(row) => row.name}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            pageSizeOptions={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          />
        </>
      )}
    </Box>
  );
};

export default Table;
