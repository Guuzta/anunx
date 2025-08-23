import * as yup from 'yup'

const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const validationSchema = yup.object({
    name: yup.string()
        .required('Campo obrigatório!'),
    email: yup.string()
        .email('Digite um e-mail válido!')
        .required('Campo obrigatório!'),
    password: yup.string()
        .min(6, 'Sua senha precisa ser maior! (Min: 6 caracteres)')
        .required('Campo obrigatório!'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'As senhas precisam ser iguais!')
        .required('Campo obrigatório!')
})

export {
    initialValues,
    validationSchema
}