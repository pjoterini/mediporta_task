import { createSlice } from '@reduxjs/toolkit';
import { Tag } from '../types';
import { fetchTags, fetchTagCount } from './getTagsData';
import { Status } from '../../../common/enums';

interface TagsStateProps {
  count: number | null;
  data: Tag[];
  status: Status;
  error: string | null;
}

const initialState: TagsStateProps = {
  count: null,
  data: [],
  status: Status.IDLE,
  error: null,
};

const tagsSlice = createSlice({
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
        state.error = error.message || null;
      })
      .addCase(fetchTags.fulfilled, (state, { payload }) => {
        state.status = Status.SUCCEEDED;
        state.data = payload;
        state.error = null;
      })
      .addCase(fetchTagCount.rejected, (state, { error }) => {
        state.error = `Could not fetch tags count. Count set to default. ${error.message}`;
        state.count = 100;
      })
      .addCase(fetchTagCount.fulfilled, (state, { payload }) => {
        state.count = payload;
        state.error = null;
      });
  },
});

export default tagsSlice.reducer;
