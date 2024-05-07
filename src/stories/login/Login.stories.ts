import type { Meta, StoryObj } from "@storybook/react";
import { Login } from "./Login";

const meta = {
  title: "Login/default",
  component: Login,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Login>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    //label: "Login",
    stack: "p-4 bg-gray-400",
    box1: "px-12 py-12 border-gray-300 shadow-2xl ",
  },
};
