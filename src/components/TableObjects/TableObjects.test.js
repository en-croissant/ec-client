import { screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { default as TableObjects } from '.'

const mockNavigate = jest.fn();
import 'react-router-dom'
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

describe("TableObjects component", () => {
  test("it navigates to book on book click", async () => {
    renderWithProviders(<TableObjects/>)
    const book = screen.getByTestId('tableobj-component')
    await act(async () => {
      userEvent.click(book)
    })
    expect(mockNavigate).toHaveBeenCalledWith('/book')
  })
})
