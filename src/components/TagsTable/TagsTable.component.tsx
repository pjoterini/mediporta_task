import { Box, CircularProgress, TextField, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useState } from 'react';
import { Status } from '../../redux/enums/status';
import { useAppSelector } from '../../redux/store';
import { selectTagsError, selectTagsStatus } from '../../redux/tags/selector';
import { ITag } from '../../redux/tags/interfaces';

interface IProps {
  tags: ITag[];
}

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Tag',
    width: 200,
  },
  { field: 'count', headerName: 'Pole count', width: 140 },
];

const TagsTable = ({ tags }: IProps) => {
  const status = useAppSelector(selectTagsStatus);
  const error = useAppSelector(selectTagsError);

  const [paginationModel, setPaginationModel] = useState({
    pageSize: 5,
    page: 0,
  });

  return (
    <Box mt={2} mx="auto" maxWidth="420px">
      {status === Status.LOADING && (
        <Box display="flex" justifyContent="center" alignItems="center">
          <CircularProgress />
        </Box>
      )}
      {status === Status.FAILED && (
        <Box p={2} display="flex" justifyContent="center" alignItems="center">
          <Typography color="secondary">{error}</Typography>
        </Box>
      )}
      {status === Status.SUCCEEDED && (
        <>
          <Box py={2} display="flex" justifyContent="right" alignItems="center">
            <Typography mr={1}>Rows per page:</Typography>
            <TextField
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setPaginationModel({ pageSize: Number(event.target.value), page: 0 });
              }}
              inputProps={{ type: 'number', max: 10, min: 1, value: paginationModel.pageSize }}
            />
          </Box>

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

export default TagsTable;
