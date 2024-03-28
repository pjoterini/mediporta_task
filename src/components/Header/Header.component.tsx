import { AppBar, Box, Toolbar } from '@mui/material';
import logo from '../../assets/logo.png';
import { Status } from '../../redux/enums/status';
import Button from '../common/Button';

interface IProps {
  onClick?: () => void;
  status: Status;
}

const Header = ({ onClick, status }: IProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="transparent" position="static">
        <Toolbar sx={{ py: 2, px: 4, width: '100%', maxWidth: '600px', mx: 'auto' }}>
          <img src={logo} alt="logo" width="100px" />
          <Box ml="auto">
            {status !== Status.SUCCEEDED && <Button label="fetch tags" variant="contained" onClick={onClick} />}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
