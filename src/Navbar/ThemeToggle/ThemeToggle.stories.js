import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import ThemeToggle from "./ThemeToggle";
export default {
  title: "ThemeToggle",
  component: ThemeToggle,
};

export const ThemeToggleStoryLight = () => (
  <Provider store={createStore(() => ({ theme: "light" }))}>
    <ThemeProvider theme={{ nm: "light" }}>
      <ThemeToggle />
    </ThemeProvider>
  </Provider>
);

export const ThemeToggleStoryDark = () => (
  <Provider store={createStore(() => ({ theme: "dark" }))}>
    <ThemeProvider theme={{ nm: "dark" }}>
      <ThemeToggle />
    </ThemeProvider>
  </Provider>
);
