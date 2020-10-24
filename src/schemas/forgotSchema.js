import * as yup from 'yup'

yup.setLocale({
  mixed: {
    required: '${path} inválido',
  },
})

export const forgotSchema = yup.object().shape(
  {
    email: yup
      .string()
      .email('Insira um e-mail válido')
      .when('cpf', {
        is: (cpf) => !cpf || cpf.length === 0,
        then: yup.string().label('E-mail').email().required(),
        otherwise: yup.string(),
      }),
    cpf: yup.string().when('email', {
      is: (email) => !email || email.length === 0,
      then: yup.string().label('CPF').required(),
      otherwise: yup.string(),
    }),
  },
  [['email', 'cpf']]
)
