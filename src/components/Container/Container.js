import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = ({ children, props }) => {
  return <StyledContainer {...props}>{children}</StyledContainer>
}

export default Container

Container.propTypes = {
  children: PropTypes.node,
  props: PropTypes.node,
}

Container.defaultProps = {
  children: <></>,
  props: null,
}
