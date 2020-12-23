import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import Container from '.'

describe('<Container />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <Container>
        <span>Formata Já</span>
      </Container>
    )

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.grid.container
    )
  })
})
