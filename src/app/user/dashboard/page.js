'use client'

import {
    Container,
    Typography,
    Button,
    Grid,
} from '@mui/material'

import Card from '../../../components/Card'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Dashboard = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {

            const response = await axios.get('/api/products')

            const { userProducts } = response.data

            setProducts(userProducts)
        }

        getProducts()
    }, [])


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
                    Dashboard
                </Typography>
                <Button
                    variant='contained'
                    color='primary'
                    sx={{
                        margin: '30px auto',
                        display: 'block'
                    }}
                >
                    PUBLICAR NOVO ANÚNCIO!
                </Button>
            </Container>
            <Container maxWidth='md'>
                <Grid container spacing={4}>
                    {
                        products.map(product => (
                            <Grid key={product._id} size={{ xs: 12, sm: 6, md: 4 }}>
                                <Card
                                    image={`/uploads/${product.files[0].name}`}
                                    title={product.title}
                                    subtitle={product.price}
                                    actions={
                                        <>
                                            <Button size="small" color='primary' variant='contained' >
                                                Editar
                                            </Button>
                                            <Button size="small" color='primary' variant='contained'>
                                                Remover
                                            </Button>
                                        </>
                                    }
                                />
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </>

    )
}

export default Dashboard