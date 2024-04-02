import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import logo from '../../assets/logo.png';

interface IProps {
  amount?: number;
}

const Header = ({ amount }: IProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="transparent" position="static">
        <Toolbar sx={{ py: 2, px: 4, width: '100%', maxWidth: '600px', mx: 'auto' }}>
          <img src={logo} alt="logo" width="100px" />

          <Box ml="auto">
            <Box py={2} display="flex" justifyContent="right" alignItems="center">
              <Typography>
                Tags fetched: <strong>{amount ? amount : '*'}</strong>
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
