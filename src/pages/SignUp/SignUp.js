import React, { useState } from 'react'
import { TextField, Button } from '@naveteam/saturn'
import { useForm } from 'react-hook-form'

import Container from '../../components/Container/Container'
import Card from '../../components/Card/Card'
import Wrapper from '../../components/Wrapper/Wrapper'
import LinkComponent from '../../components/Hyperlink'
import Column from '../../components/Column'
import Toast from '../../components/Toast'

import { signupSchema } from '../../schemas/signupShema'

const SignUp = () => {
  const [data, setData] = useState({})

  const { register, handleSubmit, errors, formState } = useForm({
    validationSchema: signupSchema,
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
        <Card title="Cadastrar">
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
                name="age"
                type="number"
                label="Idade"
                error={!!errors.age}
                message={errors.age?.message}
                color="gray.800"
              />
              <TextField
                ref={register}
                width={1}
                mb={15}
                name="rg"
                type="text"
                label="Registro Geral"
                error={!!errors.rg}
                message={errors.rg?.message}
                placeholder="__.___.___-_"
                color="gray.800"
              />
              <TextField
                ref={register}
                width={1}
                mb={15}
                name="password"
                type="password"
                label="Senha"
                error={!!errors.password}
                message={errors.password?.message}
                placeholder="Senha"
                color="gray.800"
              />
              <Button mt={3}>Cadastrar</Button>
            </form>
          </Wrapper>
          <LinkComponent mt={3} to="/" value="Já sou cadastrado" />
        </Card>
      </Column>
    </Container>
  )
}

export default SignUp
