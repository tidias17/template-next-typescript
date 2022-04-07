import { Container } from './styled'

type TypographyProps = {
  type: string
  children: any
  href?: string
}

const Typography = ({ type, children, href }: TypographyProps) =>
  type === 'link' ? (
    <Container type={type} href={href}>
      {children}
    </Container>
  ) : (
    <Container type={type}>{children}</Container>
  )

export default Typography
