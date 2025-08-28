import * as yup from 'yup'

const initialValues = {
    email: '',
    password: '',
}

const validationSchema = yup.object({
    email: yup.string()
        .email('Digite um e-mail válido!')
        .required('Campo obrigatório!'),
    password: yup.string()
        .min(6, 'Sua senha precisa ser maior! (Min: 6 caracteres)')
        .required('Campo obrigatório!'),
})

export {
    initialValues,
    validationSchema
}