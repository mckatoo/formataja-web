import { Story, Meta } from '@storybook/react/types-6-0'
import TextArea from 'components/TextArea'
import TextField from 'components/TextField'

import ToolTip, { ToolTipProps } from '.'

export default {
  title: 'ToolTip',
  component: ToolTip,
  args: {
    text: 'Texto de ajuda.'
  }
} as Meta

export const Basic: Story<ToolTipProps> = (args) => <ToolTip {...args} />

export const OnTextField: Story<ToolTipProps> = (args) => (
  <>
    <TextField icon={<ToolTip {...args} />} iconPosition="right" width="100%" />
  </>
)

export const OnTextArea: Story<ToolTipProps> = (args) => (
  <>
    <TextArea toolTip={<ToolTip {...args} />} />
  </>
)
