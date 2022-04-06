import { default as CreateGame } from ".";
import { screen, render } from "@testing-library/react";
import { CreateGame } from "../../pages";

describe("CreateGame", () => {
  it("renders lobby", () => {
    render(<CreateGame />);
    let content = screen;
    expect(content).toBeTruthy();
  });
});
