import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Auth from '.'

describe('<Auth />', () => {
  it('should render all components, and props', () => {
    renderWithTheme(
      <Auth title="Auth Title">
        <input type="text" />
      </Auth>
    )

    // 2 logos
    expect(screen.getAllByRole('img', { name: /formata já/i })).toHaveLength(2)

    // heading principal do banner
    expect(
      screen.getByRole('heading', {
        name: /Preocupe-se com o conteúdo. Formatação\? Deixa com agente!/i
      })
    ).toBeInTheDocument()

    // subtitle
    expect(
      screen.getByRole('heading', {
        name: /FORMATA JÁ é a mais completa plataforma para formatar seu trabalho acadêmico./i
      })
    ).toBeInTheDocument()

    // title do content
    expect(
      screen.getByRole('heading', { name: /Auth Title/i })
    ).toBeInTheDocument()

    // children
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
