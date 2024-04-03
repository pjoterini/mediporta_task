import { GridSortDirection } from '@mui/x-data-grid';

export enum Status {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed',
}

export interface FetchTagsPayload {
  page: number;
  pageSize: number;
  sortBy?: string;
  order?: GridSortDirection;
}

export interface Tag {
  name: string;
  count: number;
}
