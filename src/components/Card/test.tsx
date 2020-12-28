import { fireEvent, screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import Card from '.'

const cardProps = {
  title: 'A importância da IA em nossas vidas.',
  college: 'Uniesi',
  img: 'https://source.unsplash.com/user/willianjusten/300x140'
}

describe('<Card />', () => {
  it('should render the card  correctly', () => {
    const { container } = renderWithTheme(<Card {...cardProps} />)
    expect(container.firstChild).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: cardProps.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: cardProps.college })
    ).toBeInTheDocument()
    expect(screen.getByRole('img', { name: cardProps.title })).toHaveAttribute(
      'src',
      cardProps.img
    )
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render a filled Favorite icon when favorite prop is true', () => {
    renderWithTheme(<Card {...cardProps} favorite />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFavorite method when favorite icon is clicked', () => {
    const onFavorite = jest.fn()
    renderWithTheme(<Card {...cardProps} favorite onFavorite={onFavorite} />)
    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFavorite).toBeCalled()
  })

  it('should render a Ribbon with secondary color', () => {
    renderWithTheme(
      <Card
        {...cardProps}
        ribbon="My Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )
    const ribbon = screen.getByText(/My Ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
    expect(ribbon).toHaveStyle({
      backgroundColor: theme.colors.secondary
    })
  })
})
