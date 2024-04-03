import { Box, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridPaginationModel, GridSortModel } from '@mui/x-data-grid';
import { Status } from '../enums';
import PaginationInput from './PaginationInput';
import StateFailed from './StateFailed';
import StateLoading from './StateLoading';

interface TableProps {
  heading: string;
  rowCount: number | null;
  rows: any[];
  columns: GridColDef[];
  status: Status;
  error: string | null;
  paginationModel: GridPaginationModel;
  setPaginationModel: React.Dispatch<React.SetStateAction<GridPaginationModel>>;
  sortModel: GridSortModel;
  setSortModel: React.Dispatch<React.SetStateAction<GridSortModel>>;
}

const Table = ({
  heading,
  rowCount,
  rows,
  columns,
  status,
  error,
  paginationModel,
  setPaginationModel,
  sortModel,
  setSortModel,
}: TableProps) => {
  return (
    <>
      {error && <StateFailed error={error} />}
      <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap">
        <Typography pr={2} variant="h4">
          {heading}
        </Typography>
        <PaginationInput paginationModel={paginationModel} setPaginationModel={setPaginationModel} />
      </Box>
      {status === Status.LOADING && <StateLoading />}
      {status === Status.SUCCEEDED && rows && rowCount && (
        <DataGrid
          rows={rows}
          columns={columns}
          getRowId={(row) => row.name}
          rowCount={rowCount}
          pagination
          sortingMode="server"
          filterMode="server"
          paginationMode="server"
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          sortModel={sortModel}
          onSortModelChange={setSortModel}
          pageSizeOptions={[paginationModel.pageSize]}
        />
      )}
    </>
  );
};

export default Table;
