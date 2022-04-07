import { screen, render, act } from "@testing-library/react";

import { default as NotFound } from ".";

describe("NotFound", () => {
  test("it renders a message on 404", () => {
    renderWithProviders(<NotFound />);
    const message = screen.getByRole("alert");
    expect(message.textContent).toMatch(/we can't find the page/i);
  });
});
