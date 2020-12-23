import { Story, Meta } from '@storybook/react/types-6-0'

import ProfileMenu, { ProfileMenuProps } from '.'

export default {
  title: 'ProfileMenu',
  component: ProfileMenu,
  parameters: {
    backgrounds: {
      default: 'ikatoo-dark'
    }
  }
} as Meta

export const Basic: Story<ProfileMenuProps> = (args) => (
  <ProfileMenu {...args} />
)
