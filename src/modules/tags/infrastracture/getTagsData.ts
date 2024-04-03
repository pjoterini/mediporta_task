import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FetchTagsPayload } from '../types';

const TAGS_ENDPOINT = 'https://api.stackexchange.com/2.3/tags';

export const fetchTags = createAsyncThunk('tags/fetchTags', async (payload: FetchTagsPayload) => {
  const { page, pageSize, sortBy, order } = payload;
  const params = new URLSearchParams();
  params.append('page', page.toString());
  params.append('pagesize', pageSize.toString());
  if (order) params.append('order', order);
  if (sortBy) params.append('sort', sortBy);

  return axios.get(`${TAGS_ENDPOINT}?site=stackoverflow&${params.toString()}`).then((res) => res.data.items);
});

export const fetchTagCount = createAsyncThunk('tags/fetchTagCount', async () => {
  return axios.get(`${TAGS_ENDPOINT}?site=stackoverflow&filter=total`).then((res) => res.data.total);
});
