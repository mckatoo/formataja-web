import Heading from 'components/Heading'
import Logo from 'components/Logo'
import Link from 'next/link'
import * as Styles from './styles'

const Footer = () => (
  <Styles.Wrapper>
    <Logo color="black" />
    <Styles.Content>
      <Styles.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contact
        </Heading>
        <a href="mailto:sac@formataja.com">sac@formataja.com</a>
      </Styles.Column>

      <Styles.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Follow us
        </Heading>
        <nav aria-labelledby="social media">
          <a
            href="https://www.instagram.com/formataja"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.instagram.com/formataja"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.instagram.com/formataja"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Youtube
          </a>
        </nav>
      </Styles.Column>

      <Styles.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Links
        </Heading>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/documentos">
          <a>Documentos</a>
        </Link>
        <Link href="/modelos">
          <a>Modelos</a>
        </Link>
        <Link href="/search">
          <a>Buscar</a>
        </Link>
      </Styles.Column>

      <Styles.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Location
        </Heading>
        <a href="mailto:sac@formataja.com">sac@formataja.com</a>
      </Styles.Column>
    </Styles.Content>

    <Styles.Copyright>Formata Já 2020 © All rights reserved.</Styles.Copyright>
  </Styles.Wrapper>
)

export default Footer
