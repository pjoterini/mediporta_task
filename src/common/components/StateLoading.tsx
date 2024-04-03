import { Box, CircularProgress } from '@mui/material';

const StateLoading = () => {
  return (
    <Box pt={5} display="flex" justifyContent="center" alignItems="center">
      <CircularProgress />
    </Box>
  );
};

export default StateLoading;
