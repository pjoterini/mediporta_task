import { ITag } from '../../types/TagsTable';
import TagsTable from './TagsTable.component';

interface IProps {
  tags: ITag[];
}

const TagsTableContainer = ({ tags }: IProps) => {
  return <TagsTable tags={tags} />;
};

export default TagsTableContainer;
