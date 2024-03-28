import { Box, Typography } from '@mui/material';
import Button from '../common/Button';
import { Status } from '../../redux/enums/status';

interface IProps {
  onClick?: () => void;
  status: Status;
}

const Header = ({ onClick, status }: IProps) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      sx={{ flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'center' } }}
    >
      <Typography mt={2} variant="h2">
        Mediporta
      </Typography>
      {status !== Status.SUCCEEDED && <Button label="fetch tags" variant="contained" onClick={onClick} />}
    </Box>
  );
};

export default Header;
