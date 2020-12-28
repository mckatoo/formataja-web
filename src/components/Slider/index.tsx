import { forwardRef } from 'react'
import SlickSlider, { Settings } from 'react-slick'

import * as Styles from './styles'

export type SliderSettings = Settings

export type SliderProps = {
  children: React.ReactNode
  settings: SliderSettings
}

const Slider: React.ForwardRefRenderFunction<SlickSlider, SliderProps> = (
  { children, settings },
  ref
) => (
  <Styles.Wrapper>
    <SlickSlider ref={ref} {...settings}>
      {children}
    </SlickSlider>
  </Styles.Wrapper>
)

export default forwardRef(Slider)
