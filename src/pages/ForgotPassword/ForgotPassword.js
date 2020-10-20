import React from 'react'
import styled from 'styled-components'

import Container from '../../components/Container'
import Card from '../../components/Card'
import Wrapper from '../../components/Wrapper'
import Input from '../../components/Input'
import Button from '../../components/Button'
import LinkComponent from '../../components/Hyperlink'

const SmallLabel = styled.small`
  padding: 3px 0;

  font-size: 8pt;
  color: #6c757d;
`

const ForgotPassword = () => {
  return (
    <Container>
      <Card title="Esqueci minha senha">
        <Wrapper>
          <Input placeholder="E-mail cadastrado" />
          <SmallLabel>╶╴OU╶╴</SmallLabel>
          <Input placeholder="CPF cadastrado" />
          <Button my={3} value="Recuperar" />
        </Wrapper>
        <LinkComponent to="/" value="Realizar login" />
      </Card>
    </Container>
  )
}

export default ForgotPassword
