'use client'

import {
    Avatar,
    Box,
    Card,
    CardHeader,
    CardMedia,
    Chip,
    Container,
    Grid,
    Typography
} from "@mui/material"

import Carousel from "react-material-ui-carousel"

import theme from '../../theme/theme'

const Product = () => {
    return (
        <Container maxWidth='md'>
            <Grid container spacing={3}>
                <Grid size={{ xs: 8 }}>
                    <Box
                        sx={{
                            backgroundColor: theme.palette.background.paper,
                        }}
                    >
                        <Carousel
                            autoPlay={false}
                            animation="slide"
                            indicators={false}
                        >

                            <Card>
                                <CardMedia
                                    component='img'
                                    height='400'
                                    image='https://random-image-pepebigotes.vercel.app/api/random-image?a=1'
                                    title='Título da imagem'
                                />
                            </Card>

                            <Card>
                                <CardMedia
                                    component='img'
                                    height='400'
                                    image='https://random-image-pepebigotes.vercel.app/api/random-image?a=2'
                                    title='Título da imagem'
                                />
                            </Card>

                            <Card>
                                <CardMedia
                                    component='img'
                                    height='400'
                                    image='https://random-image-pepebigotes.vercel.app/api/random-image?a=3'
                                    title='Título da imagem'
                                />
                            </Card>
                        </Carousel>

                    </Box>

                    <Box
                        sx={{
                            backgroundColor: theme.palette.background.paper,
                            marginTop: '20px',
                            marginBottom: '20px',
                            paddingY: '25px',
                            paddingX: '30px'
                        }}
                    >
                        <Typography component='span' variant='caption' sx={{ marginY: '5px' }}>
                            Publicado em 16 de agosto de 2025
                        </Typography>
                        <Typography component='h4' variant='h4' sx={{ marginY: '5px' }}>
                            Celta 2008 Flex Duas Portas
                        </Typography>
                        <Typography component='h4' variant='h4' sx={{ fontWeight: 'bold', marginY: '5px' }}>
                            R$ 17.000,00
                        </Typography>
                        <Chip label='Categoria' variant='contained' sx={{ backgroundColor: theme.palette.background.default, marginY: '5px' }} />
                    </Box>

                    <Box
                        sx={{
                            backgroundColor: theme.palette.background.paper,
                            marginTop: '20px',
                            marginBottom: '20px',
                            paddingY: '25px',
                            paddingX: '30px'
                        }}
                    >
                        <Typography component='h6' variant='h6' sx={{ fontWeight: 'bold' }}>
                            Descrição
                        </Typography>

                        <Typography component='p' variant='body2'>
                            Lorem ipsum dolor sit amet. Id nemo ducimus sed officia rerum et beatae voluptatem ex quas neque! Ex incidunt illo aut exercitationem repudiandae ut earum eveniet aut vero maiores! Est laboriosam consequatur eum delectus galisum aut voluptatem quia aut accusamus fuga sit delectus neque et quia aliquam! 33 voluptas natus et illum aliquid et delectus totam!
                        </Typography>
                    </Box>

                </Grid>
                <Grid size={{ xs: 4 }}>
                    <Card sx={{ backgroundColor: theme.palette.background.paper }} elevation={0}>
                        <CardHeader
                            avatar={
                                <Avatar alt="Gustavo" src="#" />
                            }
                            title='Gustavo Bodziak'
                            subheader='GustavoTeste@gmail.com'
                        />
                    </Card>

                    <Box sx={{ backgroundColor: theme.palette.background.paper, marginY: '10px' }}>
                        <Typography component='h6' variant='subtitle1'>
                            Localização
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Product