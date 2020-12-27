import { act, fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import ToolTip from '.'

describe('<ToolTip />', () => {
  it('should render the ToolTip', () => {
    const { container } = renderWithTheme(
      <ToolTip data-testid="iconTest" text="Texto de ajuda." />
    )
    expect(container.getElementsByTagName('svg')[0]).toHaveAttribute(
      'aria-hidden',
      'true'
    )
  })

  it('should show tip on mouse over', async () => {
    const { container } = renderWithTheme(
      <ToolTip data-testid="iconTest" text="Texto de ajuda." />
    )

    await act(async () => {
      fireEvent.mouseOver(container.getElementsByTagName('svg')[0])
    })

    expect(screen.getByText(/texto de ajuda./i)).toBeInTheDocument()
  })
})
