import React from 'react'
import styled from 'styled-components'
import {layout} from 'styled-system'
import PropTypes from 'prop-types'

const StyledCard = styled.div`
  width: 400px;
  height: auto;
  padding: 20px 10px;

  background: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: height 0.2s;

  box-shadow: 11px 13px 15px -13px rgba(0, 0, 0, 0.32);

  ${layout}
`

const HeaderTitle = styled.h3`
  font-size: 18pt;
  font-weight: 800;
  width: 100%;
  margin-bottom: 20px;
  text-align: center;
`

const Card = ({ children, title, height, props }) => {
  return (
    <StyledCard height={height} {...props}>
      <HeaderTitle>{title}</HeaderTitle>
      {children}
    </StyledCard>
  )
}

export default Card

Card.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  props: PropTypes.node,
}

Card.defaultProps = {
  children: <></>,
  props: null,
}
