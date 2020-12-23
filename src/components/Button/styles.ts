import { darken } from 'polished'
import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

export type WrapperProps = { hasIcon: boolean } & Pick<
  ButtonProps,
  'size' | 'fullWidth' | 'minimal'
>

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  minimal: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.colors.primary};

    &:hover {
      color: ${darken(0.1, theme.colors.primary)};
    }
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;
      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, minimal, hasIcon, disabled }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #f01320 0%, #ff626b 50%);
    color: ${theme.colors.white};
    cursor: pointer;
    border: 0;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;

    &:hover {
      background: ${minimal
        ? 'none'
        : `linear-gradient(180deg, #D2121E 0%, #E27B81 50%)`};
    }

    ${!!size && wrapperModifiers[size](theme)}
    ${fullWidth && wrapperModifiers.fullWidth()}
    ${minimal && wrapperModifiers.minimal(theme)}
    ${!!hasIcon && wrapperModifiers.withIcon(theme)}
    ${disabled && wrapperModifiers.disabled()}
  `}
`
