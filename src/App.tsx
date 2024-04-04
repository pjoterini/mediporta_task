import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Header } from './common/layout';
import { TagsTableContainer } from './modules/tags';

const theme = createTheme({
  palette: {
    primary: {
      main: '#edc10e',
    },
    secondary: {
      main: '#104564',
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Container>
          <TagsTableContainer />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
