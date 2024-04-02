import { GridSortDirection } from '@mui/x-data-grid';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface FetchTagsPayload {
  page: number;
  pageSize: number;
  sortBy?: string;
  order?: GridSortDirection;
}

export const fetchTags = createAsyncThunk('tags/fetchTags', async (payload: FetchTagsPayload) => {
  const { page, pageSize, sortBy, order } = payload;
  const params = new URLSearchParams();
  params.append('page', page.toString());
  params.append('pagesize', pageSize.toString());
  if (order) params.append('order', order);
  if (sortBy) params.append('sort', sortBy);

  return axios
    .get(`https://api.stackexchange.com/2.3/tags?site=stackoverflow&${params.toString()}`)
    .then((res) => res.data.items);
});

export const fetchTagsCount = createAsyncThunk('tags/fetchTagsCount', async () => {
  return axios
    .get('https://api.stackexchange.com/2.3/tags?site=stackoverflow&filter=tota')
    .then((res) => res.data.total);
});
