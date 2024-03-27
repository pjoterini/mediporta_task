import { Box, Button, Container, Typography } from '@mui/material';
import TagsTableContainer from './components/TagsTable/TagsTable.container';
import { useAppDispatch } from './redux/store';
import { fetchTags } from './redux/tags/actions';

function App() {
  const dispatch = useAppDispatch();

  return (
    <Container>
      <Box
        display="flex"
        justifyContent="center"
        sx={{ flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'center' } }}
      >
        <Typography mt={2} variant="h2">
          Mediporta
        </Typography>
        <Button
          sx={{ ml: { xs: 0, sm: 5 }, mt: 3.4, height: '40px' }}
          variant="contained"
          onClick={() => dispatch(fetchTags())}
        >
          FETCH TAGS
        </Button>
      </Box>
      <TagsTableContainer />
    </Container>
  );
}

export default App;
