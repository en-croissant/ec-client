import { default as GameChessboard } from ".";
import { screen, render } from "@testing-library/react";

import * as Stuff from 'react'

describe("GameChessboard", () => {
  it("successfully renders the chessboard", () => {
    const mockSetState = jest.fn()
    const mockUseState = jest.fn(() => ["tester", mockSetState])
    const mockValues = {
      setState: mockUseState
    }
    jest.spyOn(Stuff, 'useState').mockImplementation(() => mockValues)
    renderWithProviders(<GameChessboard/>)
    const chessboard = screen.getByLabelText('chessboard')
    expect(chessboard).toBeInTheDocument()
  });
});
