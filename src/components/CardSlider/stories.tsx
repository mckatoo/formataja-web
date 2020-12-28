import { Story, Meta } from '@storybook/react/types-6-0'
import { CardProps } from 'components/Card'

import CardSlider from '.'

import items from './mock'

export default {
  title: 'CardSlider',
  component: CardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'ikatoo-dark'
    }
  }
} as Meta

export const Basic: Story<CardProps[]> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <CardSlider items={args} {...args} />
  </div>
)
