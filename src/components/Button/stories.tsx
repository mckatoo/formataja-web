import { Story, Meta } from '@storybook/react/types-6-0'
import { DocumentAdd } from '@styled-icons/heroicons-outline/DocumentAdd'

import Button from '.'

export default {
  title: 'Button',
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  },
  component: Button
} as Meta

export const Basic: Story = (args) => <Button {...args} />

Basic.args = {
  children: 'Save'
}

export const withIcon: Story = (args) => <Button {...args} />

withIcon.args = {
  size: 'small',
  children: 'Save',
  icon: <DocumentAdd />
}

export const asLink: Story = (args) => <Button {...args} />

asLink.args = {
  size: 'large',
  children: 'Save',
  as: 'a',
  href: '/link'
}
