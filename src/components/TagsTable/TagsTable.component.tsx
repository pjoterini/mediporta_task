import { Box, Link } from '@mui/material';
import { DataGrid, GridColDef, GridPaginationModel, GridSortModel } from '@mui/x-data-grid';
import { useMemo } from 'react';
import { Status } from '../../redux/enums/status';
import { ITag } from '../../redux/tags/interfaces';
import StateFailed from '../common/StateFailed';
import StateLoading from '../common/StateLoading';

interface TagsTableProps {
  tagsCount?: number;
  tags?: ITag[];
  status: Status;
  error?: string;
  paginationModel: GridPaginationModel;
  setPaginationModel: React.Dispatch<React.SetStateAction<GridPaginationModel>>;
  sortModel: GridSortModel;
  setSortModel: React.Dispatch<React.SetStateAction<GridSortModel>>;
}

const TagsTable = ({
  tagsCount,
  tags,
  status,
  error,
  paginationModel,
  setPaginationModel,
  sortModel,
  setSortModel,
}: TagsTableProps) => {
  const columns: GridColDef<ITag>[] = useMemo(
    () => [
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
        field: 'popular',
        headerName: 'Pole count',
        valueGetter: (_, row) => row.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
        width: 140,
      },
    ],
    [],
  );

  return (
    <Box my={2} mx="auto" maxWidth="550px">
      {status === Status.LOADING && <StateLoading />}
      {error && <StateFailed error={error} />}
      {status === Status.SUCCEEDED && tags && tagsCount && (
        <DataGrid
          rows={tags}
          columns={columns}
          getRowId={(row) => row.name}
          rowCount={tagsCount}
          pagination
          sortingMode="server"
          filterMode="server"
          paginationMode="server"
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          sortModel={sortModel}
          onSortModelChange={setSortModel}
          pageSizeOptions={[10, 20, 50, 100]}
        />
      )}
    </Box>
  );
};

export default TagsTable;
