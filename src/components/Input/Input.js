import React from 'react'
import styled from 'styled-components'
import { space, layout } from 'styled-system'

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 15px;
  box-sizing: border-box;

  border: 1px solid #6c757d;
  border-radius: 50px;
  outline: none;
  transition: border 0.2s;

  &:focus {
    border: 1px solid #0052ab;
  }

  ${space}
  ${layout}
`

const Input = (props) => {
  return <StyledInput my={1} {...props} />
}

export default Input
