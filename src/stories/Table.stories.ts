import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '../common/components';
import { Status } from '../common/enums';

const meta = {
  title: 'DataDisplay/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    heading: 'Data Table',
    rowCount: 64234,
    rows: [
      { name: 'test', count: 123 },
      { name: 'test2', count: 123123 },
      { name: 'testlongword', count: 123123123 },
    ],
    columns: [
      {
        field: 'name',
        headerName: 'Tag',
        width: 200,
      },
      {
        field: 'count',
        headerName: 'Pole count',
        width: 140,
      },
    ],
    status: Status.SUCCEEDED,
    error: undefined,
    paginationModel: { pageSize: 10, page: 1 },
    setPaginationModel: undefined,
    sortModel: [{ field: 'popular', sort: 'desc' }],
    setSortModel: undefined,
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    rows: [
      { name: 'test', count: 123 },
      { name: 'test2', count: 123123 },
      { name: 'testlongword', count: 123123123 },
    ],
    status: Status.SUCCEEDED,
    error: undefined,
  },
};

export const Loading: Story = {
  args: { status: Status.LOADING, error: undefined },
};

export const RowsError: Story = {
  args: { status: Status.FAILED, error: 'Network error' },
};

export const RowCountError: Story = {
  args: {
    rows: [
      { name: 'test', count: 123 },
      { name: 'test2', count: 123123 },
      { name: 'testlongword', count: 123123123 },
    ],
    rowCount: 100,
    status: Status.SUCCEEDED,
    error: 'Could not fetch tags count. Count set to default. Error message.',
  },
};
