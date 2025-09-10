'use client'

import {  use ,useEffect, useState } from "react"

import axios from "axios"

import {
    Avatar,
    Box,
    Card,
    CardHeader,
    CardMedia,
    Chip,
    Container,
    Grid,
    Typography,
    CircularProgress
} from "@mui/material"

import Carousel from "react-material-ui-carousel"

import theme from "@/theme/theme"

import { formatCurrency } from "@/utils/currency"

const Product = ({ params }) => {

    const [product, setProduct] = useState(null)
    
    const [loading, setLoading] = useState(true)

    const { id }  = use(params)

    useEffect(() => {
        const getProduct = async () => {
            const response = await axios.get(`/api/products/list?id=${id}`)

            const { product } = response.data

            setProduct(product)

            setLoading(false)

            console.log(product.files)
        }

        getProduct()
    }, [id])



    if (loading) {
        return (
            <>
                <CircularProgress sx={{ display: 'block', margin: '10px auto' }}></CircularProgress>
            </>
        )
    }

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
                            indicators={true}
                        >
                            {
                                product.files.map((file, index) => (
                                    <Card key={file._id}>
                                        <CardMedia
                                            component='img'
                                            height='400'
                                            image={`/uploads/${file.name}`}
                                            title='Título da imagem'
                                            alt={file.name}
                                        />
                                    </Card>
                                ))
                            }
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
                            {product.title}
                        </Typography>
                        <Typography component='h4' variant='h4' sx={{ fontWeight: 'bold', marginY: '5px' }}>
                            {formatCurrency(product.price)}
                        </Typography>
                        <Chip label={product.category} variant='contained' sx={{ backgroundColor: theme.palette.background.default, marginY: '5px' }} />
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
                            {product.description}
                        </Typography>
                    </Box>

                </Grid>
                <Grid size={{ xs: 4 }}>
                    <Card sx={{ backgroundColor: theme.palette.background.paper }} elevation={0}>
                        <CardHeader
                            avatar={
                                <Avatar alt="Gustavo" src={product.user.image} />
                            }
                            title={product.user.name}
                            subheader={product.user.email}
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