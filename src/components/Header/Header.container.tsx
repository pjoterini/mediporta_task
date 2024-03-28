import { useAppDispatch, useAppSelector } from '../../redux/store';
import { fetchTags } from '../../redux/tags/actions';
import { selectTagsStatus } from '../../redux/tags/selector';
import Header from './Header.component';

const HeaderContainer = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectTagsStatus);

  const fetchData = () => {
    dispatch(fetchTags());
  };

  return <Header onClick={fetchData} status={status} />;
};

export default HeaderContainer;
