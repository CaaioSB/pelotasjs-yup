import React, { useState } from 'react'
import { TextField, Button } from '@naveteam/saturn'
import { useForm } from 'react-hook-form'

import Card from '../../components/Card'
import Container from '../../components/Container'
import Wrapper from '../../components/Wrapper'
import LinkComponent from '../../components/Hyperlink'
import Column from '../../components/Column'
import Toast from '../../components/Toast'

import { loginSchema } from '../../schemas/loginSchema'

const Login = () => {
  const [data, setData] = useState({})

  const { register, handleSubmit, errors, formState } = useForm({
    validationSchema: loginSchema,
  })

  const onSubmit = (data) => {
    setData(data)
  }

  return (
    <Container>
      <Column>
        {formState.isSubmitted && (
          <Toast data={JSON.stringify(data, null, 4)} />
        )}
        <Card title="Login">
          <Wrapper>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                ref={register}
                width={1}
                mb={15}
                name="email"
                type="email"
                label="E-mail"
                error={!!errors.email}
                message={errors.email?.message}
                placeholder="example@example.com"
                color="gray.800"
              />
              <TextField
                ref={register}
                width={1}
                mb={15}
                name="password"
                label="Senha"
                error={!!errors.password}
                message={errors.password?.message}
                placeholder="Senha"
                color="gray.800"
              />
              <Button>Entrar</Button>
            </form>
          </Wrapper>
          <LinkComponent
            fontSize={1}
            my={3}
            to="/forgotpassword"
            value="Esqueci minha senha"
          />
          <LinkComponent mt={2} to="/signup" value="Cadastrar-se" />
        </Card>
      </Column>
    </Container>
  )
}

export default Login
