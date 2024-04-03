import { GridSortDirection } from '@mui/x-data-grid';

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
