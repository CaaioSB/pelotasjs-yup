import React from 'react'
import styled from 'styled-components'
import { space, layout } from 'styled-system'

const StyledWrapper = styled.div`
  width: 250px;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${space}
  ${layout}
`

const Wrapper = (props) => {
  return <StyledWrapper {...props} />
}

export default Wrapper
