import { AppBar, Box, TextField, Toolbar, Typography } from '@mui/material';
import logo from '../../assets/logo.png';
import { Status } from '../../redux/enums/status';
import Button from '../common/Button';

interface IProps {
  onClick?: () => void;
  status: Status;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
}

const Header = ({ onClick, status, setAmount }: IProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="transparent" position="static">
        <Toolbar sx={{ py: 2, px: 4, width: '100%', maxWidth: '600px', mx: 'auto' }}>
          <img src={logo} alt="logo" width="100px" />

          <Box ml="auto">
            <Box py={2} display="flex" justifyContent="right" alignItems="center">
              <Typography mr={1}>Amount:</Typography>
              <TextField
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setAmount(Number(event.target.value));
                }}
                inputProps={{ type: 'number', max: 200, min: 1 }}
              />
            </Box>
            {status !== Status.SUCCEEDED && <Button label="fetch tags" variant="contained" onClick={onClick} />}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
