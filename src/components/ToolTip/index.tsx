import { Help } from '@styled-icons/material-outlined'
import React, { useRef, useState } from 'react'
import { usePopper } from 'react-popper'
import * as S from './styles'

export type ToolTipProps = {
  text: string
}

export const ToolTip = ({ text }: ToolTipProps) => {
  const [showPopper, setShowPopper] = useState(false)

  const buttonRef = useRef(null)
  const popperRef = useRef(null)
  const [arrowRef, setArrowRef] = useState<HTMLDivElement | null>(null)

  const { styles, attributes } = usePopper(
    buttonRef.current,
    popperRef.current,
    {
      modifiers: [
        {
          name: 'arrow',
          options: {
            element: arrowRef
          }
        },
        {
          name: 'offset',
          options: {
            offset: [0, 10]
          }
        }
      ]
    }
  )

  return (
    <>
      <Help ref={buttonRef} onMouseOver={() => setShowPopper(!showPopper)} />
      {showPopper ? (
        <S.PopperContainer
          ref={popperRef}
          style={styles.popper}
          {...attributes.popper}
        >
          <div ref={setArrowRef} style={styles.arrow} id="arrow" />
          <p>{text}</p>
        </S.PopperContainer>
      ) : null}
    </>
  )
}

export default ToolTip
