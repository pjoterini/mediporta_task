import { Box, Button, Typography } from '@mui/material';

interface IProps {
  fetchTags: () => void;
}

const Header = ({ fetchTags }: IProps) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      sx={{ flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'center' } }}
    >
      <Typography mt={2} variant="h2">
        Mediporta
      </Typography>
      <Button sx={{ ml: { xs: 0, sm: 5 }, mt: 3.4, height: '40px' }} variant="contained" onClick={fetchTags}>
        FETCH TAGS
      </Button>
    </Box>
  );
};

export default Header;
