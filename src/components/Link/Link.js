import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'

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

const Link = ({ to, value }) => {
  return <StyledLink to={to}>{value}</StyledLink>
}

export default Link

Link.prototype = {
  to: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}
