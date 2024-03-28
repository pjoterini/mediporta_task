import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Header from '../components/Header/Header.component';
import { Status } from '../redux/enums/status';

const meta = {
  title: 'Layout/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Inital: Story = {
  args: { status: Status.IDLE },
};

export const fetched: Story = {
  args: { status: Status.SUCCEEDED },
};
