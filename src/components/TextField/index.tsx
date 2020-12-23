import { InputHTMLAttributes, useState } from 'react'
import * as Styles from './styles'

export type TextFieldProps = {
  onInput?: (value: string) => void
  label?: string
  initialValue?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  label,
  initialValue = '',
  name,
  icon,
  iconPosition = 'left',
  disabled = false,
  error,
  onInput,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInput && onInput(newValue)
  }

  return (
    <Styles.Wrapper disabled={disabled} error={!!error}>
      {!!label && <Styles.Label htmlFor={name}>{label}</Styles.Label>}
      <Styles.InputWrapper>
        {!!icon && (
          <Styles.Icon iconPosition={iconPosition}>{icon}</Styles.Icon>
        )}
        <Styles.Input
          onChange={onChange}
          value={value}
          type="text"
          iconPosition={iconPosition}
          disabled={disabled}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </Styles.InputWrapper>
      {!!error && <Styles.Error>{error}</Styles.Error>}
    </Styles.Wrapper>
  )
}
export default TextField
