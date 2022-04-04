import { render, screen } from "@testing-library/react";
import App from "./App";
import * as Pages from "./pages";

test("renders learn react link", () => {
  render(<Pages.Home />);
  expect(screen).toBeDefined();
});
