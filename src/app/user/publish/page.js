'use client'

import {
    Box,
    Button,
    Container,
    Typography,
    TextField,
    Select,
    MenuItem
} from "@mui/material"

import theme from '../../../theme/theme'

const Publish = () => {
    return (
        <>
            <Container maxWidth='sm' sx={{ my: 7 }}>
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