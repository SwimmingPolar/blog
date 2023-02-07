import { withThemeSwitch } from "../lib";
// Storybook specific global styles
import "../styles/storybook.css";

// Global decorators
export const decorators = [];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
