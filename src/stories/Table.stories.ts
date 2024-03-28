import type { Meta, StoryObj } from '@storybook/react';

import Table from '../components/Table/Table.component';
import { Status } from '../redux/enums/status';

const meta = {
  title: 'DataDisplay/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Loading: Story = {
  args: { status: Status.LOADING, error: undefined },
};

export const Error: Story = {
  args: { status: Status.FAILED, error: 'Something went wrong' },
};

export const Success: Story = {
  args: { tags: [{ name: 'test', count: 123 }], status: Status.SUCCEEDED, error: undefined },
};
