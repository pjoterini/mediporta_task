import { GridPaginationModel, GridSortModel } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { fetchTags, fetchTagsCount } from '../../redux/tags/actions';
import { selectTags, selectTagsCount, selectTagsError, selectTagsStatus } from '../../redux/tags/selector';
import TagsTable from './TagsTable.component';
import { setAmountAction } from '../../redux/tags/reducer';

const TagsTableContainer = () => {
  const tagsCount = useAppSelector(selectTagsCount);
  const tags = useAppSelector(selectTags);
  const status = useAppSelector(selectTagsStatus);
  const error = useAppSelector(selectTagsError);
  const dispatch = useAppDispatch();

  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'popular', sort: 'desc' }]);
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    pageSize: 10,
    page: 1,
  });

  useEffect(() => {
    !tagsCount && dispatch(fetchTagsCount());

    const { page, pageSize } = paginationModel;
    const { field, sort } = sortModel[0] || {};
    const payload = { page, pageSize, sortBy: field, order: sort };
    dispatch(fetchTags(payload));
    dispatch(setAmountAction(pageSize));
  }, [sortModel, paginationModel]);

  return (
    <TagsTable
      tags={tags}
      status={status}
      error={error}
      tagsCount={tagsCount}
      paginationModel={paginationModel}
      setPaginationModel={setPaginationModel}
      sortModel={sortModel}
      setSortModel={setSortModel}
    />
  );
};

export default TagsTableContainer;
