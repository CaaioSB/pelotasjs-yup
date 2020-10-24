import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { TextField, Button } from '@naveteam/saturn'

import Container from '../../components/Container'
import Card from '../../components/Card'
import Column from '../../components/Column'
import Wrapper from '../../components/Wrapper'
import LinkComponent from '../../components/Hyperlink'
import Small from '../../components/Small'
import Toast from '../../components/Toast'

import { forgotSchema } from '../../schemas/forgotSchema'

const ForgotPassword = () => {
  const [data, setData] = useState({})

  const { register, handleSubmit, errors, formState } = useForm({
    validationSchema: forgotSchema,
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
        <Card title="Esqueci minha senha">
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
              <Small>╶╴OU╶╴</Small>
              <TextField
                ref={register}
                width={1}
                mb={15}
                name="cpf"
                type="text"
                label="CPF"
                error={!!errors.cpf}
                message={errors.cpf?.message}
                placeholder="___.___.___-__"
                color="gray.800"
              />
              <Button my={3}>Recuperar</Button>
            </form>
          </Wrapper>
          <LinkComponent mt={3} to="/" value="Realizar login" />
        </Card>
      </Column>
    </Container>
  )
}

export default ForgotPassword
