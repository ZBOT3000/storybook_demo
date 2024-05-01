import type { StorybookConfig } from "@storybook/nextjs";

const path = require("path");

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack",
    "@storybook/addon-themes",
    "@storybook/addon-postcss",
  ],
  webpackFinal: async (config) => {
    // Ensure that config.module.rules is defined
    if (config.module?.rules) {
      config.module.rules.push({
        test: /\.css$/,
        use: [
          {
            loader: "postcss-loader",
          },
        ],
        include: path.resolve(__dirname, "../"),
      });
    }
    return config;
  },
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
};
export default config;
