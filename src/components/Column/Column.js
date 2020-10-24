import React from 'react'
import styled from 'styled-components'

import Row from '../Row'

const ColumnComponent = props => <Row flexDirection='column' {...props} />

export const ColumnDesktop = styled(ColumnComponent)`
  display: none;
`

export const ColumnMobile = styled(ColumnComponent)`
  display: flex;
`

export default ColumnComponent
