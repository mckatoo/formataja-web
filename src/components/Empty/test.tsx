import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Empty from '.'

export const props = {
  title: 'LKJfklsdjfklsdfkjsdfklsdj askldfjskldfj',
  description: 'Aaklsdjf alskdjflksdf sdlkf'
}

describe('<Empty />', () => {
  it('should render corectly without link', () => {
    renderWithTheme(<Empty {...props} />)

    expect(
      screen.getByRole('image', {
        name: /A user who did not find what he was looking for./i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(screen.getByText(props.description)).toBeInTheDocument()

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('should render with link', () => {
    const link = {
      link: {
        src: '/',
        label: 'Go back to docs.'
      }
    }
    const { container } = renderWithTheme(<Empty {...props} {...link} />)

    expect(
      screen.getByRole('link', { name: /go back to docs/i })
    ).toHaveAttribute('href', '/')
    expect(container.parentElement).toMatchSnapshot()
  })
})
