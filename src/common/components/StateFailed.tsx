import { Alert } from '@mui/material';

interface StateFailedProps {
  error?: string;
}

const StateFailed = ({ error }: StateFailedProps) => {
  return (
    <Alert sx={{ my: 1 }} severity="error">
      {error}
    </Alert>
  );
};

export default StateFailed;
