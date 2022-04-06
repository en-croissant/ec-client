import { default as GameChessboard } from ".";
import { screen, render } from "@testing-library/react";

describe("GameChessboard", () => {
  it("renders lobby", () => {
    render(<GameChessboard />);
    let content = screen;
    expect(content).toBeTruthy();
  });
});
