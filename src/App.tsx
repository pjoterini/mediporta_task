import { Box, Button, Card, Container, Grid, Typography } from '@mui/material';

import { useState } from 'react';

interface ITag {
  name: string;
  count: number;
}

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
      <Box display="flex" alignItems="center">
        <Typography variant="h2">Mediporta</Typography>
        <Button sx={{ ml: 5, height: '40px' }} variant="contained" onClick={fetchData}>
          FETCH DATA
        </Button>
      </Box>
      <Grid container spacing={2} sx={{ flexGrow: 1, mt: 2 }}>
        {tags?.map((tag) => (
          <Grid item key={tag.name}>
            <Card sx={{ py: 1, px: 2 }}>
              <Typography mb={1} color="primary" variant="h5">
                {tag.name}
              </Typography>
              <Typography>Pole count: {tag.count}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default App;
