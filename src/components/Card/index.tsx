import { DocumentRemove } from '@styled-icons/heroicons-outline'
import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'
import Button from 'components/Button'
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'
import * as S from './styles'

export type CardProps = {
  title: string
  college: string
  img: string
  favorite?: boolean
  onFavorite?: () => void
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
}

const Card = ({
  title,
  college,
  img,
  favorite,
  onFavorite,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'normal'
}: CardProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}
    <S.ImageBox>
      <img src={img} alt={title} />
    </S.ImageBox>
    <S.Content>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.College>{college}</S.College>
      </S.Info>
      <S.FavButton role="button" onClick={onFavorite}>
        {favorite ? (
          <Favorite aria-label="Remove from Wishlist" />
        ) : (
          <FavoriteBorder aria-label="Add to Wishlist" />
        )}
      </S.FavButton>
      <S.BuyBox>
        <Button icon={<DocumentRemove />} size="small">
          Remove
        </Button>
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default Card
