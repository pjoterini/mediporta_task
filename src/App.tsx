import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Header } from './common/layout';
import { TagsTableContainer } from './modules/tags';
import Footer from './common/layout/Footer';

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
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
