'use client'

import { Formik } from 'formik'

import {
    Box,
    Button,
    Container,
    Typography,
    Select,
    MenuItem,
    FormControl,
    FormHelperText,
    InputLabel,
    InputAdornment,
    Input,
} from "@mui/material"

import theme from '../../../theme/theme'

import { initialValues, validationSchema } from './formValues'

import FileUpload from '../../../components/FileUpload'

const Publish = () => {

    return (
        <>

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
                        setFieldValue
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
                                   <FileUpload
                                        errors={errors.files}
                                        touched={touched.files}
                                        files={values.files}
                                        setFieldValue={setFieldValue}
                                   />
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