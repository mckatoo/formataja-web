import { Story, Meta } from '@storybook/react/types-6-0'

import Empty, { EmptyProps } from '.'

export default {
  title: 'Empty',
  component: Empty,
  parameters: {
    backgrounds: {
      default: 'ikatoo-dark'
    }
  }
} as Meta

export const Basic: Story<EmptyProps> = (args) => <Empty {...args} />
Basic.args = {
  title: 'alsdjflasdkfjsdfj',
  description: 'sldfj slkdfj sdklfj sdl'
}

export const WithLink: Story<EmptyProps> = (args) => <Empty {...args} />
WithLink.args = {
  title: 'alsdjflasdkfjsdfj',
  description: 'sldfj slkdfj sdklfj sdl',
  link: {
    src: '/',
    label: 'Go back to store.'
  }
}
