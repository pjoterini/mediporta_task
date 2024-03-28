import { Container, CssBaseline } from '@mui/material';
import TableContainer from './components/Table/Table.container';
import HeaderContainer from './components/Header/Header.container';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f6d15c',
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HeaderContainer />
        <Container>
          <TableContainer />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
