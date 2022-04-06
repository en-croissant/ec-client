import { default as JoinGame } from ".";
import { screen, render } from "@testing-library/react";

describe("JoinGame", () => {
  it("renders lobby", () => {
    render(<JoinGame />);
    let content = screen;
    expect(content).toBeTruthy();
  });
});
