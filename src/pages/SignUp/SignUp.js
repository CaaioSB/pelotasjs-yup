import React from 'react'
import Container from '../../components/Container/Container'
import Card from '../../components/Card/Card'
import Wrapper from '../../components/Wrapper/Wrapper'
import Input from '../../components/Input'
import Button from '../../components/Button/Button'
import LinkComponent from '../../components/Hyperlink'

const SignUp = () => {
  return (
    <Container>
      <Card title="Cadastrar">
        <Wrapper>
          <Input placeholder="E-mail" />
          <Input placeholder="Confirmar e-mail" />
          <Input type="text" placeholder="CPF" />
          <Input placeholder="Senha" />
          <Button mt={3} value="Cadastrar" />
        </Wrapper>
        <LinkComponent mt={3} to="/" value="Já sou cadastrado" />
      </Card>
    </Container>
  )
}

export default SignUp
