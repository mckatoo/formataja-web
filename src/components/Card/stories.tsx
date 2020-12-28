import { Story, Meta } from '@storybook/react/types-6-0'

import Card, { CardProps } from '.'

export default {
  title: 'Card',
  component: Card,
  args: {
    title: 'A importância da IA em nossas vidas.',
    college: 'Uniesi',
    img: 'https://source.unsplash.com/user/willianjusten/300x140'
  },
  argTypes: {
    onFavorite: { action: 'clicked' },
    ribbon: {
      type: 'string'
    }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Basic: Story<CardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <Card {...args} />
  </div>
)

export const WithRibbon: Story<CardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <Card {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: 'NOVO',
  ribbonColor: 'primary',
  ribbonSize: 'small'
}
