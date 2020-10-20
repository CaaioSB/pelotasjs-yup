import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'
import Wrapper from '../Wrapper/Wrapper'

const StyledLink = styled(RouterLink)`
  color: #007bff;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    cursor: pointer;
    color: #0052ab;
  }

  ${space}
`

const Hyperlink = (props) => (
  <Wrapper {...props}>
    <StyledLink to={props.to}>{props.value}</StyledLink>
  </Wrapper>
)

export default Hyperlink

Hyperlink.protoType = {
  to: PropTypes.string,
  value: PropTypes.string,
  props: PropTypes.node,
}
