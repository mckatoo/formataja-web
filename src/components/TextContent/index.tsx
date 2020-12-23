import Heading from 'components/Heading'
import parser from 'react-html-parser'
import * as Styles from './styles'

export type TextContentProps = {
  title?: string
  content: string
}

const TextContent = ({ title, content }: TextContentProps) => (
  <Styles.Wrapper>
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}

    <div>{parser(content)}</div>
  </Styles.Wrapper>
)

export default TextContent
