import React from 'react'
import styled from 'styled-components'

const Small = ({children}) => <Wrapper><StyledSmall>{children}</StyledSmall></Wrapper>

const Wrapper = styled.div`
  text-align: center;
`

const StyledSmall = styled.small`
  padding: 3px 0;

  font-size: 8pt;
  color: #6c757d;
`

export default Small
