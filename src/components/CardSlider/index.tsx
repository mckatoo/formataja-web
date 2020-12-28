import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'

import Card, { CardProps } from 'components/Card'
import Slider, { SliderSettings } from 'components/Slider'
import * as Styles from './styles'

export type CardSliderProps = {
  items: CardProps[]
  color?: 'black' | 'white'
}

const settings: SliderSettings = {
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  nextArrow: <ArrowRight aria-label="next cards" />,
  prevArrow: <ArrowLeft aria-label="previous cards" />,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1
      }
    }
  ]
}

const CardSlider = ({ items, color }: CardSliderProps) => (
  <Styles.Wrapper color={color}>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <Card key={index} {...item}></Card>
      ))}
    </Slider>
  </Styles.Wrapper>
)

export default CardSlider
