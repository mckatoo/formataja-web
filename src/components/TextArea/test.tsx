import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ToolTip from 'components/ToolTip'
import React from 'react'
import { renderWithTheme } from 'utils/tests/helpers'
import TextArea from '.'

describe('<TextArea />', () => {
  it('Renders with Label', () => {
    renderWithTheme(<TextArea label="Label" name="Label" />)

    expect(screen.getByLabelText('Label')).toBeInTheDocument()
  })

  it('Renders without Label', () => {
    renderWithTheme(<TextArea />)

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })

  it('Renders with placeholder', () => {
    renderWithTheme(<TextArea placeholder="hey you" />)

    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument()
  })

  it('Renders with ToolTip', () => {
    renderWithTheme(
      <TextArea
        data-testid="iconTest"
        toolTip={<ToolTip text="Esta é uma dica." />}
      />
    )

    expect(screen.getByTestId('iconTest').previousSibling).toHaveStyle({
      order: 1
    })
  })

  it('Does not changes its value when disabled', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <TextArea onInput={onInput} label="TextArea" name="TextArea" disabled />
    )

    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()

    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).not.toHaveValue(text)
    })

    expect(onInput).not.toHaveBeenCalled()
  })

  it('Render with error', () => {
    renderWithTheme(
      <TextArea label="TextArea" name="TextArea" error="Error message" />
    )

    const error = screen.getByText('Error message')
    expect(error).toBeInTheDocument()
  })

  it('Changes its value when typing', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <TextArea
        onInput={onInput}
        label="TextArea"
        name="TextArea"
        id="TextArea"
      />
    )

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })
    expect(onInput).toHaveBeenCalledWith(text)
  })

  it('Is accessible by tab', () => {
    renderWithTheme(<TextArea label="TextArea" name="TextArea" />)

    const input = screen.getByLabelText('TextArea')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).toHaveFocus()
  })

  it('Is not accessible by tab when disabled', () => {
    renderWithTheme(<TextArea label="TextArea" name="TextArea" disabled />)

    const input = screen.getByLabelText('TextArea')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).not.toHaveFocus()
  })
})
