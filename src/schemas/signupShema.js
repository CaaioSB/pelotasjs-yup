import * as yup from 'yup'

yup.setLocale({
  mixed: {
    required: 'Campo é obrigatório',
  },
})

export const signupSchema = yup.object().shape({
  email: yup.string().email('Insira um e-mail válido').required(),
  age: yup.number().required(),
  rg: yup.string().test('registro-geral', 'RG inválido', (value) => {
    const registroGeral = value.split('')

    if (registroGeral.length !== 9) return false

    registroGeral.forEach(
      (number, index) =>
        (registroGeral[index] =
          index === 8 ? number * 100 : number * (index + 2))
    )

    return registroGeral.reduce((a, b) => a + b, 0) % 11 === 0
  }),
  password: yup
    .string()
    .matches(
      '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})',
      'A senha deve ser forte.'
    ),
})
