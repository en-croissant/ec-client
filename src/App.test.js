import { render, screen } from "@testing-library/react";
import App from "./App";
import * as Pages from "./pages";

test("renders learn react link", () => {
  render(<Pages.Home />);
  expect(screen).toBeDefined();
});

// If user is logged in they can access these routes

// If user is not logged in the can access those routes
