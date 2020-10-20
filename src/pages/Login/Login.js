import React from 'react'

import Button from '../../components/Button'
import Card from '../../components/Card'
import Container from '../../components/Container'
import Wrapper from '../../components/Wrapper'
import Input from '../../components/Input'
import Link from '../../components/Link'

const Login = () => {
  return (
    <Container>
      <Card title="Login">
        <Wrapper>
          <Input m={1} type="email" placeholder="Digite seu e-mail" />
          <Input m={1} type="password" placeholder="Digite sua senha" />
          <Button m={3} type="submit" value="Entrar" />
        </Wrapper>
        <Link href="/" value="Esqueci minha senha" />
      </Card>
    </Container>
  )
}

export default Login
