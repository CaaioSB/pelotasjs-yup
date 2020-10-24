import React from 'react'
import { Typography } from '@naveteam/saturn'
import styled from 'styled-components'

const Toast = ({ data }) => (
  <StyledToast>
    <StyledTypography>{data}</StyledTypography>
  </StyledToast>
)

const StyledToast = styled.div`
  min-height: 50px;
  padding: 10px;
  margin-bottom: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  background-color: #004daa;
`

const StyledTypography = styled(Typography)`
  white-space: pre-wrap;
`

export default Toast
