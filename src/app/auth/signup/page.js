'use client'

import { Formik } from "formik"

import {
    Container,
    Typography,
    Box,
    FormControl,
    Input,
    InputLabel,
    FormHelperText,
    Button
} from "@mui/material"

import theme from '../../../theme/theme'

import { initialValues, validationSchema } from './formValues'

const Signup = () => {
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
                    Crie usa Conta
                </Typography>
                <Typography
                    component='h2'
                    variant='h6'
                    align='center'
                    sx={{
                        fontWeight: '300'
                    }}
                >
                    E anuncie para todo o Brasil!
                </Typography>
            </Container>

            <Container maxWidth='md'>
                <Box sx={{ backgroundColor: theme.palette.background.paper, padding: 4 }}>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            console.log('ok', values)
                        }}
                    >
                        {
                            ({
                                touched,
                                values,
                                errors,
                                handleChange,
                                handleSubmit,
                            }) => {
                                return (
                                    <form onSubmit={handleSubmit}>
                                        <FormControl fullWidth error={errors.name && touched.name}>
                                            <InputLabel>Nome</InputLabel>
                                            <Input
                                                name='name'
                                                onChange={handleChange}
                                                value={values.name}
                                            />
                                            <FormHelperText>
                                                {errors.name && touched.name ? errors.name : null}
                                            </FormHelperText>
                                        </FormControl>
                                        <br /><br />

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

                                        <FormControl fullWidth error={errors.confirmPassword && touched.confirmPassword}>
                                            <InputLabel>Confirmação de Senha</InputLabel>
                                            <Input
                                                name='confirmPassword'
                                                type='password'
                                                onChange={handleChange}
                                                value={values.confirmPassword}
                                            />
                                            <FormHelperText>
                                                {errors.confirmPassword && touched.confirmPassword ? errors.confirmPassword : null}
                                            </FormHelperText>
                                        </FormControl>
                                        <br /><br />

                                        <Box sx={{ marginTop: '30px', marginBottom: '10px' }}>
                                            <Button fullWidth type='submit' variant='contained'>
                                                CADASTRAR
                                            </Button>
                                        </Box>

                                        <Typography
                                            component='span'
                                            variant='subtitle2'
                                        >
                                            Já tem uma conta? Entre aqui
                                        </Typography>
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

export default Signup