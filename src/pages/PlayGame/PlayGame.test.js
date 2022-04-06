import { screen } from '@testing-library/react'

import { default as PlayGame } from '.'

describe("PlayGame page", () => {
  xtest("it renders the chess board", () => {
    renderWithProviders(<PlayGame/>)
    const chessboard = screen.getByLabelText('chessboard')
    expect(chessboard).toBeInTheDocument()
  })
})
