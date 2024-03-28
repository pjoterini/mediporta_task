import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { fetchTags } from '../../redux/tags/actions';
import { selectTagsStatus } from '../../redux/tags/selector';
import Header from './Header.component';

const HeaderContainer = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectTagsStatus);
  const [amount, setAmount] = useState<number>(1);

  useEffect(() => {
    console.log(amount);
  });

  const fetchData = () => {
    dispatch(fetchTags(amount));
  };

  return <Header onClick={fetchData} status={status} setAmount={setAmount} />;
};

export default HeaderContainer;
