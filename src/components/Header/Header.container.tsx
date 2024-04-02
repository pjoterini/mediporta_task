import { useAppSelector } from '../../redux/store';
import { selectAmount } from '../../redux/tags/selector';
import Header from './Header.component';

const HeaderContainer = () => {
  const amount = useAppSelector(selectAmount);

  return <Header amount={amount} />;
};

export default HeaderContainer;
