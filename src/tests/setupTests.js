import React from "react";
import "@testing-library/jest-dom/extend-expect";

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Provider } from "react-redux";
import { AuthProvider } from "../contexts/AuthContext/index";

import { MemoryRouter } from "react-router-dom";

import 'setimmediate'
if (!global.setImmediate) {
  global.setImmediate = setTimeout
}

const TestProviders = () => {
  return ({ children }) => (
    <AuthProvider>
        <MemoryRouter>
          {children}
        </MemoryRouter>
    </AuthProvider>
  );
};

const renderWithProviders = (ui, options = {}) => {
  let TestWrapper = TestProviders(options);
  render(ui, { wrapper: TestWrapper, ...options });
};

global.React = React;
global.render = render;
global.renderWithProviders = renderWithProviders;
global.userEvent = userEvent;
