import type { Meta, StoryObj } from '@storybook/react';
import TagsTable from '../components/TagsTable/TagsTable.component';
import { Status } from '../redux/enums/status';

const meta = {
  title: 'DataDisplay/TagsTable',
  component: TagsTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    tagsCount: 64234,
    tags: [{ name: 'test', count: 123 }],
    status: Status.SUCCEEDED,
    error: undefined,
    paginationModel: { pageSize: 10, page: 1 },
    setPaginationModel: undefined,
    sortModel: [{ field: 'popular', sort: 'desc' }],
    setSortModel: undefined,
  },
} satisfies Meta<typeof TagsTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: { tags: [{ name: 'test', count: 123 }], status: Status.SUCCEEDED, error: undefined },
};

export const Loading: Story = {
  args: { status: Status.LOADING, error: undefined },
};

export const Error: Story = {
  args: { status: Status.FAILED, error: 'Network error' },
};
