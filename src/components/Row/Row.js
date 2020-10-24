import styled from 'styled-components'
import { space, layout, color, flexbox, border, shadow, position } from 'styled-system'

const RowComponent = styled.div(
  {
    display: 'flex'
  },
  flexbox,
  space,
  layout,
  color,
  border,
  shadow,
  position
)

export const RowDesktop = styled(RowComponent)`
  display: none;
`

export const RowMobile = styled(RowComponent)`
  display: flex;
`

export default RowComponent
