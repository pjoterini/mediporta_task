import { Container } from '@mui/material';
import TagsTableContainer from './components/TagsTable/TagsTable.container';
import HeaderContainer from './components/TagsTable/Header/Header.container';

function App() {
  return (
    <Container>
      <HeaderContainer />
      <TagsTableContainer />
    </Container>
  );
}

export default App;
