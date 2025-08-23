import {
    Box,
    Typography,
    IconButton,
} from "@mui/material"

import theme from '../theme/theme'

import { useDropzone } from "react-dropzone"

import { DeleteForever } from "@mui/icons-material"

const FileUpload = ({ errors, touched, files, setFieldValue }) => {
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFile) => {
            const newFiles = acceptedFile.map(file => {
                return Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })
            })

            setFieldValue('files', [
                ...files,
                ...newFiles
            ])
        }
    })

    const handleRemoveFile = fileName => {
        const newFileState = files.filter(file => file.name !== fileName)
        setFieldValue('files', newFileState)
    }

    return (
        <Box sx={{ backgroundColor: theme.palette.background.paper, padding: 4 }}>
            <Typography component='h3' variant='h6' gutterBottom color={errors && touched ? 'error' : 'primary'}>
                Imagens
            </Typography>
            <Typography component='h3' variant='body2' color={errors && touched ? 'error' : 'primary'} gutterBottom>
                A primeira imagem é a foto principal do seu anúncio.
            </Typography>
            {
                errors && touched
                    ? <Typography variant='body2' color='error' gutterBottom>{errors}</Typography>
                    : null
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
                    <Typography variant='body2' color={errors && touched ? 'error' : 'primary'} >
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
    )
}

export default FileUpload