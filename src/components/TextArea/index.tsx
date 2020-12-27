import { TextareaHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type TextAreaProps = {
  onInput?: (value: string) => void
  toolTip?: React.ReactNode
  label?: string
  initialValue?: string
  disabled?: boolean
  error?: string
} & TextareaHTMLAttributes<HTMLTextAreaElement>

const TextArea = ({
  label,
  initialValue = '',
  name,
  toolTip,
  disabled = false,
  error,
  onInput,
  ...props
}: TextAreaProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInput && onInput(newValue)
  }

  return (
    <S.Wrapper disabled={disabled} error={!!error}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.TextAreaWrapper>
        {!!toolTip && <S.Icon>{toolTip}</S.Icon>}
        <S.TextArea
          onChange={onChange}
          value={value}
          disabled={disabled}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </S.TextAreaWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}
export default TextArea
