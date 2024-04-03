import type { Meta, StoryObj } from '@storybook/react';
import Footer from '../common/layout/Footer';

const meta = {
  title: 'Layout/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: { amount: undefined },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Inital: Story = {};
