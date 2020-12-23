import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import ProfileMenu from '.'

describe('<ProfileMenu />', () => {
  it('should render the menu with links', () => {
    renderWithTheme(<ProfileMenu />)

    expect(screen.getByRole('link', { name: /meu perfil/i })).toHaveAttribute(
      'href',
      '/profile/me'
    )
    expect(
      screen.getByRole('link', { name: /meus documentos/i })
    ).toHaveAttribute('href', '/profile/docs')
    expect(screen.getByRole('link', { name: /meus modelos/i })).toHaveAttribute(
      'href',
      '/profile/models'
    )
    expect(screen.getByRole('link', { name: /sair/i })).toHaveAttribute(
      'href',
      '/logout'
    )
  })

  it('should render the menu with an active link defined', () => {
    renderWithTheme(<ProfileMenu activeLink="/profile/docs" />)

    expect(screen.getByRole('link', { name: /meus documentos/i })).toHaveStyle({
      background: theme.colors.primary,
      color: theme.colors.white
    })
  })
})
