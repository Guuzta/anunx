import * as yup from 'yup'

const initialValues = {
    title: '',
    category: '',
    description: '',
    price: '',
    email: '',
    name: '',
    phone: '',
    files: [],
}

const validationSchema = yup.object({
    title: yup.string()
        .min(6, 'Escreva um título maior! (Min: 6 caracteres)')
        .max(20, 'Escreva um título menor! (Max: 20 caracteres)')
        .required('Campo obrigatório!'),

    category: yup.string().required('Campo obrigatório!'),
    description: yup.string()
        .min(50, 'Escreva uma descrição maior! (Min: 50 caracteres)')
        .required('Campo obrigatório!'),
    price: yup.number().required('Campo obrigatório!'),
    email: yup.string().email('Digite um e-mail válido').required('Campo obrigatório!'),
    name: yup.string().required('Campo obrigatório!'),
    phone: yup.number('Digite um telefone válido!').typeError('Precisa ser um número!').required('Campo obrigatório!'),
    files: yup.array().min(1, 'Envie pelo menos uma foto!').required('Campo obrigatório!')
})

export {
    initialValues,
    validationSchema
}