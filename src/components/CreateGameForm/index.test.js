import { screen, render } from "@testing-library/react";

import { default as CreateGame } from ".";

describe("CreateGame", () => {
  xit("renders lobby", () => {
    render(<CreateGame />);
    let content = screen;
    expect(content).toBeTruthy();
  });
});
