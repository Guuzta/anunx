'use client'

import { useState } from "react"

import { Formik } from "formik"

import { useRouter } from "next/navigation"

import {
    Alert,
    Container,
    Typography,
    Box,
    FormControl,
    Input,
    InputLabel,
    FormHelperText,
    Button,
    CircularProgress
} from "@mui/material"

import theme from '../../../theme/theme'

import { initialValues, validationSchema } from './formValues'

import useToasty from '../../../contexts/Toasty' 
import { signIn, useSession } from "next-auth/react"

const Signin = () => {

    const router = useRouter()

    const { setToasty } = useToasty()

    const session = useSession()

    const [error, setError] = useState("")

    const handleFormSubmit = async (values) => {
        
        const result = await signIn('credentials', {
            redirect: false,
            email: values.email,
            password: values.password,
        })

        if (result.error) {
            setError('Credênciais Inválidas! Tente novamente.')
            return
        }

        router.replace('/user/publish')
    }

    return (
        <>
            <Container maxWidth='sm' sx={{ marginBottom: '30px' }}>
                <Typography
                    component='h1'
                    variant='h3'
                    align='center'
                    sx={{
                        fontWeight: '300'
                    }}
                >
                    Entre na sua conta
                </Typography>
            </Container>

            <Container maxWidth='md'>
                <Box sx={{ backgroundColor: theme.palette.background.paper, padding: 4 }}>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleFormSubmit}
                    >
                        {
                            ({
                                touched,
                                values,
                                errors,
                                handleChange,
                                handleSubmit,
                                isSubmitting,
                            }) => {
                                return (
                                    <form onSubmit={handleSubmit}>

                                        {
                                            error 
                                            && 
                                            <Alert sx={{ padding: 0, marginBottom: '10px' }} severity="error">{error}</Alert>
                                        }

                                        <FormControl fullWidth error={errors.email && touched.email}>
                                            <InputLabel>Email</InputLabel>
                                            <Input
                                                name='email'
                                                type='email'
                                                onChange={handleChange}
                                                value={values.email}
                                            />
                                            <FormHelperText>
                                                {errors.email && touched.email ? errors.email : null}
                                            </FormHelperText>
                                        </FormControl>
                                        <br /><br />

                                        <FormControl fullWidth error={errors.password && touched.password}>
                                            <InputLabel>Senha</InputLabel>
                                            <Input
                                                name='password'
                                                type='password'
                                                onChange={handleChange}
                                                value={values.password}
                                            />
                                            <FormHelperText>
                                                {errors.password && touched.password ? errors.password : null}
                                            </FormHelperText>
                                        </FormControl>
                                        <br /><br />

                                        <Box sx={{ marginTop: '30px', marginBottom: '10px' }}>
                                            {
                                                isSubmitting
                                                ? (
                                                    <CircularProgress sx={{ display: 'block', margin: '10px auto' }}/>
                                                ) : (
                                                        <Button fullWidth type='submit' variant='contained'>
                                                            ENTRAR
                                                        </Button>
                                                )
                                            }

                                        </Box>

                                    </form>
                                )
                            }
                        }
                    </Formik>
                </Box>
            </Container>
        </>
    )
}

export default Signin