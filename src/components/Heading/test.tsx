import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a white heading by default.', () => {
    renderWithTheme(<Heading>Formata Já</Heading>)
    expect(screen.getByRole('heading', { name: /Formata Já/i })).toHaveStyle({
      color: '#EADEDA'
    })
    expect(screen.getByRole('heading', { name: /Formata Já/i })).toHaveStyle({
      'font-size': '1.6rem'
    })
    expect(
      screen.getByRole('heading', { name: /Formata Já/i })
    ).toHaveStyleRule('width', '3rem', {
      modifier: '::after'
    })
  })

  it('should render a black heading when color is passed.', () => {
    renderWithTheme(<Heading color="black">Formata Já</Heading>)
    expect(screen.getByRole('heading', { name: /Formata Já/i })).toHaveStyle({
      color: '#2E282A'
    })
  })

  it('should render a heading with a line to the left side.', () => {
    renderWithTheme(<Heading lineLeft>Formata Já</Heading>)
    expect(screen.getByRole('heading', { name: /Formata Já/i })).toHaveStyle({
      'border-left': '0.7rem solid #EF2D56'
    })
  })

  it('should render a heading with a line at the bottom.', () => {
    renderWithTheme(<Heading lineBottom>Formata Já</Heading>)
    expect(
      screen.getByRole('heading', { name: /Formata Já/i })
    ).toHaveStyleRule('border-bottom', '0.5rem solid #EF2D56', {
      modifier: '::after'
    })
  })

  it('should render a heading with a medium size.', () => {
    renderWithTheme(<Heading size="medium">Formata Já</Heading>)
    expect(screen.getByRole('heading', { name: /Formata Já/i })).toHaveStyle({
      'font-size': '2rem'
    })
    expect(
      screen.getByRole('heading', { name: /Formata Já/i })
    ).toHaveStyleRule('font-size', '2.8rem', {
      media: '(min-width: 768px)'
    })
  })

  it('should render a heading with a huge size.', () => {
    renderWithTheme(<Heading size="huge">Formata Já</Heading>)
    expect(screen.getByRole('heading', { name: /Formata Já/i })).toHaveStyle({
      'font-size': '5.2rem'
    })
  })

  it('should render a heading with a primary line color', () => {
    renderWithTheme(
      <Heading lineColor="primary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #EF2D56' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #EF2D56', {
      modifier: '::after'
    })
  })

  it('should render a heading with a secondary line color', () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #008DD5' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #008DD5', {
      modifier: '::after'
    })
  })
})
