import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Main />)

    expect(
      screen.getByRole('heading', { name: /DevNaRoça/i })
    ).toBeInTheDocument()
  })

  it('should render the colors correctly', () => {
    const { container } = renderWithTheme(<Main />)
    expect(container).toHaveStyle("backgroundColor: '#06092b'")
  })
})
