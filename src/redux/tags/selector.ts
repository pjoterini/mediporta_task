import { RootState } from '../store';

export const selectTags = (state: RootState) => state.tags.tags;
export const selectTagsCount = (state: RootState) => state.tags.tagsCount;
export const selectAmount = (state: RootState) => state.tags.amount;
export const selectTagsStatus = (state: RootState) => state.tags.status;
export const selectTagsError = (state: RootState) => state.tags.error;
