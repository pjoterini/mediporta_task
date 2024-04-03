import { AppBar, Box, Toolbar } from '@mui/material';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="transparent" position="static">
        <Toolbar sx={{ py: 2, px: 4, width: '100%', maxWidth: '600px', mx: 'auto' }}>
          <img src={logo} alt="logo" width="100px" />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
