import { Container } from '@mui/material';
import TableContainer from './components/Table/Table.container';
import HeaderContainer from './components/Header/Header.container';

function App() {
  return (
    <Container>
      <HeaderContainer />
      <TableContainer />
    </Container>
  );
}

export default App;
