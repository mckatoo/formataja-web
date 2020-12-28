import { screen } from '@testing-library/react'
import 'match-media-mock'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'
import CardSlider from '.'
import mock from './mock'

describe('<CardSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = renderWithTheme(<CardSlider items={mock} />)

    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render with arrows if color passed', () => {
    renderWithTheme(<CardSlider items={mock} color="white" />)

    expect(screen.getByLabelText(/previous cards/i)).toHaveStyle({
      color: theme.colors.white
    })
    expect(screen.getByLabelText(/next cards/i)).toHaveStyle({
      color: theme.colors.white
    })
  })
})
