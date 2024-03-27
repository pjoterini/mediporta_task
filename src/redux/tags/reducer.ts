import { createSlice } from '@reduxjs/toolkit';
import { Status } from '../enums/status';
import { ITag } from './interfaces';
import { fetchTags } from './actions';

interface IProps {
  tags: ITag[];
  status: Status;
  error: undefined | string;
}

const initialState: IProps = {
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
      });
  },
});

export default tagsSlice.reducer;
