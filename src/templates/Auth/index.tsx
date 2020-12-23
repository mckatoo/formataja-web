import Heading from 'components/Heading'
import Logo from 'components/Logo'
import Link from 'next/link'

import * as Styles from './styles'

type AuthProps = {
  title: string
  children: React.ReactNode
}

const Auth = ({ title, children }: AuthProps) => (
  <Styles.Wrapper>
    <Styles.BannerBlock>
      <Styles.BannerContent>
        <Link href="/">
          <a>
            <Logo id="banner" />
          </a>
        </Link>

        <div>
          <Heading size="huge">
            Preocupe-se com o conteúdo. Formatação? Deixa com agente!
          </Heading>

          <Styles.Subtitle>
            <strong>FORMATA JÁ</strong> é a mais completa plataforma para
            formatar seu trabalho acadêmico.
          </Styles.Subtitle>
        </div>

        <Styles.Footer>
          Formata Já 2020 © Todos os Direitos Reservados
        </Styles.Footer>
      </Styles.BannerContent>
    </Styles.BannerBlock>

    <Styles.Content>
      <Styles.ContentWrapper>
        <Link href="/">
          <a>
            <Logo id="content" color="black" size="large" />
          </a>
        </Link>
        <Heading color="black" lineColor="secondary" lineLeft>
          {title}
        </Heading>

        {children}
      </Styles.ContentWrapper>
    </Styles.Content>
  </Styles.Wrapper>
)

export default Auth
