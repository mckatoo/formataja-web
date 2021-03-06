import styled, { css, DefaultTheme } from 'styled-components'
import { TextAreaProps } from '.'

type WrapperProps = Pick<TextAreaProps, 'disabled'> & { error?: boolean }

const wrapperModifiers = {
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${TextArea} {
      cursor: not-allowed;
      color: ${theme.colors.gray};

      &::placeholder {
        color: currentColor;
      }
    }
  `,
  error: (theme: DefaultTheme) => css`
    ${TextAreaWrapper} {
      border-color: ${theme.colors.red};
    }

    ${Label} {
      color: ${theme.colors.red};
    }
  `
}

export const TextAreaWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    padding: ${theme.spacings.xxsmall};
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray};
    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`

export const TextArea = styled.textarea<TextAreaProps>`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
    height: 140pt;
    white-space: nowrap;
    margin-right: -24px;
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`

export const Icon = styled.div`
  ${({ theme }) => css`
    align-self: start;
    position: relative;
    top: 0;
    right: 0;
    color: ${theme.colors.gray};
    order: 1;
    & > svg {
      width: 2.2rem;
    }
  `}
`

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, disabled, error }) => css`
    ${error && wrapperModifiers.error(theme)}
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`

export const Error = styled.span<WrapperProps>`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};
  `}
`
export const Optional = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    text-align: right;
    text-transform: uppercase;
    float: right;
  `}
`
