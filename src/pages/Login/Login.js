import React from 'react'

import Button from '../../components/Button'
import Card from '../../components/Card'
import Container from '../../components/Container'
import Wrapper from '../../components/Wrapper'
import Input from '../../components/Input'
import LinkComponent from '../../components/Hyperlink'

const Login = () => {
  return (
    <Container>
      <Card title="Login">
        <Wrapper>
          <Input type="email" placeholder="Digite seu e-mail" />
          <Input type="password" placeholder="Digite sua senha" />
          <Button my={3} type="submit" value="Entrar" />
        </Wrapper>
        <LinkComponent
          fontSize={1}
          mb={3}
          to="/forgotpassword"
          value="Esqueci minha senha"
        />
        <LinkComponent mt={3} to="/signup" value="Cadastrar-se" />
      </Card>
    </Container>
  )
}

export default Login
