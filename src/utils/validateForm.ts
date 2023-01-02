import * as yup from 'yup'

export const LoginValidate = yup.object().shape({
  username: yup.string().trim().required('El Username es Requerido'),
  password: yup
    .string()
    .trim()
    .required('El Password es Requerido')
    .min(4, 'el mínimo debe ser 4 caracteres')
    .max(20, 'el máximo debe ser 20 caracteres'),
})
