import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTags = createAsyncThunk('tags/fetchTags', async (_, thunkAPI) => {
  try {
    const result = await fetch('https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow');
    const data = await result.json();

    console.log(data);

    return data.items;
  } catch (err) {
    console.error(err);
    return thunkAPI.rejectWithValue(err);
  }
});
