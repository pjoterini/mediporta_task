import { Box, Link } from '@mui/material';
import { GridColDef, GridPaginationModel, GridSortModel } from '@mui/x-data-grid';
import { useMemo } from 'react';
import { Tag } from '../types';
import { Status } from '../../../common/enums';
import { Table } from '../../../common/components';

interface TagsTableProps {
  tagCount: number | null;
  tags: Tag[];
  status: Status;
  error: string | null;
  paginationModel: GridPaginationModel;
  setPaginationModel: React.Dispatch<React.SetStateAction<GridPaginationModel>>;
  sortModel: GridSortModel;
  setSortModel: React.Dispatch<React.SetStateAction<GridSortModel>>;
}

const TagsTable = ({
  tagCount,
  tags,
  status,
  error,
  paginationModel,
  setPaginationModel,
  sortModel,
  setSortModel,
}: TagsTableProps) => {
  const columns: GridColDef<Tag>[] = useMemo(
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
    <Box my={4} mx="auto" maxWidth="550px">
      <Table
        heading="Tags List"
        rows={tags}
        columns={columns}
        rowCount={tagCount}
        status={status}
        error={error}
        paginationModel={paginationModel}
        setPaginationModel={setPaginationModel}
        sortModel={sortModel}
        setSortModel={setSortModel}
      />
    </Box>
  );
};

export default TagsTable;
