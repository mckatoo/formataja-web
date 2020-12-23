import { DocumentAdd } from '@styled-icons/heroicons-outline/DocumentAdd'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Button from '.'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    renderWithTheme(<Button>Save</Button>)

    expect(screen.getByRole('button', { name: /Save/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })
  })

  it('should render the small size', () => {
    renderWithTheme(<Button size="small">Save</Button>)

    expect(screen.getByRole('button', { name: /Save/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('should render the large size', () => {
    renderWithTheme(<Button size="large">Save</Button>)

    expect(screen.getByRole('button', { name: /Save/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem'
    })
  })

  it('should render the fullWidth version', () => {
    renderWithTheme(<Button fullWidth>Save</Button>)

    expect(screen.getByRole('button', { name: /Save/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render an icon version', () => {
    renderWithTheme(
      <Button icon={<DocumentAdd data-testid="iconTest" />}>Save</Button>
    )

    expect(screen.getByText(/Save/i)).toBeInTheDocument()
    expect(screen.getByTestId('iconTest')).toBeInTheDocument()
  })

  it('should render a minimal version', () => {
    renderWithTheme(
      <Button icon={<DocumentAdd data-testid="iconTest" />} minimal>
        Save
      </Button>
    )

    expect(screen.getByRole('button', { name: /Save/i })).toHaveStyle({
      background: 'none',
      color: '#EF2D56'
    })
    expect(screen.getByRole('button', { name: /Save/i })).toHaveStyleRule(
      'background',
      'none',
      {
        modifier: ':hover'
      }
    )
  })

  it('should render a disabled Button', () => {
    renderWithTheme(<Button disabled>Save</Button>)

    expect(screen.getByRole('button', { name: /Save/i })).toHaveStyleRule(
      'cursor',
      'not-allowed',
      {
        modifier: ':disabled'
      }
    )
  })

  it('should render button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Save
      </Button>
    )

    expect(screen.getByRole('link', { name: /Save/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
