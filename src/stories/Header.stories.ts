import type { Meta, StoryObj } from '@storybook/react';
import Header from '../components/Header/Header.component';

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

export const Inital: Story = {
  args: { amount: undefined },
};

export const fetchedSmall: Story = {
  args: { amount: 10 },
};

export const fetchedBig: Story = {
  args: { amount: 100 },
};
