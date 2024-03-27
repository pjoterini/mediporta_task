import { Box, Button, Container, Typography } from '@mui/material';
import { useState } from 'react';
import TagsTableContainer from './components/TagsTable/TagsTable.container';
import { ITag } from './types/TagsTable';

function App() {
  const [tags, setTags] = useState<ITag[] | undefined>();

  const fetchData = async () => {
    const result = await fetch('https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow');
    const data = await result.json();
    setTags(data.items);

    console.log(data);
  };

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
        <Button sx={{ ml: { xs: 0, sm: 5 }, mt: 3.4, height: '40px' }} variant="contained" onClick={fetchData}>
          FETCH DATA
        </Button>
      </Box>
      {tags && <TagsTableContainer tags={tags} />}
    </Container>
  );
}

export default App;
