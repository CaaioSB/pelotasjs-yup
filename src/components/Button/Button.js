import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'
import PropTypes from 'prop-types'

const StyledButton = styled.button`
  width: 100%;
  height: 40px;

  color: white;
  background: #007bff;

  border-radius: 50px;
  border: 0;
  outline: none;
  transition: background 0.2s;

  &:hover {
    cursor: pointer;
    background: #0052ab;
  }

  ${space}
`

const Button = ({ value, ...props }) => (
  <StyledButton {...props}>{value}</StyledButton>
)

export default Button

Button.propTypes = {
  value: PropTypes.string.isRequired,
}
