'use client'

import { useState } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'

import {
    Box,
    Button,
    Container,
    Typography,
    TextField,
    Select,
    MenuItem,
    IconButton,
    FormControl,
    FormHelperText,
    InputLabel,
    OutlinedInput,
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



})

const Publish = () => {

    const [files, setFiles] = useState([])

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFile) => {
            const newFiles = acceptedFile.map(file => {
                return Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })
            })

            setFiles([
                ...files,
                ...newFiles
            ])
        }
    })

    const handleRemoveFile = fileName => {
        const newFileState = files.filter(file => file.name !== fileName)
        setFiles(newFileState)
    }

    return (
        <>

            <Formik
                initialValues={{
                    title: '',
                    category: '',
                    description: ''
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log('ok', values)
                }}

            >
                {
                    ({
                        values,
                        errors,
                        handleChange,
                        handleSubmit
                    }) => {

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
                                       
                                        <FormControl fullWidth error={errors.title}>
                                            <InputLabel>Título do Anúncio</InputLabel>
                                            <Input
                                                name="title"
                                                onChange={handleChange}
                                                variant="standard"
                                                value={values.title}
                                            />
                                            <FormHelperText>
                                                {errors.title}
                                            </FormHelperText>
                                        </FormControl>
                                        <br /><br />

                                    
                                        <FormControl fullWidth error={errors.category}>
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
                                                {errors.category}
                                            </FormHelperText>
                                        </FormControl>
                                    </Box>
                                </Container>

                                <Container maxWidth='md'>
                                    <Box sx={{ backgroundColor: theme.palette.background.paper, padding: 4 }}>
                                        <Typography component='h3' variant='h6' gutterBottom>
                                            Imagens
                                        </Typography>
                                        <Typography component='h3' variant='body2' gutterBottom>
                                            A primeira imagem é a foto principal do seu anúncio.
                                        </Typography>
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
                                                <input {...getInputProps()} />
                                                <Typography variant='body2'>
                                                    Clique para adicionar ou arraste a imagem aqui.
                                                </Typography>
                                            </Box>
                                            {
                                                files.map((file, index) => (
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

                                        <FormControl fullWidth error={errors.description}>
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
                                                {errors.description}
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
                                        <FormControl fullWidth variant='outlined'>
                                            <InputLabel >Valor</InputLabel>
                                            <OutlinedInput
                                                startAdornment={<InputAdornment position='start'>R$</InputAdornment>}
                                                label="Valor"
                                            />
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
                                        <TextField
                                            fullWidth
                                            label="Nome"
                                            variant="outlined"
                                            type="text"
                                            size="small"
                                        />
                                        <br />
                                        <br />
                                        <TextField
                                            fullWidth
                                            label="E-mail"
                                            variant="outlined"
                                            type="email"
                                            size="small"
                                        />
                                        <br />
                                        <br />
                                        <TextField
                                            fullWidth
                                            label="Telefone"
                                            variant="outlined"
                                            size="small"
                                        />
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