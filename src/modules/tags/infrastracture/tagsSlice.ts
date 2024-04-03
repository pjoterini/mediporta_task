import { createSlice } from '@reduxjs/toolkit';
import { Status, Tag } from '../types';
import { fetchTags, fetchTagsCount } from './getTagsData';

interface TagsStateProps {
  tagsCount?: number;
  tags?: Tag[];
  status: Status;
  error?: string;
}

const initialState: TagsStateProps = {
  tagsCount: undefined,
  tags: [],
  status: Status.IDLE,
  error: undefined,
};

export const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTags.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(fetchTags.rejected, (state, { error }) => {
        state.status = Status.FAILED;
        state.error = error.message;
      })
      .addCase(fetchTags.fulfilled, (state, { payload }) => {
        state.status = Status.SUCCEEDED;
        state.tags = payload;
      })
      .addCase(fetchTagsCount.rejected, (state, { error }) => {
        state.error = `Could not fetch tags count. Count set to default. ${error.message}`;
        state.tagsCount = 100;
      })
      .addCase(fetchTagsCount.fulfilled, (state, { payload }) => {
        state.tagsCount = payload;
      });
  },
});

export default tagsSlice.reducer;
