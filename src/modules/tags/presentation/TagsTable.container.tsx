import { GridPaginationModel, GridSortModel } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import TagsTable from './TagsTable.component';
import { useTagsData } from '../application';

const TagsTableContainer = () => {
  const { tagsCount, tags, status, error, fetchTagsData } = useTagsData();

  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'popular', sort: 'desc' }]);
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    pageSize: 10,
    page: 1,
  });

  useEffect(() => {
    const { page, pageSize } = paginationModel;
    const { field, sort } = sortModel[0] || {};
    const payload = { page, pageSize, sortBy: field, order: sort };
    fetchTagsData(payload);
  }, [sortModel, paginationModel]);

  return (
    <TagsTable
      tagsCount={tagsCount}
      tags={tags}
      status={status}
      error={error}
      paginationModel={paginationModel}
      setPaginationModel={setPaginationModel}
      sortModel={sortModel}
      setSortModel={setSortModel}
    />
  );
};

export default TagsTableContainer;
