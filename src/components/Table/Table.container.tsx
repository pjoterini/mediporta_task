import { useAppSelector } from '../../redux/store';
import { selectTags, selectTagsError, selectTagsStatus } from '../../redux/tags/selector';
import Table from './Table.component';

const TableContainer = () => {
  const tags = useAppSelector(selectTags);
  const status = useAppSelector(selectTagsStatus);
  const error = useAppSelector(selectTagsError);

  return <Table tags={tags} status={status} error={error} />;
};

export default TableContainer;
