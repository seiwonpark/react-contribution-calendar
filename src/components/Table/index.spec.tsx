import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Table from './index.tsx'
import './index.module.css'
import { waitFor } from '@testing-library/react'

describe('components/Table', () => {
  describe('view', () => {
    it('should render Table with default props', () => {
      // given
      const daysOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

      // when
      render(<Table />)

      // then
      daysOfTheWeek.forEach((day) => {
        expect(screen.getByText(day)).toBeInTheDocument()
      })
      months.forEach((month) => {
        expect(screen.getByText(month)).toBeInTheDocument()
      })
      expect(screen.getByText('Less')).toBeInTheDocument()
      expect(screen.getByText('More')).toBeInTheDocument()
    })

    it('should hide month labels when hideMonthLabels is true', () => {
      // given
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

      // when
      render(<Table visibilityOptions={{ hideMonthLabels: true }} />)

      // then
      months.forEach((month) => {
        expect(screen.queryByText(month)).not.toBeInTheDocument()
      })
    })

    it('should hide descriptions when hideDescription is true', () => {
      // given, when
      render(<Table visibilityOptions={{ hideDescription: true }} />)

      // then
      expect(screen.queryByText('Less')).not.toBeInTheDocument()
      expect(screen.queryByText('More')).not.toBeInTheDocument()
    })

    it('should validate date format', () => {
      expect(() => render(<Table dateOptions={{ start: 'invalid-date' }} />)).toThrowError()
      expect(() => render(<Table dateOptions={{ end: 'invalid-date' }} />)).toThrowError()
    })

    it('should validate date range', () => {
      expect(() => render(<Table dateOptions={{ start: '2024-12-31', end: '2024-01-01' }} />)).toThrowError()
    })

    it('should validate days of the week', () => {
      expect(() => render(<Table dateOptions={{ daysOfTheWeek: ['Invalid', 'Days'] }} />)).toThrowError()
    })
  })

  describe('interaction', () => {
    const user = userEvent.setup()
    it('should call onClick when clicking on a cell', async () => {
      // given
      const mockOnClick = vi.fn()
      render(<Table onCellClick={mockOnClick} />)

      // when
      const cellsInBody = screen.getAllByRole('cell', { hidden: true })
        .filter((cell) => cell.closest('tbody'))
      /**
       * index 0: month label
       * index 1: boundary empty cell or cell with data (has no click event)
       * index 2: cell with data (has click event)
       * So index 2 has been chosen for click event
       */
      await user.click(cellsInBody[2])

      // then
      await waitFor(() => {
        expect(mockOnClick).toHaveBeenCalledTimes(1)
      })
    })
  })
})
