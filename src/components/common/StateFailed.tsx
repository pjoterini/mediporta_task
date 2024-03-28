import { Box, Typography } from '@mui/material';

interface IProps {
  error?: string;
}

const StateFailed = ({ error }: IProps) => {
  return (
    <Box p={2} display="flex" justifyContent="center" alignItems="center">
      <Typography color="error">{error}</Typography>
    </Box>
  );
};

export default StateFailed;
