import { AppBar, Box, Link, Toolbar, Typography } from '@mui/material';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="transparent" position="static">
        <Toolbar
          sx={{
            py: 2,
            px: 4,
            width: '100%',
            maxWidth: '600px',
            mx: 'auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
          }}
        >
          <img src={logo} alt="logo" width="100px" />
          <Typography variant="body2" textAlign="center" py={2}>
            Created by:
            <Link ml={1} href="https://piotrgorski.com" target="_blank" rel="noopener" variant="h6">
              piotrgorski.com
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
