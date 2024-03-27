import { useAppSelector } from '../../redux/store';
import { selectTags } from '../../redux/tags/selector';
import TagsTable from './TagsTable.component';

const TagsTableContainer = () => {
  const tags = useAppSelector(selectTags);

  return <TagsTable tags={tags} />;
};

export default TagsTableContainer;
