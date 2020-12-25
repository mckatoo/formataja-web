import { Meta, Story } from '@storybook/react/types-6-0'
import TextArea, { TextAreaProps } from '.'

export default {
  title: 'Form/TextArea',
  component: TextArea,
  args: {
    label: 'Itens Textuais',
    name: 'itensTextuais',
    id: 'ItensTextuais',
    initialValue: '',
    placeholder: 'Um placeholder qualquer',
    error: ''
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: { type: '' }
  }
} as Meta

export const Default: Story<TextAreaProps> = (args) => (
  <div style={{ maxWidth: 600, padding: 15 }}>
    <TextArea {...args} />
  </div>
)

export const WithError: Story<TextAreaProps> = (args) => (
  <div style={{ maxWidth: 600, padding: 15 }}>
    <TextArea {...args} />
  </div>
)

WithError.args = {
  error: 'Ops...something is wrong!!!'
}
