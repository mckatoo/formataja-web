import { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef } from 'react'
import * as Styles from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  minimal?: boolean
  icon?: JSX.Element
  as?: React.ElementType
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<
  Styles.WrapperProps,
  ButtonProps
> = (
  {
    children,
    size = 'medium',
    fullWidth = false,
    minimal = false,
    icon,
    ...props
  },
  ref
) => (
  <Styles.Wrapper
    size={size}
    fullWidth={fullWidth}
    minimal={minimal}
    hasIcon={!!icon}
    ref={ref}
    {...props}
  >
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </Styles.Wrapper>
)

export default forwardRef(Button)
