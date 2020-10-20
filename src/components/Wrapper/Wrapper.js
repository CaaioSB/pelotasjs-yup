import React from 'react'
import styled from 'styled-components'
import { space, layout, flexbox, typography } from 'styled-system'

const StyledWrapper = styled.div`
  width: 250px;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${space}
  ${layout}
  ${flexbox}
  ${typography}
`

const Wrapper = (props) => {
  return <StyledWrapper {...props} />
}

export default Wrapper
