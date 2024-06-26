import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '../common/layout';

const meta = {
  title: 'Layout/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: { amount: undefined },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Inital: Story = {};
