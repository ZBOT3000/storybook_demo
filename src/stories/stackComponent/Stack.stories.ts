import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "./Stack";

const meta = {
  title: "Layout/default",
  component: Stack,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Layout",
    stack: "p-4 bg-gray-400",
    box1: "bg-blue-400 w-[100px] h-[100px]",
    box2: "bg-red-400 w-[100px] h-[100px]",
    box3: "bg-green-400 w-[100px] h-[100px]",
  },
};
