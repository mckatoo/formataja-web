import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /formata já/i })).toBeInTheDocument()
  })

  it('should handle the open/close mobile menu', () => {
    renderWithTheme(<Menu />)

    // selecionar o menuFull
    const fullMenuElement = screen.getByRole('navigation', { hidden: true })
    // verificar se o menu está hide
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
    // clicar no botão de abrir o menu e ver se abriu
    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    // clicar no botão de fechar o menu e ver se fechou
    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })

  it('should show register box when logged OUT', () => {
    renderWithTheme(<Menu />)
    expect(screen.getAllByText(/entrar/i)).toHaveLength(2)
    expect(screen.getByText(/inscreva-se/i)).toBeInTheDocument()
    expect(screen.queryByText(/minha conta/i)).not.toBeInTheDocument()
  })

  it('should show register box when logged IN', () => {
    renderWithTheme(<Menu username="anyuser" />)
    expect(screen.queryByText(/entrar/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/inscreva-se/i)).not.toBeInTheDocument()
    expect(screen.getByText(/minha conta/i)).toBeInTheDocument()
  })
})
