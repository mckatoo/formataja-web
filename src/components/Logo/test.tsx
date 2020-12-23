import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default.', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Formata Já/i)).toHaveStyle('color: "#EADEDA"')
  })

  it('should render the logo with id.', () => {
    const { container } = renderWithTheme(<Logo id="testId" />)
    expect(container.querySelector('#paint_testId')).toBeInTheDocument()
  })

  it('should render a black label when color reported as parameter.', () => {
    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/Formata Já/i).parentElement).toHaveStyle({
      color: '#2E282A'
    })
  })

  it('should render a bigger logo.', () => {
    renderWithTheme(<Logo size="large" />)
    expect(screen.getByLabelText(/Formata Já/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })

  it('should render a normal logo when size is default.', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Formata Já/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })

  it('should hide text on mobile', () => {
    renderWithTheme(<Logo hideTextOnMobile />)
    expect(screen.getByLabelText(/Formata Já/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })

  it('should render a bigger logo without text if hideOnMobile', () => {
    renderWithTheme(<Logo hideTextOnMobile />)
    expect(screen.getByLabelText(/Formata Já/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: '(max-width: 768px)'
      }
    )
  })
})
