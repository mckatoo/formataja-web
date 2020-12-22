import * as S from './styles'

const Main = ({
  title = 'DevNaRoça',
  description = 'Desenvolvimento Web, Mobile e Desktop'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem DevNaRoça - Chapéu óculos amarelo e azul com gravata borboleta"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para telas de código."
    />
  </S.Wrapper>
)

export default Main
