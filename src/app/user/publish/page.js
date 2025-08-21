'use client'

import { useState } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'

import {
    Box,
    Button,
    Container,
    Typography,
    Select,
    MenuItem,
    IconButton,
    FormControl,
    FormHelperText,
    InputLabel,
    InputAdornment,
    Input,
} from "@mui/material"

import { DeleteForever } from "@mui/icons-material"

import theme from '../../../theme/theme'

import { useDropzone } from "react-dropzone"

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

const Publish = () => {

    return (
        <>

            <Formik
                initialValues={{
                    title: '',
                    category: '',
                    description: '',
                    price: '',
                    email: '',
                    name: '',
                    phone: '',
                    files: [],
                }}
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
                        setFieldValue
                    }) => {


                        const { getRootProps, getInputProps } = useDropzone({
                            accept: 'image/*',
                            onDrop: (acceptedFile) => {
                                const newFiles = acceptedFile.map(file => {
                                    return Object.assign(file, {
                                        preview: URL.createObjectURL(file)
                                    })
                                })

                                setFieldValue('files', [
                                    ...values.files,
                                    ...newFiles
                                ])
                            }
                        })

                        const handleRemoveFile = fileName => {
                            const newFileState = values.files.filter(file => file.name !== fileName)
                            setFieldValue('files', newFileState)
                        }

                        return (
                            <form onSubmit={handleSubmit}>
                                <Container maxWidth='sm' sx={{ marginBottom: '30px' }}>
                                    <Typography
                                        component='h1'
                                        variant='h3'
                                        align='center'
                                        sx={{
                                            fontWeight: '300',
                                        }}
                                    >
                                        Publicar Anúncio
                                    </Typography>
                                    <Typography
                                        component='h2'
                                        variant='h6'
                                        align='center'
                                        sx={{
                                            fontWeight: '300',
                                        }}
                                    >
                                        Quanto mais detalhado, melhor!
                                    </Typography>
                                </Container>

                                <Container maxWidth='md'>
                                    <Box sx={{ backgroundColor: theme.palette.background.paper, padding: 4 }}>

                                        <FormControl fullWidth error={errors.title && touched.title}>
                                            <InputLabel>Título do Anúncio</InputLabel>
                                            <Input
                                                name="title"
                                                onChange={handleChange}
                                                variant="standard"
                                                value={values.title}
                                            />
                                            <FormHelperText>
                                                {errors.title && touched.title ? errors.title : null}
                                            </FormHelperText>
                                        </FormControl>
                                        <br /><br />


                                        <FormControl fullWidth error={errors.category && touched.category}>
                                            <InputLabel>Categoria</InputLabel>
                                            <Select
                                                name='category'
                                                label="Age"
                                                value={values.category}
                                                onChange={handleChange}
                                                displayEmpty
                                                fullWidth
                                                variant="standard"
                                            >
                                                <MenuItem value="Carro">Carro</MenuItem>
                                                <MenuItem value="Moto">Moto</MenuItem>
                                                <MenuItem value="Móveis">Móveis</MenuItem>
                                                <MenuItem value="Brinquedos">Brinquedos</MenuItem>
                                            </Select>
                                            <FormHelperText>
                                                {errors.category && touched.category ? errors.category : null}
                                            </FormHelperText>
                                        </FormControl>
                                    </Box>
                                </Container>

                                <Container maxWidth='md'>
                                    <Box sx={{ backgroundColor: theme.palette.background.paper, padding: 4 }}>
                                        <Typography component='h3' variant='h6' gutterBottom color={errors.files && touched.files ? 'error' : 'primary'}>
                                            Imagens
                                        </Typography>
                                        <Typography component='h3' variant='body2' color={errors.files && touched.files ? 'error' : 'primary'} gutterBottom>
                                            A primeira imagem é a foto principal do seu anúncio.
                                        </Typography>
                                        {
                                            errors.files && touched.files
                                            ?   <Typography variant='body2' color='error' gutterBottom>{errors.files}</Typography>
                                            :   null
                                        }
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    marginRight: '15px',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    textAlign: 'center',
                                                    width: '200px',
                                                    height: '150px',
                                                    backgroundColor: theme.palette.background.default,
                                                    border: '2px dashed black'
                                                }}
                                                {...getRootProps()}
                                            >
                                                <input name='files' {...getInputProps()} />
                                                <Typography variant='body2' color={errors.files && touched.files ? 'error' : 'primary'} >
                                                    Clique para adicionar ou arraste a imagem aqui.
                                                </Typography>
                                            </Box>
                                            {
                                                values.files.map((file, index) => (
                                                    <Box
                                                        key={index}
                                                        sx={{
                                                            '&:hover .deleteImage': {
                                                                display: 'flex'
                                                            },
                                                            marginRight: '15px',
                                                            marginBottom: '15px',
                                                            position: 'relative',
                                                            backgroundImage: `url(${file.preview})`,
                                                            backgroundSize: 'cover',
                                                            backgroundPosition: 'center center',
                                                            width: '200px',
                                                            height: '150px',
                                                        }}
                                                    >
                                                        {
                                                            index === 0 ?
                                                                <Box>
                                                                    <Typography
                                                                        variant='body2'
                                                                        sx={{
                                                                            color: 'white',
                                                                            position: 'absolute',
                                                                            bottom: '0',
                                                                            left: '0',
                                                                            padding: '5px',
                                                                            backgroundColor: 'blue',
                                                                        }}
                                                                    >
                                                                        Principal
                                                                    </Typography>
                                                                </Box>
                                                                : null

                                                        }
                                                        <Box
                                                            className='deleteImage'
                                                            sx={{
                                                                display: 'none',
                                                                justifyContent: 'center',
                                                                alignItems: 'center',
                                                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                                                width: '100%',
                                                                height: '100%'
                                                            }}
                                                        >
                                                            <IconButton sx={{ color: 'white' }} onClick={() => handleRemoveFile(file.name)}>
                                                                <DeleteForever fontSize="large" />
                                                            </IconButton>
                                                        </Box>
                                                    </Box>
                                                ))
                                            }
                                        </Box>
                                    </Box>
                                </Container>

                                <Container maxWidth='md'>
                                    <Box sx={{ backgroundColor: theme.palette.background.paper, padding: 4 }}>

                                        <FormControl fullWidth error={errors.description && touched.description}>
                                            <InputLabel>Escreva os detalhes do que está vendendo!</InputLabel>
                                            <Input
                                                name='description'
                                                onChange={handleChange}
                                                value={values.description}
                                                multiline
                                                rows={6}
                                                variant="outlined"
                                            />
                                            <FormHelperText>
                                                {errors.description && touched.description ? errors.description : null}
                                            </FormHelperText>
                                        </FormControl>

                                    </Box>
                                </Container>

                                <Container maxWidth='md'>
                                    <Box sx={{ backgroundColor: theme.palette.background.paper, padding: 4 }}>
                                        <Typography component='h3' variant='h6' gutterBottom>
                                            Preço
                                        </Typography>
                                        <br />

                                        <FormControl fullWidth error={errors.price && touched.price}>
                                            <InputLabel>Preço de venda</InputLabel>
                                            <Input
                                                name='price'
                                                onChange={handleChange}
                                                value={values.price} startAdornment={<InputAdornment position='start'>R$</InputAdornment>}
                                            />
                                            <FormHelperText>
                                                {errors.price && touched.price ? errors.price : null}
                                            </FormHelperText>
                                        </FormControl>

                                    </Box>
                                </Container>

                                <Container maxWidth='md'>
                                    <Box sx={{ backgroundColor: theme.palette.background.paper, padding: 4 }}>
                                        <Typography
                                            component='h3'
                                            variant='h6'
                                            gutterBottom
                                        >
                                            Dados de Contato
                                        </Typography>
                                        <br />

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
                                        <br />
                                        <br />
                                        <FormControl fullWidth error={errors.email && touched.email}>
                                            <InputLabel>Email</InputLabel>
                                            <Input
                                                name='email'
                                                onChange={handleChange}
                                                value={values.email}
                                            />
                                            <FormHelperText>
                                              {errors.email && touched.email ? errors.email : null}
                                            </FormHelperText>
                                        </FormControl>
                                        <br />
                                        <br />
                                        <FormControl fullWidth error={errors.phone && touched.phone}>
                                            <InputLabel>Telefone</InputLabel>
                                            <Input
                                                name='phone'
                                                onChange={handleChange}
                                                value={values.phone}
                                            />
                                            <FormHelperText>
                                                {errors.phone && touched.phone ? errors.phone : null}
                                            </FormHelperText>
                                        </FormControl>
                                    </Box>
                                </Container>

                                <Container maxWidth='md' sx={{ my: 5 }}>
                                    <Box textAlign='right'>
                                        <Button type='submit' variant="contained">
                                            Publicar Anúncio
                                        </Button>
                                    </Box>
                                </Container>
                            </form>
                        )
                    }
                }
            </Formik>


        </>
    )
}

export default Publish