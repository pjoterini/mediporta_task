import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Status } from '../enums/status';
import { fetchTags, fetchTagsCount } from './actions';
import { ITag } from './interfaces';

interface IProps {
  tags: ITag[];
  tagsCount?: number;
  amount?: number;
  status: Status;
  error: undefined | string;
}

const initialState: IProps = {
  tags: [],
  tagsCount: undefined,
  amount: undefined,
  status: Status.IDLE,
  error: undefined,
};

export const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    setAmountAction: (state: IProps, action: PayloadAction<number>) => {
      state.amount = action.payload;
    },
  },
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
        console.log(error);
        state.error = `Could not fetch tags count. Count set to default. ${error.message}`;
        state.tagsCount = 100;
      })
      .addCase(fetchTagsCount.fulfilled, (state, { payload }) => {
        state.tagsCount = payload;
      });
  },
});

export const { setAmountAction } = tagsSlice.actions;

export default tagsSlice.reducer;
