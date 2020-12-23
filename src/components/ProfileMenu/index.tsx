import { DocumentText } from '@styled-icons/heroicons-outline'
import { Documents } from '@styled-icons/ionicons-outline/Documents'
import { AccountCircle, ExitToApp } from '@styled-icons/material-outlined'
import Link from 'next/link'
import * as S from './styles'

export type ProfileMenuProps = {
  activeLink?: '/profile/me' | '/profile/cards' | '/profile/orders' | string
}

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => (
  <S.Nav>
    <Link href="/profile/me" passHref>
      <S.Link isActive={activeLink === '/profile/me'} title="Meu perfil">
        <AccountCircle size={24} />
        <span>Meu perfil</span>
      </S.Link>
    </Link>

    <Link href="/profile/docs" passHref>
      <S.Link isActive={activeLink === '/profile/docs'} title="Meus documentos">
        <DocumentText size={24} />
        <span>Meus documentos</span>
      </S.Link>
    </Link>

    <Link href="/profile/models" passHref>
      <S.Link isActive={activeLink === '/profile/modelos'} title="Meus modelos">
        <Documents size={24} />
        <span>Meus modelos</span>
      </S.Link>
    </Link>

    <Link href="/logout" passHref>
      <S.Link>
        <ExitToApp size={24} />
        <span>Sair</span>
      </S.Link>
    </Link>
  </S.Nav>
)

export default ProfileMenu
