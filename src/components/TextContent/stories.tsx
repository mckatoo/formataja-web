import { Meta, Story } from '@storybook/react/types-6-0'
import TextContent, { TextContentProps } from '.'
import mock from './mock'

export default {
  title: 'Documentos/TextContent',
  component: TextContent,
  args: mock,
  parameters: {
    backgrounds: {
      default: 'ikatoo-dark'
    }
  }
} as Meta

export const Basic: Story<TextContentProps> = (args) => (
  <TextContent {...args} />
)
