'use client'

import { useState } from 'react'

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
    InputLabel,
    OutlinedInput,
    InputAdornment,
} from "@mui/material"

import { DeleteForever } from "@mui/icons-material"

import theme from '../../../theme/theme'

import { useDropzone } from "react-dropzone"

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
            <Container maxWidth='sm'>
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
                    <Typography component='h3' variant='h6' gutterBottom>
                        Título do Anúncio
                    </Typography>
                    <TextField fullWidth placeholder="ex.: Bicileta Aro 18 usada" variant="standard" />
                    <br />
                    <br />
                    <Typography component='h3' variant='h6' gutterBottom>
                        Categoria
                    </Typography>
                    <Select
                        label="Age"
                        value=""
                        displayEmpty
                        fullWidth
                        variant="standard"
                    >
                        <MenuItem value="">
                            <em>--Selecione--</em>
                        </MenuItem>
                        <MenuItem value={1}>Carro</MenuItem>
                        <MenuItem value={2}>Moto</MenuItem>
                        <MenuItem value={3}>Móveis</MenuItem>
                        <MenuItem value={4}>Brinquedos</MenuItem>
                    </Select>
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
                    <Typography component='h3' variant='h6' gutterBottom>
                        Descrição
                    </Typography>
                    <Typography component='h3' variant='body2' gutterBottom>
                        Escreva os detalhes do que está vendendo!
                    </Typography>
                    <TextField
                        multiline
                        rows={6}
                        variant="outlined"
                        fullWidth
                    />
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
                    <Button variant="contained">
                        Publicar Anúncio
                    </Button>
                </Box>
            </Container>
        </>
    )
}

export default Publish