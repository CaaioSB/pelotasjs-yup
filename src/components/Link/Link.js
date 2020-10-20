import React from 'react'
import styled from 'styled-components'

const StyledLink = styled.a`
  color: #007bff;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    cursor: pointer;
    color: #0052ab;
  }
`

const Link = ({ value, props }) => {
  return <StyledLink {...props}>{value}</StyledLink>
}

export default Link
