import Button from 'components/Button'
import Link from 'next/link'
import * as S from './styles'

export type EmptyProps = {
  title: string
  description: string
  link?: {
    src: string
    label: string
  }
}

const Empty = ({ title, description, link }: EmptyProps) => (
  <S.Wrapper>
    <S.Image
      src="/img/empty.svg"
      alt="A user who did not find what he was looking for."
      role="image"
    />

    <S.Title>{title}</S.Title>

    <S.Description>{description}</S.Description>

    {!!link && (
      <Link href={link.src} passHref>
        <Button as="a">{link.label}</Button>
      </Link>
    )}
  </S.Wrapper>
)

export default Empty
