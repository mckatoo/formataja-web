import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import { Search as SearchCartIcon } from '@styled-icons/material-outlined/Search'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import Button from 'components/Button'
import Logo from 'components/Logo'
import MediaMatch from 'components/MediaMatch'
import Link from 'next/link'
import { useState } from 'react'
import * as Styles from './styles'

export type MenuProps = {
  username?: string
}

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Styles.Wrapper>
      <MediaMatch lessThan="medium">
        <Styles.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </Styles.IconWrapper>
      </MediaMatch>

      <Styles.LogoWrapper>
        <Link href="/" passHref>
          <a>
            <Logo hideTextOnMobile />
          </a>
        </Link>
      </Styles.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <Styles.MenuNav>
          <Link href="/" passHref>
            <Styles.MenuLink>Home</Styles.MenuLink>
          </Link>
          <Styles.MenuLink href="#">Documentos</Styles.MenuLink>
          <Styles.MenuLink href="#">Modelos</Styles.MenuLink>
        </Styles.MenuNav>
      </MediaMatch>

      <Styles.MenuGroup>
        <Styles.IconWrapper>
          <SearchCartIcon aria-label="Search" />
        </Styles.IconWrapper>

        {!username && (
          <MediaMatch greaterThan="medium">
            <Link href="/sign-in" passHref>
              <Button as="a">Entrar</Button>
            </Link>
          </MediaMatch>
        )}
      </Styles.MenuGroup>

      <Styles.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />

        <Styles.MenuNav>
          <Link href="/" passHref>
            <Styles.MenuLink>Home</Styles.MenuLink>
          </Link>
          <Styles.MenuLink href="#">Documentos</Styles.MenuLink>
          <Styles.MenuLink href="#">Modelos</Styles.MenuLink>

          {!!username && (
            <>
              <Styles.MenuLink href="#">Minha conta</Styles.MenuLink>
            </>
          )}
        </Styles.MenuNav>

        {!username && (
          <Styles.RegisterBox>
            <Link href="/sign-in" passHref>
              <Button as="a" fullWidth size="large">
                Entrar
              </Button>
            </Link>

            <span>or</span>

            <Link href="/sign-up" passHref>
              <Styles.CreateAccount title="Inscreva-se">
                Inscreva-se
              </Styles.CreateAccount>
            </Link>
          </Styles.RegisterBox>
        )}
      </Styles.MenuFull>
    </Styles.Wrapper>
  )
}

export default Menu
