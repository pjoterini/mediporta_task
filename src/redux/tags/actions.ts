import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTags = createAsyncThunk('tags/fetchTags', async (_, thunkAPI) => {
  try {
    let items = [];
    let currentPage = 1;
    let hasMore = true;

    while (hasMore && currentPage < amount) {
      const result = await fetch(
        `https://api.stackexchange.com/2.3/tags?page=${currentPage}&pagesize=100&order=desc&sort=popular&site=stackoverflow`,
      );
      const data = await result.json();
      console.log(data);

      items.push(...data.items);
      if (data.has_more) {
        currentPage++;
      } else {
        hasMore = false;
      }
    }

    return items;
  } catch (err) {
    console.error(err);
    return thunkAPI.rejectWithValue(err);
  }
});
