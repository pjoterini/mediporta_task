import { useAppDispatch } from '../../../redux/store';
import { fetchTags } from '../../../redux/tags/actions';
import Header from './Header.component';

const HeaderContainer = () => {
  const dispatch = useAppDispatch();

  const fetchData = () => {
    dispatch(fetchTags());
  };

  return <Header fetchTags={fetchData} />;
};

export default HeaderContainer;
